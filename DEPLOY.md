# Deploy this site

The standalone website entry point and all of its assets now live in the
project root. The site itself has no build step.

## Netlify or Cloudflare Pages

Select the project root as the deployment directory. Leave the build command
empty and use `index.html` as the site entry point.

## GitHub Pages

Push this project with `index.html` at the repository root, then enable Pages
for the repository's main branch.

## Local preview

Open `index.html` directly in a browser. You can also serve this folder with any
simple local web server.
