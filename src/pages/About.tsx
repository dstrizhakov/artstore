import { FC } from 'react';
import AboutList from '../components/AboutList/AboutList';
import RsschoolDescription from '../components/RsschoolDescription/RsschoolDescription';

const About: FC = () => {
  return (
    <div>
      <h2>About Us</h2>
      <AboutList />
      <RsschoolDescription />
    </div>
  );
};

export default About;
