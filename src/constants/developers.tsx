import { DeveloperItemType } from '../types/types';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const developers: DeveloperItemType[] = [
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
