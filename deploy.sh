#!/usr/bin/env bash

# abort on errors
set -e

# build
hugo

# navigate into the build output directory
cd dist

echo '# wtf' > README.md

# if you are deploying to a custom domain
echo 'wtf.neni.dev' > CNAME

pwd

git init
git status
git add -A
git commit -m 'deploy :octocat:'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:nenitf/wtf.git master:gh-pages

cd -
