import Category from './Category';
import TableRow from './TableRow';

export default function OverviewContent() {
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
              <Category nominal={18500000} icon="ic-desktop">
                Game <br /> Desktop
              </Category>

              <Category nominal={18500000} icon="ic-mobile">
                <p className="color-palette-1 mb-0 ms-12">
                  Game
                  <br /> Mobile
                </p>
              </Category>

              <Category nominal={5000000} icon="ic-desktop">
                <p className="color-palette-1 mb-0 ms-12">
                  Other
                  <br /> Categories
                </p>
              </Category>
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
                <TableRow
                  title="Legends:The NewBattle 2021"
                  item={200}
                  category="Desktop"
                  price={290000}
                  status="Pending"
                  image="overview-1"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
