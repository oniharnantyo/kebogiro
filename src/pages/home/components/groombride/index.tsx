import style from './style.module.css';
import brideImage from '../../../../assets/bride.jpg';
import groomImage from '../../../../assets/groom.jpg';
import igLogo from '../../../../assets/icon/ig.svg';

const Groom = {
  name: 'Kaesang Pangarep',
  parents: 'Bapak Joko Widodo dan Ibu Iriana',
  ig: '',
};

const Bride = {
  name: 'Erina Sofia Gudono',
  parents: 'Bapak Gudono dan Ibu Sofiatun',
  ig: '',
};

const GroomBride = () => {
  return (
    <section
      className='container'
      style={{
        padding: '4rem 2rem',
      }}
    >
      <div>
        <div className={`${style.bride} row around-xs`}>
          <div className={`${style.content} col-6`}>
            <p className={style.name}>{Bride.name}</p>
            <p className={style.childOf}>Putri dari:</p>
            <p>{Bride.parents}</p>
            <p>
              <img src={igLogo} alt='ig logo' className={style.logo} />
              <a href={Bride.ig}>@username</a>
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
                  <img src={groomImage} alt='groom' />
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.content} col-6`}>
            <p className={style.name}>{Groom.name}</p>
            <p className={style.childOf}>Putra dari:</p>
            <p>{Groom.parents}</p>
            <p>
              <img src={igLogo} alt='ig logo' className={style.logo} />
              <a href={Groom.ig}>@username</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomBride;
