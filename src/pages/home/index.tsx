import GroomBride from './components/groombride';
import Footer from './components/footer';
import Gallery from './components/gallery';
import { useState } from 'react';
import './index.css';
import Cover from './components/cover';
import Countdown from './components/countdown';
import Event from './components/event';
import IEvent from '../../models/event';
import Greeting from './components/greeting';
import Gift from './components/gift';
import Story from './components/story';

const Home = () => {
  const [isCover, setIsCover] = useState(false);

  const eventDate = new Date('2023-12-30T01:00:00+07:00');

  const events: IEvent[] = [
    {
      title: 'Pemberkahan Pernikahan',
      startDate: new Date('2023-12-30T09:00:00+07:00'),
      endDate: new Date('2023-12-30T11:00:00+07:00'),
      place: 'Tempat Ibadah\nJalan Solo KM 7',
      placeLink: 'https://goo.gl/maps/zpJbGtXMjQp9fbAc9',
    },
    {
      title: 'Resepsi',
      startDate: new Date('2023-12-30T16:00:00+07:00'),
      endDate: new Date('2023-12-30T13:00:00+07:00'),
      place: 'Hotel Royal Ambarukmo\nJalan Solo KM 7',
      placeLink: 'https://goo.gl/maps/zpJbGtXMjQp9fbAc9',
    },
  ];

  return (
    <div className='home'>
      <Cover isCover={isCover} setIsCover={setIsCover} />
      <div className={isCover ? 'hasCover' : ''}>
        <GroomBride />
        <Story />
        <Gallery />
        <Countdown date={eventDate}></Countdown>
        <Event events={events}></Event>
        <Gift />
        <Greeting />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
