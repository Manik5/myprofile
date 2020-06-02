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
  subtitle: 'Junior Full-Stack Developer',
  cta: 'Discover more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic2.jpeg',
  paragraphOne: 'Hey! That is me on the left, or above, depends on what device you are using.',
  paragraphTwo: 'I am a "still in training" Developer, with a natural curiosity and passion for the tech world. I develop mostly with React, React Native and Rails.',
  paragraphThree:	'Recently completed Le Wagon Full-Stack Web Development Bootcamp, I learned how to manage a database, to all the way up to create simple and beautiful UI / UX experience. Now I am looking to solidify my new skills with new opportunities .',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'friendit3.png',
    title: 'Friend It',
    info: 'Your community first rental solution.',
    info2: 'Having a problem to book a flat? Check out this flat-rent trusted community based on your first and second degree contacts',
    url: 'http://friend-it.herokuapp.com/',
    repo: 'https://github.com/Marko-polo-code/Friend-It',
  },
  {
    id: uuidv1(),
    img: 'cocktail3.png',
    title: 'Mr. Cocktail',
    info: 'A simple cocktail manager and library.',
    info2: 'Feel free to add you own!',
    url: 'https://mister-cocktail-manik.herokuapp.com/cocktails/',
    repo: 'https://github.com/Manik5/rails-mister-cocktail',
  },
  {
    id: uuidv1(),
    img: 'music.png',
    title: 'Crown Music',
    info: 'A simple music shop, created with React | Redux',
    info2: 'Check out the perfect music instrument to fit your needs, in Crown Music',
		url: 'https://crown-music-live.herokuapp.com/',
		repo: 'https://github.com/Manik5/CrownMusic',
	},
	{
		id: uuidv1(),
		img: 'covid19.png',
		title: 'Covid-19 Tracker',
		info: 'Simple tracker of the worldwide situation regarding Covid-19',
		// info2: 'Check out in real-time the ',
		url: 'https://covid-19-tracker-delta.now.sh/',
		repo: 'https://github.com/Manik5/covid-19-tracker',
	}
];

// CONTACT DATA
export const contactData = {
  cta: 'Have any ideas, projects in mind? Or just feeling to talk about something? ',
  btn: 'Drop me a message',
  email: 'manik.aangurah@gmal.com',
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
