#!/usr/bin/env sh

# Source: https://cli.vuejs.org/guide/deployment.html#github-pages

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create git repo and commit contents
git init
git add -A
git commit -m 'deploy'

# push to github repo
git push -f git@github.com:dansalias/movie-finder.git master:gh-pages

cd -
