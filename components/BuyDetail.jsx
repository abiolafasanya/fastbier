import Link from 'next/link';
import styles from '../styles/Buy.module.css';
import { MdLocationOn } from 'react-icons/md';
import Image from 'next/image';

export const BuyDetail = ({ properties, finder }) => {
  let details, prop;

  if (finder === 'lekki') {
    details = properties.details.lekki;
    prop = properties.lekki;
  }
  if (finder === 'magodo') {
    details = properties.details.magodo;
    prop = properties.magodo;
  }
  if (finder === 'vi') {
    details = properties.details.vi;
    prop = properties.vi;
  }

  return (
    <div className="flex flex-col mx-auto max-w-6xl w-full pt-12 md:pt-24">
      <h1 className="text-2xl font-bold text-center">{details}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 w-full">
        {prop.map((item, index) => (
          <>
            <div key={index} className="relative bg-white shadow-md w-full">
              <div className="block w-full h-[210px]">
                <Image
                  src={item.image}
                  alt="propery1"
                  className="object-center object-cover rounded w-full"
                  layout="responsive"
                  width="560px"
                  height="210px"
                />
              </div>

              <div className={`${styles.overlay} h-[210px] md:w-[560px]`}>
                <div className="flex flex-cols justify-between">
                  <div className="w-[45px] h-[25px] bg-shark-500 text-white flex items-center justify-center">
                    <Image
                      src="/image.svg"
                      alt="photo icon"
                      width={10}
                      height={10}
                    />
                    <span className="text-[12px] ml-1">{item.views}</span>
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
              <div className="py-3 px-5 flex flex-col md:flex-row justify-between items-center">
                <div>
                  <div className="flex items-center mt-4">
                    <MdLocationOn />
                    <h1 className="text-lg font-semibold">{item.info}</h1>
                  </div>
                  <ul className="flex flex-wrap space-x-2">
                    {item.rooms.map((room, i) => (
                      <>
                        <li key={i}>{room}</li>
                      </>
                    ))}
                  </ul>
                  <Link href="/">
                    <a className="text-shadow-600">More Details &gt; </a>
                  </Link>
                </div>
                <div classNamr="flex flex-col">
                  <span className="text-2xl">&#8358; 1,650,000</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
