function t(o,e,r){let n=document.createElement(o);if(r)n.classList=r;if(e&&typeof e=="string")n.innerText=e;if(e&&(e instanceof HTMLElement||e instanceof Node))n.appendChild(e);if(e&&e instanceof Array)e.forEach((w)=>n.appendChild(w));return n}function a(o){if(Array.isArray(o))return o.forEach((e)=>document.body.appendChild(e));document.body.appendChild(o)}function s(){let o=t("h1","Triston Armstrong","rubik-regular"),e=t("i","Senior Software Engineer","light");return t("header",[o,e])}function m(){return t("section",[t("br"),t("h2","About Me","codystar-regular"),t("i","Thanks for stopping by! Here's a bit about me."),t("p",`My journey into software development started with a simple question: "How does that work?" That curiosity led me to work on everything from IoT software to revenue cycle management and enterprise projects. Along the way, I’ve honed my skills in debugging, troubleshooting, and finding creative solutions to tough problems.

              I enjoy solving tough problems and building things that matter. Every mistake is a chance to improve, and that approach has made me a stronger engineer.

              When I’m not coding, I’m spending time with my family or exploring new ideas and technologies.`)])}function l(){return t("section",t("p",`I build useful apps that make my daily tasks easier. I work with TypeScript, Rust, and Python and enjoy learning new things.

            Outside of coding, I like gaming with my wife, spending time with family, and keeping up with tech. I focus on creating good work and working well with others.`))}function p(){return t("article",[t("section",[t("br"),t("h2","What I'm Up To Now","codystar-regular"),t("i","Where I'm at, what I'm focused on, and what I'm not"),t("p",`Lately, I’ve been diving into Rust and TypeScript, working on personal projects that challenge and expand my skills.

              I’m also contributing to open-source, but my main focus is building tools that solve real problems for me —whether it's aggregators or just practical utilities.

              Outside of coding, I spend time with my family and explore Thailand. Lately, I’ve been experimenting with photography, trying to capture the beauty of wildlife and the world around me.`),t("br"),t("h2","What I’m Not Doing","codystar-regular"),t("ul",[t("li",[t("b","\uD83C\uDFC3‍♂️\uD83D\uDCA8 Chasing the rat race"),t("span"," – I’m not grinding for promotions, climbing corporate ladders, or overworking myself for someone else’s bottom line. Instead, I focus on meaningful work that improves my life.")]),t("li",[t("b","\uD83D\uDD25 Burning out"),t("span"," – I enjoy coding, but I’m not sacrificing my health or personal time for endless hustle. Balance matters.")]),t("li",[t("b","❌ Building things I don’t believe in"),t("span"," – I’m not chasing trends or making things just because they’re 'hot.' If it doesn’t solve a real problem or spark my interest, I’m not doing it.")])]),t("p","Right now, my priority is doing fulfilling work, enjoying life, and growing at my own pace.")])])}function h(o,e){let r=t("a",o);return r.href=e,r.target="__blank",r}function c(o,e,r,n){return t("p",[t("div",[h(o,e),t("i",t("small",` ${r}`)),t("div",n)])])}function d(){return t("article",t("section",[t("br"),t("h2","My Top Projects","codystar-regular"),t("i","Here are a few projects I've worked on, ranging from personal tools to open-source contributions:"),c("Todo","google.com","(rust/html)","Something that i need to complete")]))}function i(o,e,r){return t("li",[t("b",o),t("i",[t("span",` - ${e}`),t("small",` ${r}`)])])}function g(){return t("section",[t("br"),t("h2","Work History","codystar-regular"),t("i","I work with TypeScript, Rust, and Python, but open-source software is where I thrive!"),t("ul",[i("Ventra health","Senior Software Engineer","(2023 - Present) \uD83C\uDFE5"),i("Randstad Technologies","Software Developer","(The Past) \uD83C\uDFE2"),i("Damiano Global Corp","Senior Software Architect","(The Past) \uD83C\uDF10"),i("Makers Ladder LLC","Fullstack Software Developer","(The Past) \uD83E\uDE9C")])])}function f(){return t("main",[l(),m(),g(),p(),d()])}function u(){return t("footer",[t("br"),t("small",t("i","Crafted with ❤️ by Triston Armstrong © 2025"))])}function y(){return t("div",void 0,"bg-image")}a([y(),t("div",[s(),f(),u()],"content")]);
