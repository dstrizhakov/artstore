import { FC } from 'react';
import { Button, ButtonGroup, Divider, Grid, Paper, Typography } from '@mui/material';
import styles from './About.module.scss';

const About: FC = () => {
  return (
    <div>
      <h2>About Page</h2>

      <Paper className={styles.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} padding={2}>
            <img src="https://avatars.githubusercontent.com/u/50585824?v=4" alt="Stas" />
          </Grid>
          <Grid item xs={12} sm={12} md={8} padding={2} className={styles.productInfo}>
            <Typography variant="h3" gutterBottom>
              Stanislav Shendryk
            </Typography>
            <Typography variant="body1" color="textSecondary" className={styles.data}>
              Ever since high school, I have been interested in computer and everything connected with it, from hardware
              to computer games. I was curious about html and css, which allowed me to do magic in the browser. For the
              first time in practice, I faced the front-end, when I worked as a system administrator in a private
              clinic. The head asked me to correct the clinic`s website, namely to add a slider, update the doctors
              photos and add a section. I spent a couple of days on Google and figured it out, so I completed my first
              order. The difficulty turned out to be that the site engine was self-written, but I found out about it
              later, when I got acquainted with the popular cms: joomla, wordpress and MODX. As a result of the task, I
              had a great desire to develop in this direction.
            </Typography>
            <Typography variant="h4" gutterBottom>
              Technologies stack and my tools
            </Typography>
            <Typography variant="body1" color="textSecondary" className={styles.data}>
              HT​ML, CSS (SASS, LESS), JavaScript, TypeScript, GIT, Wordpress, MODX, Figma, CorelDRAW, Photoshop
            </Typography>
            <Typography variant="h4" gutterBottom>
              Contacts
            </Typography>
            <Typography variant="body1" color="textSecondary" className={styles.data}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button href="https://t.me/webjoker">Telegram</Button>
                <Button href="https://discordapp.com/users/673500459750785065">Discord</Button>
                <Button href="mailto:stanislav.shendryk@gmail.com">Email</Button>
              </ButtonGroup>
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </Paper>
    </div>
  );
};

export default About;
