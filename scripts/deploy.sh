#!/usr/bin/env sh
set -e

if [ -n "$(git status -s)" ]; then
  echo "Working tree is not clean, please check whether you committed the changes.\n"
  exit 1
fi

LOCAL_SHA=`git rev-parse dev`
REMOTE_SHA=`git rev-parse origin/dev`

if [ $LOCAL_SHA != $REMOTE_SHA ]; then
  echo "Please push the changes to remote first.\n"
  exit 1
fi

npm run build

cd public

git init
git add .
git commit -m "Manually deploy commit"
git remote add origin https://github.com/dingtalk-dev/dingtalk-dev.github.io.git
git push origin master -f

echo "Succeeded!!!"