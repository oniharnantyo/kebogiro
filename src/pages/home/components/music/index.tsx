import { FC, useState } from 'react';
import style from './style.module.css';
import Lottie from 'lottie-react';

import playIcon from '../../../../assets/icon/vinyl.svg';
import melodyAnimation from '../../../../assets/lottie/melody.json';

interface IMusicProps {
  play: () => void;
  pause: () => void;
}

type MusicProps = FC<IMusicProps>;

const Music: MusicProps = ({ play, pause }) => {
  const [isPlay, setIsPlay] = useState(true);

  const handleClick = () => {
    if (isPlay) {
      pause();
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

export default Music;
