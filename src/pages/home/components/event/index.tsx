import { FC, useEffect } from 'react';
import IEvent from '../../../../models/event';
import style from './style.module.css';
import { formatDate } from '../../../../libs/dayjs';
import Countdown from '../countdown';
import eventBackgroundImage from '../../../../assets/event-background.webp';
import event2Image from '../../../../assets/event2.webp';
import event3Image from '../../../../assets/event3.webp';
import sal from 'sal.js';

interface IEventProps {
  date: Date;
  events: IEvent[];
}

type EventProps = FC<IEventProps>;

const Event: EventProps = ({ date, events }) => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section>
      <div
        className={`${style.event}`}
        style={{
          backgroundImage: `url(${eventBackgroundImage})`,
        }}
      >
        <div className={`${style.contentWrapper} container`}>
          <div className='row' style={{ marginBottom: '3rem' }}>
            <div className='col-xs-12'>
              <Countdown date={date} />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              <div className={style.collageWrapper}>
                <div
                  className={`${style.photoWrapper} ${style.first}`}
                  data-sal='slide-right'
                  data-sal-duration={500}
                  data-sal-easing='ease-out-quad'
                >
                  <img src={event2Image} alt='' className={`${style.photo} ${style.first}`} />
                </div>
                <div
                  className={`${style.photoWrapper} ${style.second}`}
                  data-sal='slide-down'
                  data-sal-duration={300}
                  data-sal-delay={100}
                  data-sal-easing='ease-out-quad'
                >
                  <img src={event3Image} alt='' className={`${style.photo} ${style.second}`} />
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-md-6'>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '2rem',
                }}
              >
                {events.map((event, i) => (
                  <div
                    className='row'
                    data-sal='slide-left'
                    data-sal-duration={500}
                    data-sal-delay={i * 2000}
                    data-sal-easing='ease-out-quad'
                  >
                    <div
                      className='col-xs-12'
                      style={{
                        marginBottom: '0.5rem',
                      }}
                    >
                      <span className={style.title}>{event.title}</span>
                    </div>
                    <div className='col-xs-12'>
                      <span className={style.content}>
                        {formatDate(event.startDate, 'dddd, D MMMM YYYY')}
                      </span>
                    </div>
                    <div className='col-xs-12'>
                      <span className={style.content}>
                        {formatDate(event.startDate, 'HH:mm')} WIB -{' '}
                        {event.endDate && formatDate(event.endDate, 'HH:mm')} WIB
                      </span>
                    </div>
                    <div
                      className='col-xs-12'
                      style={{
                        marginTop: '0.5rem',
                      }}
                    >
                      <a href={event.placeLink} className={style.placelink}>
                        {event.place}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
