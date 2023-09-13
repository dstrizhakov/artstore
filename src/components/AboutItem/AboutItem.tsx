import { FC } from 'react';
import styles from './AboutItem.module.scss';
import { Button, Chip, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { DeveloperItemType } from '../../types/types';

const AboutItem: FC<DeveloperItemType> = ({ name, description, img, skills, links }) => {
  return (
    <Paper sx={{ mb: 2 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} padding={2}>
          <img src={img} alt={name} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} padding={2}>
          <Typography variant="h3" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" paddingBottom={2}>
            {description}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Technologies stack and my tools:
          </Typography>
          <div className={styles.tag}>
            {skills.map((skill) => (
              <Chip key={skill} color="success" variant="outlined" label={skill} />
            ))}
          </div>
          <Typography variant="h5" gutterBottom>
            Contacts:
          </Typography>
          <Stack direction="row" spacing={2}>
            {links.map((link) => (
              <Button key={link.url} target="_blank" href={link.url} variant="outlined" startIcon={<link.icon />}>
                {link.name}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Grid>
      <Divider />
    </Paper>
  );
};

export default AboutItem;
