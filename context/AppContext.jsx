import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState({});
  const { pathname } = useRouter();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <AppContext.Provider value={{ showMenu, setShowMenu, toggleMenu, pathname }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
