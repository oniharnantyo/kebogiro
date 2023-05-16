import { Suspense, useEffect, useState } from 'react';
import React from 'react';
import style from './index.module.css';

import IEvent from '../../models/event';

import useSound from 'use-sound';

import Cover from './components/cover';

const GroomBride = React.lazy(() => import('./components/groombride'));
const Footer = React.lazy(() => import('./components/footer'));
const Gallery = React.lazy(() => import('./components/gallery'));
const Event = React.lazy(() => import('./components/event'));
const Greeting = React.lazy(() => import('./components/greeting'));
const Gift = React.lazy(() => import('./components/gift'));
const Story = React.lazy(() => import('./components/story'));
const Music = React.lazy(() => import('./components/music'));

import TemaniAkuSong from '../../assets/music/Sheila on 7 - Temani Aku.mp3';

const Home = () => {
  const searchParams = new URLSearchParams(document.location.search);

  const to = searchParams.get('to') as string;
  const reception = searchParams.get('reception') as string;

  const [isCover, setIsCover] = useState(true);

  const [play, { stop }] = useSound(TemaniAkuSong, { volume: 0.5 });

  useEffect(() => {
    if (!isCover) {
      play();
    }
  });

  const eventDate = new Date('2023-06-01T09:00:00+07:00');

  const events: IEvent[] = [
    ...(reception === '1'
      ? [
          {
            title: 'Resepsi',
            startDate: new Date('2023-05-31T13:00:00+07:00'),
            endDate: new Date('2023-05-31T17:00:00+07:00'),
            place: 'RT 5 / RW 2 Nglarangan, Tleter, Kaloran, Temanggung',
            placeLink: 'https://goo.gl/maps/zpJbGtXMjQp9fbAc9',
          },
        ]
      : []),
    {
      title: 'Pemberkahan Pernikahan',
      startDate: new Date('2023-06-01T09:00:00+07:00'),
      endDate: new Date('2023-06-01T11:00:00+07:00'),
      place: `Vihara Dharma Sagara\nNgalarangan, Tleter, Kaloran, Temanggung`,
      placeLink: 'https://goo.gl/maps/hztx2ELCuWEdQp9WA',
    },
    ...(reception !== '1'
      ? [
          {
            title: 'Resepsi',
            startDate: new Date('2023-06-01T14:30:00+07:00'),
            endDate: new Date('2023-06-01T16:00:00+07:00'),
            place: 'RT 5 / RW 2 Nglarangan, Tleter, Kaloran, Temanggung',
            placeLink: 'https://goo.gl/maps/zpJbGtXMjQp9fbAc9',
          },
        ]
      : []),
  ];

  return (
    <div>
      <Cover isCover={isCover} setIsCover={setIsCover} to={to} />
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
            <Music play={play} stop={stop} />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
