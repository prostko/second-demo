# Jekyll Seed

A starting frame for a Jekyll site.

[Jekyll documentation is here.](https://jekyllrb.com/)

<hr>

## To get started

Run the `install-script.sh` to install NPM dependencies, Jekyll, and Sass.

Run `jekyll server` to serve locally.

In a separate terminal window, run `grunt watch` to watch for changes in `assets/development/stylesheets` and compile your Sass files into CSS, the result of which is your styles end up in `assets/production/main.css.min` and included in your site's `head` tag.

<hr>

## Includes:

* File tree with `_data/`, `_includes/`, `_layouts/`, `_posts/`, `_static/`, `assets/`, `category/`, and `tag/` subfolders.
* Asset setup with Sass. Grunt setup for managing assets.
* Initial categories and tags structures, and corresponding layouts.
* Includes `_includes/klipse.html` script, to use with embedding runnable code (!!) directly in your site pages or posts. Check out [klipse](https://github.com/viebel/klipse) for more information.

<hr>

## Assets

Assets are broken  down into two folders, `production/` and `development/`, to allow you to differentiate between normal and uglified JavaScript, your Sass files vs your compiled and minified CSS files, your original images vs the resized final images.

That way you can link all assets as coming from the `production/` folder after running the appropriate Grunt script to update the contents of your `production/` folder based on files/changes made to `development/` folder contents.

Also included with assets:
* FontAwesome files.
* `_includes/icon-github.html` and `_includes/icon-twitter.html` icons.

<hr>

## Tags and Categories

To view your current tags and categories, review the files in `_data/`.

Each tag needs to have its own slug, name, and description, as well as its own file in `tag/` folder.

The file needs to specify its frontmatter, specifically `layout: post-by-tag`, `tag: [your-tag-slug]`, and `permalink: /tag/[your-tag-slug]/`.

Same concept with categories.

<hr>

## Additional static pages

Add static pages to `_static/`, specifying frontmatter in each page. Example:

```
layout: page
link-title: About
page-title: About site and author
permalink: /static/about/
```
