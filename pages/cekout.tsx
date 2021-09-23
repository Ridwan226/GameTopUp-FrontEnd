import Image from 'next/image';
import Link from 'next/link';
import CheckOutDetail from '../components/molecules/CheckOutDetail';
import CheckOutConfirmation from '../components/organisms/CheckOutConfirmation';
import CheckOutItem from '../components/organisms/CheckOutItem';
import jwtDecode from 'jwt-decode';
import {JwtPayloadTypes, UserTypes} from '../../../services/datatypes';

interface CheckOutProps {
  user: UserTypes;
}

export default function Cekout(props: CheckOutProps) {
  const {user} = props;

  console.log(user);

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

export async function getServerSideProps({req}) {
  const {token} = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JwtPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMAGE2;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
