import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael Cruz | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm `,
  name: 'Michael Cruz.',
  subtitle: 'Software Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `\t My journey to software development started after college. I became a math teacher then entered the seminary. I have always loved problem solving and technology, so after I decided that the seminary wasn't for me, a good friend of mine suggested I look into software engineering as a possible new career path.`,
  paragraphTwo: `\t So with my friend’s inspiration I started digging deeper into the work of software engineering and the more I learned the more fun it became. I enjoy talking to other people about projects and new technologies, and I thrive on developing creative solutions with the people I work with.`,
  paragraphThree: `\t I look forward to having fun building stuff and solving problems with you in the future.`,
  resume:
    'https://docs.google.com/document/d/18f690tmYpHD3k-hoI8vY4rGN7cObvJL0RztvqXaq8AU/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'catwalk.png',
    title: 'Catwalk',
    info: 'E-commerce product overview microservice',
    info2: `I created this microservice from scratch using React.js. I worked with an api to dynamically render product info based on user input. This was a a fullstack page that involved a Node.js backend with multiple routes.`,
    url: '',
    repo: 'https://github.com/Wayne-Enterprises-Inc/cat-walk', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'setnforget1.png',
    title: 'Set-n-Forget',
    info: 'A recipe tracker and cooking planner.',
    info2:
      'I developed a search feature that would work with a MongoDB database to dynamically produce results. I also designed the webapp using a MaterialUI framework, taking advantage of flexbox and grid layouts.',
    url: '',
    repo: 'https://github.com/Team-Rocky/blueocean', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'benchmark1.png',
    title: 'BenchMark',
    info: 'A workout tracker',
    info2:
      'A fullstack app that I developed in just 12 hours. I pulled hundreds of workouts from a public api. This list feeds a dropdown search for the workout name. The workout info is then saved to a mongoDB database and can be referenced in chronological order. Node.js/Express powered the routeing. I still use this to track my own workout progress.',
    url: '',
    repo: 'https://github.com/mrcruz117/BenchMark', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me',
  email: 'mrcruz1989@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mrcruz117/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mrcruz117',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
