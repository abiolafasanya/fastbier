import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Buy.module.css';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import { TbCurrencyNaira } from 'react-icons/tb';
import Image from 'next/image';
import properties from '../../data/buy';

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
          <div className="pt-[300px] flex flex-row mx-auto max-w-6xl w-full">
            <div className="px-5 flex items-center bg-white w-4/5">
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
        <div className="flex flex-col mx-auto max-w-6xl w-full pt-24">
          <h1 className="text-2xl font-bold text-center">
            Lekki houses for sale
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {properties.map((item, index) => (
              <>
                <div key={index} className="relative bg-white shadow-md">
                  <Image
                    src={item.image}
                    alt="propery1"
                    className="object-center object-cover rounded"
                    layout="responsive"
                    width={560}
                    height={210}
                  />
                  <div className={styles.overlay}>
                    <div className="flex">
                      <div className="w-[45px] h-[25px] bg-shark-500 text-white flex items-center justify-center">
                        <Image
                          src="/image.svg"
                          alt="photo icon"
                          width={10}
                          height={10}
                        />
                        <span className="text-[12px] ml-1">10</span>
                      </div>
                      <div className="ml-4 w-[225px] h-[26px] text-[12px] flex items-center justify-center bg-shadow-500 text-shark-900">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[110px]">
                      <div className="text-semibold text-[18px] text-white">
                        {item.description}
                      </div>
                      <div className="rounded-full bg-shark-500 px-2 py-1 flex items-center">
                        <Image
                          src="/love.svg"
                          alt="love icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex justify-between items-center">
                    <div>
                      <div className="flex items-center mt-4">
                        <MdLocationOn />
                        <h1 className="text-lg font-semibold">
                          Ibeju-lekki, Ibeju Lekki, Lagos
                        </h1>
                      </div>
                      <ul className="flex space-x-2">
                        <li>
                          <span className="font-bold text-2xl"></span>5 Bedroom
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          6 Bathroom
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          6 Toilet
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          5680 ft
                        </li>
                      </ul>
                      <Link href="/">
                        <a className="text-shadow-600">More Details &gt; </a>
                      </Link>
                    </div>
                    <div classNamr="flex flex-col">
                      <span className="text-2xl">
                        &#8358; 1,650,000
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col mx-auto max-w-6xl w-full pt-12">
          <h1 className="text-2xl font-bold text-center">
            Magodo houses for sale
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {properties.map((item, index) => (
              <>
                <div key={index} className="relative bg-white shadow-md">
                  <Image
                    src={item.image}
                    alt="propery1"
                    className="object-center object-cover rounded"
                    layout="responsive"
                    width={560}
                    height={210}
                  />
                  <div className={styles.overlay}>
                    <div className="flex">
                      <div className="w-[45px] h-[25px] bg-shark-500 text-white flex items-center justify-center">
                        <Image
                          src="/image.svg"
                          alt="photo icon"
                          width={10}
                          height={10}
                        />
                        <span className="text-[12px] ml-1">10</span>
                      </div>
                      <div className="ml-4 w-[225px] h-[26px] text-[12px] flex items-center justify-center bg-shadow-500 text-shark-900">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[110px]">
                      <div className="text-semibold text-[18px] text-white">
                        {item.description}
                      </div>
                      <div className="rounded-full bg-shark-500 px-2 py-1 flex items-center">
                        <Image
                          src="/love.svg"
                          alt="love icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex justify-between items-center">
                    <div>
                      <div className="flex items-center mt-4">
                        <MdLocationOn />
                        <h1 className="text-lg font-semibold">
                          Ibeju-lekki, Ibeju Lekki, Lagos
                        </h1>
                      </div>
                      <ul className="flex space-x-2">
                        <li>
                          <span className="font-bold text-2xl"></span>5 Bedroom
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          6 Bathroom
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          6 Toilet
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          5680 ft
                        </li>
                      </ul>
                      <Link href="/">
                        <a className="text-shadow-600">More Details &gt; </a>
                      </Link>
                    </div>
                    <div classNamr="flex flex-col">
                      <span className="text-2xl">
                        &#8358; 1,650,000
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col mx-auto max-w-6xl w-full py-12">
          <h1 className="text-2xl font-bold text-center">
            Victoria Island houses for sale
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {properties.map((item, index) => (
              <>
                <div key={index} className="relative bg-white shadow-md">
                  <Image
                    src={item.image}
                    alt="propery1"
                    className="object-center object-cover rounded"
                    layout="responsive"
                    width={560}
                    height={210}
                  />
                  <div className={styles.overlay}>
                    <div className="flex">
                      <div className="w-[45px] h-[25px] bg-shark-500 text-white flex items-center justify-center">
                        <Image
                          src="/image.svg"
                          alt="photo icon"
                          width={10}
                          height={10}
                        />
                        <span className="text-[12px] ml-1">10</span>
                      </div>
                      <div className="ml-4 w-[225px] h-[26px] text-[12px] flex items-center justify-center bg-shadow-500 text-shark-900">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[110px]">
                      <div className="text-semibold text-[18px] text-white">
                        {item.description}
                      </div>
                      <div className="rounded-full bg-shark-500 px-2 py-1 flex items-center">
                        <Image
                          src="/love.svg"
                          alt="love icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-3 px-5 flex justify-between items-center">
                    <div>
                      <div className="flex items-center mt-4">
                        <MdLocationOn />
                        <h1 className="text-lg font-semibold">
                          Ibeju-lekki, Ibeju Lekki, Lagos
                        </h1>
                      </div>
                      <ul className="flex space-x-2">
                        <li>
                          <span className="font-bold text-2xl"></span>5 Bedroom
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          6 Bathroom
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          6 Toilet
                        </li>
                        <li>
                          <span className="text-shark-500 font-bold text-2xl">
                            .{' '}
                          </span>{' '}
                          5680 ft
                        </li>
                      </ul>
                      <Link href="/">
                        <a className="text-shadow-600">More Details &gt; </a>
                      </Link>
                    </div>
                    <div classNamr="flex flex-col">
                      <span className="text-2xl">
                        &#8358; 1,650,000
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Buy;
