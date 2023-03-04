import style from './style.module.css';
import coverImage from '../../../../assets/cover.jpeg';

interface CoverProps {
  isCover: boolean;
  to: string;
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
          <div className='row center-xs'>
            <div className='col-xs-offset-1 col-md-offset-4' />
            <div className='col-xs-10 col-md-4'>
              <div className={style.to}>
                <div className='row'>
                  <div className='col-xs-12'>
                    <p>Kepada:</p>
                  </div>
                </div>
                <div className='row center-xs'>
                  <div className='col-xs-12'>
                    <p className={style.name}>{props.to}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-offset-1 col-md-offset-4' />
          </div>
          <div className='row center-xs'>
            <div>
              <a href='#' role='button' onClick={handleIsCover}>
                Buka Undangan
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
