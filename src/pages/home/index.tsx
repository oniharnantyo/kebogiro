import GroomBride from './components/groombride';
import Footer from './components/footer';
import Gallery from './components/gallery';
import { useState } from 'react';
import './index.css';
import Cover from './components/cover';

const Home = () => {
  const [isCover, setIsCover] = useState(false);

  return (
    <div className='home'>
      <Cover isCover={isCover} setIsCover={setIsCover} />
      <div className={isCover ? 'hasCover' : ''}>
        <GroomBride />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
