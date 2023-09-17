import { FC } from 'react';
import styles from './RsschoolDescription.module.scss';
import { Button, Chip, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const RsschoolDescription: FC = () => {
  return (
    <Paper sx={{ mb: 2 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} padding={2}>
          <a href="https://rs.school/" target="_blank" rel="noreferrer">
            <img src="https://rs.school/images/rs_school.svg" alt="rsschool" />
          </a>

          <Stack direction="row" spacing={2}></Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={8} padding={2}>
          <Typography variant="body1" paddingBottom={2}>
            RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer
            community since 2013. Everyone can study at RS School, regardless of age, professional employment, or place
            of residence. The mentors and trainers of our school are front-end and javascript developers from different
            companies and countries.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Available courses:
          </Typography>
          <div className={styles.tag}>
            <Chip color="success" variant="outlined" label="JS / Front-end" />
            <Chip color="success" variant="outlined" label="Angular" />
            <Chip color="success" variant="outlined" label="React" />
            <Chip color="success" variant="outlined" label="AWS Fundamentals" />
            <Chip color="success" variant="outlined" label="AWS Cloud Developer" />
            <Chip color="success" variant="outlined" label="Node.js" />
          </div>
          <Typography variant="h5" gutterBottom>
            Contacts:
          </Typography>
          <Button target="_blank" href="https://rs.school/" variant="outlined" startIcon={<LanguageIcon />}>
            rs.school
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </Paper>
  );
};

export default RsschoolDescription;
