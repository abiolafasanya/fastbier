import footer from '../../data/footer';
import Link  from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className="p-6 bg-shark-500">
      <div className="max-w-6xl mx-auto flex font-poppins">
        <div className="w-3/4">
          <h1 className="text-2xl font-semibold text-shadow-500 uppercase mb-4">
            Popular Real Estate Market
          </h1>
          <div className="flex flex-col md:flex-row space-x-24 items-center">
            <ul className="flex flex-col space-y-4">
              {footer.sec1.map((item, index) => (
                <li key={index} className="text-shark-200">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col space-y-4">
              {footer.sec2.map((item, index) => (
                <li key={index} className="text-shark-200">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col space-y-4">
              {footer.sec3.map((item, index) => (
                <li key={index} className="text-shark-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h1 className="text-2xl mt-24 font-semibold text-shadow-500 uppercase mb-4">
            Search by popular state
          </h1>
          <div className="flex flex-col md:flex-row space-x-24 items-center">
            <ul className="flex flex-col space-y-4">
              {footer.sec1.map((item, index) => (
                <li key={index} className="text-shark-200">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col space-y-4">
              {footer.sec2.map((item, index) => (
                <li key={index} className="text-shark-200">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col space-y-4">
              {footer.sec3.map((item, index) => (
                <li key={index} className="text-shark-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <Link href="/">
              <a className="text-shadow-500">View more</a>
            </Link>
          </div>
        </div>
        <div className="w-1/4">
          <div className="">
            <h1 className="text-2xl font-semibold text-shadow-500 uppercase mb-4">
              Company
            </h1>
            <ul className="flex flex-col space-y-4 list-dis">
              {footer.company.map((item, index) => (
                <li key={index} className="text-shadow-500 list-disc">
                  <Link href={item.url}>
                    <a className="text-shadow-200">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl mt-4 font-semibold text-shadow-500 uppercase">
              General
            </h2>
            <ul className="flex flex-col mt-4 space-y-4 list-dis">
              {footer.general.map((item, index) => (
                <li key={index} className="text-shadow-500 list-disc">
                  <span className="text-shadow-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 w-full font-poppins">
        <div className="flex items-center max-w-6xl mx-auto">
          <div className="text-white w-2/3 pr-12">{footer.about}</div>
          <h1 className="text-5xl font-oldenburg uppercase  ml-16 text-right text-shadow-500">
            Fastbier
          </h1>
        </div>
      </div>

      <div className="border-b border-shadow-500 max-w-6xl mx-auto py-8"></div>
      <div className="flex justify-between items-center max-w-6xl mx-auto my-4">
        <div className="text-base text-shadow-100">
          2021 © Fastbier. All rights reserved.
        </div>
        <div id="socialIcons" className="flex items-center space-x-4">
          <span className="py-3 px-5 border border-shadow-500">
            <FaLinkedin className="text-shadow-500 text-2xl" />
          </span>
          <span className="py-3 px-5 border border-shadow-500">
            <FaFacebook className="text-shadow-500 text-2xl" />
          </span>
          <span className="py-3 px-5 border border-shadow-500">
            <FaWhatsapp className="text-shadow-500 text-2xl" />
          </span>
          <span className="py-3 px-5 border border-shadow-500">
            <FaTwitter className="text-shadow-500 text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
