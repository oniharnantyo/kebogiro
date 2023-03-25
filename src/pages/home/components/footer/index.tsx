import style from './style.module.css';
import footerImage from '../../../../assets/footer.webp';
import sal from 'sal.js';
import { useEffect } from 'react';

const footer = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section style={{ marginBottom: 0 }}>
      <div
        className={`${style.footer} row center-xs`}
        style={{
          backgroundImage: `url(${footerImage})`,
        }}
      >
        <div
          className='container'
          data-sal='fade'
          data-sal-duration={500}
          data-sal-easing='ease-out-quad'
        >
          <div className='row center-xs' style={{ height: '100%' }}>
            <div className='col-sm-offset-6' />
            <div className='col-xs-12 col-sm-6'>
              <div className='row middle-xs center-xs' style={{ height: '100%' }}>
                <div className={`col-xs-12 ${style.invitersWrapper}`}>
                  <p style={{ fontWeight: 'bold' }}>Turut Mengundang:</p>
                  <ul className={style.inviters}>
                    <li>Keluarga Bapak Buseri Dwi Prayitno</li>
                    <li>Keluarga Bapak Piyahno</li>
                  </ul>
                  <p className={style.groomBride}>Metta & Oni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
