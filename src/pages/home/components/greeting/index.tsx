import { FC, useEffect, useState } from 'react';
import style from './style.module.css';
import IGreeting from '../../../../models/greeting';
import { addGreeting, fetchGreetings } from '../../../../services/greetings';
import { Form, Field } from 'react-final-form';
import sal from 'sal.js';

interface Values {
  name: string;
  greet: string;
}

interface Errors {
  name?: string;
  greet?: string;
}

const Greeting = () => {
  const [greetings, setGreetings] = useState(Array<IGreeting>);
  const [cursor, setCursor] = useState(new Date());
  const [isAppendData, setIsAppendData] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isNewGreeting, setIsNewGreeting] = useState(false);

  const onSubmit = async (values: Values) => {
    const req: IGreeting = {
      name: values.name,
      greet: values.greet,
      createdAt: new Date(),
    };

    await addGreeting(req);

    setIsAppendData(false);
    setIsNewGreeting(true);
    setCursor(new Date());
  };

  const handleLoadMore = () => {
    setIsAppendData(true);
    getGreetingsData();
  };

  const getGreetingsData = async () => {
    const perPage = 4;

    const { res, nextCursor } = await fetchGreetings({ perPage: perPage, cursor: cursor });

    if (!res.length || res.length < perPage) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }

    if (isAppendData) {
      setGreetings(greetings.concat(res));
    } else {
      setGreetings(res);
    }

    setCursor(nextCursor);
  };

  useEffect(() => {
    sal();
    getGreetingsData();
    setIsNewGreeting(false);
  }, [isNewGreeting]);

  return (
    <section className={`container ${style.greeting}`}>
      <h2
        className={style.title}
        data-sal='slide-down'
        data-sal-duration={500}
        data-sal-easing='ease-out-quad'
      >
        Pesan & Ucapan
      </h2>
      <div className='row'>
        <div className='col-md-offset-1' />
        <div className='col-xs'>
          <div
            className='container'
            data-sal='slide-up'
            data-sal-duration={500}
            data-sal-delay={200}
            data-sal-easing='ease-out-quad'
          >
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors: Errors = {};
                if (!values.name) {
                  errors.name = 'Wajib diisi';
                }
                if (!values.greet) {
                  errors.greet = 'Wajib diisi';
                }
                return errors;
              }}
              render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
                <form
                  onSubmit={async (event: any) => {
                    const error = await handleSubmit(event);
                    if (error) {
                      return error;
                    }
                    form.reset();
                    form.resetFieldState('name');
                    form.resetFieldState('greet');
                  }}
                >
                  <Field name='name'>
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor='name'>
                          Nama{' '}
                          {(meta.error || meta.submitError) && meta.touched && (
                            <span style={{ color: 'red' }}>{meta.error || meta.submitError}</span>
                          )}
                        </label>
                        <input type='text' {...input} name='name' />
                      </div>
                    )}
                  </Field>
                  <Field name='greet'>
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor='greet'>
                          Ucapan{' '}
                          {(meta.error || meta.submitError) && meta.touched && (
                            <span style={{ color: 'red' }}>{meta.error || meta.submitError}</span>
                          )}
                        </label>
                        <textarea {...input} name='greet' />
                      </div>
                    )}
                  </Field>
                  {submitError && <div className='error'>{submitError}</div>}
                  <div className='row center-xs'>
                    <div className='col-xs-12 col-md-6 col-lg-4'>
                      <button type='submit' disabled={submitting || pristine}>
                        Kirim Sekarang
                      </button>
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
        <div className='col-md-offset-1' />
      </div>
      <div className={`row ${style.greetings}`}>
        <div className='col-md-offset-1' />
        <div className='col-xs'>
          <div
            className='container'
            data-sal='slide-up'
            data-sal-duration={500}
            data-sal-delay={400}
            data-sal-easing='ease-out-quad'
          >
            <div>
              {greetings.map((greeting, index) => (
                <GreetingItem
                  key={index}
                  name={greeting.name}
                  greet={greeting.greet}
                  createdAt={greeting.createdAt}
                />
              ))}
            </div>
            <div className='row center-xs'>
              <div className='col-xs-12 col-md-6 col-lg-4'>
                <button className='outline' onClick={handleLoadMore} disabled={isLastPage}>
                  Lihat Lainnya
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-offset-1' />
      </div>
    </section>
  );
};

export default Greeting;

type greetingProps = FC<IGreeting>;

const GreetingItem: greetingProps = ({ name, greet }) => {
  return (
    <>
      <div className='row'>
        <div className='col-xs-12'>
          <p className={style.name}>{name}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12'>
          <p className={style.greet}>{greet}</p>
        </div>
      </div>
    </>
  );
};
