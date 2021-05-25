# blackpool-bible-tattoo-4-u.biz
[![Actions](https://img.shields.io/github/workflow/status/bluemwhitew/blackpool-bible-tattoo-4-u.biz/Deploy?style=for-the-badge)](https://www.github.com/bluemwhitew/blackpool-bible-tattoo-4-u.biz/actions)
[![Issues](https://img.shields.io/github/issues/bluemwhitew/blackpool-bible-tattoo-4-u.biz?style=for-the-badge)](https://www.github.com/bluemwhitew/blackpool-bible-tattoo-4-u.biz/issues)
[![License](https://img.shields.io/github/license/bluemwhitew/blackpool-bible-tattoo-4-u.biz?style=for-the-badge)](https://www.github.com/bluemwhitew/blackpool-bible-tattoo-4-u.biz/blob/master/LICENSE.txt)

Coming Soon

## Prerequisites
- IDE
  - [Atom](https://www.atom.io)
  - [Visual Studio Code](https://code.visualstudio.com)
- [Git](https://www.git-scm.com)
- [Node](https://www.nodejs.org) `>=10.14`

## Getting Started
- Clone the repository
  - `git clone https://www.github.com/bluemwhitew/blackpool-bible-tattoo-4-u.biz.git`
- Install dependencies and start the Eleventy service
  - `npm install`
  - `npm start`
- Browse to: http://localhost:2106

## File Structure
```
blackpool-bible-tattoo-4-u.biz/
├── .eleventy.js                        # 11ty configuration
├── .github
├── .gitignore
├── LICENSE.txt
├── README.md                           # Currently reading this
├── package-lock.json
├── package.json
└── src/                                # 99.9% development happens here
    ├── _includes/
    │   ├── css/
    │   │   ├── modern-normalize.css
    │   │   └── style.css               # Global styles
    │   └── layout.njk                  # HTML wrapper
    └── index.njk                       # Page template(s)
```

## Contributing
Contributing is _highly_ encouraged. I would recommend picking "[good first issue](https://www.github.com/bluemwhitew/blackpool-bible-tattoo-4-u.biz/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)" tickets up!
- Create branches _from_ `dev` in the following format:
  - `bug/xxxxx` for bug fixes (where `xxxxx` is the issue number)
  - `feature/xxxxx` for feature implementations (again, where `xxxxx` is the issue number)
- Create a [Pull Request](https://www.github.com/bluemwhitew/blackpool-bible-tattoo-4-u.biz/pulls) back _to_ `dev` with your changes
