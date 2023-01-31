import './style.css';
import footerImage from '../../../../assets/footer.jpeg';

const footer = () => {
  return (
    <section style={{ marginBottom: 0 }}>
      <div
        className='footer row center-xs'
        style={{
          backgroundImage: `url(${footerImage})`,
        }}
      >
        <div className='container'>
          <p style={{ fontWeight: 'bold' }}>Turut Mengundang:</p>
          <ul className='inviters'>
            <li>Keluarga Ibu Sofiatun</li>
            <li>Keluarga Bapak Joko Widodo</li>
          </ul>
          <p className='groomBride'>Erina & Kesang</p>
        </div>
      </div>
    </section>
  );
};

export default footer;
