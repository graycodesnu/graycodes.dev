// title, screenshot, github link, live link, description, skills tags, responsibilities (for bigger projects)
// TODO: The rest of project data
// TODO: Add svg screenshots for each project

export const otherProjectData = [
  //! Mix-n-Match
  {
    id: 1,
    title: "Mix-N-Match",
    screenshot: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
    github: "https://github.com/graycodesnu/mix-match",
    live: "",
    description:
      "A MERN dating app you didn't know you needed. Users create a playlist – or mixtape – that acts as their profile. Users are able to browse other users’ mixtapes and match with them via playlist likes.",
    responsibilities: [
      "Backend API",
      "Models and queries",
      "Authorization/login functionality using JSON web tokens",
      "UI/UX (Material UI)",
    ],
    skillsShort: [
      "React",
      "MongoDB",
      "JavaScript",
      "Material UI",
    ],
    skillsDetail: [
      "React",
      "MongoDB",
      "JavaScript",
      "JSX",
      "GraphQL",
      "Material UI",
      "bcrypt",
      "Express.js",
      "Node.js",
      "API",
      "Heroku",
    ],
  },
  //! GoodWeeds
  {
    id: 2,
    title: "GoodWeeds",
    screenshot: require('../assets/project-screenshots/goodweeds/goodweeds.png'),
    github: "https://github.com/graycodesnu/goodWeeds",
    live: "https://tranquil-tor-86628.herokuapp.com/",
    description:
      "Curate your strain profile and join a community centered around helping people find and share strains they love. A MySQL database and RESTful API to allow users to browse popular weed strains, add strains to favorites, and post reviews to the WeedFeed.",
    responsibilities: [
      "Agile development upon stepping into a leadership role",
      "Backend functionality and database integration with MySQL",
      "Routes and data calls",
      "Login authorization and sign up",
      "UX/UI",
    ],
    skillsShort: [
      "JavaScript",
      "Bootstrap",
      "Express.js",
      "Node.js",
      "MySQL"
    ],
    skillsDetail: [
      "JavaScript",
      "HTML",
      "Handlebars",
      "Bootstrap",
      "CSS",
      "bcrypt",
      "Express.js",
      "Node.js",
      "API",
      "Heroku",
    ],
  },
  //! Intertain
  {
    id: 3,
    title: "Intertain",
    screenshot: require('../assets/project-screenshots/intertain/intertain.png'),
    github: "https://github.com/NW-Bootcamp-Team1/Night-In",
    live: "https://nw-bootcamp-team1.github.io/Night-In/home-page/index",
    description:
      "Don't know what to do for your night in? Three separate web APIs allow users to randomly generate entertainment options in the form of a book, movie, and board game, which can be saved in local storage or refreshed until satisfied.",
    responsibilities: [
      "Local storage functionality",
      "Third-party API and implementation",
      "UX/UI",
    ],
    skillsShort: ["JavaScript", "HTML", "CSS", "Heroku"],
    skillsDetail: ["JavaScript", "HTML", "CSS", "Heroku", "Local Storage", "API"],
  },
  // ! Weather Dashboard
  {
    id: 4,
    title: "Weather Dashboard",
    screenshot: require('../assets/project-screenshots/misc/weather-dashboard.png'),
    github: "https://github.com/graycodesnu/weather-dashboard-week06",
    live: "https://graycodesnu.github.io/weather-dashboard-week06/",
    description:
      "Utilizes Open Weather's web API and local storage to allow users to get the most up-to-date weather data for a given city, in addition to a five-day forecast. Results save in local storage and turn into a button for easy access next time you need to search.",
    skillsShort: ["JavaScript", "Web APIs", "Local Storage", "CSS"],
    skillsDetail: ["JavaScript", "Web APIs", "Local Storage", "HTML", "CSS", "Heroku"]
  },
  // ! Password Generator
  {
    id: 5,
    title: "Password Generator",
    screenshot: require('../assets/project-screenshots/misc/password-generator.png'),
    github: "https://github.com/graycodesnu/password_generator",
    live: "https://graycodesnu.github.io/password_generator/",
    description:
      "A password generator in which the user is prompted to select password criteria via modals.",
    skillsShort: ["JavaScript", "CSS", "HTML"],
    skillsDetail: ["JavaScript", "HTML", "CSS"]
  },
  // ! Node README
    {
      id: 6,
      title: "README.md Generator",
      screenshot: require('../assets/project-screenshots/misc/node-readme.png'),
      github: "https://github.com/graycodesnu/node-readme",
      live: "https://drive.google.com/file/d/1St-Si8Wu9aCa9QI1vvXhKOsWRZptzbra/view",
      description:
        "A README.md file generator using Node.js and command line prompts.",
      skillsShort: ["JavaScript", "Node.js"],
      skillsDetail: ["JavaScript", "Node.js"]
    }

];
