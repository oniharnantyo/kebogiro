import './style.css';
import coverImage from '../../../../assets/cover.jpeg';

interface CoverProps {
  isCover: boolean;
  setIsCover: (e: any) => void;
}

const Cover = (props: CoverProps) => {
  const handleIsCover = (e: any) => {
    props.setIsCover(false);
  };

  return (
    <div className={`cover ${!props.isCover && 'uncover'}`}>
      <section
        className='container-fluid contentWrapper'
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className='textWrapper'>
          <h1 className='text title'>Erina &</h1>
          <h1 className='text title'>Kaesang</h1>
          <h3 className='text subtitle'>31 . 12 . 2023</h3>
        </div>
        <div className='btnFloating'>
          <a href='#' role='button' className='style.btn' onClick={handleIsCover}>
            Buka Undangan
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cover;
