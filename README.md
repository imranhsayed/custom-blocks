## Description

This plugin adds a custom Gutenberg blocks in the Gutenberg editor of your WordPress dashboard. 

## Installation :wrench:

1. Download the zipped plugin. Unzip the plugin.
2. Navigate to the __Plugins > Add new__ screen in your WordPress administrative dashboard.
3. Click __Add New__ at the top of the page.
3. Click __Upload Plugin__ at the top of the page.
4. Click __Choose File__, then find and __Upload__ the downloaded renamed zip file.
5. After the plugin finishes installing, click __Activate__.

   or,
   Go to your plugin directory from terminal and Clone this repo in wp-content/plugins directory `git clone https://github.com/imranhsayed/custom-blocks`
   And then activate it from __Plugins__ screen in your WordPress administrative dashboard.
6. That's it!

## Configuration ( @wordpress/scripts )

- This plugin uses [@wordpress/scripts](https://developer.wordpress.org/block-editor/packages/packages-scripts/) which installs and sets up webpack and babel config out of the box
- The `@wordpress/scripts` is installed in the root of the project. This is one single plugin that registers many blocks.
- By default `@wordpress/package` uses `src/index.js` as entry point and `build/index.js` 

## Directory Structure

```ruby
├── build
│   └── index.js
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── editor.css
    ├── index.js
    └── style.css
├── custom-functions.php
├── index.php						
```

## Scripts

1. `npm run start` : will use the `src/index.js` as entry point and output it to `build/index.js` for development
2. `npm run build` : will use the `src/index.js` as entry point and output it to `build/index.js` for production

## What is included in this plugin ?

- The plugin uses ReactJS & ESNext for creating custom gutenberg block, along with PHP
- It uses Webpack to bundle all of its dependencies into one file index.js
- Has separate stylesheet for front-end & editor.

## Useful Blogs:

1. [Create Gutenberg Block in 3 Steps](https://medium.com/@imranhsayed/create-gutenberg-block-in-3-steps-924828a2ff83)
2. [Custom Gutenberg Block with ES6](https://medium.com/@imranhsayed/custom-gutenberg-block-using-es6-webpack-babel-wordpress-scripts-7d6f185d9eb6)
3. [Attributes & Components](https://medium.com/@imranhsayed/attributes-and-components-in-gutenberg-blocks-richtext-blockcontrols-alignmenttoolbar-230910fcbd4a)

## Gutenberg Handbook

1. [Gutenberg Handbook](https://developer.wordpress.org/block-editor/)

## Gutenberg Tutorials

1. [Introduction to Gutenberg](https://youtu.be/U4sfx7vN0Iw)
2. [Create Gutenberg Block in 3 Steps](https://youtu.be/AQ10IGN2lt8)
3. [Custom Gutenberg Block using @wordpress/scripts](https://youtu.be/Pfp7mCXnhhw)
4. [@wordpress/scripts package features](https://youtu.be/wihGO8yR3Q8)
5. [Attributes and Components | State ](https://youtu.be/aH0u5NBDAeg)

## Gutenberg Talks

1. [WordCamp Pune: Introduction to Gutenberg](https://wordpress.tv/2019/06/25/imran-sayed-introduction-to-gutenberg/)

## How to use ?

- Go to WordPress Dashboard > Posts/Pages > Add New > Add block ( + icon ) > Common
