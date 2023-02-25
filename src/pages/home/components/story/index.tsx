import './style.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { FC } from 'react';
import gallery1Image from '../../../../assets/gallery/1.jpg';
import gallery7Image from '../../../../assets/gallery/7.jpeg';
import gallery2Image from '../../../../assets/gallery/2.jpg';

const Story = () => {
  return (
    <section className='story'>
      <div className='container'>
        <h2 className='title'>Perjalanan Kami</h2>
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
          navContainerClass='nav-container'
          navClass={['outline nav-button', 'outline nav-button']}
        >
          <StoryItem image={gallery1Image} year='2016' description='Pertama kali bertemu' />
          <StoryItem image={gallery7Image} year='2016' description='Pertama kali bertemu' />
          <StoryItem image={gallery2Image} year='2016' description='Pertama kali bertemu' />
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
          <img src={image} loading='lazy' className='image' />
        </div>
        <div className='col-xs-12 col-md-6'>
          <div style={{ height: '100%' }} className='row middle-xs center-xs'>
            <div className='row middle-xs center-xs'>
              <span className='vertical-divider top'></span>
              <div className='col-xs-12 year'>{year}</div>
              <div className='col-xs-12 description'>{description}</div>
              <span className='vertical-divider bottom'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
