import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Manik',
  subtitle: 'Junior Web Developer',
  cta: 'Discover more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: 'In constant training Web Developer, natural curious coding passionate, eager to learn more about tech environment.',
  paragraphTwo: 'Coming from the hospitality industry, I decided to change my path of interests when I discovered about how coding could improve my creativity and my way of thinking.',
  paragraphThree: 'Recently completed Le Wagon Full-Stack Web Development Bootcamp, where I learned the essential skills to become a developer, now I am more motivated to strenghthen my newly skills and curious to try new technologies.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'apartment1.jpeg',
    title: 'Friend It',
    info: 'Your community first rental solution.',
    info2: 'Having a problem to book a flat? Check out this flat-rent community based among your friends',
    url: 'http://friend-it.herokuapp.com/',
    repo: 'https://github.com/Marko-polo-code/Friend-It', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'cocktail2.jpeg',
    title: 'Mr. Cocktail',
    info: 'A simple cocktail manager and library.',
    info2: 'Feel free to add you own!',
    url: 'https://mister-cocktail-manik.herokuapp.com/cocktails/',
    repo: 'https://github.com/Manik5/rails-mister-cocktail', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'covid19.jpeg',
    title: 'Covid-19 Tracker',
    info: 'My first project using ReactJs.',
    info2: 'Check out the global situation about the Covid-19.',
    url: 'https://covid-19-tracker-delta.now.sh/',
    repo: 'https://github.com/Manik5/covid-19-tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to know more about me?',
  btn: 'Contact Me',
  email: 'manik.aangurah@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/manik-a-a-ngurah-59b228149/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Manik5',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/keysnam/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
