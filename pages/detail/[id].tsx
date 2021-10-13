import {useRouter} from 'next/router';
import {useCallback, useEffect, useState} from 'react';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import TopUpForm from '../../components/organisms/TopUpForm';
import TopUpItem from '../../components/organisms/TopUpItem';
import {
  GameItemTypes,
  NominalTypes,
  PaymentTypes,
} from '../../services/datatypes';
import {getDetailVoucher, getFeatureGame} from '../../services/player';

interface DetailProps {
  dataItem: GameItemTypes;
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

export default function Detail({dataItem, nominals, payments}: DetailProps) {
  useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem));
  }, []);

  // const [dataItem, setDataItem] = useState({
  //   name: '',
  //   thumbnail: '',
  //   category: {
  //     name: '',
  //   },
  // });

  // const [nominals, setNominals] = useState([]);
  // const [payments, setPayments] = useState([]);
  // const {query, isReady} = useRouter();

  // const getVoucherDetailApi = useCallback(async (id) => {
  //   const data = await getDetailVoucher(id);
  //   setDataItem(data.detail);
  //   localStorage.setItem('data-item', JSON.stringify(data.detail));
  //   setNominals(data.detail.nominals);
  //   setPayments(data.payment);
  // }, []);

  // useEffect(() => {
  //   if (isReady) {
  //     getVoucherDetailApi(query.id);
  //   }
  // }, [isReady]);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <TopUpItem type="mobile" data={dataItem} />
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" data={dataItem} />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const data = await getFeatureGame();
  const paths = data.map((item: GameItemTypes) => {
    return {
      params: {id: item._id},
    };
  });

  return {
    paths,
    fallback: false,
  };
}

interface GetStatusProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({params}: GetStatusProps) {
  const {id} = params;
  const data = await getDetailVoucher(id);
  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payments: data.payment,
    },
  };
}
