# Vue 3 (vanilla) + Vite + Tailwind cSS

This template use viteJS, Vue 3 and Tailwind CSS. It's here to provide help to creating npm package for using compononent in all your project.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

# Setup
## Changing names
To setup this project before publishing your own package, you have to :
- Change the name of the component under "src/components/"
- Change the name of the component in index.js
- Change "ComponentName" and "component-name" in vite.config.js
- Change "component-name" in package.json
- Be careful that all "component-name" changing are the same. Same for "ComponentName"

## Build && publish

After that you can create your component in "/src/components/ComponentName.vue", then run build and finish by "npm publish"

# Uses
## Vue 3 project


# Advices
For an optimal uses please use "@vitejs/plugin-vue": "^2.0.0" and "vite": "^2.7.2",