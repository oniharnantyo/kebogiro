import { FC } from 'react';
import IEvent from '../../../../models/event';
import './style.css';
import { formatDate } from '../../../../libs/dayjs';
import './style.css';

interface IEventProps {
  events: IEvent[];
}

type EventProps = FC<IEventProps>;

const Event: EventProps = ({ events }) => {
  return (
    <div className='event container row around-xs'>
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
                <span className='event__title'>{e.title}</span>
              </div>
              <div className='col-xs-12'>
                <span className='event__content'>
                  {formatDate(e.startDate, 'dddd, D MMMM YYYY')}
                </span>
              </div>
              <div className='col-xs-12'>
                <span className='event__content'>
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
                <a href={e.placeLink} className='event__placelink'>
                  <p>{e.place}</p>
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
