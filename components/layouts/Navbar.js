import Link from 'next/link';
import menus from '../../data/menus';

const Navbar = () => {
  return (
    <>
      <div className="px-7 py-3 bg-shark-500">
        <nav
          className="max-w-6xl mx-auto flex justify-between items-center"
          role="navigation"
          aria-label="navigation Menu"
        >
          <div className="font-oldenburg text-shadow-500 text-3xl uppercase">
            <Link href="/">Fastbier</Link>
          </div>
          <ul className="flex space-x-16 font-poppins items-center">
            {menus.map((item, index) => (
              <li key={index} className="" role="menuitem">
                <Link href={item.url}>
                  <a className="text-shark-50 hover:text-shark-200">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
            <div className="flex space-x-4">
              <button className="py-2 px-10 border text-shark-50 hover:text-shark-500 border-shadow-500 hover:bg-shadow-500">
                SignIn
              </button>
              <button className="py-2 px-10 border text-shark-500 border-shadow-500 bg-shadow-500">
                SignUp
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
