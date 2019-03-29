# [https://dingtalk-dev.github.io](https://dingtalk-dev.github.io) Source

[![CircleCI](https://circleci.com/gh/dingtalk-dev/dingtalk-dev.github.io/tree/dev.svg?style=svg)](https://circleci.com/gh/dingtalk-dev/dingtalk-dev.github.io/tree/dev)

## Quick Start

Clone the repo and:

```
$ npm install
```

then:

```
$ npm start
```

That's it!

## How-tos

### Add a new post:

1. Write your post using Markdown and save it with `.md` extension.
2. Copy it to `path/to/repo/src/pages`.
3. That's all!

Please note that the filename should use **kebab-case** and the metadata should present before the text.

There is an example:

```
---
path: "/your-filename-without-ext"
date: "2019-03-28"
title: "Your Title"
author: "John Appleseed"
---

Your post text...
```

### Deploy to GitHub Pages:

Just commit and push your changes. The CI system will automatically build the static resources and push them to the `master` branch of this repo.

## Troubleshooting

### CI reported a failed status:

If you see error messages related to "sharp" or "403", that is a problem with GitHub. You can manually build and deploy it by running:

```
$ npm run deploy
```

Or just contact [@unixzii](https://github.com/unixzii).
