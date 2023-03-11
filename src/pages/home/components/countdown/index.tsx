import { formatDate } from '../../../../libs/dayjs';
import { FC, useEffect, useState } from 'react';
import style from './style.module.css';
import sal from 'sal.js';

interface ICountdownProps {
  date: Date;
}

type CountdownProps = FC<ICountdownProps>;

const Countdown: CountdownProps = ({ date }) => {
  const formatedTime = formatDate(date, 'D MMMM YYYY');

  const timestamp = new Date(date).getTime();

  const [countDown, setCountDown] = useState(timestamp - new Date().getTime());

  useEffect(() => {
    sal();

    const interval = setInterval(() => {
      const timeLeft = timestamp - new Date().getTime();
      setCountDown(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = parseCountdown(countDown);

  return (
    <div>
      <div className='row center-xs'>
        <div className='col xs-12'>
          <h2
            className={style.date}
            data-sal='slide-down'
            data-sal-duration={1000}
            data-sal-easing='ease-out-quad'
          >
            {formatedTime}
          </h2>
        </div>
      </div>
      <div
        className='row around-xs center-xs'
        data-sal='fade'
        data-sal-delay={300}
        data-sal-duration={1000}
        data-sal-easing='ease-out-quad'
      >
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
    <div
      className={style.counter}
      style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}
    >
      <span className={style.counterItem}>{num}</span>
      <span className={style.counterLabel}>{label}</span>
    </div>
  );
};
