const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/c/projects/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/c/projects/portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/mnt/c/projects/portfolio/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/mnt/c/projects/portfolio/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/mnt/c/projects/portfolio/src/pages/contact.js"))),
  "component---src-pages-education-js": hot(preferDefault(require("/mnt/c/projects/portfolio/src/pages/education.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/mnt/c/projects/portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/mnt/c/projects/portfolio/src/pages/projects.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/mnt/c/projects/portfolio/src/templates/blog-template.js")))
}

