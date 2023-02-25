import { useState } from 'react';
import './style.css';
import copyIcon from '../../../../assets/icon/copy.svg';

const Gift = () => {
  const [gift, setGift] = useState('transfer');

  const handleGiftListSelected = (e: any) => {
    const val = e.target.value;
    setGift(val);
  };

  return (
    <div className='gift'>
      <div className='container'>
        <h2 className='title'>Kirim Hadiah</h2>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='container'>
              <fieldset onChange={handleGiftListSelected}>
                <div className='gift-list'>
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
                <div className='gift-list'>
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
          <div className='col-xs-12 col-md-6'>
            <div className='container'>
              <div className='placeholder'>
                {gift == 'transfer' && <BankDescription />}
                {gift == 'linkaja' && <LinkAjaDescription />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;

const BankDescription = () => {
  return (
    <>
      <BankAccountItem account='123123121' bank='Bank BCA' name='Oni Harnantyo'></BankAccountItem>
      <BankAccountItem account='123123122' bank='Bank BCA' name='Oni Harnantyo'></BankAccountItem>
      <BankAccountItem account='123123123' bank='Bank BCA' name='Oni Harnantyo'></BankAccountItem>
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
    <ul className='bank-account-item'>
      <li className='account'>
        {account}
        <a
          className='copy-link'
          onClick={() => {
            navigator.clipboard.writeText(account);
          }}
        >
          <img src={copyIcon} className='copy-icon' />
        </a>
      </li>
      <li>{bank}</li>
      <li>a.n. {name}</li>
      <hr style={{ borderColor: 'black' }} />
    </ul>
  );
};

const LinkAjaDescription = () => {
  return <>bbb</>;
};
