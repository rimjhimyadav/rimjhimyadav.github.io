// put your photo in the public folder and write its name here, like "/me.jpg"
const photo = "";

const buttonClass =
  "px-4 py-1.5 rounded-lg border border-line text-sm font-medium text-main hover:no-underline hover:text-link hover:border-link";

function Intro() {
  return (
    <section className="flex flex-col-reverse gap-5 pt-12 sm:flex-row sm:items-start sm:gap-10">
      <div className="flex-1 text-body">
        <p className="inline-flex items-center gap-2 mb-3.5 px-3 py-0.5 rounded-full border text-sm text-green-700 bg-green-50 border-green-100 dark:text-green-400 dark:bg-green-500/10 dark:border-green-500/20">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Open to frontend roles
        </p>

        <p className="mb-1 font-medium text-link">Hi there! 👋</p>
        <h1 className="mb-5 text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-main">
          I'm Rimjhim Yadav<span className="text-blue-500">.</span>
        </h1>

        <p className="mb-4">
          I'm a frontend developer. I like building web apps that look simple and
          are easy to use.
        </p>
        <p className="mb-4">
          I did my <b>BCA</b> from GL Bajaj Institute of Technology and then
          my <b>MCA</b> from Sharda University, which I finished in 2026. Most
          of my projects are made with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> and <b>React</b>.
        </p>
        <p className="mb-4">
          When I'm not coding, I'm probably watching anime 🍿. <b>Attack on Titan</b> and <b>Naruto</b> are
          my all time favourites, and that's also why I built <a href="https://rimjhimyadav.github.io/anime-finder/" target="_blank">Anime Finder</a>.
        </p>
        <p className="mb-4">
          Right now I'm looking for my first frontend role, where I can learn from a
          team and work on real products.
        </p>

        <div className="flex gap-2.5 mt-6">
          <a href="https://github.com/rimjhimyadav" target="_blank" className={buttonClass}>GitHub ↗</a>
          <a href="https://www.linkedin.com/in/rimjhimyadav/" target="_blank" className={buttonClass}>LinkedIn ↗</a>
        </div>
      </div>

      {photo && (
        <img
          src={photo}
          alt="Rimjhim Yadav"
          className="w-30 sm:w-48 aspect-4/5 object-cover rounded-xl border border-line"
        />
      )}
    </section>
  );
}

export default Intro;
