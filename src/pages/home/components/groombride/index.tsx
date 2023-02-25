import './style.css';
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
        <div className='bride row around-xs'>
          <div className='content col-6'>
            <p className='name'>{Bride.name}</p>
            <p className='childOf'>Putri dari:</p>
            <p>{Bride.parents}</p>
            <p>
              <img src={igLogo} alt='' className='logo' />
              <a href={Bride.ig}>@username</a>
            </p>
          </div>
          <div className='col-6'>
            <div className='personWrapper'>
              <div className='personBg bride'>
                <p className='personTitle'> The Bride</p>
              </div>
              <div className='imageFrame'>
                <div className='imageWrapper'>
                  <img src={brideImage} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='groom row around-xs'>
          <div className='col-6'>
            <div className='personWrapper'>
              <div className='personBg groom'>
                <p className='personTitle'> The Groom</p>
              </div>
              <div className='imageFrame'>
                <div className='imageWrapper'>
                  <img src={groomImage} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='content col-6'>
            <p className='name'>{Groom.name}</p>
            <p className='childOf'>Putra dari:</p>
            <p>{Groom.parents}</p>
            <p>
              <img src={igLogo} alt='' className='logo' />
              <a href={Groom.ig}>@username</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomBride;
