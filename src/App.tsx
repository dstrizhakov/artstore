import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { FC } from 'react';

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <h1>Main page</h1>
      <Footer />
    </>
  );
};

export default App;
