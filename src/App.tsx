/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Jake Grella</h1>
      </header>
      <main className="content">
        <section className="gray">
          <p>
            //{" "}
            <a
              href="https://twitter.com/jakegrella"
              target="_blank"
              rel="noreferrer"
            >
              @jakegrella
            </a>
            ,{" "}
            <a
              href="mailto:jake@jakegrella.com"
              target="_blank"
              rel="noreferrer"
            >
              jake@jakegrella.com
            </a>
          </p>
          <p>
            //{" "}
            <a
              href="https://github.com/jakegrella"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://linkedin.com/in/jakegrella"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </section>
        <section>
          <h2>About</h2>
          <p>
            I'm a full stack web engineer with a desire to make a difference
            through my work. I care deeply about how humans interact with
            products and I take pride in my PRs.
          </p>
        </section>
        <section>
          <h2>Experience</h2>
          <ul>
            <li>
              <p>Associate Software Engineer</p>
              <p>@ Northwestern Mutual (July 2021 - Today)</p>
              <p className="gray">
                Modernizing internal applications utilizing a microservice
                architecture
              </p>
            </li>
            <li>
              <p>Software Developer</p>
              <p>@ Contract (April 2021 - July 2021)</p>
              <p className="gray">
                Built frontend components used to onboard patients at clinics
                and practitioner offices
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <p>
                Iso <span className="gray">// </span>
                <a
                  href="https://github.com/headed-westtt/iso"
                  target="_blank"
                  rel="noreferrer"
                >
                  frontend code
                </a>
                <span className="gray">, </span>
                <a
                  href="https://github.com/headed-westtt/iso-service"
                  target="_blank"
                  rel="noreferrer"
                >
                  backend code
                </a>
              </p>
              <p className="gray">
                Photography niche photo sharing app where the photos take
                priority (WIP)
              </p>
            </li>
            <li>
              <p>
                headed westtt <span className="gray">// </span>
                <a
                  href="https://headedwesttt.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  live
                </a>
                <span className="gray">, </span>
                <a
                  href="https://github.com/headed-westtt/marketing-site"
                  target="_blank"
                  rel="noreferrer"
                >
                  code
                </a>
              </p>
              <p className="gray">A real estate technology landing site</p>
            </li>
            <li>
              <p>
                whalewatching.xyz <span className="gray">// </span>
                <a
                  href="https://whalewatching.xyz"
                  target="_blank"
                  rel="noreferrer"
                >
                  live
                </a>
                <span className="gray">, </span>
                <a
                  href="https://github.com/jakegrella/whalewatching.xyz"
                  target="_blank"
                  rel="noreferrer"
                >
                  code
                </a>
              </p>
              <p className="gray">
                View the largest cryptocurrency transactions from a number of
                different blockchains
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <p>React, JavaScript. SCSS, HTML</p>
          <p>Node.js, TypeScript, REST, GraphQL, Prisma</p>
          <p>Swift, SwiftUI, React Native</p>
          <p>Product Design, Branding, UI/UX</p>
        </section>
      </main>
    </div>
  );
}

export default App;
