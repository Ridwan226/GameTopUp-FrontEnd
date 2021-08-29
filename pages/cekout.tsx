import Image from 'next/image';
import Link from 'next/link';
import CheckOutDetail from '../components/molecules/CheckOutDetail';
import CheckOutConfirmation from '../components/organisms/CheckOutConfirmation';
import CheckOutItem from '../components/organisms/CheckOutItem';

export default function Cekout() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="/">
            <a className="">
              <Image src="/icon/logo.svg" width="60" height="60" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckOutItem />
        <hr />
        <CheckOutDetail />
        <CheckOutConfirmation />
      </div>
    </section>
  );
}
