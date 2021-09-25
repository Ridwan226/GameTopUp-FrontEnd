import Link from 'next/link';
import {useState} from 'react';
import {toast} from 'react-toastify';
import {useRouter} from 'next/router';
import {setCheckOut} from '../../../services/player';

export default function CheckOutConfirmation() {
  const [checkBox, setCheckBox] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem('data-item');
    const dataTopUpLocal = localStorage.getItem('data-topup');

    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopup = JSON.parse(dataTopUpLocal!);

    if (!checkBox) {
      return toast.error('Pastikan Anda Telah Melakukan Pembayaran');
    }

    const data = {
      voucher: dataItem._id,
      nominal: dataTopup.nominalItem._id,
      payment: dataTopup.paymentItem.payment._id,
      bank: dataTopup.paymentItem.bank._id,
      name: dataTopup.bankAccountName,
      accountUser: dataTopup.verifyID,
    };

    const result = await setCheckOut(data);

    if (result.error === true) {
      toast.error(result.message);
    } else {
      toast.success('Checkout Berhasil');
      router.push('/complete-checkout');
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkBox}
          onChange={() => setCheckBox(!checkBox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}>
          Confirm Payment
        </button>
      </div>
    </>
  );
}
