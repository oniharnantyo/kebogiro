import { FC } from 'react';
import './style.css';
import IGreeting from '../../../../models/greeting';

const Greeting = () => {
  return (
    <div className='container greeting'>
      <h2 className='title'>Pesan & Ucapan</h2>
      <div className='row'>
        <div className='col-md-offset-1' />
        <div className='col-xs'>
          <form action=''>
            <label htmlFor='name'>Nama</label>
            <input type='text' name='name' />
            <label htmlFor='greet'>Ucapan</label>
            <textarea name='greet' />
            <button>Kirim Sekarang</button>
          </form>
        </div>
        <div className='col-md-offset-1' />
      </div>
      <div className='row greetings'>
        <div className='col-md-offset-1' />
        <div className='col-xs'>
          <div>
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
            <GreetingItem
              name='John Doe'
              greet='Selamat menempuh kehidupan baru yang sesungguhnya, semoga menjadikan sakinah mawaddah warohmah, serta diberikan keturunan yang sholeh dan sholehah….Aamiin Ya Rabbal Alamiin'
            />
          </div>
          <div className='row'>
            <div className='col-xs-offset-3' />
            <div className='col-xs'>
              <button className='outline'>Load More</button>
            </div>
            <div className='col-xs-offset-3' />
          </div>
        </div>
        <div className='col-md-offset-1' />
      </div>
    </div>
  );
};

export default Greeting;

type greetingProps = FC<IGreeting>;

const GreetingItem: greetingProps = ({ name, greet }) => {
  return (
    <>
      <div className='row'>
        <div className='col-xs-12'>
          <p className='greeting-items__name'>{name}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12'>
          <p className='greeting-items__greet'>{greet}</p>
        </div>
      </div>
    </>
  );
};
