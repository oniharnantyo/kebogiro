import './style.css';
import brideImage from '../../../../assets/bride.jpg';
import groomImage from '../../../../assets/groom.jpg';

const Groom = {
  name: 'Kaesang Pangarep',
  parents: 'Bapak Joko Widodo dan Ibu Iriana',
};

const Bride = {
  name: 'Erina Sofia Gudono',
  parents: 'Bapak Gudono dan Ibu Sofiatun',
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

        <div className={`groom row around-xs`}>
          <div className='col-6'>
            <div className='personWrapper'>
              <div className={`personBg groom`}>
                <p className='personTitle'> The Groom</p>
              </div>
              <div className='imageFrame'>
                <div className='imageWrapper'>
                  <img src={groomImage} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className={`content col-6`}>
            <p className='name'>{Groom.name}</p>
            <p className='childOf'>Putra dari:</p>
            <p>{Groom.parents}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomBride;
