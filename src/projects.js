// add new projects at the top of the list
// type is used for the filter buttons: "React" or "JavaScript"
// featured: true shows the project with a big image
const projects = [
  {
    title: "Reelmark",
    featured: true,
    description:
      "Track the movies, shows and anime you watch. Tick off episodes, see what's next and what's airing this week, and check your stats like total watch time and streaks. Everything is saved in the browser.",
    image: "/images/reelmark.jpg",
    type: "React",
    tags: ["React", "React Router", "Tailwind CSS", "Zustand", "TMDB API"],
    code: "https://github.com/rimjhimyadav/reelmark",
    live: "https://rimjhimyadav.github.io/reelmark/",
  },
  {
    title: "Country Explorer",
    description:
      "Explore every country with search, region filter and sorting. Also has a flag and capital quiz with score, streak and best score.",
    image: "/images/country-explorer.jpg",
    type: "JavaScript",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    code: "https://github.com/rimjhimyadav/country-explorer",
    live: "",
  },
  {
    title: "Pokédex",
    description:
      "All 1025 Pokémon with type filters and search. Each Pokémon has a popup with stats, description, its cry and shiny version.",
    image: "/images/pokedex.jpg",
    type: "JavaScript",
    tags: ["HTML", "CSS", "JavaScript", "PokéAPI"],
    code: "https://github.com/rimjhimyadav/pokedex",
    live: "",
  },
  {
    title: "Weather App",
    description:
      "Check the weather of any city or your current location, with humidity, wind and a 5 day forecast.",
    image: "/images/weather-app.jpg",
    type: "JavaScript",
    tags: ["HTML", "CSS", "JavaScript", "Open-Meteo API"],
    code: "https://github.com/rimjhimyadav/weather-app",
    live: "",
  },
  {
    title: "To-Do List",
    description:
      "Add, edit and delete tasks with filters and dark mode. Tasks are saved in localStorage so they stay after refresh.",
    image: "/images/todo-list.jpg",
    type: "JavaScript",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/rimjhimyadav/todo-list",
    live: "",
  },
];

export default projects;
