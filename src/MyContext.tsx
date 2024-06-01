import React, { createContext, useState, ReactNode, useContext } from 'react';
import { COMPONENT_TYPE } from './constant';

interface MyContextType {
  value: COMPONENT_TYPE;
  setValue: (value: COMPONENT_TYPE) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<COMPONENT_TYPE>('autocomplete');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
