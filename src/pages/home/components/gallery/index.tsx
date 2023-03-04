import gallery4Image from '../../../../assets/gallery/4.jpeg';
import gallery1Image from '../../../../assets/gallery/1.jpg';
import gallery8Image from '../../../../assets/gallery/8.jpg';
import gallery7Image from '../../../../assets/gallery/7.jpeg';
import gallery3Image from '../../../../assets/gallery/3.jpg';
import gallery5Image from '../../../../assets/gallery/5.jpeg';
import gallery2Image from '../../../../assets/gallery/2.jpg';
import style from './style.module.css';

const images = [
  gallery4Image,
  gallery1Image,
  gallery8Image,
  gallery7Image,
  gallery3Image,
  gallery5Image,
  gallery2Image,
];

const Gallery = () => {
  return (
    <section className='container'>
      <div className={`row ${style.head} center-xs`}>
        <div className='col-xs-12 col-md-6'>
          <img src={gallery5Image} alt='' />
        </div>
        <div className='col-xs-12 col-md-6'>
          <div style={{ height: '100%' }} className='row middle-xs center-xs'>
            <div className='row middle-xs center-xs'>
              <span className={`${style.verticalDivider} ${style.top}`}></span>
              <div className='col-xs-12'>
                <p className='quote'>
                  “Bila dalam perjalanan hidupmu, <br />
                  engkau menemukan seorang teman yang bijaksana dan cocok untuk hidup denganmu,{' '}
                  <br />
                  hendaklah engkau berjalan bersamanya, <br />
                  dengan gembira dan penuh kesadaran mengatasi segala bahaya.”
                </p>
                <p className='quote'>Dhammapada XXIII – 328</p>
              </div>
              <span className={`${style.verticalDivider} ${style.bottom}`}></span>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12'>
          <div className='flexbin'>
            {images.map((image, i) => (
              <a key={i} href={image}>
                <img src={image} loading='lazy' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
