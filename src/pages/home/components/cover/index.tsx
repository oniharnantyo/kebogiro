import style from './style.module.css';
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
    <div className={`${style.cover} ${!props.isCover && style.uncover}`}>
      <section
        className={`container-fluid ${style.contentWrapper}`}
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className={`${style.textWrapper}`}>
          <h1 className={`${style.text} ${style.title}`}>Erina &</h1>
          <h1 className={`${style.text} ${style.title}`}>Kaesang</h1>
          <h3 className={`${style.text} ${style.subtitle}`}>31 . 12 . 2023</h3>
        </div>
        <div className={`${style.btnFloating}`}>
          <a href='#' role='button' onClick={handleIsCover}>
            Buka Undangan
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cover;
