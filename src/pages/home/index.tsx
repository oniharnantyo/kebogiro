import { Suspense, useEffect, useState } from 'react';
import React from 'react';
import style from './index.module.css';

import IEvent from '../../models/event';

import Cover from './components/cover';

const GroomBride = React.lazy(() => import('./components/groombride'));
const Footer = React.lazy(() => import('./components/footer'));
const Gallery = React.lazy(() => import('./components/gallery'));
const Event = React.lazy(() => import('./components/event'));
const Greeting = React.lazy(() => import('./components/greeting'));
const Gift = React.lazy(() => import('./components/gift'));
const Story = React.lazy(() => import('./components/story'));
const Music = React.lazy(() => import('./components/music'));

const Home = () => {
  const searchParams = new URLSearchParams(document.location.search);

  const [isCover, setIsCover] = useState(true);
  const [isPlaySound, setIsPlaySound] = useState(false);

  useEffect(() => {
    if (!isCover) {
      setIsPlaySound(true);
    }
  });

  const eventDate = new Date('2023-06-01T09:00:00+07:00');

  const events: IEvent[] = [
    {
      title: 'Pemberkahan Pernikahan',
      startDate: new Date('2023-06-01T09:00:00+07:00'),
      endDate: new Date('2023-06-01T11:00:00+07:00'),
      place: `Vihara Dharma Sagara\nNgalarangan, Tleter, Kaloran, Temanggung`,
      placeLink: 'https://goo.gl/maps/hztx2ELCuWEdQp9WA',
    },
    {
      title: 'Resepsi',
      startDate: new Date('2023-06-01T15:00:00+07:00'),
      endDate: new Date('2023-06-01T17:00:00+07:00'),
      place: 'RT 5 / RW 2 Nglarangan, Tleter, Kaloran, Temanggung',
      placeLink: 'https://goo.gl/maps/zpJbGtXMjQp9fbAc9',
    },
  ];

  return (
    <div>
      <Cover isCover={isCover} setIsCover={setIsCover} to={searchParams.get('to') as string} />
      <Suspense>
        <div className={isCover ? style.hasCover : style.noCover}>
          <GroomBride />
          <Story />
          <Gallery />
          <Event date={eventDate} events={events}></Event>
          <Gift />
          <Greeting />
          <Footer />
          <div className='container'>
            <Music isPlaySound={isPlaySound} />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
