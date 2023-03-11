import style from './style.module.css';
import brideImage from '../../../../assets/bride.jpg';
import groomImage from '../../../../assets/groom.webp';
import igLogo from '../../../../assets/icon/ig.svg';
import { useEffect } from 'react';
import sal from 'sal.js';

const Groom = {
  name: 'Oni Harnantyo',
  parents: 'Bapak Piyahno dan Ibu Sri Rahayu',
  ig: '@oniharnantyo',
  igLink: 'https://www.instagram.com/oniharnantyo/',
};

const Bride = {
  name: 'Dwiyana Mettasari',
  parents: 'Bapak Buseri Dwi Prayitno dan Ibu Sawitah',
  ig: '@dymettas98',
  igLink: 'https://www.instagram.com/dymettas98/',
};

const GroomBride = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section
      className='container'
      style={{
        padding: '4rem 2rem',
      }}
    >
      <div className={`${style.bride} row around-xs`}>
        <div
          className={`${style.content} col-6`}
          data-sal='slide-down'
          data-sal-duration={500}
          data-sal-easing='ease-out-quad'
        >
          <p className={style.name}>{Bride.name}</p>
          <p className={style.childOf}>Putri dari:</p>
          <p>{Bride.parents}</p>
          <p>
            <img
              src={igLogo}
              alt='ig logo'
              className={style.logo}
              data-sal='slide-left'
              data-sal-duration={500}
              data-sal-easing='ease-out-quad'
            />
            <a href={Bride.igLink} target='_blank'>
              {Bride.ig}
            </a>
          </p>
        </div>
        <div className='col-6'>
          <div className={style.personWrapper}>
            <div className={`${style.personBg} ${style.bride}`}>
              <p className={style.personTitle}> The Bride</p>
            </div>
            <div className={style.imageFrame}>
              <div className={style.imageWrapper}>
                <img src={brideImage} alt='bride' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.groom} row around-xs`}>
        <div className='col-6'>
          <div className={style.personWrapper}>
            <div className={`${style.personBg} ${style.groom}`}>
              <p className={style.personTitle}> The Groom</p>
            </div>
            <div className={style.imageFrame}>
              <div className={style.imageWrapper}>
                <img
                  src={groomImage}
                  alt='groom'
                  data-sal='slide-right'
                  data-sal-duration={500}
                  data-sal-easing='ease-out-quad'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.content} col-6`}
          data-sal='slide-up'
          data-sal-duration={500}
          data-sal-easing='ease-out-quad'
        >
          <p className={style.name}>{Groom.name}</p>
          <p className={style.childOf}>Putra dari:</p>
          <p>{Groom.parents}</p>
          <p>
            <img src={igLogo} alt='ig logo' className={style.logo} />
            <a href={Groom.igLink} target='_blank'>
              {Groom.ig}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroomBride;
