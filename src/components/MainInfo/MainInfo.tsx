import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import style from './MainInfo.module.scss';

const MainInfo: FC = (): ReactNode => {
  return (
    <div className={style.wrapper}>
      <h2>Welcome to Arina&apos;s Art Gallery!</h2>
      <p>
        Hello, art enthusiast! I&apos;m Arina, a passionate artist dedicated to bringing beauty and emotion to life
        through my creations.
      </p>
      <p>
        Step into my world of colors, shapes, and stories, and explore a diverse collection of paintings that reflect my
        artistic journey.
      </p>
      <p>Each piece has a unique tale to tell, and I hope they resonate with you as much as they do with me.</p>
      <p>
        Feel free to browse through my gallery and discover the perfect masterpiece that speaks to your heart. Your
        support means the world to me!
      </p>
      <p>
        Visit my
        <Link data-testid="link" to="shop">
          &nbsp;Shop&nbsp;
        </Link>
        to find your next cherished piece. Let art inspire your soul!
      </p>
      <p>Thank you for sharing this artistic journey with me.</p>
      <p>Warmest regards,</p>
      <p>Arina</p>
    </div>
  );
};

export default MainInfo;
