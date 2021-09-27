import SideBar from '../../../components/organisms/SideBar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import jwtDecode from 'jwt-decode';
import {
  HistoryTransitionTypes,
  JwtPayloadTypes,
  UserTypes,
} from '../../../services/datatypes';
import {getTransactionDetail} from '../../../services/member';

interface TransactionDetailProps {
  transactionDetail: HistoryTransitionTypes;
}

export default function TransactionDetail(props: TransactionDetailProps) {
  const {transactionDetail} = props;
  console.log(transactionDetail);
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

interface getServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({req, params}: getServerSideProps) {
  const {token} = req.cookies;
  // console.log('params', params);
  const {idTrx} = params;
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
  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      user: userFromPayload,
      transactionDetail: response.data,
    },
  };
}
