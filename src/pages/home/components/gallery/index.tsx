import pantai1Image from '../../../../assets/gallery/pantai1.webp';
import pantai2Image from '../../../../assets/gallery/pantai2.webp';
import pantai3Image from '../../../../assets/gallery/pantai3.webp';
import pantai4Image from '../../../../assets/gallery/pantai4.webp';
import pantai5Image from '../../../../assets/gallery/pantai5.webp';
import pantai6Image from '../../../../assets/gallery/pantai6.webp';
import vihara1Image from '../../../../assets/gallery/vihara1.webp';
import vihara2Image from '../../../../assets/gallery/vihara2.webp';
import vihara3Image from '../../../../assets/gallery/vihara3.webp';
import vihara4Image from '../../../../assets/gallery/vihara4.webp';
import vihara5Image from '../../../../assets/gallery/vihara5.webp';
import vihara6Image from '../../../../assets/gallery/vihara6.webp';
import vihara7Image from '../../../../assets/gallery/vihara7.webp';
import pasar2Image from '../../../../assets/gallery/pasar2.webp';
import pasar3Image from '../../../../assets/gallery/pasar3.webp';
import pasar4Image from '../../../../assets/gallery/pasar4.webp';
import pasar5Image from '../../../../assets/gallery/pasar5.webp';
import gallerySingle from '../../../../assets/gallery/gallery-single.webp';

import style from './style.module.css';
import { useEffect } from 'react';
import sal from 'sal.js';

const images = [
  pantai1Image,
  pantai2Image,
  pantai3Image,
  pantai4Image,
  pantai5Image,
  pantai6Image,
  vihara1Image,
  vihara2Image,
  vihara3Image,
  vihara4Image,
  vihara7Image,
  vihara5Image,
  vihara6Image,
  pasar2Image,
  pasar3Image,
  pasar4Image,
  pasar5Image,
];

const Gallery = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section>
      <div className={`row ${style.head} center-xs container`}>
        <div className='col-xs-12 col-md-6'>
          <img
            src={gallerySingle}
            alt='gallery single'
            className={style.singleGallery}
            data-sal='flip-up'
            data-sal-duration={500}
            data-sal-easing='ease-out-quad'
          />
        </div>
        <div className='col-xs-12 col-md-6'>
          <div style={{ height: '100%' }} className='row middle-xs center-xs'>
            <div
              className='row middle-xs center-xs'
              data-sal='fade'
              data-sal-duration={500}
              data-sal-delay={300}
              data-sal-easing='ease-out-quad'
            >
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
              <a
                key={i}
                href={image}
                data-sal='flip-left'
                data-sal-duration={500}
                data-sal-delay={i * 1000}
                data-sal-easing='ease-out-quad'
              >
                <img src={image} alt='gallery' loading='lazy' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
