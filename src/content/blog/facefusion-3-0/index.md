---
title: "FaceFusion 3.0"
pubDate: 2024-10-31 10:34:27
---
Installation steps for me MonstaPC:



```
conda create --name facefusion python=3.12
conda activate facefusion
git clone https://github.com/facefusion/facefusion
cd facefusion
conda install conda-forge::cuda-runtime=12.4.1
conda install conda-forge::cudnn=9.2.1.18
python install.py --onnxruntime cuda
```



Why I elaborate is the install guidance has funky "help" pages, with a page "tree" that, if you are seduced by it, obfuscates steps. On top of that, yeah olde confusion since the install cmd line destruction is actually:



`python install.py --onnxruntime {default, ...}`



Which then confusingly raises an error prompt:



`install.py: error: argument --onnxruntime: invalid choice: '{default,' (choose from 'default', 'cuda', 'openvino', 'rocm')`



That installation command line is not then:



```
python install.py --onnxruntime {cuda}
python install.py --onnxruntime {'cuda'}
python install.py --onnxruntime 'cuda'
```



Helps awfully if the `cuda-runtime` and `cudnn` are installed before also wik.



There'll be a rule buried somewhere on the internet, of course, that unbeknowest to me was a priori knowledge for deciphering the plings and bangs.



Otherwise onnx runtime [here](https://onnxruntime.ai/).
