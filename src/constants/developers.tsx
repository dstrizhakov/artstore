import { DeveloperItemType } from '../types/types';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const developers: DeveloperItemType[] = [
  {
    name: 'Dmitry Strizhakov (TeamLead)',
    description: `Hello, I'm a JavaScript developer. Currently, I'm studying at the online school RSSchool, and I would like to extend my heartfelt gratitude 
    to our mentors, Vitaliy Boudkin and Shakhzod Kudratov, for their guidance and support throughout this learning journey. 
    On this project I played the role of Team Lead and I really enjoyed learning and sharing my knowledge, it was a very cool experience!
    Collaboration is something I deeply value, and I believe that effective teamwork and communication are key to project success.`,
    contribution:
      'Basic structure of the project, redux-store, part of API, Home, Cart pages, filtering, pagination on the Shop page, tests for components, errors handling',
    img: 'https://avatars.githubusercontent.com/u/95134334?v=4',
    skills: [
      'React',
      'NextJS',
      'Redux',
      'Redux Toolkit',
      'Axios',
      'JavaScript',
      'TypeScript',
      'Webpack',
      'StoryBook',
      'Swagger',
      'GIT',
      'Figma',
      'Styled-components',
      'Ant-Design',
      'MIU',
    ],
    links: [
      {
        name: 'github',
        url: 'https://github.com/dstrizhakov',
        icon: GitHubIcon,
      },
      {
        name: 'telegram',
        url: 'https://t.me/DmitryStrizhakov',
        icon: TelegramIcon,
      },
      {
        name: 'email',
        url: 'mailto:d.strizhakov@gmail.com',
        icon: EmailIcon,
      },
    ],
  },
  {
    name: 'Stanislav Shendryk',
    description: `Ever since high school, I have been interested in computer and everything connected with it, from hardware
    to computer games. I was curious about html and css, which allowed me to do magic in the browser. For the
    first time in practice, I faced the front-end, when I worked as a system administrator in a private
    clinic. The head asked me to correct the clinic's website, namely to add a slider, update the doctors
    photos and add a section. I spent a couple of days on Google and figured it out, so I completed my first
    order. The difficulty turned out to be that the site engine was self-written, but I found out about it
    later, when I got acquainted with the popular cms: joomla, wordpress and MODX. As a result of the task, I
    had a great desire to develop in this direction.`,
    contribution:
      'Product page, personal discount for a product, slider on the product page, modal slider, 404 page, about us page, routing, breadcrumbs, footer.',
    img: 'https://avatars.githubusercontent.com/u/50585824?v=4',
    skills: [
      'HT​ML',
      'CSS (SASS, LESS)',
      'JavaScript',
      'TypeScript',
      'Bootstrap',
      'SmartGrid',
      'Webpack',
      'GIT',
      'Wordpress',
      'MODX',
      'Figma',
      'CorelDRAW',
      'Photoshop',
    ],
    links: [
      {
        name: 'github',
        url: 'https://github.com/webj0ker',
        icon: GitHubIcon,
      },
      {
        name: 'telegram',
        url: 'https://t.me/webjoker',
        icon: TelegramIcon,
      },
      {
        name: 'email',
        url: 'mailto:stanislav.shendryk@gmail.com',
        icon: EmailIcon,
      },
    ],
  },
  {
    name: 'Berdiev Mardon',
    description: `My name is Mardon. Four years ago I moved to Moscow to change my life. Starting as a courier, I soon realized that I wanted something more and began to explore the world of programming. Despite the difficulties due to limited knowledge of the Russian language, my interest in programming was passionate. Now I am a fourth-year student at the Moscow State University of Technology and Management. My goal became to become a frontend developer. My journey began with learning layout using online resources and learning on YouTube. In a short time I acquired basic skills in the art of layout. However, my studies are not limited to this. I am keen to learn JavaScript and frontend frameworks such as React or Angular. My study projects help me consolidate what I have learned and also create an impressive portfolio. My main traits are persistence and readiness for self-development. I am confident that I can achieve my goals in the field of front-end development and make a significant contribution to this field.`,
    contribution:
      'Login page, registration, validation setup, adding and changing addresses, product search, profile page, part of the API',
    img: 'https://avatars.githubusercontent.com/u/78404962?v=4',
    skills: [
      'React',
      'Redux',
      'Redux Toolkit',
      'Axios',
      'HT​ML',
      'CSS (SASS, LESS)',
      'JavaScript',
      'TypeScript',
      'Bootstrap',
      'Webpack',
      'GIT',
      'Figma',
      'Photoshop',
      'MIU',
    ],
    links: [
      {
        name: 'github',
        url: 'https://github.com/Mardon07',
        icon: GitHubIcon,
      },
      {
        name: 'telegram',
        url: 'https://t.me/onmard',
        icon: TelegramIcon,
      },
      {
        name: 'email',
        url: 'mailto:mardonberdiev10@gmail.com',
        icon: EmailIcon,
      },
    ],
  },
];
