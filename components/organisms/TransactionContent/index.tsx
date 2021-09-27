import ButtonTab from './ButtonTab';
import TabelRow from './TabelRow';
import {useEffect, useState, useCallback} from 'react';
import {getMemberTransaction} from '../../../services/member';
import {toast} from 'react-toastify';
import NumberFormat from 'react-number-format';
import {HistoryTransitionTypes} from '../../../services/datatypes';

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [tab, setTab] = useState('all');

  const getMemberTransactionAPI = useCallback(async (value) => {
    const response = await getMemberTransaction(value);
    if (response.error === true) {
      toast.error(response.message);
    } else {
      setTotal(response.data.total);
      setTransaction(response.data.data);
      console.log(response);
    }
  }, []);

  useEffect(() => {
    getMemberTransactionAPI('all');
  }, []);

  const onTabClick = (value) => {
    setTab(value);
    getMemberTransactionAPI(value);
  };

  const IMG = process.env.NEXT_PUBLIC_IMAGE2;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat
              value={total}
              prefix="Rp. "
              displayType="text"
              decimalSeparator=","
              thousandSeparator="."
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                title="All Trx"
                active={tab === 'all'}
                onClick={() => onTabClick('all')}
              />
              <ButtonTab
                title="success"
                active={tab === 'success'}
                onClick={() => onTabClick('success')}
              />
              <ButtonTab
                title="pending"
                active={tab === 'pending'}
                onClick={() => onTabClick('pending')}
              />
              <ButtonTab
                title="failed"
                active={tab === 'failed'}
                onClick={() => onTabClick('failed')}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transaction.map((item: HistoryTransitionTypes) => {
                  return (
                    <TabelRow
                      key={item._id}
                      title={item.historyVoucherTopup.category}
                      category={item.historyVoucherTopup.coinName}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName} `}
                      price={item.value}
                      status={item.status}
                      image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                      id={item._id}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
