import {useState} from 'react';
import Link from 'next/link';
import {
  BankTypes,
  NominalTypes,
  PaymentTypes,
} from '../../../services/datatypes';
import NominalItem from './NominalItem';
import PaymentItem from './PaymentItem';
import {useRouter} from 'next/router';

interface TopUpFormProps {
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

export default function TopUpForm(props: TopUpFormProps) {
  const [verifyID, setVerifyID] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const {nominals, payments} = props;
  const router = useRouter();
  const onNominaItemChange = (data: NominalTypes) => {
    setNominalItem(data);
  };

  const onPaymentChange = (payment: PaymentTypes, bank: BankTypes) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyID === '' ||
      bankAccountName === '' ||
      nominalItem === {} ||
      paymentItem === {}
    ) {
      alert('Silahkan Isi Semua Data');
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem('data-topup', JSON.stringify(data));
      router.push('/cekout');
    }
  };

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => {
            return (
              <NominalItem
                _id={nominal._id}
                coinQuantity={nominal.coinQuantity}
                coinName={nominal.coinName}
                price={nominal.price}
                onChange={() => onNominaItemChange(nominal)}
              />
            );
          })}
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) => {
              return payment.banks.map((bank) => (
                <PaymentItem
                  bankID={bank._id}
                  name={bank.bankName}
                  type={payment.type}
                  onChange={() => onPaymentChange(payment, bank)}
                />
              ));
            })}

            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          onClick={onSubmit}
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">
          Continue
        </button>
      </div>
    </form>
  );
}
