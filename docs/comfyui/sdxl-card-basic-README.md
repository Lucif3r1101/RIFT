# Plain SDXL ComfyUI Workflow

File:
- `sdxl-card-basic.json`

## Purpose
This workflow uses only standard ComfyUI nodes.
No IPAdapter. No custom node dependency.
It is the safest workflow for your notebook-based ComfyUI setup.

## Nodes used
- `CheckpointLoaderSimple`
- `CLIPTextEncode`
- `EmptyLatentImage`
- `KSampler`
- `VAEDecode`
- `SaveImage`

## What you need to change each time

### Node `1`
Set your actual SDXL checkpoint filename.

### Node `2`
Replace the positive prompt with the exact card prompt you want.
Keep faction identity wording consistent.

### Node `3`
Keep this negative prompt mostly fixed.

### Node `5`
You may change:
- `seed`
- `steps`
- `cfg`

Recommended stable defaults:
- `steps = 32`
- `cfg = 6.5`
- sampler = `dpmpp_2m_sde`
- scheduler = `karras`

### Node `7`
Change the output filename prefix for every card slug.

## Consistency rule
For one faction, keep fixed:
- checkpoint
- resolution
- negative prompt
- steps
- cfg
- sampler
- scheduler
- faction identity wording

Only change:
- final card scene description
- output filename
- seed if you really need variation

## First test set
Generate these first for Riftforged Sentinel:
- `c01`
- `c20`
- `c32`
- `c44`
- `c52`

If the face and armor drift too much, that is expected without reference-image conditioning.
This workflow is for easy setup, not maximum identity locking.
