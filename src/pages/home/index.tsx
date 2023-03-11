import { useEffect, useState } from 'react';
import React from 'react';
import style from './index.module.css';
import useSound from 'use-sound';
import Lottie from 'lottie-react';

import IEvent from '../../models/event';

import TemaniAkuSong from '../../assets/music/Sheila on 7 - Temani Aku.mp3';
import playIcon from '../../assets/icon/vinyl.svg';
import melodyAnimation from '../../assets/lottie/melody.json';

const Cover = React.lazy(() => import('./components/cover'));
const GroomBride = React.lazy(() => import('./components/groombride'));
const Footer = React.lazy(() => import('./components/footer'));
const Gallery = React.lazy(() => import('./components/gallery'));
const Event = React.lazy(() => import('./components/event'));
const Greeting = React.lazy(() => import('./components/greeting'));
const Gift = React.lazy(() => import('./components/gift'));
const Story = React.lazy(() => import('./components/story'));

const Home = () => {
  const searchParams = new URLSearchParams(document.location.search);

  const [isCover, setIsCover] = useState(true);

  const [play, { stop }] = useSound(TemaniAkuSong, { volume: 0.5 });

  useEffect(() => {
    if (!isCover) {
      play();
    }
  });

  const eventDate = new Date('2023-12-30T01:00:00+07:00');

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
      <div className={isCover ? style.hasCover : style.noCover}>
        <GroomBride />
        <Story />
        <Gallery />
        <Event date={eventDate} events={events}></Event>
        <Gift />
        <Greeting />
        <Footer />
        <div className='container'>
          <MusicControl play={play} stop={stop} />
        </div>
      </div>
    </div>
  );
};

export default Home;

interface MusicControlProps {
  play: () => void;
  stop: () => void;
}

const MusicControl = ({ play, stop }: MusicControlProps) => {
  const [isPlay, setIsPlay] = useState(true);

  const handleClick = () => {
    if (isPlay) {
      stop();
      setIsPlay(false);
    } else {
      play();
      setIsPlay(true);
    }
  };

  return (
    <div className={`${style.musicControl} ${!isPlay ? style.off : ''}`} onClick={handleClick}>
      <div className={`${style.musicAnimation} ${!isPlay ? style.off : ''}`}>
        <Lottie
          animationData={melodyAnimation}
          loop={true}
          style={{
            height: 100,
            width: 100,
          }}
        />
      </div>
      <a href='#' className={style.playBtn}>
        <img src={playIcon} style={{ height: '30px', width: '30px' }} />
      </a>
    </div>
  );
};
