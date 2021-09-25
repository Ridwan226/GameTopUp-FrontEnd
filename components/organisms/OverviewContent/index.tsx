import {useEffect, useState, useCallback} from 'react';
import {setMemberOverview} from '../../../services/player';
import Category from './Category';
import {toast} from 'react-toastify';
import TableRow from './TableRow';
import {
  HistoryTransitionTypes,
  TopUpCategoriesTypes,
} from '../../../services/datatypes';

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviesAPI = useCallback(async () => {
    const response = await setMemberOverview();
    if (response.error === true) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, []);

  useEffect(() => {
    getMemberOverviesAPI();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item: TopUpCategoriesTypes) => {
                return (
                  <Category
                    key={item._id}
                    nominal={item.value}
                    icon="ic-desktop">
                    Game <br /> {item.name}
                  </Category>
                );
              })}
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: HistoryTransitionTypes) => {
                  return (
                    <TableRow
                      key={item._id}
                      title={item.historyVoucherTopup.gameName}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                      category={item.historyVoucherTopup.category}
                      price={item.value}
                      status={item.status}
                      image={item.historyVoucherTopup.thumbnail}
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
