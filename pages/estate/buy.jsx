import Head from 'next/head';
import styles from '../../styles/Buy.module.css';
import { MdSearch } from 'react-icons/md';
import Image from 'next/image';
import properties from '../../data/buy';
import { BuyDetail } from '../../components/BuyDetail';

const Buy = () => {
  return (
    <>
      <Head>
        <link rel="Fastbier icon" href="/logo.svg" type="image/x-icon" />
        <title>Fastbier | Sell </title>
        <meta
          name="description"
          content="Buy land and property with fastbier"
        />
      </Head>
      <section className={styles.background}>
        <div id="content" className="w-full h-full">
          <div className="hidden pt-[300px] md:flex flex-row mx-auto max-w-6xl w-full">
            <div className="px-5 md:flex items-center bg-white w-4/5">
              <label htmlFor="search" className="top-[2rem]">
                <MdSearch className="text-2xl text-shark-300" />
              </label>
              <input
                type="search"
                name=""
                id="search"
                className="w-4/5 pl-5 outline-none placeholder:font-poppins placeholder:pl-5"
                placeholder="Search home land and agent"
              />
              <button className="bg-shadow-500 hover:bg-shadow-600 text-shadow-100 py-1 px-7">
                Search
              </button>
            </div>
            <button className="bg-shark-500 py-3 px-7 ml-5">
              <Image src="/filter.svg" alt="filter" width="15" height="15" />
              <span className="ml-2 text-shadow-100">Filter</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <BuyDetail properties={properties} finder='lekki' />
        <BuyDetail properties={properties} finder='magodo' />
        <BuyDetail properties={properties} finder='vi' />
      </section>
    </>
  );
};

export default Buy;
