import { useEffect, useState } from 'react';
import style from './style.module.css';
import copyIcon from '../../../../assets/icon/copy.svg';
import linkaja from '../../../../assets/linkaja.jpeg';
import sal from 'sal.js';

const Gift = () => {
  const [gift, setGift] = useState('transfer');

  const handleGiftListSelected = (e: any) => {
    const val = e.target.value;
    setGift(val);
  };

  useEffect(() => {
    sal();
  }, []);

  return (
    <section className={`${style.gift}`} style={{ marginBottom: 0 }}>
      <div className='container'>
        <h2
          className={style.title}
          data-sal='slide-down'
          data-sal-duration={500}
          data-sal-easing='ease-out-quad'
        >
          Kirim Hadiah
        </h2>
        <div
          className='row'
          data-sal='slide-up'
          data-sal-duration={500}
          data-sal-easing='ease-out-quad'
        >
          <div className='col-md-offset-1' />
          <div className='col-xs-12 col-md-5'>
            <div
              className='container'
              data-sal='slide-up'
              data-sal-duration={500}
              data-sal-delay={200}
              data-sal-easing='ease-out-quad'
            >
              <fieldset onChange={handleGiftListSelected}>
                <div className={style.giftList}>
                  <label htmlFor='transfer'>
                    <input
                      type='radio'
                      id='transfer'
                      value='transfer'
                      name='gift'
                      checked={gift == 'transfer'}
                    />
                    BANK TRANSFER
                  </label>
                </div>
                <div className={style.giftList}>
                  <label htmlFor='linkaja'>
                    <input
                      type='radio'
                      id='linkaja'
                      value='linkaja'
                      name='gift'
                      checked={gift == 'linkaja'}
                    />
                    LINKAJA
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className='col-xs-12 col-md-5'>
            <div className='container'>
              <div className={style.placeholder}>
                {gift == 'transfer' && <BankDescription />}
                {gift == 'linkaja' && <LinkAjaDescription />}
              </div>
            </div>
          </div>
          <div className='col-md-offset-1' />
        </div>
      </div>
    </section>
  );
};

export default Gift;

const BankDescription = () => {
  return (
    <>
      <BankAccountItem account='6800837519' bank='Bank BCA' name='Oni Harnantyo'></BankAccountItem>
      <BankAccountItem
        account='0374036731'
        bank='Bank BCA'
        name='Dwiyana Mettasari'
      ></BankAccountItem>
    </>
  );
};

type BankAccountItemProps = {
  account: string;
  bank: string;
  name: string;
};

const BankAccountItem = ({ account, bank, name }: BankAccountItemProps) => {
  return (
    <ul className={style.bankAccountItem}>
      <li className={style.account}>
        {account}
        <a
          className={style.copyLink}
          onClick={() => {
            navigator.clipboard.writeText(account);
          }}
        >
          <img src={copyIcon} className={style.copyIcon} />
        </a>
      </li>
      <li>{bank}</li>
      <li>a.n. {name}</li>
      <hr style={{ borderColor: 'black' }} />
    </ul>
  );
};

const LinkAjaDescription = () => {
  return (
    <div>
      <img src={linkaja} alt='qr linkaja oni' />
      <p className={style.linkajaNote}>* Scan menggunakan aplikasi LinkAja</p>
    </div>
  );
};
