import type { CollectionEntry } from 'astro:content';

export type CategoryInfo = {
	name: string;
	slug: string;
	count: number;
};

export type CategoryGroup = {
	key: string;
	anchor: string;
	label: string;
	categories: CategoryInfo[];
};

export type CategoryTab = {
	key: string;
	anchor: string;
	enabled: boolean;
};

const normalizeCategoryName = (category: string) => category.trim();
const CATEGORY_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const slugifyCategory = (category: string) =>
	normalizeCategoryName(category)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

export const getCategoryLinks = (categories: string[]) => {
	const links = [];
	const seen = new Set<string>();

	for (const category of categories ?? []) {
		if (!category || typeof category !== 'string') continue;
		const name = normalizeCategoryName(category);
		if (!name) continue;
		const slug = slugifyCategory(name);
		if (!slug || seen.has(slug)) continue;
		seen.add(slug);
		links.push({ name, slug });
	}

	return links;
};

export const getCategoryIndex = (posts: CollectionEntry<'blog'>[]) => {
	const index = new Map<string, CategoryInfo>();

	for (const post of posts ?? []) {
		for (const category of post.data.categories ?? []) {
			if (!category || typeof category !== 'string') continue;
			const name = normalizeCategoryName(category);
			if (!name) continue;
			const slug = slugifyCategory(name);
			if (!slug) continue;
			const entry = index.get(slug);
			if (entry) {
				entry.count += 1;
				continue;
			}
			index.set(slug, { name, slug, count: 1 });
		}
	}

	return Array.from(index.values()).sort((a, b) =>
		a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
	);
};

const getCategoryGroupKey = (categoryName: string) => {
	const firstChar = normalizeCategoryName(categoryName).charAt(0).toUpperCase();
	if (firstChar >= 'A' && firstChar <= 'Z') return firstChar;
	return '#';
};

const getCategoryGroupLabel = (key: string) => (key === '#' ? 'Other' : key);

export const getCategoryGroupAnchor = (key: string) =>
	key === '#' ? 'other' : key.toLowerCase();

export const getCategoryGroups = (categories: CategoryInfo[]) => {
	const groups = new Map<string, CategoryInfo[]>();

	for (const category of categories ?? []) {
		const key = getCategoryGroupKey(category.name);
		const group = groups.get(key);
		if (group) {
			group.push(category);
		} else {
			groups.set(key, [category]);
		}
	}

	for (const group of groups.values()) {
		group.sort((a, b) =>
			a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
		);
	}

	const sortedKeys = Array.from(groups.keys()).sort((a, b) => {
		if (a === '#') return 1;
		if (b === '#') return -1;
		return a.localeCompare(b, 'en');
	});

	return sortedKeys.map((key) => ({
		key,
		anchor: getCategoryGroupAnchor(key),
		label: getCategoryGroupLabel(key),
		categories: groups.get(key) ?? [],
	}));
};

export const getCategoryTabs = (groups: CategoryGroup[]): CategoryTab[] => {
	const available = new Set(groups.map((group) => group.key));
	const tabs = CATEGORY_ALPHABET.map((key) => ({
		key,
		anchor: getCategoryGroupAnchor(key),
		enabled: available.has(key),
	}));
	if (available.has('#')) {
		tabs.push({ key: '#', anchor: getCategoryGroupAnchor('#'), enabled: true });
	}
	return tabs;
};

export const filterPostsByCategory = (
	posts: CollectionEntry<'blog'>[],
	categorySlug: string,
) => {
	const target = slugifyCategory(categorySlug ?? '');
	if (!target) return [];
	return posts.filter((post) =>
		(post.data.categories ?? []).some(
			(category) => slugifyCategory(category) === target,
		),
	);
};
