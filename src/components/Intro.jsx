// put your photo in the public folder and write its name here, like "/me.jpg"
const photo = "";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-text">
        <p className="status">
          <span className="dot"></span> Open to frontend roles
        </p>

        <p className="hi-text">Hi there! 👋</p>
        <h1>
          I'm Rimjhim Yadav<span className="accent">.</span>
        </h1>

        <p>
          I'm a frontend developer. I like building web apps that look simple and
          are easy to use.
        </p>
        <p>
          I did my <b>BCA</b> from GL Bajaj Institute of Technology and then
          my <b>MCA</b> from Sharda University, which I finished in 2026. Most
          of my projects are made with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> and <b>React</b>.
        </p>
        <p>
          When I'm not coding, I'm probably watching anime 🍿. <b>Attack on Titan</b> and <b>Naruto</b> are
          my all time favourites, and that's also why I built <a href="https://github.com/rimjhimyadav/anime-finder" target="_blank">Anime Finder</a>.
        </p>
        <p>
          Right now I'm looking for my first frontend role, where I can learn from a
          team and work on real products.
        </p>
      </div>

      {photo && <img src={photo} alt="Rimjhim Yadav" className="photo" />}
    </section>
  );
}

export default Intro;
