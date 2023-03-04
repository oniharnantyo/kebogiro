import { FC } from 'react';
import IEvent from '../../../../models/event';
import style from './style.module.css';
import { formatDate } from '../../../../libs/dayjs';

interface IEventProps {
  events: IEvent[];
}

type EventProps = FC<IEventProps>;

const Event: EventProps = ({ events }) => {
  return (
    <div className={`${style.event} container row around-xs`}>
      <div className='col-xs-12 col-md-6'></div>
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
  );
};

export default Event;
