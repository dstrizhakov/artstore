import { DeveloperItemType } from '../types/types';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const developers: DeveloperItemType[] = [
  {
    name: 'Dmitry Strizhakov (TeamLead)',
    description: `Hello, I'm a JavaScript developer. Currently, I'm studying at the online school RSSchool, and I would like to extend my heartfelt gratitude to our mentors, Vitaliy Boudkin and Shakhzod Kudratov, for their guidance and support throughout this learning journey.
    During my journey in web development, I've had the privilege of working with various technologies and frameworks, which you can find listed below.
    My experience has allowed me to tackle various challenges and projects. Collaboration is something I deeply value, and I believe that effective teamwork and communication are key to project success.
    I have a passion for problem-solving, and I enjoy finding innovative solutions to complex challenges. In the ever-evolving world of web development, I'm committed to continuous learning to stay updated with the latest trends and technologies.`,
    img: 'https://avatars.githubusercontent.com/u/95134334?v=4',
    skills: [
      'React',
      'NextJS',
      'Redux',
      'Redux Toolkit',
      'Effector',
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
    img: 'https://avatars.githubusercontent.com/u/50585824?v=4',
    skills: [
      'HT​ML',
      'CSS (SASS, LESS)',
      'JavaScript',
      'TypeScript',
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
];
