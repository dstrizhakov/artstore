import { FC } from 'react';
import { developers } from '../../constants/developers';
import AboutItem from '../../components/AboutItem/AboutItem';

const AboutList: FC = () => {
  return (
    <>
      {developers.map((developer) => (
        <AboutItem
          key={developer.name}
          name={developer.name}
          description={developer.description}
          img={developer.img}
          skills={developer.skills}
          links={developer.links}
        />
      ))}
    </>
  );
};

export default AboutList;
