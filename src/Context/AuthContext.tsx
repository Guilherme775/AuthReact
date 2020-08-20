import React, { createContext } from "react";

import useAuth from "./hooks/userAuth";

interface Props {}

interface InitContextProps {
  authenticated: boolean;
  loading: boolean;
  handleLogin: any;
  handleLogout: any;
}

const Context = createContext({} as InitContextProps);

const AuthProvider: React.FC<Props> = (props) => {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <Context.Provider
      value={{ authenticated, loading, handleLogin, handleLogout }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
