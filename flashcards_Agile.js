const flashcards = [
  {
    "category": "Definitions",
    "question": "Define: TCP, IP, UDP, DNS.",
    "answer": "<ul><li><strong>TCP (Transmission Control Protocol):</strong> Reliable, connection-oriented transport that chops data into numbered segments, resends lost ones and reassembles them in order.</li><li><strong>IP (Internet Protocol):</strong> Best-effort network layer that gives every device a unique address and forwards self-contained packets hop-by-hop.</li><li><strong>UDP (User Datagram Protocol):</strong> Lightweight, connectionless alternative to TCP that sends packets without acknowledgements—perfect for speed-critical apps like games or VoIP.</li><li><strong>DNS (Domain Name System):</strong> The Internet’s distributed “phone book” that translates human-friendly names such as example.com into numerical IP addresses.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: HTTP, HTTPS, URL, URI.",
    "answer": "<ul><li><strong>HTTP (Hypertext Transfer Protocol):</strong> Text-based request/response protocol used by browsers to fetch web resources.</li><li><strong>HTTPS:</strong> HTTP sent through an encrypted TLS tunnel to guarantee confidentiality and authenticity.</li><li><strong>URL (Uniform Resource Locator):</strong> A complete web address that tells the browser which protocol, server and path to use.</li><li><strong>URI (Uniform Resource Identifier):</strong> Broader term covering any string that uniquely names or locates a resource—every URL is a URI, but not vice versa.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: HTML, CSS, JavaScript.",
    "answer": "<ul><li><strong>HTML (HyperText Markup Language):</strong> Gives web pages their semantic structure—headings, lists, forms, images and links.</li><li><strong>CSS (Cascading Style Sheets):</strong> Controls presentation—layout, colours, fonts and responsive behaviour—separate from content.</li><li><strong>JavaScript:</strong> The in-browser programming language that adds interactivity, fetches data asynchronously and manipulates the DOM.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: DOM, BOM, AJAX, JSON.",
    "answer": "<ul><li><strong>DOM (Document Object Model):</strong> Tree representation of the loaded HTML that scripts can query and modify.</li><li><strong>BOM (Browser Object Model):</strong> JavaScript-accessible objects that describe the wider browser environment like window, history and navigator.</li><li><strong>AJAX (Asynchronous JavaScript And XML):</strong> Pattern where JavaScript makes background HTTP requests and updates the page without reloads.</li><li><strong>JSON (JavaScript Object Notation):</strong> Lightweight, language-agnostic text format for structured data—arrays and key-value pairs.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: MVC, ORM, CRUD, REST.",
    "answer": "<ul><li><strong>MVC (Model-View-Controller):</strong> Architectural pattern that separates data, presentation and user-request handling.</li><li><strong>ORM (Object-Relational Mapper):</strong> Library that turns database rows into language objects so you can query with code instead of SQL.</li><li><strong>CRUD:</strong> The four basic data operations—Create, Read, Update, Delete.</li><li><strong>REST (Representational State Transfer):</strong> Web-service style that uses stateless HTTP methods (GET, POST, etc.) and resource URLs to expose data.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: SPA, CSR, SSR, CDN.",
    "answer": "<ul><li><strong>SPA (Single-Page Application):</strong> Site that loads one HTML shell then rewrites the page dynamically without full refreshes.</li><li><strong>CSR (Client-Side Rendering):</strong> Approach where JavaScript in the browser builds the UI after the initial load.</li><li><strong>SSR (Server-Side Rendering):</strong> Server produces the full HTML for every route before sending it to the browser.</li><li><strong>CDN (Content Delivery Network):</strong> Globally distributed cache servers that serve static assets from the edge to cut latency.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: SQL, Primary Key, Foreign Key, SQLAlchemy.",
    "answer": "<ul><li><strong>SQL (Structured Query Language):</strong> Declarative language used to create, read, update and delete data in relational databases.</li><li><strong>Primary Key:</strong> Column (or set) whose value uniquely identifies each table row.</li><li><strong>Foreign Key:</strong> Column that holds the primary-key value from another table, linking related records.</li><li><strong>SQLAlchemy:</strong> Python ORM that hides raw SQL behind Python classes and handles migrations via Alembic.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: XSS, CSRF, Hashing, Salting.",
    "answer": "<ul><li><strong>XSS (Cross-Site Scripting):</strong> Attack where injected scripts run in the victim’s browser; stopped by output escaping and CSP.</li><li><strong>CSRF (Cross-Site Request Forgery):</strong> Attack tricking a logged-in user’s browser into issuing unwanted requests; mitigated with CSRF tokens and SameSite cookies.</li><li><strong>Hashing:</strong> One-way transformation that turns any input into a fixed-length fingerprint.</li><li><strong>Salting:</strong> Adding unique random data to each password before hashing to foil pre-computed attacks.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: TDD, CI/CD, Git, Branch.",
    "answer": "<ul><li><strong>TDD (Test-Driven Development):</strong> Practice of writing failing tests first, coding until they pass, then refactoring.</li><li><strong>CI/CD (Continuous Integration/Continuous Delivery):</strong> Automated pipeline that builds, tests and deploys every code change.</li><li><strong>Git:</strong> Distributed version-control system that records snapshots (commits) of your project.</li><li><strong>Branch:</strong> Movable pointer in Git that lets you develop features independently of the main line.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: TLS, WebSocket, BGP, IXP.",
    "answer": "<ul><li><strong>TLS (Transport Layer Security):</strong> Cryptographic protocol that encrypts and authenticates data sent over networks—foundation of HTTPS.</li><li><strong>WebSocket:</strong> Browser API that upgrades an HTTP connection to a persistent, full-duplex channel for real-time messaging.</li><li><strong>BGP (Border Gateway Protocol):</strong> Routing protocol through which Internet providers announce which IP prefixes they can reach.</li><li><strong>IXP (Internet eXchange Point):</strong> Physical facility where multiple networks interconnect and swap traffic directly, cutting transit costs and latency.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: SSL, CSP, JWT, SQLi, WAF.",
    "answer": "<ul><li><strong>SSL (Secure Sockets Layer):</strong> Older name for the encryption protocol now standardised as TLS; it secures data in transit between browser and server.</li><li><strong>CSP (Content Security Policy):</strong> HTTP response header that tells the browser which script, style and image sources are allowed, blocking many XSS attacks.</li><li><strong>JWT (JSON Web Token):</strong> Compact, URL-safe string that carries signed user claims (e.g., id, roles) so servers can verify identity without storing session state.</li><li><strong>SQLi (SQL injection):</strong> Attack that tricks an app into running malicious SQL; prevented by parameterised queries or ORM binding.</li><li><strong>WAF (Web Application Firewall):</strong> Reverse-proxy filter that inspects HTTP traffic and blocks suspicious patterns before they reach the web application.</li></ul>"
  },
  {
    "category": "Definitions",
    "question": "Define: LAN, WAN, MAN, TTL.",
    "answer": "<ul><li><strong>LAN (Local Area Network):</strong> Short-range network—within a room, building or campus—using Ethernet or Wi-Fi.</li><li><strong>WAN (Wide Area Network):</strong> Long-distance network that links multiple LANs over leased lines, fibre or satellite—e.g., the Internet itself.</li><li><strong>MAN (Metropolitan Area Network):</strong> City-scale network interconnecting many LANs across a metropolitan region, often run by ISPs or councils.</li><li><strong>TTL (Time To Live):</strong> Field in IP packets and DNS records that limits how long a packet is forwarded or a record is cached before expiry.</li></ul>"
  },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "What is a computer network?",
                      "answer": "<p><strong>Definition:</strong> A computer network is a collection of autonomous computing devices (nodes) linked by physical or wireless channels (edges) that exchange data according to agreed <em>protocol suites</em> such as TCP/IP. The whole can be modelled as a graph.</p><ul><li><strong>Key goals:</strong> resource sharing (files, printers, CPU cycles), reliability through redundancy and alternate paths, scalability from a LAN in a room to the global Internet, and transparency so heterogeneous devices behave as one system.</li><li><strong>Layers:</strong> Physical (copper/fibre/Wi‑Fi), Link (Ethernet/Wi‑Fi), Network (IP), Transport (TCP/UDP), Application (HTTP/SMTP/SSH).</li><li><strong>Topologies:</strong> bus, star, ring, mesh; modern Internet is a loose hierarchical mesh.</li><li><strong>Examples:</strong> LAN, MAN, WAN, personal hotspot, the public Internet.</li></ul>"
                    },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "Describe the current structure of the internet.",
                      "answer": "<p>The Internet is a <em>network of networks</em> formed by autonomous systems (AS) that interconnect via high‑speed backbones while running a common protocol suite.</p><ul><li><strong>Global backbone:</strong> Tier‑1 carriers provide long‑haul fibre rings and under‑sea cables joined by peering agreements.</li><li><strong>Regional & access networks:</strong> Tier‑2/3 ISPs, enterprise, campus and mobile networks aggregate end users, translating local technologies (DSL, 5G) into IP packets.</li><li><strong>BGP routing:</strong> Border Gateway Protocol advertises prefixes so any host can reach any other; policy not shortest path often dominates.</li><li><strong>Edge:</strong> Content Delivery Networks (CDNs) and Internet eXchange Points (IXPs) bring popular content closer, lowering latency.</li><li><strong>Scale & resilience:</strong> Tens of billions of heterogeneous devices; packet switching plus multiple paths tolerate link or router failures.</li></ul>"
                    },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "What is a protocol?",
                      "answer": "<p>A <strong>protocol</strong> is a precisely defined set of rules governing the syntax, semantics, ordering and timing of messages exchanged between peer entities.</p><ul><li><strong>Interoperability:</strong> allows hardware and software from different vendors to communicate.</li><li><strong>Layer examples:</strong> IP (addressing & best‑effort delivery), TCP (reliable byte stream), TLS (secure channel), HTTP (web documents), SMTP (email).</li><li><strong>Encapsulation:</strong> each layer adds its own header then hands the packet down; the reverse occurs on receipt.</li><li><strong>Extensibility:</strong> options and version numbers let protocols evolve without breaking legacy devices.</li></ul>"
                    },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "What is the purpose of TCP/IP?",
                      "answer": "<p><strong>TCP/IP</strong> is the de‑facto internetworking suite that glues the Internet together.</p><ul><li><code>IP</code>: assigns globally unique addresses, performs best‑effort datagram forwarding and fragmentation.</li><li><code>TCP</code>: adds reliability, ordered delivery and congestion control via sequence numbers, ACKs and exponential back‑off.</li><li><code>UDP</code>: lightweight, connectionless alternative for latency‑sensitive traffic (VoIP, DNS).</li><li><strong>End‑to‑end principle:</strong> intelligence resides in the hosts; routers just forward packets, enabling scalability.</li></ul>"
                    },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "Explain the client/server architecture.",
                      "answer": "<p>The <strong>client–server model</strong> divides labour so that a resource provider (server) waits for requests while consumers (clients) initiate connections.</p><ul><li><strong>Server:</strong> long‑running process bound to a well‑known address/port, listens, authenticates, authorises and processes data.</li><li><strong>Client:</strong> transient process or browser tab that opens a socket, sends a request, processes the response and then usually terminates.</li><li><strong>Concurrency:</strong> servers multiplex many clients via threads, async I/O or event loops.</li><li><strong>Scaling:</strong> load balancers, horizontal replication and stateless design overcome single‑node limits.</li></ul>"
                    },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "What is the World Wide Web?",
                      "answer": "<p>The <strong>World Wide Web (WWW)</strong> is an application‑level service built on the Internet that links hypertext documents and web apps addressable by URLs and transferred via HTTP/HTTPS.</p><ul><li>Conceived by Tim Berners‑Lee at CERN in 1989 to share scientific information.</li><li>Uses a <em>REST‑like</em> request–response protocol; browsers render HTML, CSS and execute JavaScript to create interactive experiences.</li><li>Decentralised and open standards encourage innovation (progressive web apps, WebRTC, WebSockets).</li></ul>"
                    },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "What is the purpose of DNS?",
                      "answer": "<p>The <strong>Domain Name System (DNS)</strong> translates human‑memorable names (e.g., example.com) into IP addresses.</p><ul><li><strong>Hierarchy:</strong> root servers delegate to TLD (.com, .edu) which delegate to authoritative servers.</li><li><strong>Caching & TTL:</strong> recursive resolvers cache responses to reduce latency and load.</li><li><strong>Resilience:</strong> anycast root servers and DNSSEC protect availability and authenticity.</li></ul>"
                    },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "Break down the structure of a URL.",
                      "answer": "<p>A <strong>Uniform Resource Locator (URL)</strong> uniquely identifies a web resource.</p><ol><li><code>scheme://</code> – protocol (<code>http</code>, <code>https</code>, <code>ws</code>).</li><li><code>user:pass@</code> – optional credentials.</li><li><code>host</code> – domain or IP resolved via DNS.</li><li><code>:port</code> – optional explicit port (defaults 80/443).</li><li><code>/path</code> – hierarchical location.</li><li><code>?query=string</code> – key‑value parameters (<code>GET</code> data).</li><li><code>#fragment</code> – client‑side anchor, not sent to server.</li></ol><p>UTF‑8 chars are percent‑encoded to remain ASCII‑safe.</p>"
                    },
                    {
                      "category": "Lecture 1 (Networks & WWW)",
                      "question": "How does client–server architecture operate in the World Wide Web?",
                      "answer": "<p>A browser (<em>client</em>) opens a TCP connection to port 80/443 on the target server, sends an HTTP request, receives a response, closes or reuses the socket (HTTP/1.1 keep‑alive or HTTP/2 multiplexing).</p><ul><li>The server may generate HTML from templates, perform business logic, consult a database and return headers + body.</li><li>The browser streams HTML, parses it into the DOM, then fetches linked resources (CSS, JS, images) in parallel.</li><li>Subsequent interactions can reuse the same TCP/TLS session for efficiency.</li></ul>"
                    },
                  
                    /* ---------------- HTML ---------------- */
                    {
                      "category": "Lecture 2 (HTML)",
                      "question": "What is the purpose of HTML?",
                      "answer": "<p><strong>HTML</strong> supplies <em>semantics</em> that describe <em>what</em> each piece of content represents so that browsers, search engines and assistive technologies can present it appropriately.</p><ul><li><strong>Structure:</strong> headings organise content outline; lists convey grouping; forms gather input.</li><li><strong>Accessibility:</strong> semantic tags (<code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>) create landmarks for screen readers.</li><li><strong>Separation of concerns:</strong> presentational details are delegated to CSS; behaviour to JavaScript.</li></ul>"
                    },
                    {
                      "category": "Lecture 2 (HTML)",
                      "question": "Summarise the HTML5 philosophy.",
                      "answer": "<p>HTML5 evolved with five practical principles:</p><ol><li><strong>Pave the cowpaths:</strong> standardise real‑world patterns already used on the web.</li><li><strong>Graceful error recovery:</strong> browsers must parse forgivingly so minor typos don\u2019t break pages.</li><li><strong>Backward compatibility:</strong> never deprecate widely used features without a replacement.</li><li><strong>Priority of constituencies:</strong> end users > authors > implementers > spec writers.</li><li><strong>Rich semantics:</strong> introduce <code>article</code>, <code>section</code>, <code>video</code>, <code>canvas</code>, etc., to reduce <code>&lt;div class=\"header\"&gt;</code> soup.</li></ol>"
                    },
                    {
                      "category": "Lecture 2 (HTML)",
                      "question": "How is HTML mapped to the structure of a page?",
                      "answer": "<p>The browser converts raw HTML into the <strong>DOM tree</strong>.</p><ul><li>Each element becomes a node with pointers to parent/child/siblings.</li><li><strong>Default styles:</strong> the user agent stylesheet applies basics (e.g., <code>h1</code> font‑size).</li><li><strong>Box generation:</strong> the CSS layout engine turns DOM elements into CSS boxes.</li></ul>"
                    },
                    {
                      "category": "Lecture 2 (HTML)",
                      "question": "Describe the purpose of common HTML elements and attributes.",
                      "answer": "<p><strong>Elements</strong> encode meaning not appearance.</p><ul><li>Content: <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;blockquote&gt;</code>.</li><li>Inline: <code>&lt;strong&gt;</code> (importance), <code>&lt;em&gt;</code> (emphasis), <code>&lt;code&gt;</code>.</li><li>Interactive: <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>.</li></ul><p><strong>Attributes:</strong> <code>src</code>, <code>alt</code>, <code>aria‑*</code> for accessibility, <code>data‑*</code> for custom hooks.</p>"
                    },
                    {
                      "category": "Lecture 2 (HTML)",
                      "question": "Explain input types and what happens when you submit a form.",
                      "answer": "<p>HTML5 introduces specialised <code>type</code>s that give browsers built‑in UI and validation (e.g., <code>email</code>, <code>url</code>, <code>range</code>, <code>color</code>).</p><p><strong>Submission flow:</strong> controls serialise into <code>name=value</code> pairs according to <code>enctype</code> (URL‑encoded, multipart, JSON) and are sent via the chosen HTTP method to <code>action</code>. A redirect or rendered template then displays the outcome.</p>"
                    },
                    {
                      "category": "Lecture 2 (HTML)",
                      "question": "Compare client-side and server-side validation.",
                      "answer": "<p><strong>Client‑side:</strong> improve UX by catching typos instantly; implemented with HTML5 constraints (<code>required</code>) or JavaScript listeners.</p><p><strong>Server‑side:</strong> canonical trust boundary that re‑validates every field and sanitises dangerous content to block injection and XSS attacks.</p>"
                    },
                  
                    /* ---------------- CSS ---------------- */
                    {
                      "category": "Lecture 3 (CSS)",
                      "question": "What is the purpose of CSS?",
                      "answer": "<p><strong>CSS</strong> turns semantic HTML into an attractive, responsive and accessible presentation by controlling layout, typography and animation.</p><ul><li>Enables <em>device adaptation</em>: print, dark/light theme, high‑contrast.</li><li>Promotes consistency via variables (custom properties) and reusable classes.</li></ul>"
                    },
                    {
                      "category": "Lecture 3 (CSS)",
                      "question": "List the advantages of separating CSS from HTML.",
                      "answer": "<ul><li><strong>Maintainability:</strong> style changes propagate globally.</li><li><strong>Performance:</strong> once cached, stylesheets avoid retransmission.</li><li><strong>Accessibility:</strong> semantic markup remains intact for screen readers.</li><li><strong>Re‑skinning:</strong> multiple style themes swap without touching HTML.</li></ul>"
                    },
                    {
                      "category": "Lecture 3 (CSS)",
                      "question": "Name the different ways of specifying styles.",
                      "answer": "<p>Inline, internal and external, augmented by imported modules (<code>@import</code>) and dynamic <code>&lt;style&gt;</code> injection by JavaScript.</p>"
                    },
                    {
                      "category": "Lecture 3 (CSS)",
                      "question": "Explain the purpose of different selectors and common style properties.",
                      "answer": "<p>Selectors act as queries on the DOM; properties declare <em>how</em> to draw each box.</p><ul><li><strong>Combinators:</strong> descendant, child, sibling let rules scale hierarchically.</li><li><strong>Properties:</strong> layout (<code>display:flex</code>), typography (<code>font‑family</code>), colour (<code>--brand‑blue</code> custom variable).</li></ul>"
                    },
                    {
                      "category": "Lecture 3 (CSS)",
                      "question": "How are conflicts resolved and precedence determined in CSS?",
                      "answer": "<p>The cascade considers <strong>origin</strong>, <strong>importance</strong>, <strong>specificity</strong> and <strong>source order</strong>. Inline styles beat linked stylesheets unless the latter use <code>!important</code>.</p>"
                    },
                    {
                      "category": "Lecture 3 (CSS)",
                      "question": "Describe the CSS box model.",
                      "answer": "<p>Every DOM element generates one or more rectangular boxes with content, padding, border and margin. The <code>box‑sizing</code> property controls whether width/height include padding and border.</p>"
                    },
                    {
                      "category": "Lecture 3 (CSS)",
                      "question": "Outline the document flow model in CSS.",
                      "answer": "<p><strong>Normal flow</strong> (block & inline), <strong>floats</strong>, <strong>flexbox</strong>, <strong>grid</strong> and <strong>position</strong> contexts determine where each box sits. Modern layouts favour flexbox for 1‑D alignment and grid for 2‑D.</p>"
                    },
                    {
                      "category": "Lecture 3 (CSS)",
                      "question": "What common syntax mistakes break CSS and how can you spot them quickly?",
                      "answer": "<ul><li>Missing semicolon before next declaration.</li><li>Mismatched braces or parentheses.</li><li>Unterminated quotes or URLs.</li><li>Typos in property or value names (<code>bakground</code>).</li><li>Omitted units for non‑zero values.</li></ul><p>DevTools highlights invalid rules in red.</p>"
                    },
                  
                    /* ---------------- CSS Frameworks ---------------- */
                    {
                      "category": "Lecture 4 (CSS Frameworks)",
                      "question": "What is the purpose of CSS frameworks?",
                      "answer": "<p>Frameworks (Bootstrap, Tailwind, Bulma) supply pre‑tested grids, utilities and components.</p><ul><li>Accelerate prototyping.</li><li>Offer accessibility defaults (colour contrast, ARIA roles).</li><li>Abstract browser inconsistencies.</li></ul>"
                    },
                    {
                      "category": "Lecture 4 (CSS Frameworks)",
                      "question": "What is meant by a  responsive design ?",
                      "answer": "<p>Responsive design ensures a single code‑base adapts to any viewport.</p><ul><li><strong>Fluid layout:</strong> use percentages/flex rather than fixed pixels.</li><li><strong>Media queries:</strong> apply breakpoints for typography and grid re‑flow.</li><li><strong>Accessible touch targets:</strong> enlarge buttons on mobile.</li></ul>"
                    },
                  
                    /* ---------------- JavaScript Core ---------------- */
                    {
                      "category": "Lecture 5 (Core JavaScript)",
                      "question": "State the main purpose of JavaScript on the web.",
                      "answer": "<p>JavaScript enables <em>client‑side execution</em> to create dynamic, interactive and stateful experiences without full page reloads.</p><ul><li>Form validation, DOM manipulation, animations.</li><li>AJAX/fetch for asynchronous data.</li><li>Offline caching via Service Workers.</li></ul>"
                    },
                    {
                      "category": "Lecture 5 (Core JavaScript)",
                      "question": "How can JavaScript be included and executed in the browser?",
                      "answer": "<ul><li>Inline event handlers (discouraged for maintainability).</li><li><code>&lt;script&gt;</code> blocks in <code>&lt;head&gt;</code> (use <code>defer</code>) or before <code>&lt;/body&gt;</code>.</li><li>External modules fetched and cached.</li><li>Dynamic <code>import()</code> for code‑splitting.</li><li>DevTools console for ad‑hoc testing.</li></ul>"
                    },
                    {
                      "category": "Lecture 5 (Core JavaScript)",
                      "question": "Summarise the core language features every web developer should know.",
                      "answer": "<p>Key constructs include:</p><ul><li><strong>Execution model:</strong> single thread + event loop + micro/macro tasks.</li><li><strong>Modules:</strong> ES modules (<code>export</code>/<code>import</code>) solve global namespace pollution.</li><li><strong>Promises/async‑await:</strong> syntactic sugar over asynchronous callbacks.</li><li><strong>Prototypes & classes:</strong> ES6 <code>class</code> syntax atop the prototype chain.</li></ul>"
                    },
                    {
                      "category": "Lecture 5 (Core JavaScript)",
                      "question": "How do you link an external JavaScript file to an HTML page?",
                      "answer": "<pre><code>&lt;!-- Load non‑blocking script after parsing --&gt;\n&lt;script src=\"app.js\" defer&gt;&lt;/script&gt;</code></pre><p><code>defer</code> preserves execution order and runs after the DOMContentLoaded event.</p>"
                    },
                    {
                      "category": "Lecture 5 (Core JavaScript)",
                      "question": "Show a basic client-side example that hides an element when a button is clicked.",
                      "answer": "<pre><code>&lt;button id=\"toggle\"&gt;Hide text&lt;/button&gt;\n&lt;p id=\"msg\"&gt;Secret message&lt;/p&gt;\n&lt;script&gt;\nconst btn = document.getElementById(\"toggle\");\nconst msg = document.getElementById(\"msg\");\nbtn.addEventListener(\"click\", () => msg.classList.toggle(\"hidden\"));\n&lt;/script&gt;</code></pre><p>CSS: <code>.hidden{display:none;}</code>.</p>"
                    },
                    {
                      "category": "Lecture 5 (Core JavaScript)",
                      "question": "Demonstrate fetching JSON data with <code>fetch</code> and <code>async/await</code>.",
                      "answer": "<pre><code>async function getUsers(){\n  try{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    if(!res.ok) throw new Error(res.status);\n    const data = await res.json();\n    console.table(data);\n  }catch(err){\n    console.error(\"Fetch failed\", err);\n  }\n}\ngetUsers();</code></pre>"
                    },
                    {
                      "category": "Lecture 5 (Core JavaScript)",
                      "question": "Write a minimal Node.js HTTP server that returns JSON.",
                      "answer": "<pre><code>const http = require(\"http\");\nhttp.createServer((req, res)=>{\n  res.writeHead(200, {\"Content-Type\": \"application/json\"});\n  res.end(JSON.stringify({status:\"OK\"}));\n}).listen(3000, ()=>console.log(\"Listening\"));</code></pre>"
                    },
                    {
                      "category": "Lecture 5 (Core JavaScript)",
                      "question": "Create an Express.js endpoint <code>/hello</code> that replies with “Hello, world!” and explain how to run it.",
                      "answer": "<pre><code>import express from \"express\";\nconst app = express();\napp.get(\"/hello\", (req,res)=>res.send(\"Hello, world!\"));\napp.listen(3000);</code></pre><p>Run with <code>node index.mjs</code> after <code>npm i express</code>.</p>"
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
          },
                  
                    /* ---------------- Agile & Git ---------------- */
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "What are the key differences between Agile and Waterfall development methodologies?",
                      "answer": "<p><strong>Waterfall:</strong> sequential, document‑heavy, change‑averse.</p><p><strong>Agile:</strong> iterative, feedback‑driven, embraces change even late in development.</p><p>Both aim to deliver value but optimise for different risk profiles.</p>"
                    },
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "Describe the core Agile development cycle.",
                      "answer": "<ol><li>Plan iteration (sprint planning).</li><li>Develop feature slices with TDD.</li><li>Continuous Integration runs tests.</li><li>Sprint review & demo.</li><li>Retrospective to improve process.</li></ol>"
                    },
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "How are user stories used for planning and time estimation in Agile projects?",
                      "answer": "<p>User stories drive backlog grooming, capacity planning and velocity tracking. Relative estimation (story points) captures complexity rather than absolute hours.</p>"
                    },
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "What is the purpose of test-driven development (TDD)?",
                      "answer": "<p>TDD ensures requirements are codified as executable tests <em>before</em> implementation, guiding design and enabling fearless refactoring.</p>"
                    },
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "Why is version control software essential in software development?",
                      "answer": "<p>Version control provides change history, collaboration, branching experimentation and auditability, forming the backbone of modern DevOps workflows.</p>"
                    },
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "Outline how a Git project operates, including repositories, commits, branches, tags and remote repositories.",
                      "answer": "<p>Local repo = working tree + <code>.git</code> object database; commits form a DAG; branches are movable refs; tags are immutable refs; remotes mirror the DAG for team synchronisation.</p>"
                    },
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "What causes merge conflicts in Git and how are they resolved?",
                      "answer": "<p>Conflicts occur when history diverges and changes overlap. Manual resolution or strategic merges/rebases restore a linear history.</p>"
                    },
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "State the main purposes of GitHub.",
                      "answer": "<p>Git hosting, issue tracking, pull‑request code reviews, automated CI/CD via GitHub Actions and social discovery.</p>"
                    },
                    {
                      "category": "Lecture 7 (Agile & Git)",
                      "question": "How do Issues and Pull Requests facilitate Agile interaction with a Git project on GitHub?",
                      "answer": "<p>Issues capture work items; PRs provide a discussion thread around code diffs, link to CI checks and enforce peer review before merge.</p>"
                    },
                  
                    /* ---------------- HTTP & AJAX ---------------- */
                    {
                      "category": "Lecture 8 (HTTP & AJAX)",
                      "question": "Summarise the high-level structure of an HTTP request and response.",
                      "answer": "<p>Request = method line + headers + optional body. Response = status line + headers + body. Both end headers with CRLF CRLF.</p>"
                    },
                    {
                      "category": "Lecture 8 (HTTP & AJAX)",
                      "question": "How do HTTP requests enable communication between the browser and a server?",
                      "answer": "<p>Stateless request–response over TCP; cookies, JWTs or tokens carry identity across multiple requests.</p>"
                    },
                    {
                      "category": "Lecture 8 (HTTP & AJAX)",
                      "question": "Explain the purpose of common HTTP request methods.",
                      "answer": "<ul><li><strong>GET</strong> – read idempotently.</li><li><strong>POST</strong> – create subordinate resource.</li><li><strong>PUT</strong> – replace/insert.</li><li><strong>PATCH</strong> – partial update.</li><li><strong>DELETE</strong> – remove.</li></ul>"
                    },
                    {
                      "category": "Lecture 8 (HTTP & AJAX)",
                      "question": "Why are asynchronous communication and callbacks important in JavaScript?",
                      "answer": "<p>They prevent blocking the single UI thread, keeping pages responsive while awaiting I/O.</p>"
                    },
                    {
                      "category": "Lecture 8 (HTTP & AJAX)",
                      "question": "Define an AJAX request and outline its structure.",
                      "answer": "<p>AJAX = background HTTP using <code>XMLHttpRequest</code> or <code>fetch</code>; response parsed then DOM updated without reload.</p>"
                    },
                    {
                      "category": "Lecture 8 (HTTP & AJAX)",
                      "question": "What is JSON and why is it widely used for web communication?",
                      "answer": "<p>JSON is a language‑agnostic, lightweight data interchange format that maps naturally to JavaScript objects, reducing parsing overhead.</p>"
                    },
                  
                    /* ---------------- Flask & Jinja (NEW) ---------------- */
                    {
                      "category": "Lecture 9 (Flask & Jinja)",
                      "question": "What is Flask and why is it called a micro‑framework?",
                      "answer": "<p><strong>Flask</strong> is a lightweight Python web framework that provides routing, request/response objects and Jinja templating while leaving ORM, authentication and other concerns to extensions. This minimal core earns the \"micro\" label.</p>"
                    },
                    {
                      "category": "Lecture 9 (Flask & Jinja)",
                      "question": "Demonstrate how to define a simple route in Flask.",
                      "answer": "<pre><code>from flask import Flask, render_template\napp = Flask(__name__)\n@app.route(\"/\")\ndef index():\n    return render_template(\"index.html\")</code></pre><p><code>@app.route</code> binds the URL path \"/\" to the <code>index</code> view function.</p>"
                    },
                    {
                      "category": "Lecture 9 (Flask & Jinja)",
                      "question": "Explain how Jinja templates work and why they are safer than string concatenation.",
                      "answer": "<p>Jinja compiles templates into Python code that renders HTML with automatic escaping (<code>{{ user.name }}</code>) which prevents XSS. Control structures (<code>{% for post in posts %}</code>) separate presentation from logic.</p>"
                    },
                    {
                      "category": "Lecture 9 (Flask & Jinja)",
                      "question": "Compare server‑side rendering with returning JSON for client‑side rendering in Flask.",
                      "answer": "<p>Server‑side rendering returns fully composed HTML (<code>render_template</code>) for each request (SEO friendly). Returning JSON (<code>return jsonify(data)</code>) delegates layout to JavaScript, enabling SPAs but requires more client code.</p>"
                    },
                  
                    /* ---------------- Client‑Side Rendering & WebSockets ---------------- */
                    {
                      "category": "Lecture 10 (Client-Side Rendering & WebSockets)",
                      "question": "What is client-side rendering and how does it work at a high-level?",
                      "answer": "<p>CSR ships a minimal HTML shell plus JavaScript bundle; JS fetches data (often via REST) and builds DOM components on the fly, updating diff patches for interactivity.</p>"
                    },
                    {
                      "category": "Lecture 10 (Client-Side Rendering & WebSockets)",
                      "question": "Compare client-side rendering with server-side rendering.",
                      "answer": "<p>SSR = faster first paint, better crawlability; CSR = richer interactivity, less server CPU. Many sites adopt <em>hybrid</em> or <em>isomorphic</em> rendering (Next.js) to get both benefits.</p>"
                    },
                    {
                      "category": "Lecture 10 (Client-Side Rendering & WebSockets)",
                      "question": "What is a Single Page Application (SPA)?",
                      "answer": "<p>An SPA handles navigation inside the browser using the History API and dynamic component mounts; full reload never occurs after first visit.</p>"
                    },
                    {
                      "category": "Lecture 10 (Client-Side Rendering & WebSockets)",
                      "question": "What is the purpose of Web Sockets?",
                      "answer": "<p>WebSockets establish a bidirectional pipeline ideal for push notifications, collaborative editing and low‑latency games.</p>"
                    },
                    {
                      "category": "Lecture 10 (Client-Side Rendering & WebSockets)",
                      "question": "List common use cases for Web Sockets.",
                      "answer": "<ul><li>Chat/messaging</li><li>Live dashboards</li><li>Multiplayer games</li><li>IoT telemetry</li></ul>"
                    },
                  
                    /* ---------------- MVC & Databases ---------------- */
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "What is the MVC architecture and how does it map to web development?",
                      "answer": "<p>Controller receives request, manipulates model, selects/returns view; decouples data layer from presentation, aiding testability.</p>"
                    },
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "State the purpose, pros and cons of an ORM.",
                      "answer": "<p>ORM abstracts SQL, speeds development and guards against injection but can hide inefficient queries; use <code>.explain()</code> to profile.</p>"
                    },
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "Recall the very basics of relational databases needed here.",
                      "answer": "<ul><li>Tables, rows, columns</li><li>Primary/foreign keys, one‑to‑many joins</li><li>ACID properties: atomicity, consistency, isolation, durability</li></ul>"
                    },
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "At a high level, how can SQLAlchemy perform database operations via Python?",
                      "answer": "<p>Session tracks object state; <code>.add()</code>, <code>.commit()</code>, query builder generates <code>SELECT</code>, <code>JOIN</code>, <code>ORDER BY</code> SQL behind the scenes.</p>"
                    },
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "Explain the meaning of basic SQLAlchemy syntax for defining models.",
                      "answer": "<pre><code>class User(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    username = db.Column(db.String(64), unique=True, nullable=False)</code></pre><p>Creates <code>user</code> table with a surrogate key and unique index on <code>username</code>.</p>"
                    },
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "What is the purpose of SQLAlchemy relationships?",
                      "answer": "<p><code>db.relationship</code> adds convenient attribute access and automatically manages foreign‑key updates and cascading deletes.</p>"
                    },
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "Why are database migrations needed and how do they work at a high level?",
                      "answer": "<p>Schema evolves; migration scripts capture incremental changes so production data isn\u2019t lost. Alembic version table stores current head revision.</p>"
                    },
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "What are best practices for storing images in a web application?",
                      "answer": "<p>Save path/URL in DB, store binary on object storage/CDN, generate responsive thumbnails, set correct cache headers.</p>"
                    },
                    {
                      "category": "Lecture 11 (MVC & Databases)",
                      "question": "Give key considerations when building a real-life webserver.",
                      "answer": "<ul><li>Indices & query optimisation</li><li>Caching hot responses</li><li>Rate limiting & WAF</li><li>Observability: logs, metrics, tracing</li><li>Graceful restarts & zero downtime deploys</li></ul>"
                    },
                  
                    /* ---------------- Security Fundamentals ---------------- */
                    {
                      "category": "Lecture 12 (Security Fundamentals)",
                      "question": "What is public-key encryption?",
                      "answer": "<p>Asymmetric crypto uses mathematically linked key pairs; enables TLS handshakes (RSA/ECDHE) and digital signatures (ECDSA).</p>"
                    },
                    {
                      "category": "Lecture 12 (Security Fundamentals)",
                      "question": "Define hashing and its essential properties.",
                      "answer": "<p>Hash digest uniquely fingerprints data; cryptographic hashes (SHA‑256, BLAKE3) resist pre‑image, second pre‑image and collisions.</p>"
                    },
                    {
                      "category": "Lecture 12 (Security Fundamentals)",
                      "question": "How does session-based authentication work in web applications?",
                      "answer": "<p>Server generates random session ID, stores user context server‑side, sets <code>Set-Cookie</code> with <code>HttpOnly; Secure; SameSite=Lax</code>.</p>"
                    },
                    {
                      "category": "Lecture 12 (Security Fundamentals)",
                      "question": "Why should password hashes be salted?",
                      "answer": "<p>Salt + adaptive hash (bcrypt, Argon2) thwarts precomputed rainbow tables and GPU dictionary attacks.</p>"
                    },
                    {
                      "category": "Lecture 12 (Security Fundamentals)",
                      "question": "What are secret keys and how should they be stored?",
                      "answer": "<p>Secrets (<code>FLASK_SECRET_KEY</code>, DB creds, JWT signing keys) belong in environment variables, vaults or Kubernetes Secrets; never hard‑coded.</p>"
                    },
                    {
                      "category": "Lecture 12 (Security Fundamentals)",
                      "question": "List common web attacks covered and one defence for each.",
                      "answer": "<ul><li>SQLi → parameterised queries</li><li>XSS → auto‑escape + CSP</li><li>CSRF → same‑site cookies + tokens</li><li>Session fixation → regenerate ID after login</li></ul>"
                    },
                  
                    /* ---------------- Testing ---------------- */
                    {
                      "category": "Lecture 13 (Testing)",
                      "question": "Identify the four main types of software tests and their purposes.",
                      "answer": "<ul><li>Unit</li><li>Integration</li><li>System</li><li>Acceptance (user)</li></ul>"
                    },
                    {
                      "category": "Lecture 13 (Testing)",
                      "question": "List desirable properties of unit tests.",
                      "answer": "<ul><li>Fast</li><li>Deterministic</li><li>Isolated</li><li>Readable</li></ul>"
                    },
                    {
                      "category": "Lecture 13 (Testing)",
                      "question": "Differentiate between fakes, stubs and mocks.",
                      "answer": "<ul><li>Fake = working but simplified</li><li>Stub = canned responses</li><li>Mock = stub + interaction verification</li></ul>"
                    },
                    {
                      "category": "Lecture 13 (Testing)",
                      "question": "Outline the high-level structure of a <code>unittest</code> unit test in Python.",
                      "answer": "<pre><code>class MyTest(unittest.TestCase):\n    def setUp(self): ...\n    def test_behaviour(self):\n        self.assertEqual(foo(), 42)\n    def tearDown(self): ...</code></pre>"
                    },
                    {
                      "category": "Lecture 13 (Testing)",
                      "question": "Explain the roles of Selenium IDE and Selenium WebDriver.",
                      "answer": "<p>IDE records click paths; WebDriver drives real browsers via language bindings (Python, JS) for repeatable E2E tests.</p>"
                    },
                  
                    /* ---------------- REST APIs ---------------- */
                    {
                      "category": "Lecture 14 (REST APIs)",
                      "question": "What is the purpose of an API in web-service design?",
                      "answer": "<p>APIs expose business capabilities over HTTP so external clients can integrate without coupling to internal code.</p>"
                    },
                    {
                      "category": "Lecture 14 (REST APIs)",
                      "question": "List key principles of RESTful APIs.",
                      "answer": "<ul><li>Uniform interface</li><li>Statelessness</li><li>Cacheable</li><li>Layered system</li></ul>"
                    },
                    {
                      "category": "Lecture 14 (REST APIs)",
                      "question": "Give three standard conventions for designing a REST API.",
                      "answer": "<ul><li>Plural nouns</li><li>Nested sub‑resources</li><li>Versioning via URL or headers</li></ul>"
                    },
                    {
                      "category": "Lecture 14 (REST APIs)",
                      "question": "Highlight two differences between building a REST API and a traditional webserver.",
                      "answer": "<p>REST returns JSON, is stateless; traditional server renders HTML and often uses sessions.</p>"
                    },
                  
                    /* ---------------- Deployment ---------------- */
                    {
                      "category": "Lecture 15 (Deployment)",
                      "question": "Compare common web hosting options with one pro and con for each.",
                      "answer": "<ul><li>Shared – cheap / limited control</li><li>VPS – root / manual ops</li><li>PaaS – auto deploy / lock‑in</li><li>Containers – scalable / complexity</li></ul>"
                    },
                    {
                      "category": "Lecture 15 (Deployment)",
                      "question": "List the basic steps for configuring a production server.",
                      "answer": "<ol><li>DNS & SSL</li><li>Non‑root user + firewall</li><li>Systemd service + log rotation</li><li>Automated backups & monitoring</li></ol>"
                    },
                    {
                      "category": "Lecture 15 (Deployment)",
                      "question": "Describe the high-level architecture of a large-scale production stack and each component\u2019s role.",
                      "answer": "<ul><li>CDN -> reverse proxy (NGINX)</li><li>App servers (Gunicorn)</li><li>Relational DB cluster</li><li>Cache (Redis)</li><li>Message broker (RabbitMQ) for async jobs</li></ul>"
                    }
                  

]

