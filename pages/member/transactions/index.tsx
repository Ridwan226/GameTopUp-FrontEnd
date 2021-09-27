import SideBar from '../../../components/organisms/SideBar';
import TransactionContent from '../../../components/organisms/TransactionContent';
import jwtDecode from 'jwt-decode';
import {JwtPayloadTypes, UserTypes} from '../../../services/datatypes';
export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}

interface getServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({req}: getServerSideProps) {
  const {token} = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
