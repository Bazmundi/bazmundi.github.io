import { defineCollection, z } from 'astro:content';

const dateField = z.preprocess((value) => {
	if (value instanceof Date) return value;
	if (typeof value === 'string' || typeof value === 'number') {
		const parsed = new Date(value);
		if (!Number.isNaN(parsed.valueOf())) return parsed;
	}
	return value;
}, z.date());

const optionalDateField = z.preprocess((value) => {
	if (value instanceof Date) return value;
	if (typeof value === 'string' || typeof value === 'number') {
		const parsed = new Date(value);
		if (!Number.isNaN(parsed.valueOf())) return parsed;
	}
	return value;
}, z.date().optional());

const categoriesField = z.preprocess((value) => {
	if (Array.isArray(value)) return value;
	if (typeof value === 'string') return [value];
	if (value === undefined || value === null) return [];
	return value;
}, z.array(z.string()));

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			meta_title: z.string().optional(),
			pubDate: dateField,
			updatedDate: optionalDateField,
			heroImage: image().optional(),
			categories: categoriesField,
			draft: z.boolean().optional(),
			featured: z.boolean().optional(),
		}),
});

export const collections = { blog };
