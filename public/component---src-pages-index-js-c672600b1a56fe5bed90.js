(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DxCv:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),l=a("ap0H"),r=a("9eSz"),i=a.n(r),s=a("ma3e"),o=function(e){var t=e.description,a=e.title,n=e.github,l=e.image,r=e.url,o=e.index,m=e.stack;return c.a.createElement("article",{className:"project"},c.a.createElement(i.a,{fluid:l.childImageSharp.fluid,className:"project-img"}),c.a.createElement("div",{className:"project-info"},c.a.createElement("span",{className:"project-number"},"0 ",o+1),c.a.createElement("h3",null,a),c.a.createElement("p",{className:"project-desc"},t),c.a.createElement("div",{className:"project-stack"},m.map((function(e){return c.a.createElement("span",{key:e.id},e.title)}))),c.a.createElement("div",{className:"project-links"},c.a.createElement("a",{href:n},c.a.createElement(s.d,{className:"project-icon"})),c.a.createElement("a",{href:r},c.a.createElement(s.j,{className:"project-icon"})))))},m=a("Wbzz");t.a=function(e){var t=e.projects,a=e.title,n=e.showLink;return c.a.createElement("section",{className:"section projects"},c.a.createElement(l.a,{title:a}),c.a.createElement("div",{className:"section-center projects-center"},t.map((function(e,t){return c.a.createElement(o,Object.assign({key:e.id,index:t},e))}))),n&&c.a.createElement(m.a,{to:"projects",className:"btn center-btn"},"all projects"))}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return N}));var n=a("q1tI"),c=a.n(n),l=a("7oih"),r=a("9eSz"),i=a.n(r),s=a("Wbzz"),o=a("HIzK"),m=function(){var e=Object(s.c)("2892327635").file.childImageSharp.fluid;return c.a.createElement("header",{className:"hero"},c.a.createElement("div",{className:"section-center hero-center"},c.a.createElement("article",{className:"hero-info"},c.a.createElement("div",null,c.a.createElement("div",{className:"underline"}),c.a.createElement("h1",null,"Hi,"),c.a.createElement("h1",null,"i'm Gabriel"),c.a.createElement("h4",null," full stack developer"),c.a.createElement(s.a,{to:"/contact",className:"btn"},"contact me"),c.a.createElement(o.a,null))),c.a.createElement(i.a,{fluid:e,className:"hero-img"})))},u=a("ap0H"),d=a("ma3e"),E=[{id:1,icon:c.a.createElement(d.h,{className:"service-icon"}),title:"web development",text:"I am very proficient with REACT.JS and GATSBY.JS and able to create beautiful sites"},{id:2,icon:c.a.createElement(d.f,{className:"service-icon"}),title:"html email",text:"I able to create html email quickly and effective"},{id:3,icon:c.a.createElement(d.g,{className:"service-icon"}),title:"responsive design",text:"I am able to create responsive sites at the professional level"},{id:4,icon:c.a.createElement(d.e,{className:"service-icon"}),title:"strong support",text:"I am able to communicate ideas in a brief and concise way"},{id:5,icon:c.a.createElement(d.a,{className:"service-icon"}),title:"affiliate marketing",text:"I understand how Facebook ads and Google ads work,and have built so many projects. In Addition, \n    I know how to use Amazon, Ebay, Clickbank to sell or promote product. In general, I understand how marketing works  "},{id:6,icon:c.a.createElement(d.i,{className:"service-icon"}),title:"Search Engine Optimization",text:"I know how to make website have authority even if it is the new site.\n    there are lots of tricks that I have learnt when I was sitting up most of my busness sites.\n    I would definitely bring lots of values  "}],p=function(){return c.a.createElement("section",{className:"section bg-grey"},c.a.createElement(u.a,{title:"services"}),c.a.createElement("div",{className:"section-center services-center"},E.map((function(e){var t=e.id,a=e.icon,n=e.title,l=e.text;return c.a.createElement("article",{key:t,className:"service"},a,c.a.createElement("h4",null,n),c.a.createElement("div",{className:"underline"}),c.a.createElement("p",null,l))}))))},b=function(e){var t=e.jobs,a=c.a.useState(0),n=a[0],l=a[1],r=t[n],i=r.company,o=r.position,m=r.date,E=r.desc;return console.log(i,o,m,E),c.a.createElement("section",{className:"section jobs"},c.a.createElement(u.a,{title:"experience"}),c.a.createElement("div",{className:"jobs-center"},c.a.createElement("div",{className:"btn-container"},t.map((function(e,t){return c.a.createElement("button",{onClick:function(){return l(t)},key:e.strapiId,className:"job-btn "+(t===n&&"active-btn")},e.company)}))),c.a.createElement("a",{href:"https://fonoandy.netlify.app/projects"},c.a.createElement("article",{className:"job-info"},c.a.createElement("h3",null,o),c.a.createElement("h4",null,i),c.a.createElement("p",{className:"job-date"},m),E.map((function(e){return c.a.createElement("div",{key:e.id,className:"job-desc"},c.a.createElement(d.c,{className:"job-icon"}),c.a.createElement("p",null,e.title))}))))),c.a.createElement(s.a,{to:"/about",className:"btn center-btn postion"},"more info"))},f=a("DxCv"),v=a("Rfp1"),h=a("EYWl"),N="4116408308";t.default=function(e){var t=e.data,a=t.allStrapiJobs.nodes,n=t.allStrapiProjects.nodes,r=t.allStrapiBlogs.nodes;return c.a.createElement(l.a,null,c.a.createElement(h.a,{title:"home",description:" this is our home page"}),c.a.createElement(m,null),c.a.createElement(p,null),c.a.createElement(b,{title:"experience",jobs:a}),c.a.createElement(f.a,{projects:n,title:"featured projects",showLink:!0}),c.a.createElement(v.a,{blogs:r,title:"blogs",showLink:!0}))}},Rfp1:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),l=a("ap0H"),r=a("9eSz"),i=a.n(r),s=a("Wbzz"),o=function(e){var t=e.id,a=e.title,n=e.image,l=e.date,r=e.category,o=e.slug,m=e.description;return c.a.createElement(s.a,{to:"/blogs/"+o,className:"blog",key:t},c.a.createElement("article",null,c.a.createElement(i.a,{fluid:n.childImageSharp.fluid,className:"blog-img"}),c.a.createElement("div",{className:"blog-card"},c.a.createElement("h4",null,a),c.a.createElement("p",null,m),c.a.createElement("div",{className:"blog-footer"},c.a.createElement("p",null,r),c.a.createElement("p",null," ",l)))))};t.a=function(e){var t=e.blogs,a=e.title,n=e.showLink;return c.a.createElement("section",{className:"section"},c.a.createElement(l.a,{title:a}),c.a.createElement("div",{className:"section-center blogs-center"},t.map((function(e){return c.a.createElement(o,Object.assign({key:e.id},e))}))),n&&c.a.createElement(s.a,{to:"/blog",className:"btn center-btn"},"all blogs"," "))}},ap0H:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n);t.a=function(e){var t=e.title;return c.a.createElement("div",{className:"section-title"},c.a.createElement("h2",null,t||"default title"),c.a.createElement("div",{className:"underline"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c672600b1a56fe5bed90.js.map