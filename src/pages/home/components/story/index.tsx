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
          data-sal-duration={500}
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
          data-sal-duration={500}
          data-sal-delay={200}
          data-sal-easing='ease-out-quad'
        >
          <StoryItem
            image={story1Image}
            year='2016'
            description='Dua individu berusaha mendekatkan diri dan bersepakat menjalin hubungan.'
          />
          <StoryItem
            image={story3Image}
            year='2017'
            description='Kata orang mempertahankan suatu hubungan lebih sulit daripada memulai begitupula dengan kami. Suka dan duka kami lalui yang membuat kami bertumbuh.'
          />
          <StoryItem
            image={story4Image}
            year='2019'
            description='Setelah menyelesaikan pendidikan, kami harus berpisah kota untuk menggapai mimpi masing-masing. Metta memutuskan untuk kembali ke kampung halaman di Tanjungpinang sedangkan Oni berada di Yogyakarta. Terpisah 1.171 km bukan merupakan suatu halangan untuk terus berkomitmen satu sama lain.'
          />
          <StoryItem
            image={story5Image}
            year='2023'
            description='Penantian memang melelahkan, akhirnya kami memutuskan untuk menikah, berjanji untuk bersama hingga ajal memisahkan.'
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
          <img src={image} className={style.image} loading='lazy' />
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
