import style from './style.module.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { FC, useEffect } from 'react';
import story1Image from '../../../../assets/story/1.webp';
import story2Image from '../../../../assets/story/2.webp';
import story3Image from '../../../../assets/story/3.webp';
import story4Image from '../../../../assets/story/4.webp';
import story5Image from '../../../../assets/story/5.webp';
import sal from 'sal.js';

const Story = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section className={style.story}>
      <div className='container'>
        <h2
          className={style.title}
          data-sal='slide-up'
          data-sal-duration={1000}
          data-sal-easing='ease-out-quad'
        >
          Perjalanan Kami
        </h2>
        <OwlCarousel
          className='carousel owl-theme owl-loaded owl-drag'
          items={1}
          margin={10}
          autoplay={true}
          autoplayTimeout={3000}
          loop={true}
          dots={false}
          lazyLoad={true}
          nav={true}
          navContainerClass={style.navContainer}
          navClass={[`outline ${style.navButton}`, `outline ${style.navButton}`]}
          data-sal='slide-up'
          data-sal-duration={700}
          data-sal-delay={200}
          data-sal-easing='ease-out-quad'
        >
          <StoryItem
            image={story3Image}
            year='2015'
            description='Pertama kali bertemu di Yogyakarta'
          />
          <StoryItem
            image={story4Image}
            year='2016'
            description='Memutuskan untuk menjalin hubungan'
          />
          <StoryItem
            image={story2Image}
            year='2019'
            description='Berpisah kota untuk menggapai mimpi masing-masing'
          />
          <StoryItem
            image={story5Image}
            year='2023'
            description='Akhirnya, resmi menjadi suami & istri'
          />
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Story;

interface IStoryItemProps {
  image: string;
  year: string;
  description: string;
}

type StoryItemProps = FC<IStoryItemProps>;

const StoryItem: StoryItemProps = ({ image, year, description }) => {
  return (
    <div className='item'>
      <div className='row'>
        <div className='col-xs-12 col-md-6'>
          <img src={image} loading='lazy' />
        </div>
        <div className='col-xs-12 col-md-6'>
          <div style={{ height: '100%' }} className='row middle-xs center-xs'>
            <div className='container'>
              <span className={`${style.verticalDivider} ${style.top}`}></span>
              <div className={`col-xs-12 ${style.year}`}>{year}</div>
              <div className={`col-xs-12 ${style.description}`}>
                <p>{description}</p>
              </div>
              <span className={`${style.verticalDivider} ${style.bottom}`}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
