// put your photo in the public folder and write its name here, like "/me.jpg"
const photo = "";

function Intro() {
  return (
    <section className="relative isolate flex flex-col-reverse gap-5 pt-12 sm:flex-row sm:items-start sm:gap-10">
      {/* soft pink glow behind the intro */}
      <div className="pointer-events-none absolute -top-32 -left-40 -z-10 w-[32rem] h-[26rem] rounded-full bg-accent/15 blur-3xl"></div>

      <div className="flex-1 text-body motion-safe:animate-intro">
        <p className="inline-flex items-center gap-2 mb-3.5 px-3 py-0.5 rounded-full border text-sm text-green-700 bg-green-50 border-green-100">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Open to frontend roles
        </p>

        <p className="mb-1 font-medium text-accent">Hi there! 👋</p>
        <h1 className="mb-5 text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-main">
          I'm Rimjhim Yadav<span className="text-accent">.</span>
        </h1>

        <p className="mb-4">
          I'm a frontend developer. I like building web apps that look simple and
          are easy to use, mostly with <b>JavaScript</b>, <b>TypeScript</b> and <b>React</b>.
        </p>
        <p className="mb-4">
          When I'm not coding, I'm probably watching anime 🍿. <b>Attack on Titan</b> and <b>Naruto</b> are
          my all time favourites, and that's also why I built <a href="https://rimjhimyadav.github.io/reelmark/" target="_blank">Reelmark</a> to keep track of everything I watch.
        </p>
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
