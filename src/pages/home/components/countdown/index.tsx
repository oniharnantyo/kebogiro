import { formatDate } from '../../../../libs/dayjs';
import countdownImage from '../../../../assets/countdown.jpg';
import { FC, useEffect, useState } from 'react';
import './style.css';

interface ICountdownProps {
  date: Date;
}

type CountdownProps = FC<ICountdownProps>;

const Countdown: CountdownProps = ({ date }) => {
  const formatedTime = formatDate(date, 'D MMMM YYYY');

  const timestamp = new Date(date).getTime();

  const [countDown, setCountDown] = useState(timestamp - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = timestamp - new Date().getTime();
      setCountDown(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const { days, hours, minutes, seconds } = parseCountdown(countDown);

  return (
    <div
      className='countdown'
      style={{
        backgroundImage: `url(${countdownImage})`,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          inset: '0px',
          overflow: 'hidden',
        }}
      >
        <div
          className='container'
          style={{
            position: 'relative',
          }}
        >
          <div className='row center-xs'>
            <div className='col xs-12'>
              <h2 className='date'>{formatedTime}</h2>
            </div>
          </div>
          <div className='row around-xs center-xs'>
            <div className='col-md-offset-2' />
            <div className='col-xs'>
              <CounterItem num={days} label='Hari'></CounterItem>
            </div>
            <div className='col-xs'>
              <CounterItem num={hours} label='Jam'></CounterItem>
            </div>
            <div className='col-xs'>
              <CounterItem num={minutes} label='Menit'></CounterItem>
            </div>
            <div className='col-xs'>
              <CounterItem num={seconds} label='Detik'></CounterItem>
            </div>
            <div className='col-md-offset-2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

const parseCountdown = (timestamp: number) => {
  const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timestamp % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

type CounterItemProps = {
  num: number;
  label: string;
};

const CounterItem = ({ num, label }: CounterItemProps) => {
  return (
    <div className='counter' style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
      <span className='counter__item'>{num}</span>
      <span className='counter__label'>{label}</span>
    </div>
  );
};
