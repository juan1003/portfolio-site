    import { motion, useReducedMotion } from 'framer-motion';
    import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
    import ProjectSlot from './components/ProjectSlot';

    function App() {
      const reduceMotion = useReducedMotion();
      const projects = [
        {
          title: 'Moonlight AI',
          category: 'AI / Recommendation engine',
          description:
            "A role recommendation engine based on the projects in a user's GitHub.",
          isDone: false, 
        },
        {
          title: 'Tech Trends',
          category: 'Data / Market intelligence',
          description:
            'A dashboard that helps aspiring builders study the tech industry and market so they can build smarter instead of relying on trial and error.',
          isDone: false, 
        },
        {
          title: 'Lunatek LLC',
          category: 'Infrastructure / Company',
          description:
            'Company website. Link to that is https://lunatekllc.dev, there you can contact me for business inquiries.',
          isDone: true, 
        },
      ];

      return (
        <div className="site-shell">
          <div className="noise" aria-hidden="true" />

          <header className="site-header">
            <a className="wordmark" href="#top" aria-label="Juan, back to top">
              J<span>/</span>DEV
            </a>
            <nav aria-label="Primary navigation">
              <a href="#index">Index</a>
              <a href="#about">Protocol</a>
            </nav>
            <div className="availability">
              <span aria-hidden="true" />
              Online &amp; building
            </div>
          </header>

          <main>
            <section className="hero" id="top">
              <motion.div
                className="hero__intro"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="eyebrow">
                  <span>01</span>
                  Juan / independent builder
                </p>
                <h1>
                  Born to
                  <br />
                  Build.
                  <br />
                  <em>Since 2016.</em>
                </h1>
              </motion.div>

              <motion.aside
                className="terminal-card"
                aria-label="Current builder status"
                initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
              >
                <div className="terminal-card__bar">
                  <span>juan@internet:~</span>
                  <span>LIVE</span>
                </div>
                <dl>
                  <div>
                    <dt>current_process</dt>
                    <dd>figuring_it_out</dd>
                  </div>
                  <div>
                    <dt>ideas_open</dt>
                    <dd>too_many</dd>
                  </div>
                  <div>
                    <dt>projects_public</dt>
                    <dd>2_in_build</dd>
                  </div>
                  <div>
                    <dt>status</dt>
                    <dd className="terminal-card__active">building<span>_</span></dd>
                  </div>
                </dl>
              </motion.aside>

              <motion.div
                className="hero__footer"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p>
                  No polished origin story. Just curiosity, an internet connection,
                  and the unreasonable belief that I can build the next thing.
                </p>
                <a className="text-link" href="#index">
                  Enter the index
              <ArrowDownRight aria-hidden="true" />
            </a>
          </motion.div>
        </section>

        <section className="project-index" id="index">
          <div className="section-heading">
            <p className="eyebrow">
              <span>02</span>
              Project index
            </p>
            <h2>Two ideas.<br /><em>In motion.</em></h2>
            <p className="section-heading__note">
              Built from ideas, not imported from a feed. These are the first
              products earning their place in the index.
            </p>
          </div>

          <ol className="project-list">
            {projects.map((project, index) => (
              <ProjectSlot key={project.title} index={index + 1} {...project} />
            ))}
          </ol>
        </section>

        <section className="protocol" id="about">
          <div className="section-heading">
            <p className="eyebrow">
              <span>03</span>
              Operating protocol
            </p>
            <h2>Small team.<br /><em>One person.</em></h2>
          </div>
          <div className="principles">
            <article>
              <span>01 / Learn</span>
              <h3>Read the docs.<br />Break the rules.</h3>
              <p>Understand the system well enough to make it do something new.</p>
            </article>
            <article>
              <span>02 / Build</span>
              <h3>Ideas are cheap.<br />Working is better.</h3>
              <p>Turn the weird thought into a real link someone can open.</p>
            </article>
            <article>
              <span>03 / Repeat</span>
              <h3>Never call it<br />finished.</h3>
              <p>Ship, notice what is wrong, and come back smarter tomorrow.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <span className="footer-prompt" aria-hidden="true">&gt;</span>
          <p>More soon. Probably sooner than is reasonable.</p>
        </div>
        <a href="https://github.com/juan1003" target="_blank" rel="noreferrer">
          Find me online
          <ArrowUpRight aria-hidden="true" />
        </a>
        <span>© {new Date().getFullYear()} Juan</span>
      </footer>
    </div>
  );
}

export default App;
