// title, screenshot, github link, live link, description, skills tags, responsibilities (for bigger projects)
// TODO: The rest of project data
// TODO: Add svg screenshots for each project
import {ReactComponent as GoodWeedsScreenshot} from "../assets/project-screenshots/goodweeds/goodweeds.svg";


export const projectData = [
  //! Mix-n-Match
  {
    id: 1,
    title: "Mix-N-Match",
    screenshot: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
    github: "https://github.com/graycodesnu/mix-match",
    live: "",
    description:
      "A MERN dating app that allows users to create a playlist – or mixtape – that acts as their profile. Users are able to browse other users’ mixtapes and match with them.",
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
      "Heroku",
    ],
  },
  //! GoodWeeds
  {
    id: 2,
    title: "GoodWeeds",
    screenshot: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
    github: "https://github.com/graycodesnu/goodWeeds",
    live: "https://tranquil-tor-86628.herokuapp.com/",
    description:
      "Utilizes a MySQL database – built from scratch – to allow a user to create a secure account, browse popular weed strains, add strains to favorites, and post a review to the WeedFeed.",
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
      "Heroku",
    ],
  },
  //! Intertain
  {
    id: 3,
    title: "Intertain",
    screenshot: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
    github: "https://github.com/NW-Bootcamp-Team1/Night-In",
    live: "https://nw-bootcamp-team1.github.io/Night-In/home-page/index",
    description:
      "Utilizes third-party web APIs and local storage to allow users to randomly generate entertainment options in the form of a book, movie, and board game, which can be saved in local storage or refreshed.",
    responsibilities: [
      "Local storage functionality",
      "Third-party API and implementation",
      "UX/UI",
    ],
    skillsShort: ["JavaScript", "HTML", "CSS", "Heroku"],
    skillsDetail: ["JavaScript", "HTML", "CSS", "Heroku", "Local Storage"],
  },
  {
    id: 4,
    title: "Weather Dashboard",
    screenshot: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
    github: "https://github.com/graycodesnu/weather-dashboard-week06",
    live: "https://graycodesnu.github.io/weather-dashboard-week06/",
    description:
      "Utilizes Open Weather's web API and local storage to allow users to get the most up-to-date weather data for a given city, in addition to a five-day forecast. Results save in local storage and turn into a button for easy access next time you need to search.",
    skillsShort: ["JavaScript", "Web APIs", "Local Storage", "CSS"],
    skillsDetail: ["JavaScript", "Web APIs", "Local Storage", "HTML", "CSS", "Heroku"]
  },


];
