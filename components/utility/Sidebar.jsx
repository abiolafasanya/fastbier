import { useContext } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';
import menus from '../../data/menus';
import AppContext from '../../context/AppContext';

function Sidebar() {
  const { toggleMenu } = useContext(AppContext);
  return (
    <div className="md:hidden w-1/2 absolute min-h-full bg-shadow-700 h-full z-10 top-0 right-0">
      <div className="icon px-2 py-3 bg-shark-500 rounded-r-full w-[4rem]">
        <IoIosArrowRoundBack className="text-white text-5xl rotate-180" onClick={toggleMenu}/>
      </div>
      <div className="flex px-3 py-5">
        <ul className="flex flex-col mt-12">
          {menus.map((menu, index) => (
            <li
              className="text-shadow-100 hover:text-shadow-200 py-6 px-5 text-xl text-left"
              key={index}
            >
              <Link href={menu.url}>
                <a onClick={toggleMenu}>{menu.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
