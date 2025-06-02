const flashcards = [
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "What is a computer network?",
        "answer": "<p><strong>Definition:</strong> A computer network is a collection of interconnected devices (nodes) linked by communication channels (edges) that permit the exchange of data and sharing of resources. It can be modelled as a graph, where nodes communicate using agreed protocols regardless of physical medium (copper, fibre, Wi-Fi, satellite).</p><ul><li><strong>Key goals:</strong> resource sharing, reliability, scalability.</li><li><strong>Examples:</strong> LAN, WAN, Internet.</li></ul>"
        },
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "Describe the current structure of the internet.",
        "answer": "<p>The Internet is a <em>network of networks</em> built on a hierarchical yet highly redundant mesh.</p><ul><li><strong>Backbone:</strong> High-speed long-haul links operated by Tier-1 ISPs carry global traffic.</li><li><strong>Edge networks:</strong> Regional ISPs, enterprise and campus networks connect end users.</li><li><strong>Interconnection:</strong> Routers exchange routes via <code>BGP</code>, allowing any host to reach any other.</li><li><strong>Scale:</strong> Tens of billions of heterogeneous devices (PCs, phones, IoT) connected via diverse media.</li><li><strong>Resilience:</strong> Packet switching plus multiple paths keep data flowing despite failures.</li></ul>"
        },
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "What is a protocol?",
        "answer": "<p>A <strong>protocol</strong> is a formal set of rules that define the syntax, semantics and timing of messages exchanged between communicating entities.</p><ul><li>Ensures <em>interoperability</em> between heterogeneous systems.</li><li>Examples span layers: <code>IP</code> for addressing, <code>TCP</code> for reliable transport, <code>HTTP</code> for web content, <code>SMTP</code> for email.</li><li>Layering lets each protocol offer services to the layer above while hiding lower-level details.</li></ul>"
        },
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "What is the purpose of TCP/IP?",
        "answer": "<p><strong>TCP/IP</strong> is the universal protocol suite that allows any two Internet hosts to communicate.</p><ul><li><code>IP</code>: end-to-end addressing and best-effort delivery of packets.</li><li><code>TCP</code>: builds on IP to give reliable, ordered, error-checked byte streams via segmentation, acknowledgements and retransmission.</li><li>Standardised stack means devices from different vendors interoperate seamlessly.</li><li>Alternatives such as <code>UDP</code> trade reliability for lower latency when required.</li></ul>"
        },
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "Explain the client/server architecture.",
        "answer": "<p>The <strong>client–server model</strong> splits responsibilities:</p><ul><li><strong>Server:</strong> Well-known address exposing a resource or service.</li><li><strong>Client:</strong> Initiates requests and consumes responses.</li><li><strong>Cycle:</strong> Client → request → Server → response.</li><li><strong>Benefits:</strong> centralised data, easier updates, supports many clients.</li><li><strong>Drawbacks:</strong> single point of failure and potential bottleneck unless replicated or load-balanced.</li></ul>"
        },
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "What is the World Wide Web?",
        "answer": "<p>The <strong>World Wide Web</strong> is the set of Internet resources accessible via browsers using <code>HTTP/HTTPS</code>.</p><ul><li>Invented at CERN (1989) by Tim Berners-Lee.</li><li>Relies on URLs, HTML documents and hypertext links.</li><li>Decentralised: any server can host content; browsers render HTML, CSS and JavaScript.</li><li>Has grown into a global platform for information and applications.</li></ul>"
        },
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "What is the purpose of DNS?",
        "answer": "<p>The <strong>Domain Name System (DNS)</strong> maps human-readable domain names to numerical IP addresses.</p><ul><li>Acts like the Internet’s phone book, simplifying navigation.</li><li>Hierarchical and distributed (root → TLD → authoritative servers) for scalability and resilience.</li><li>Allows hosts to change IP without breaking links.</li></ul>"
        },
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "Break down the structure of a URL.",
        "answer": "<p>A <strong>Uniform Resource Locator (URL)</strong> identifies a resource on the Web.</p><ol><li><code>scheme://</code> – protocol, e.g., <code>https</code>.</li><li><code>domain</code> – host name resolved via DNS.</li><li><code>:port</code> – optional; defaults to 80 (HTTP) or 443 (HTTPS).</li><li><code>/path/to/resource</code> – route on the server.</li><li><code>?query=string</code> – optional key-value parameters.</li><li><code>#fragment</code> – client-side anchor.</li></ol><p>Headers such as cookies and user-agent accompany the request but are outside the URL.</p>"
        },
        {
        "category": "Lecture 1 (Networks & WWW)",
        "question": "How does client–server architecture operate in the World Wide Web?",
        "answer": "<p>The browser (<em>client</em>) sends an <code>HTTP</code> request to a web <em>server</em>.</p><ul><li>The server locates or generates the requested resource.</li><li>It returns a response with status, headers and body (HTML, CSS, images, JSON …).</li><li>The browser parses HTML, fetches additional resources and renders the page.</li><li>This request–response cycle embodies client–server communication over TCP/IP.</li></ul>"
        },
        {
        "category": "Lecture 2 (HTML)",
        "question": "What is the purpose of HTML?",
        "answer": "<p><strong>HTML (HyperText Markup Language)</strong> provides the <em>semantic structure</em> of a web page, describing <em>what</em> content is (headings, paragraphs, lists, images, links) so browsers and assistive technologies can present and process it appropriately.</p>"
        },
        {
        "category": "Lecture 2 (HTML)",
        "question": "Summarise the HTML5 philosophy.",
        "answer": "<p>HTML5 follows five guiding principles:</p><ol><li><strong>Interoperability</strong> across devices and browsers.</li><li><strong>Graceful error recovery</strong> so minor markup mistakes do not break pages.</li><li><strong>Backward compatibility</strong> to avoid invalidating existing content.</li><li><strong>User-centric hierarchy</strong>: User > Designer > Browser Implementer > Theorist.</li><li><strong>Separation of concerns</strong>: markup for meaning, CSS for presentation, JavaScript for behaviour.</li></ol>"
        },
        {
        "category": "Lecture 2 (HTML)",
        "question": "How is HTML mapped to the structure of a page?",
        "answer": "<p>An HTML document is a <strong>tree</strong> of nested <em>elements</em>.</p><ul><li>Root <code><html></code> contains <code><head></code> (metadata) and <code><body></code> (visible content).</li><li>The browser converts this tree into the <em>Document Object Model (DOM)</em>.</li><li>Parents pass default styles and properties to children unless overridden.</li></ul>"
        },
        {
        "category": "Lecture 2 (HTML)",
        "question": "Describe the purpose of common HTML elements and attributes.",
        "answer": "<p><strong>Elements</strong> add meaning:</p><ul><li><code><h1>-<h6></code> – headings.</li><li><code><p></code> – paragraph.</li><li><code><ul></code>, <code><ol></code>, <code><li></code> – lists.</li><li><code><img></code> – image.</li><li><code><a></code> – hyperlink.</li></ul><p><strong>Attributes</strong> refine behaviour: <code>src</code>, <code>alt</code>, <code>id</code>, <code>class</code>, <code>href</code>, etc.</p>"
        },
        {
        "category": "Lecture 2 (HTML)",
        "question": "Explain input types and what happens when you submit a form.",
        "answer": "<p><strong>Input types:</strong> <code>text</code>, <code>email</code>, <code>number</code>, <code>date</code>, <code>radio</code>, <code>checkbox</code>, <code>file</code>, <code>submit</code>, etc.</p><p><strong>Submission flow:</strong> Clicking a <code>submit</code> button packages each control’s <code>name=value</code> pair.</p><ul><li><code>action</code> – server endpoint.</li><li><code>method</code> – <code>GET</code> (values in URL) or <code>POST</code> (values in body).</li><li>The browser sends an HTTP request; the server processes data and returns a response.</li></ul>"
        },
        {
        "category": "Lecture 2 (HTML)",
        "question": "Compare client-side and server-side validation.",
        "answer": "<p><strong>Client-side validation</strong> enhances user experience.</p><ul><li>Built-in attributes: <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code>, semantic types like <code>email</code>.</li><li>Custom checks via JavaScript.</li></ul><p><strong>Server-side validation</strong> is essential for security. The server re-validates and sanitises all input because client checks can be bypassed.</p>"
        },
        {
        "category": "Lecture 3 (CSS)",
        "question": "What is the purpose of CSS?",
        "answer": "<p><strong>CSS (Cascading Style Sheets)</strong> defines the <em>presentation</em> of HTML—layout, colours, fonts, spacing and responsive behaviour—allowing the same content to adopt different visual themes without altering markup.</p>"
        },
        {
        "category": "Lecture 3 (CSS)",
        "question": "List the advantages of separating CSS from HTML.",
        "answer": "<ul><li><strong>Maintainability:</strong> one stylesheet change updates many pages.</li><li><strong>Performance:</strong> cached styles reduce bandwidth.</li><li><strong>Accessibility & portability:</strong> semantic HTML aids assistive tech and adapts to devices.</li><li><strong>Consistency:</strong> enforces a uniform brand look.</li><li><strong>Cleaner markup:</strong> keeps presentation logic out of HTML.</li></ul>"
        },
        {
        "category": "Lecture 3 (CSS)",
        "question": "Name the different ways of specifying styles.",
        "answer": "<p>Three levels cooperate in the cascade:</p><ol><li><strong>Inline:</strong> <code>style</code> attribute on an element (highest specificity).</li><li><strong>Internal:</strong> rules inside a <code><style></code> block in the <code><head></code>.</li><li><strong>External:</strong> separate <code>.css</code> file linked with <code><link rel=\"stylesheet\" href=\"styles.css\"></code> (preferred).</li></ol>"
        },
        {
        "category": "Lecture 3 (CSS)",
        "question": "Explain the purpose of different selectors and common style properties.",
        "answer": "<p><strong>Selectors</strong> target elements:</p><ul><li>Universal <code>*</code>, element <code>p</code>, class <code>.note</code>, id <code>#nav</code>, attribute <code>[type=\"email\"]</code>.</li><li>Pseudo-class <code>:hover</code>, <code>:focus</code>, <code>:nth-child(2)</code>.</li><li>Pseudo-element <code>::first-letter</code>, <code>::before</code>.</li><li>Combinators: descendant <code>div p</code>, child <code>ul > li</code>, sibling <code>h1 + p</code>.</li></ul><p>They apply properties such as <code>color</code>, <code>font-size</code>, <code>margin</code>, <code>background</code>, <code>display</code>.</p>"
        },
        {
        "category": "Lecture 3 (CSS)",
        "question": "How are conflicts resolved and precedence determined in CSS?",
        "answer": "<p>When rules collide the browser uses:</p><ol><li><strong>Origin & importance:</strong> user agent < user < author; <code>!important</code> overrides normal rules.</li><li><strong>Specificity:</strong> inline > IDs > classes/attributes/pseudo-classes > element selectors.</li><li><strong>Source order:</strong> later rules win if specificity ties.</li></ol><p>Reserve <code>!important</code> for exceptional cases.</p>"
        },
        {
        "category": "Lecture 3 (CSS)",
        "question": "Describe the CSS box model.",
        "answer": "<p>Every element renders as four nested rectangles:</p><ul><li><strong>Content:</strong> text or image area.</li><li><strong>Padding:</strong> transparent space inside the border.</li><li><strong>Border:</strong> visible edge around padding.</li><li><strong>Margin:</strong> outer blank space separating the element from neighbours.</li></ul><p>Total size = content + padding + border; margins add extra separation.</p>"
        },
        {
        "category": "Lecture 3 (CSS)",
        "question": "Outline the document flow model in CSS.",
        "answer": "<p>Default <strong>normal flow</strong>: block elements stack vertically; inline elements flow horizontally.</p><ul><li><strong>Float:</strong> removes the element from normal flow and lets text wrap around it (<code>float:left</code> or <code>right</code>).</li><li><strong>Position:</strong> <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code> allow offset placement; absolute/fixed elements are taken out of flow.</li><li><strong>Display:</strong> values like <code>block</code>, <code>inline</code>, <code>flex</code>, <code>grid</code> create different layout contexts.</li></ul>"
        },
        {
            "category": "Lecture 3 (CSS)",
            "question": "What common syntax mistakes break CSS and how can you spot them quickly?",
            "answer": "<ul><li><strong>Missing semicolon:</strong> Forgetting <code>;</code> before the next declaration stops parsing.</li><li><strong>Mismatched braces or parentheses:</strong> An extra <code>}</code> or unclosed <code>(</code> shifts subsequent rules.</li><li><strong>Unclosed quotes:</strong> Unterminated <code>\"</code> or <code>'</code> in a string or URL breaks the rule.</li><li><strong>Typos in property names:</strong> <code>backgroud</code> instead of <code>background</code> yields no effect.</li><li><strong>Missing units:</strong> Writing <code>width:100</code> instead of <code>width:100px</code> is ignored except for zero.</li></ul>"
        }
        ,{
            "category": "Lecture 4 (CSS Frameworks)",
            "question": "What is the purpose of CSS frameworks?",
            "answer": "<p><strong>CSS frameworks</strong> are pre-built collections of CSS (often with companion JavaScript) that provide ready-made grids, components and utility classes so developers can style a site quickly without reinventing common patterns.</p><ul><li><strong>Productivity:</strong> ships with polished buttons, tables, navbars, cards, etc., reducing hand-written CSS.</li><li><strong>Consistency:</strong> enforces a coherent visual language across pages and teams.</li><li><strong>Responsiveness out-of-the-box:</strong> grids and utilities adapt to phone, tablet and desktop breakpoints.</li><li><strong>Cross-browser reliability:</strong> framework authors handle vendor quirks so you do not have to.</li><li><strong>Community & docs:</strong> abundant examples, themes and plugins accelerate learning.</li></ul>"
            },
            {
            "category": "Lecture 4 (CSS Frameworks)",
            "question": "What is meant by a \\u201cresponsive design\\u201d?",
            "answer": "<p><strong>Responsive design</strong> is the practice of building a single site that automatically reshapes its layout, typography and media to give an optimal experience on any screen size.</p><ul><li><strong>Fluid grids:</strong> content arranged in percentage-based columns that grow or shrink with the viewport.</li><li><strong>Breakpoints:</strong> CSS media queries apply different rules at widths such as 576 px, 768 px, 992 px, etc.</li><li><strong>Flexible media:</strong> images and videos use <code>max-width:100%;</code> so they never overflow their container.</li><li><strong>Mobile-first strategy:</strong> default styles target phones, then progressively enhance for larger screens.</li></ul>"
            },
            {
            "category": "Lecture 5 (Core JavaScript)",
            "question": "State the main purpose of JavaScript on the web.",
            "answer": "<p><strong>JavaScript</strong> adds <em>behaviour</em> to HTML + CSS, enabling pages to react to user input, fetch data, validate forms and modify the document in real time, all without round-tripping to the server.</p><ul><li>Improves <strong>interactivity</strong> (menus, drag-and-drop, games).</li><li>Supports <strong>client-side validation</strong> to reduce server load.</li><li>Allows <strong>dynamic DOM updates</strong> for single-page applications.</li><li>Enables <strong>offline logic</strong> and rich UX by leveraging the browser’s execution engine.</li></ul>"
            },
            {
            "category": "Lecture 5 (Core JavaScript)",
            "question": "How can JavaScript be included and executed in the browser?",
            "answer": "<ul><li><strong>Inline handlers:</strong> small snippets in HTML attributes, e.g., <code><button onclick=\"alert('hi')\"></code>.</li><li><strong><script> blocks:</strong> embed code directly inside the HTML document.</li><li><strong>External files:</strong> reference a <code><script src=\"app.js\"></code> so browsers cache and reuse the code.</li><li><strong>DevTools console:</strong> run ad-hoc statements and debug.</li><li>Scripts execute in the <strong>window</strong> context, access the <code>document</code> object, register event listeners and manipulate the DOM or BOM.</li></ul>"
            },
            {
            "category": "Lecture 5 (Core JavaScript)",
            "question": "Summarise the core language features every web developer should know.",
            "answer": "<p>JavaScript is a <strong>dynamic, prototype-based</strong> language that blends imperative, object-oriented and functional paradigms.</p><ul><li><strong>Types:</strong> Number, String, Boolean, null, undefined, Object; implicit coercion and strict <code>===</code> comparisons.</li><li><strong>Variables:</strong> <code>let</code> & <code>const</code> (block scope), <code>var</code> (function scope), globalThis.</li><li><strong>Control:</strong> <code>if</code>, <code>switch</code>, <code>for</code>, <code>while</code>, <code>for...in</code>, ternary <code>? :</code>.</li><li><strong>Functions:</strong> first-class, arrow syntax, default params, closures and lexical <code>this</code>.</li><li><strong>Data structures:</strong> Arrays with rich methods (<code>push</code>, <code>map</code>, <code>splice</code>), objects as key-value pairs, JSON.</li><li><strong>Prototypes & inheritance:</strong> constructor functions, <code>prototype</code> chain, <code>new</code>, method sharing.</li><li><strong>Errors & debugging:</strong> <code>console.log</code>, DevTools breakpoints, try/catch.</li></ul>"
            },
            {
            "category": "Lecture 6 (DOM, BOM & Events)",
            "question": "Explain the purpose and overall structure of the DOM.",
            "answer": "<p>The <strong>Document Object Model (DOM)</strong> is a language-neutral tree representation of an HTML (or XML) document that exposes each node as an object so scripts can read and manipulate content, structure and style.</p><ul><li><strong>Hierarchy:</strong> root <code>document</code> node → element nodes → text/attribute nodes.</li><li><strong>Interfaces:</strong> properties like <code>innerHTML</code>, methods like <code>getElementById</code>, traversal pointers (<code>parentNode</code>, <code>childNodes</code>).</li><li>Acts as an API bridge between markup and JavaScript.</li></ul>"
            },
            {
            "category": "Lecture 6 (DOM, BOM & Events)",
            "question": "Describe the purpose and overall structure of the BOM.",
            "answer": "<p>The <strong>Browser Object Model (BOM)</strong> extends beyond the current document to describe the browser environment.</p><ul><li>Root <code>window</code> object contains sub-objects such as <code>navigator</code> (browser info), <code>screen</code> (resolution), <code>history</code>, <code>location</code>, <code>console</code>.</li><li>Provides APIs for geolocation, alerts, opening new windows and managing tabs.</li><li>Unlike the DOM, the BOM lacks a strict standard but common properties are widely supported.</li></ul>"
            },
            {
            "category": "Lecture 6 (DOM, BOM & Events)",
            "question": "List the main ways JavaScript can modify the DOM.",
            "answer": "<ul><li><strong>Property updates:</strong> change text via <code>element.textContent</code> or classes via <code>classList.add</code>.</li><li><strong>Structural methods:</strong> <code>appendChild</code>, <code>insertBefore</code>, <code>removeChild</code>, <code>replaceChild</code>.</li><li><strong>Document writing:</strong> legacy <code>document.write</code> / <code>writeln</code> to stream HTML during load.</li><li><strong>Attribute methods:</strong> <code>setAttribute</code>, <code>removeAttribute</code> for dynamic data-binding.</li></ul><p>These tools let scripts build or reshape pages without reloading.</p>"
            },
            {
            "category": "Lecture 6 (DOM, BOM & Events)",
            "question": "Compare web storage and cookies.",
            "answer": "<ul><li><strong>Cookies:</strong> up to 4 KB per key, sent with every HTTP request, optional expiry, suited to server-side sessions.</li><li><strong>Web Storage:</strong> <code>localStorage</code> and <code>sessionStorage</code> give 5–10 MB key–value space, never auto-transmitted to servers, string-only values, same-origin rule.</li><li>Both allow state persistence across page loads; storage is preferred for larger, purely client data, cookies for server authentication.</li></ul>"
            },
            {
            "category": "Lecture 6 (DOM, BOM & Events)",
            "question": "What is event-driven programming and why is it important in the browser?",
            "answer": "<p><strong>Event-driven programming</strong> structures code around <em>handlers</em> that run when external actions occur (user input, network replies, timers).</p><ul><li>Browser maintains an internal loop detecting events and dispatching them, freeing developers from polling.</li><li>Enables asynchronous UX where the page remains responsive while waiting for user actions or server responses.</li></ul>"
            },
            {
            "category": "Lecture 6 (DOM, BOM & Events)",
            "question": "Explain how event handling is implemented: registration and event flow.",
            "answer": "<p><strong>Registration:</strong> attach a listener via HTML attributes, assign to <code>element.on *</code> properties, or (best) call <code>addEventListener(eventType, handler, useCapture)</code>.</p><p><strong>Event flow:</strong> once triggered, the event travels <em>capturing</em> (document→target), <em>target</em>, then <em>bubbling</em> (target→document). Handlers can inspect <code>event.target</code>, stop propagation with <code>event.stopPropagation()</code> or prevent default behaviour.</p>"
            },
            {
            "category": "Lecture 6 (DOM, BOM & Events)",
            "question": "Give examples of common browser events and their purposes.",
            "answer": "<ul><li><code>load</code> – fires when the entire page (including images) has finished loading.</li><li><code>click</code> – user presses and releases the primary mouse button.</li><li><code>mouseover</code>/<code>mouseout</code> – mouse enters or leaves an element, useful for tooltips.</li><li><code>keydown</code>/<code>keyup</code> – keyboard interaction, critical for accessibility.</li><li><code>focus</code>/<code>blur</code> – element gains or loses input focus, handy for form validation.</li></ul>"
            },
            {
            "category": "Lecture 6 (DOM, BOM & Events)",
            "question": "What problem does jQuery aim to solve and how does it help developers?",
            "answer": "<p><strong>jQuery</strong> streamlines client-side development by wrapping verbose DOM APIs with concise, chainable syntax and normalising cross-browser inconsistencies.</p><ul><li><strong>Selection:</strong> CSS-like queries <code>$(\"div.notice\")</code>.</li><li><strong>Manipulation:</strong> easy <code>.html()</code>, <code>.attr()</code>, <code>.append()</code> calls.</li><li><strong>Events:</strong> unified <code>.on()</code> for binding listeners, plus <code>$(document).ready()</code> for safe execution after load.</li><li><strong>Effects & AJAX:</strong> built-in animation helpers and AJAX wrappers reduce boilerplate.</li></ul>"
            }
            ,{
            "category": "Lecture 5 (Core JavaScript)",
            "question": "How do you link an external JavaScript file to an HTML page?",
            "answer": "<p>Add a <code><script></code> element that references your file, ideally just before the closing <code></body></code> so the page renders first.</p><pre><code><!-- load and execute after HTML is parsed --><br><script src=\"app.js\" defer></script><br></code></pre><p><strong>Why:</strong> the <code>defer</code> attribute tells the browser to download the script in parallel and run it after the DOM is ready, preventing render-blocking.</p>"
            },
            {
            "category": "Lecture 5 (Core JavaScript)",
            "question": "Show a basic client-side example that hides an element when a button is clicked.",
            "answer": "<pre><code><button id=\"toggle\">Hide text</button><br><p id=\"msg\">Secret message</p><br><script><br>const btn = document.getElementById(\"toggle\");<br>const msg = document.getElementById(\"msg\");<br>btn.addEventListener(\"click\", () => {<br>  msg.classList.toggle(\"hidden\");<br>});<br></script><br></code></pre><p>Add a rule <code>.hidden{display:none;}</code> in CSS. The snippet demonstrates DOM queries, event registration and class manipulation.</p>"
            },
            {
            "category": "Lecture 5 (Core JavaScript)",
            "question": "Demonstrate fetching JSON data with <code>fetch</code> and <code>async/await</code>.",
            "answer": "<pre><code>async function getUsers(){<br>  try{<br>    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");<br>    if(!res.ok) throw new Error(res.status);<br>    const data = await res.json();<br>    console.table(data);<br>  }catch(err){<br>    console.error(\"Fetch failed\", err);<br>  }<br>}<br>getUsers();<br></code></pre><p>The function awaits the network response, parses it as JSON and handles errors, illustrating Promises and <code>async/await</code>.</p>"
            },
            {
            "category": "Lecture 5 (Core JavaScript)",
            "question": "Write a minimal Node.js HTTP server that returns JSON.",
            "answer": "<pre><code>const http = require(\"http\");<br>const server = http.createServer((req, res) => {<br>  res.writeHead(200, {\"Content-Type\": \"application/json\"});<br>  res.end(JSON.stringify({status: \"OK\"}));<br>});<br>server.listen(3000, () => console.log(\"Server on 3000\"));<br></code></pre><p>Save as <code>server.js</code> and run <code>node server.js</code>. Browse to <code>http://localhost:3000</code> to see the JSON response.</p>"
            },
            {
            "category": "Lecture 5 (Core JavaScript)",
            "question": "Create an Express.js endpoint <code>/hello</code> that replies with “Hello, world!” and explain how to run it.",
            "answer": "<pre><code>import express from \"express\";<br>const app = express();<br>app.get(\"/hello\", (req, res) => res.send(\"Hello, world!\"));<br>app.listen(3000, () => console.log(\"Express ready on 3000\"));<br></code></pre><p>Install dependencies with <code>npm i express</code>, add <code>{ \"type\": \"module\" }</code> to <code>package.json</code>, save as <code>index.mjs</code> and run <code>node index.mjs</code>. Visiting <code>http://localhost:3000/hello</code> returns the greeting, illustrating server-side routing.</p>"
            }
            ,{
                "category": "Lecture7(Agile & Git)",
                "question": "What are the key differences between Agile and Waterfall development methodologies?",
                "answer": "<p><strong>Waterfall:</strong> sequential phases (requirements→design→implementation→testing→deployment) with heavy up-front planning and little change once a phase is complete.</p><ul><li><em>Pros:</em> predictability, clear documentation, easy stakeholder sign-off.</li><li><em>Cons:</em> rigid, late discovery of defects, high risk if requirements change.</li></ul><p><strong>Agile:</strong> iterative cycles that deliver small increments of working software and welcome changing requirements.</p><ul><li><em>Pros:</em> rapid feedback, early value delivery, adaptive planning, continuous improvement.</li><li><em>Cons:</em> needs disciplined teamwork, less upfront certainty, harder to estimate total cost/time.</li></ul>"
                },
                {
                "category": "Lecture7(Agile & Git)",
                "question": "Describe the core Agile development cycle.",
                "answer": "<ol><li><strong>Plan iteration:</strong> prioritise the backlog, estimate effort, pick user stories.</li><li><strong>Develop:</strong> implement code, write tests, refactor continuously.</li><li><strong>Integrate & test:</strong> commit to mainline, run automated suite, fix defects.</li><li><strong>Review:</strong> demonstrate working increment to stakeholders and gather feedback.</li><li><strong>Retrospect:</strong> team reflects on process and tunes the next cycle.</li></ol><p>This loop repeats every 1–4 weeks, producing potentially shippable software each time.</p>"
                },
                {
                "category": "Lecture7(Agile & Git)",
                "question": "How are user stories used for planning and time estimation in Agile projects?",
                "answer": "<p>A <em>user story</em> captures a feature from an end-user perspective: “As a <role> I want <goal> so that <benefit>”.</p><ul><li><strong>Planning:</strong> stories populate the product backlog; the team pulls top-priority stories into the iteration.</li><li><strong>Estimation:</strong> each story is sized with relative units (story points, t-shirt sizes) during backlog grooming; techniques like Planning Poker leverage collective wisdom.</li><li><strong>Tracking:</strong> burndown charts compare completed points against time, guiding scope adjustments.</li></ul>"
                },
                {
                "category": "Lecture7(Agile & Git)",
                "question": "What is the purpose of test-driven development (TDD)?",
                "answer": "<p>TDD flips the traditional workflow: <strong>red→green→refactor</strong>.</p><ul><li>Write a <em>failing test</em> that defines the desired behaviour.</li><li>Write the <em>minimal code</em> to pass the test.</li><li><em>Refactor</em> while tests stay green.</li></ul><p>Benefits include living documentation, high confidence to change code, quicker bug detection and cleaner design.</p>"
                },
                {
                "category": "Lecture7(Agile & Git)",
                "question": "Why is version control software essential in software development?",
                "answer": "<ul><li><strong>History:</strong> every change is recorded with author, time and message.</li><li><strong>Collaboration:</strong> multiple developers work concurrently without overwriting each other.</li><li><strong>Rollback:</strong> faulty changes can be reverted swiftly.</li><li><strong>Branching:</strong> experimental features stay isolated until ready.</li><li><strong>Traceability:</strong> links code to issues, requirements and releases.</li></ul>"
                },
                {
                "category": "Lecture7(Agile & Git)",
                "question": "Outline how a Git project operates, including repositories, commits, branches, tags and remote repositories.",
                "answer": "<p><strong>Repository:</strong> a hidden <code>.git</code> folder tracking the entire project history.</p><ul><li><strong>Commit:</strong> snapshot made with <code>git add</code> + <code>git commit -m \"msg\"</code>; identified by SHA hash.</li><li><strong>Branch:</strong> movable pointer to a line of commits (create with <code>git checkout -b feature</code>).</li><li><strong>Tag:</strong> fixed label for significant commits (e.g., releases) via <code>git tag v1.0</code>.</li><li><strong>Remote:</strong> another repo URL (default <em>origin</em>); sync via <code>git push</code> and <code>git pull</code>.</li></ul>"
                },
                {
                "category": "Lecture7(Agile & Git)",
                "question": "What causes merge conflicts in Git and how are they resolved?",
                "answer": "<p>A <em>merge conflict</em> arises when two branches modify the same lines or one deletes a file the other edits.</p><ul><li>Git stops at the conflicting commit and inserts markers <<<<<</li><li>Developer manually edits the file to choose or blend changes.</li><li>Run <code>git add</code> on the fixed file, then <code>git merge --continue</code> or <code>git commit</code> to complete.</li><li>Frequent small merges and good communication minimise conflicts.</li></ul>"
                },
                {
                "category": "Lecture7(Agile & Git)",
                "question": "State the main purposes of GitHub.",
                "answer": "<ul><li><strong>Hosting:</strong> cloud storage for Git repositories with built-in access control.</li><li><strong>Collaboration:</strong> Issues, Pull Requests and code reviews streamline Agile teamwork.</li><li><strong>Automation:</strong> Actions run CI/CD pipelines on every push.</li><li><strong>Social coding:</strong> forks, stars and wikis foster open-source communities.</li></ul>"
                },
                {
                "category": "Lecture7(Agile & Git)",
                "question": "How do Issues and Pull Requests facilitate Agile interaction with a Git project on GitHub?",
                "answer": "<p><strong>Issues:</strong> track user stories, tasks and bugs; support discussion, labels, assignees and milestones to plan sprints.</p><p><strong>Pull Requests (PRs):</strong> propose merging a feature branch; show diffs, enable inline comments, trigger CI tests and require approvals before integration, ensuring code quality and shared understanding.</p>"
                },
                {
                "category": "Lecture8(HTTP & AJAX)",
                "question": "Summarise the high-level structure of an HTTP request and response.",
                "answer": "<ul><li><strong>Request:</strong> <em>request line</em> (<code>METHOD /path HTTP/1.1</code>) + header fields (key:value pairs) + optional body.</li><li><strong>Response:</strong> <em>status line</em> (<code>HTTP/1.1 200 OK</code>) + headers + optional body (HTML, JSON, files).</li></ul><p>Both are plain text terminated by a blank line separating headers from body.</p>"
                },
                {
                "category": "Lecture8(HTTP & AJAX)",
                "question": "How do HTTP requests enable communication between the browser and a server?",
                "answer": "<p>The browser (\\u201cclient\\u201d) opens a TCP connection, sends an HTTP request, the server processes it, returns a response and closes the connection. Each exchange is stateless, but cookies or tokens let multiple requests share context.</p>"
                },
                {
                "category": "Lecture8(HTTP & AJAX)",
                "question": "Explain the purpose of common HTTP request methods.",
                "answer": "<ul><li><strong>GET:</strong> retrieve a resource; should not change server state.</li><li><strong>POST:</strong> create or modify data; often used for form submission.</li><li><strong>PUT:</strong> replace a resource entirely; idempotent.</li><li><strong>DELETE:</strong> remove a resource.</li></ul><p>Using semantic methods clarifies intent and supports RESTful design.</p>"
                },
                {
                "category": "Lecture8(HTTP & AJAX)",
                "question": "Why are asynchronous communication and callbacks important in JavaScript?",
                "answer": "<p>JavaScript has a single call stack; long-running tasks would freeze the UI. Asynchronous APIs (fetch, timers, events) delegate work to the browser, which invokes <em>callbacks</em> or <em>Promise</em> handlers when ready, keeping pages responsive.</p>"
                },
                {
                "category": "Lecture8(HTTP & AJAX)",
                "question": "Define an AJAX request and outline its structure.",
                "answer": "<p><strong>AJAX</strong> (Asynchronous JavaScript And XML) is a pattern where JavaScript sends an HTTP request in the background, receives structured data (XML, JSON, plain text) and updates the DOM without reloading the page.</p><ul><li><strong>Trigger:</strong> user event or timer.</li><li><strong>Request:</strong> <code>XMLHttpRequest</code> or <code>fetch</code> specifying method, URL, headers, body.</li><li><strong>Callback:</strong> runs on response, parses data, manipulates DOM.</li></ul>"
                },
                {
                "category": "Lecture8(HTTP & AJAX)",
                "question": "What is JSON and why is it widely used for web communication?",
                "answer": "<p><strong>JSON</strong> (JavaScript Object Notation) encodes data as key-value pairs and arrays in plain text that mirrors JavaScript\\u2019s object syntax.</p><ul><li><strong>Lightweight:</strong> smaller than XML, human-readable.</li><li><strong>Native parsing:</strong> <code>JSON.parse</code> and <code>JSON.stringify</code> in browsers.</li><li><strong>Language-agnostic:</strong> supported by virtually every backend language.</li><li><strong>Structured:</strong> easily maps to in-memory objects for immediate use.</li></ul>"
                },
                {
                "category": "Lecture10(Client-Side Rendering & WebSockets)",
                "question": "What is client-side rendering and how does it work at a high-level?",
                "answer": "<p><strong>Client-side rendering (CSR)</strong> is a pattern where the server sends a minimal HTML skeleton plus JavaScript. After the initial load, JavaScript fetches data (usually JSON) and uses the DOM to build or update the page on the user’s device.</p><ul><li>Initial request downloads static assets from <code>/static</code> (HTML, CSS, JS).</li><li>JS executes, issues AJAX or fetch calls to REST or socket endpoints.</li><li>Returned data is merged into templates or components in the browser, producing the visible UI.</li><li>Only data, not full pages, travels after the first load, giving snappier interactions.</li></ul>"
                },
                {
                "category": "Lecture10(Client-Side Rendering & WebSockets)",
                "question": "Compare client-side rendering with server-side rendering.",
                "answer": "<p><strong>Server-side rendering (SSR)</strong> builds full HTML on the server for every route; the browser just displays it. <strong>CSR</strong> builds pages in the browser after the first load.</p><ul><li><em>SSR pros:</em> fast first paint, better SEO, simpler client logic.</li><li><em>SSR cons:</em> more server load, full page reloads for small changes.</li><li><em>CSR pros:</em> responsive UX, lighter server, real-time updates via fetch/web-sockets.</li><li><em>CSR cons:</em> larger initial JS download, SEO challenges, complex front-end state.</li></ul>"
                },
                {
                "category": "Lecture10(Client-Side Rendering & WebSockets)",
                "question": "What is a Single Page Application (SPA)?",
                "answer": "<p>An <strong>SPA</strong> serves the entire site through CSR so navigation never triggers a full page refresh.</p><ul><li>Browser loads one HTML entry point; routing is handled by JS, often using the History API.</li><li>Subsequent views are built from in-memory state plus AJAX data.</li><li><em>Advantages:</em> desktop-app feel, reduced server round trips, clear API separation.</li><li><em>Drawbacks:</em> long first load, client-side memory use, harder analytics and bookmarking if not managed.</li></ul>"
                },
                {
                "category": "Lecture10(Client-Side Rendering & WebSockets)",
                "question": "What is the purpose of Web Sockets?",
                "answer": "<p><strong>Web Sockets</strong> provide a full-duplex, persistent TCP connection between browser and server after a single HTTP upgrade handshake.</p><ul><li>Enable real-time push data without polling.</li><li>Reduce overhead compared to repeated HTTP requests.</li><li>Allow both ends to emit messages asynchronously.</li></ul>"
                },
                {
                "category": "Lecture10(Client-Side Rendering & WebSockets)",
                "question": "List common use cases for Web Sockets.",
                "answer": "<ul><li><strong>Chat and messaging</strong> apps broadcasting instantly.</li><li><strong>Collaborative editing</strong> (documents, whiteboards) syncing cursors and changes.</li><li><strong>Live dashboards</strong> such as stock tickers or sports scores.</li><li><strong>Online gaming</strong> where latency must be minimal.</li><li><strong>IoT/control panels</strong> streaming sensor updates.</li></ul>"
                },

                {
                "category": "Lecture11(MVC & Databases)",
                "question": "What is the MVC architecture and how does it map to web development?",
                "answer": "<p><strong>Model-View-Controller (MVC)</strong> separates concerns:</p><ul><li><strong>Model:</strong> Python classes backed by the database (e.g., SQLAlchemy models).</li><li><strong>View:</strong> HTML/CSS templates (Jinja) that present data to users.</li><li><strong>Controller:</strong> Route or controller functions that accept HTTP requests, fetch/modify models and choose which view to render.</li></ul><p>This structure allows independent evolution, team specialisation and easier testing.</p>"
                },
                {
                "category": "Lecture11(MVC & Databases)",
                "question": "State the purpose, pros and cons of an ORM.",
                "answer": "<p>An <strong>ORM</strong> (Object-Relational Mapper) maps database rows to native objects, letting developers manipulate data with language syntax instead of SQL.</p><ul><li><em>Pros:</em> faster development, database agnosticism, safer parameter handling, integrated migrations.</li><li><em>Cons:</em> performance overhead, complex queries can be harder to tune, hidden SQL may obscure behaviour.</li></ul>"
                },
                {
                "category": "Lecture11(MVC & Databases)",
                "question": "Recall the very basics of relational databases needed here.",
                "answer": "<ul><li>Data stored in <strong>tables</strong> (relations) of rows and columns.</li><li><strong>Primary key</strong> uniquely identifies each row.</li><li><strong>Foreign key</strong> links rows across tables, enforcing referential integrity.</li><li>Main CRUD operations: <code>INSERT</code>, <code>SELECT</code>, <code>UPDATE</code>, <code>DELETE</code>.</li></ul>"
                },
                {
                "category": "Lecture11(MVC & Databases)",
                "question": "At a high level, how can SQLAlchemy perform database operations via Python?",
                "answer": "<p>After configuring <code>db = SQLAlchemy(app)</code>:</p><ul><li><strong>Create:</strong> <code>u = User(name=\"Ada\")</code>; <code>db.session.add(u)</code>; <code>db.session.commit()</code>.</li><li><strong>Read:</strong> <code>User.query.filter_by(name=\"Ada\").first()</code>.</li><li><strong>Update:</strong> modify fields then <code>db.session.commit()</code>.</li><li><strong>Delete:</strong> <code>db.session.delete(u)</code>; commit.</li></ul>"
                },
                {
                "category": "Lecture11(MVC & Databases)",
                "question": "Explain the meaning of basic SQLAlchemy syntax for defining models.",
                "answer": "<pre><code class=\"language-python\">class User(db.Model):<br> id = db.Column(db.Integer, primary_key=True)<br> username = db.Column(db.String(64), unique=True, index=True, nullable=False)</code></pre><ul><li><code>db.Model</code> base class creates a table.</li><li><code>db.Column(type, ...)</code> declares a column.</li><li>Arguments like <code>primary_key</code>, <code>unique</code>, <code>nullable</code>, <code>index</code> add constraints and optimisations.</li></ul>"
                },
                {
                "category": "Lecture11(MVC & Databases)",
                "question": "What is the purpose of SQLAlchemy relationships?",
                "answer": "<p><code>db.relationship()</code> builds Python-level links so you can access related rows as attributes rather than writing joins.</p><ul><li>Maintains coherence between objects (<code>back_populates</code> mirrors updates).</li><li>Supports one-to-one, one-to-many and many-to-many associations.</li><li>Lazily loads related data to reduce queries.</li></ul>"
                },
                {
                "category": "Lecture11(MVC & Databases)",
                "question": "Why are database migrations needed and how do they work at a high level?",
                "answer": "<p>As models evolve, <strong>migrations</strong> update the live schema without data loss.</p><ul><li>Tools like Alembic diff models against the current DB and generate <code>upgrade()</code>/<code>downgrade()</code> scripts.</li><li>Commands such as <code>flask db migrate</code> → <code>flask db upgrade</code> apply the changes.</li><li>Version history lets you roll forward or backward like Git for schemas.</li></ul>"
                },
                {
                "category": "Lecture11(MVC & Databases)",
                "question": "What are best practices for storing images in a web application?",
                "answer": "<ul><li><strong>Small scale:</strong> keep image files in a dedicated <code>uploads/</code> folder and store file paths in the database.</li><li><strong>Large scale:</strong> offload to object storage (S3, Cloud Storage) or a CDN for performance and scalability.</li><li>Avoid BLOB columns in relational DBs except for tiny icons.</li></ul>"
                },
                {
                "category": "Lecture11(MVC & Databases)",
                "question": "Give key considerations when building a real-life webserver.",
                "answer": "<ul><li><strong>Indexing</strong> hot query columns.</li><li><strong>Caching</strong> expensive reads.</li><li><strong>Security</strong> (TLS, least privilege DB user, input validation).</li><li><strong>Backups</strong> and disaster recovery.</li><li><strong>Load scaling</strong> via connection pools and replication.</li><li><strong>Monitoring</strong> logs and metrics for performance and errors.</li></ul>"
                },
                {
                "category": "Lecture12(Security Fundamentals)",
                "question": "What is public-key encryption?",
                "answer": "<p>An <strong>asymmetric cryptosystem</strong> where each entity has a public key (shared) and a private key (kept secret). Data encrypted with the public key can only be decrypted with the matching private key, enabling secure key exchange and digital signatures.</p>"
                },
                {
                "category": "Lecture12(Security Fundamentals)",
                "question": "Define hashing and its essential properties.",
                "answer": "<p>A <strong>hash function</strong> deterministically maps arbitrary-length input to a fixed-length digest.</p><ul><li><strong>Pre-image resistance</strong> – hard to invert.</li><li><strong>Collision resistance</strong> – hard to find two inputs with the same hash.</li><li><strong>Avalanche effect</strong> – tiny input changes radically alter the output.</li></ul>"
                },
                {
                "category": "Lecture12(Security Fundamentals)",
                "question": "How does session-based authentication work in web applications?",
                "answer": "<p>After successful login the server creates a <strong>session ID</strong>, stores it server-side (memory, Redis, DB) and sends it to the browser as a cookie. Each subsequent request includes the cookie so the server can look up the user’s state without re-validating credentials.</p>"
                },
                {
                "category": "Lecture12(Security Fundamentals)",
                "question": "Why should password hashes be salted?",
                "answer": "<p>A unique <strong>salt</strong> concatenated to each password before hashing ensures identical passwords produce different hashes, defeating rainbow tables and making bulk cracking far harder.</p>"
                },
                {
                "category": "Lecture12(Security Fundamentals)",
                "question": "What are secret keys and how should they be stored?",
                "answer": "<p><strong>Secret keys</strong> sign sessions, CSRF tokens, JWTs and encryption routines. Store them in environment variables, vault services or config files outside version control – never hard coded in the repository.</p>"
                },
                {
                "category": "Lecture12(Security Fundamentals)",
                "question": "List common web attacks covered and one defence for each.",
                "answer": "<ul><li><strong>SQL injection:</strong> use prepared statements or ORM parameter binding.</li><li><strong>Cross-Site Scripting (XSS):</strong> escape user output or use Content Security Policy.</li><li><strong>Cross-Site Request Forgery (CSRF):</strong> include per-form CSRF tokens validated on POST.</li><li><strong>Session hijacking:</strong> set <code>Secure</code> and <code>HttpOnly</code> cookie flags and rotate session IDs on privilege change.</li></ul>"
                },

                {
                "category": "Lecture12(Security)",
                "question": "Explain how public-key encryption works and give two practical uses.",
                "answer": "<p>Public-key encryption uses an <em>asymmetric</em> pair of keys: a publicly shared key for encryption and a privately kept key for decryption. Anything encrypted with one can only be decrypted with the other, and knowing the public key does not reveal the private key.</p><ul><li><strong>Authentication:</strong> A server proves its identity by decrypting data that was encrypted with its own public key.</li><li><strong>Digital signatures:</strong> A message encrypted with the sender\u2019s private key can be verified by anyone with the sender\u2019s public key, ensuring integrity and non-repudiation.</li></ul>"
                },
                {
                "category": "Lecture12(Security)",
                "question": "What is hashing and why is it vital in web security?",
                "answer": "<p>A <strong>hash function</strong> deterministically maps any input to a fixed-length digest while making it computationally infeasible to reverse the process or find collisions. Hashing secures stored data such as passwords, creates file integrity checksums and underpins digital signatures.</p>"
                },
                {
                "category": "Lecture12(Security)",
                "question": "Describe the flow of session-based authentication in a web application.",
                "answer": "<ul><li>User submits valid credentials via HTTPS.</li><li>Server creates a unique session ID, stores it server-side and returns it inside a cookie signed with a secret.</li><li>Browser automatically attaches the cookie on every subsequent request, letting the server look up the session and authorise the user.</li><li>Logout clears the session on both sides.</li></ul>"
                },
                {
                "category": "Lecture12(Security)",
                "question": "Why should password hashes be salted?",
                "answer": "<p>Adding a unique random <em>salt</em> to each password before hashing ensures identical passwords yield different digests, defeats rainbow-table precomputation and forces attackers to crack each password individually.</p>"
                },
                {
                "category": "Lecture12(Security)",
                "question": "State best practices for handling secret keys in a Flask project.",
                "answer": "<ul><li>Store secrets in environment variables or a vault, never in source control.</li><li>Load them at runtime into <code>app.config</code>.</li><li>Rotate keys periodically and limit their scope to the minimum required function.</li></ul>"
                },
                {
                "category": "Lecture12(Security)",
                "question": "List the major web attacks discussed and one defence for each.",
                "answer": "<ul><li><strong>Impersonation:</strong> mitigate with SSL certificates validated by trusted CAs.</li><li><strong>Man-in-the-middle:</strong> use HTTPS with encrypted sessions.</li><li><strong>Cross-site request forgery:</strong> embed per-form CSRF tokens and verify them server-side.</li><li><strong>Cross-site scripting:</strong> escape or sanitise user input and set Content-Security-Policy headers.</li><li><strong>SQL injection:</strong> use parameterised queries or ORM binding.</li></ul>"
                },
                {
                "category": "Lecture13(Testing)",
                "question": "Identify the four main types of software tests and their purposes.",
                "answer": "<ul><li><strong>Unit tests:</strong> validate a single function in isolation.</li><li><strong>Integration tests:</strong> ensure multiple modules work together.</li><li><strong>System tests:</strong> exercise the complete application in its target environment.</li><li><strong>Acceptance tests:</strong> verify end-to-end user workflows meet requirements.</li></ul>"
                },
                {
                "category": "Lecture13(Testing)",
                "question": "List desirable properties of unit tests.",
                "answer": "<ul><li>Automated</li><li>Repeatable and independent</li><li>Fast</li><li>Pinpoint failures precisely</li><li>Limited in scope with no external side-effects</li></ul>"
                },
                {
                "category": "Lecture13(Testing)",
                "question": "Differentiate between fakes, stubs and mocks.",
                "answer": "<ul><li><strong>Fake:</strong> lightweight working implementation (e.g. in-memory DB) replacing a real component.</li><li><strong>Stub:</strong> returns predefined responses without full behaviour.</li><li><strong>Mock:</strong> like a stub but records how it was used so assertions can verify interactions.</li></ul>"
                },
                {
                "category": "Lecture13(Testing)",
                "question": "Outline the high-level structure of a <code>unittest</code> unit test in Python.",
                "answer": "<ol><li><code>setUp</code> fixture prepares the test context.</li><li>One or more <code>test_*</code> methods exercise the system under test and use assertions.</li><li><code>tearDown</code> cleans up (close files, reset DB etc).</li></ol>"
                },
                {
                "category": "Lecture13(Testing)",
                "question": "Explain the roles of Selenium IDE and Selenium WebDriver.",
                "answer": "<p><strong>Selenium IDE</strong> records and replays browser interactions from an extension, ideal for quick prototypes. <strong>Selenium WebDriver</strong> provides a programmable API that drives headless or real browsers, enabling maintainable, automated system tests with assertions.</p>"
                },
                {
                "category": "Lecture14(REST APIs)",
                "question": "What is the purpose of an API in web-service design?",
                "answer": "<p>An <strong>API</strong> exposes a stable contract of endpoints that external clients can call to perform operations or retrieve data without knowing internal implementation, enabling integration, reuse and decoupled evolution.</p>"
                },
                {
                "category": "Lecture14(REST APIs)",
                "question": "List key principles of RESTful APIs.",
                "answer": "<ul><li>Stateless client-server communication</li><li>Uniform resource identification via URLs</li><li>Standard HTTP methods and status codes</li><li>Representations in transferable formats such as JSON</li><li>Cacheability where appropriate</li></ul>"
                },
                {
                "category": "Lecture14(REST APIs)",
                "question": "Give three standard conventions for designing a REST API.",
                "answer": "<ul><li>Use plural nouns for collection endpoints (e.g. <code>/users</code>).</li><li>Leverage nested paths for hierarchy (e.g. <code>/users/42/posts</code>).</li><li>Represent errors with meaningful HTTP status codes and a JSON body describing <code>code</code> and <code>message</code>.</li></ul>"
                },
                {
                "category": "Lecture14(REST APIs)",
                "question": "Highlight two differences between building a REST API and a traditional webserver.",
                "answer": "<ul><li>REST returns machine-consumable data (JSON, XML) rather than rendered HTML views.</li><li>State is kept entirely client-side in REST; webservers often rely on sessions and templating.</li></ul>"
                },
                {
                "category": "Lecture15(Deployment)",
                "question": "Compare common web hosting options with one pro and con for each.",
                "answer": "<ul><li><strong>Shared hosting:</strong> cheap but limited control.</li><li><strong>Virtual private server (VPS):</strong> root access but requires manual maintenance.</li><li><strong>Platform as a Service (e.g. Heroku):</strong> effortless deployment but vendor lock-in.</li><li><strong>Container orchestration (e.g. Kubernetes):</strong> elastic scaling but higher operational complexity.</li></ul>"
                },
                {
                "category": "Lecture15(Deployment)",
                "question": "List the basic steps for configuring a production server.",
                "answer": "<ol><li>Purchase or assign a domain name.</li><li>Obtain and install an SSL certificate (Let\u2019s Encrypt).</li><li>Configure logging and monitoring (systemd, ELK).</li><li>Harden security: firewall, automatic updates, least-privilege users.</li></ol>"
                },
                {
                "category": "Lecture15(Deployment)",
                "question": "Describe the high-level architecture of a large-scale production stack and each component\u2019s role.",
                "answer": "<ul><li><strong>Reverse proxy (e.g. NGINX):</strong> terminates TLS, load-balances to app servers and serves static assets.</li><li><strong>Application servers (Gunicorn, uWSGI):</strong> run Flask code behind WSGI.</li><li><strong>Database cluster:</strong> stores persistent data, offers replication and fail-over.</li><li><strong>Cache (Redis, Memcached):</strong> accelerates frequent reads.</li><li><strong>Message queue (RabbitMQ, Kafka):</strong> handles asynchronous tasks.</li></ul>"
                }
]

