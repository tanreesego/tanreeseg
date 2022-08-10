import { NextPageContext } from "next";
import * as React from "react";

interface Props {
  children?: any;
  pageProps: NextPageContext;
}

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = React.createContext(
  globalNavigationContext
);

export function Providers({ children, pageProps }: Props) {

  function setIsOpen(isOpen) {
    return setState({ ...state, isOpen });
  }

  const initialState = {
    isOpen: false,
    setIsOpen,
  };

  const [state, setState] = React.useState(initialState);

  return (
    <>
      <GlobalNavigationContext.Provider value={state}>
        {children}
      </GlobalNavigationContext.Provider>
    </>
  );
}
