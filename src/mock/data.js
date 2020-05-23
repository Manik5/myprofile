import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi There! I am',
  name: 'Manik',
  subtitle: 'Junior Full-Stack Web Developer',
  cta: 'Discover more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: 'In constant training Developer, natural curious coding passionate, eager to learn more about tech environment.',
  paragraphTwo: 'Coming from the hospitality industry, I decided to change my path of interests when I discovered about how coding could improve my creativity and my way of thinking.',
  paragraphThree: 'Recently completed Le Wagon Full-Stack Web Development Bootcamp, where I learned from how to manage a database to how to give beautiful UI / UX experience. Now I am more motivated to solidify my newly skills within new opportunities and satisfying my curiosity trying new technologies.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'apartment1.jpeg',
    title: 'Friend It',
    info: 'Your community first rental solution.',
    info2: 'Having a problem to book a flat? Check out this flat-rent trusted community based on your first and second degree contacts',
    url: 'http://friend-it.herokuapp.com/',
    repo: 'https://github.com/Marko-polo-code/Friend-It',
  },
  {
    id: uuidv1(),
    img: 'cocktail2.jpeg',
    title: 'Mr. Cocktail',
    info: 'A simple cocktail manager and library.',
    info2: 'Feel free to add you own!',
    url: 'https://mister-cocktail-manik.herokuapp.com/cocktails/',
    repo: 'https://github.com/Manik5/rails-mister-cocktail',
  },
  {
    id: uuidv1(),
    img: 'music.jpeg',
    title: 'Crown Music',
    info: 'A simple music shop, created with React | Redux',
    info2: 'Check out the perfect music instrument to fit your needs, in Crown Music',
		url: 'https://crown-music-live.herokuapp.com/',
		repo: 'https://github.com/Manik5/CrownMusic',
	},
	{
		id: uuidv1(),
		img: 'covid19.jpeg',
		title: 'Covid-19 Tracker',
		info: 'Simple tracker of the worldwide situation regarding Covid-19',
		// info2: 'Check out in real-time the ',
		url: 'https://covid-19-tracker-delta.now.sh/',
		repo: 'https://github.com/Manik5/covid-19-tracker',
	}
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in Touch!',
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
      url: 'https://www.instagram.com/keysnam5/',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/manik5',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
