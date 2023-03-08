import { FC } from 'react';
import IEvent from '../../../../models/event';
import style from './style.module.css';
import { formatDate } from '../../../../libs/dayjs';
import Countdown from '../countdown';
import eventBackgroundImage from '../../../../assets/event-background.webp';
import event1Image from '../../../../assets/event1.webp';
import event2Image from '../../../../assets/event2.webp';
import event3Image from '../../../../assets/event3.webp';

interface IEventProps {
  date: Date;
  events: IEvent[];
}

type EventProps = FC<IEventProps>;

const Event: EventProps = ({ date, events }) => {
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
                <div className={`${style.photoWrapper} ${style.first}`}>
                  <img src={event2Image} alt='' className={`${style.photo} ${style.first}`} />
                </div>
                <div className={`${style.photoWrapper} ${style.second}`}>
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
                {events.map((e) => (
                  <div className='row'>
                    <div
                      className='col-xs-12'
                      style={{
                        marginBottom: '0.5rem',
                      }}
                    >
                      <span className={style.title}>{e.title}</span>
                    </div>
                    <div className='col-xs-12'>
                      <span className={style.content}>
                        {formatDate(e.startDate, 'dddd, D MMMM YYYY')}
                      </span>
                    </div>
                    <div className='col-xs-12'>
                      <span className={style.content}>
                        {formatDate(e.startDate, 'HH:mm')} WIB -{' '}
                        {e.endDate && formatDate(e.endDate, 'HH:mm')} WIB
                      </span>
                    </div>
                    <div
                      className='col-xs-12'
                      style={{
                        marginTop: '0.5rem',
                      }}
                    >
                      <a href={e.placeLink} className={style.placelink}>
                        {e.place}
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
