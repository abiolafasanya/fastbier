import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import infos from './../data/infos';
import { houses, img1 } from '../data/infos';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fastbier | Home</title>
        <meta name="keyword" content="Real Estate in Nigeria" />
        <link rel="Fastbier icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <section id="Section 1">
        <div className="hero w-full max-h-screen md:h-full">
          <div className="bg-shark-900 h-screen opacity-60 w-full relative"></div>
          <div className="text-center absolute top-[8rem] w-full py-36 md:py-24 md:px-24">
            <h1 className="text-2xl md:text-6xl text-white font-poppins font-bold p-4 shadow">
              Buy or Rent in Nigeria
            </h1>
            <h3 className="text-xl text-white font-poppins p-4 shadow">
              Your trusted and complete source of real estate in Nigeria
            </h3>
          </div>
          <div className="hidden absolute md:flex items-center font-poppins w-4/5 mx-auto left-[8rem] top-[32rem] bg-white py-3 px-7 ">
            <MdLocationOn className="top-[2rem] text-2xl text-shark-900" />
            <input
              type="search"
              name=""
              className="w-4/5 pl-5 outline-none placeholder:font-poppins placeholder:pl-5"
              placeholder="Search home land and agent"
            />
            <button className="bg-shadow-500 hover:bg-shadow-600 text-shadow-100 py-2 px-7">
              Search Fastbier
            </button>
          </div>
          <div className="hidden md:block absolute w-4/5 left-[8rem] top-[36rem] bg-shark-700 py-2 px-7">
            <p className="text-right text-shark-50">
              Fastbier support fair housing. See the{' '}
              <span className="text-shadow-500">Lagos for housing notice</span>
            </p>
          </div>
        </div>
      </section>

      <section id="Section 2">
        <div className="w-full h-full bg-white py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <img src={img1} alt="" className="rounded shrink-0" />
            <div className="p-3 font-poppins">
              <h1 className="text-2xl mb-6 font-bold">Who we are</h1>
              <p className="text-justify text-lg">
                Fastbier is a leading Nigerian Property website – the best place
                to start your real estate search whether you are an investor,
                buying for own use, or looking for a place to rent. In Fastbier,
                you can find thousands of properties for sale and rent with
                detailed information about each property, including maps and
                photos.
              </p>
              <button className="py-2 px-7 bg-shark-500 hover:bg-shark-800 text-shark-50 mt-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="Section 3">
        <div className="bg-spring-wood-500 py-16">
          <div className="max-w-6xl mx-auto font-poppins">
            <h1 className="font-bold text-2xl text-center">
              How can Fastbier help you?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-14">
              {infos.map((item, index) => (
                <div className="card shadow-md border text-center" key={index}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-3/4 mx-auto object-cover object-center shrink-0"
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                  <h1 className="text-2xl mt-4 font-semibold">{item.title}</h1>
                  <p className="my-4 text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="Section 4">
        <div className="py-16 bg-white">
          <div className="font-poppins">
            <h1 className="text-2xl py-12 font-bold text-center">
              Featured Property & Houses for sale
            </h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {houses.map((item, index) => (
                <div key={index} style={housesStyle(item.image)}>
                  <div className="p-6 relative">
                    <h6 className="text-base text-white mb-4">
                      {item.location}
                    </h6>
                    <h2 className="text-2xl text-white font-semibold">
                      {item.type}
                    </h2>

                    <Link href="/tez">
                      <a className="text-white absolute bottom-[-13rem]">
                        For more info &gt;{' '}
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-6xl mx-auto flex justify-center items-center py-14 space-x-8">
              <Link href="/">
                <span className="rounded-full p-2 bg-shark-200"></span>
              </Link>
              <Link href="/">
                <span className="rounded-full p-2 bg-shark-500"></span>
              </Link>
              <Link href="/">
                <span className="rounded-full p-2 bg-shark-200"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="Section 5">
        <div className="bg-spring-wood-500 py-16 font-poppins">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-6">
            <div>
              <h1 className="text-2xl font-semibold">Talk to Fastbier Agent</h1>
              <p className="text-base">
                Start your search with an expert local agent—there’s no pressure
                or obligation.
              </p>
            </div>
            <div>
              <p>Where are you searching for homes?</p>
              <div className="search w-full py-2 px-7 mt-2 border border-shark-500 flex">
                <input
                  type="text"
                  className="w-full outline-none bg-spring-wood-500"
                  placeholder="City Address, Zip"
                />
                <button className="bg-shark-500 text-shark-100 hover:bg-shark-600 py-1 px-7">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const housesStyle = (img) => {
  let styles;
  return (styles = {
    width: '100%',
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    objectFit: 'cover',
    objectPosition: 'center',
    height: '348px',
  });
};
