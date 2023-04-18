import style from './style.module.css';
import brideImage from '../../../../assets/bride.webp';
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
    <section className={`container ${style.groomBride}`}>
      <div className='row center-xs'>
        <div className='col-md-offset-2' />
        <div className='col-xs column-md-8'>
          <p style={{ fontStyle: 'italic', fontWeight: 'light' }}>
            "Jika dua orang ditakdirkan bersama, maka dari sudut bumi mana pun mereka berasal,
            mereka pasti bertemu. Demikianlah.”
            <br />
            <span>~ Tere Liye ~</span>
          </p>
        </div>
        <div className='col-md-offset-2' />
      </div>
      <div className={`${style.bride} row around-xs`}>
        <div
          className={`${style.content} col-6`}
          data-sal='slide-down'
          data-sal-duration={500}
          data-sal-easing='ease-out-quad'
        >
          <p className={style.name}>{Bride.name}</p>
          <p className={style.childOf}>Putri kedua dari:</p>
          <p style={{ marginBottom: '5px' }}>{Bride.parents}</p>
          <div className='row center-xs'>
            <img src={igLogo} alt='ig logo' className={style.logo} />
            <a href={Bride.igLink} target='_blank'>
              {Bride.ig}
            </a>
          </div>
        </div>
        <div className='col-6'>
          <div className={style.personWrapper}>
            <div className={`${style.personBg} ${style.bride}`}>
              <p className={style.personTitle}> The Bride</p>
            </div>
            <div className={style.imageFrame}>
              <div className={style.imageWrapper}>
                <img
                  src={brideImage}
                  alt='bride'
                  data-sal='slide-left'
                  data-sal-duration={500}
                  data-sal-easing='ease-out-quad'
                />
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
          <p className={style.childOf}>Putra tunggal dari:</p>
          <p style={{ marginBottom: '5px' }}>{Groom.parents}</p>
          <div className='row center-xs'>
            <img src={igLogo} alt='ig logo' className={style.logo} />
            <a href={Groom.igLink} target='_blank'>
              {Groom.ig}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomBride;
