import gallery4Image from '../../../../assets/gallery/4.jpeg';
import gallery1Image from '../../../../assets/gallery/1.jpg';
import gallery8Image from '../../../../assets/gallery/8.jpg';
import gallery7Image from '../../../../assets/gallery/7.jpeg';
import gallery3Image from '../../../../assets/gallery/3.jpg';
import gallery5Image from '../../../../assets/gallery/5.jpeg';
import gallery2Image from '../../../../assets/gallery/2.jpg';

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
    <section className={'container-fluid'}>
      <div className='flexbin'>
        {images.map((image, i) => (
          <a key={i} href={image}>
            <img src={image} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
