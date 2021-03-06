import AOS from 'aos';
import type {NextPage} from 'next';
import {useEffect} from 'react';
import FeaturedGames from '../components/organisms/FeaturedGames';
import Footer from '../components/organisms/Footer';
import MainBanner from '../components/organisms/MainBanner';
import Navbar from '../components/organisms/Navbar';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import TransactionStep from '../components/organisms/TransactionStep';
import Head from 'next/head';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Head>
        <title>Store GG</title>
      </Head>

      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGames />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
