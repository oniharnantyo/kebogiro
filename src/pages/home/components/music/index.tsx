import { FC, useEffect, useState } from 'react';
import style from './style.module.css';
import useSound from 'use-sound';
import Lottie from 'lottie-react';

import TemaniAkuSong from '../../../../assets/music/Sheila on 7 - Temani Aku.mp3';
import playIcon from '../../../../assets/icon/vinyl.svg';
import melodyAnimation from '../../../../assets/lottie/melody.json';

interface IMusicProps {
  isPlaySound: boolean;
}

type MusicProps = FC<IMusicProps>;

const Music: MusicProps = ({ isPlaySound }) => {
  const [isPlay, setIsPlay] = useState(false);

  const [play, { stop }] = useSound(TemaniAkuSong, { volume: 0.5 });

  const handleClick = () => {
    if (isPlay) {
      stop();
      setIsPlay(false);
      isPlaySound = false;
    } else {
      play();
      setIsPlay(true);
      isPlaySound = true;
    }
  };

  useEffect(() => {
    if (isPlaySound) {
      setIsPlay(true);
      play();
    }
  }, [isPlaySound]);

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

export default Music;
