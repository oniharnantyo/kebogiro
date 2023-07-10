import style from './style.module.css';
import coverImage from '../../../../assets/cover.webp';
import openIcon from '../../../../assets/icon/open-mail.png';
import sal from 'sal.js';
import { useEffect } from 'react';

interface CoverProps {
  isCover: boolean;
  to: string;
  setIsCover: (e: any) => void;
}

const Cover = (props: CoverProps) => {
  useEffect(() => {
    sal();
  }, []);

  const handleIsCover = (e: any) => {
    props.setIsCover(false);
  };

  return (
    <div className={`${style.cover} ${!props.isCover && style.uncover}`}>
      <section
        className={`container-fluid ${style.contentWrapper}`}
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className={`${style.textWrapper}`}>
          <h1
            className={`${style.text} ${style.title}`}
            data-sal='zoom-in'
            data-sal-duration={700}
            data-sal-easing='ease-out-quad'
          >
            Oni & Metta
          </h1>
          <h3
            className={`${style.text} ${style.subtitle}`}
            data-sal='fade'
            data-sal-delay={300}
            data-sal-duration={1000}
            data-sal-easing='ease-out-quad'
          >
            01 . 06 . 2023
          </h3>
        </div>
        <div className={`${style.btnFloating}`}>
          <div className='row center-xs'>
            <div className='col-xs-offset-1 col-md-offset-4' />
            <div
              className='col-xs-10 col-md-4'
              data-sal='fade'
              data-sal-delay={500}
              data-sal-duration={700}
              data-sal-easing='ease-out-quad'
            >
              <div className={style.to}>
                <div className='row'>
                  <div className='col-xs-12'>
                    <p>Kepada:</p>
                  </div>
                </div>
                <div className='row center-xs'>
                  <div className='col-xs-12'>
                    <p className={style.name}>{props.to}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-offset-1 col-md-offset-4' />
          </div>
          <div className='row center-xs'>
            <div
              data-sal='slide-up'
              data-sal-delay={500}
              data-sal-duration={700}
              data-sal-easing='ease-out-quad'
            >
              <a href='#' role='button' onClick={handleIsCover}>
                Buka Undangan
                <span>
                  <img
                    src={openIcon}
                    alt=''
                    style={{
                      height: '1.1rem',
                      display: 'inline-block',
                      overflow: 'visible',
                      verticalAlign: '-0.24em',
                      marginLeft: '10px',
                    }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
