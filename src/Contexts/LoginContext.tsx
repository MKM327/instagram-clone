import useLogin from "@/Hooks/LoginPage/useLogin";
import { IUser } from "@/UserInterfaces";
import React, { createContext, useEffect, useState } from "react";
interface ILoginContext {
  error: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  login: () => void;
  user: IUser;
  loading: boolean;
}
const LoginContext = createContext<ILoginContext>({} as ILoginContext);

const LoginProvider = ({ children }: React.PropsWithChildren) => {
  const { error, setPassword, setUsername, login, user, loading } = useLogin();
  return (
    <LoginContext.Provider
      value={{ error, setPassword, setUsername, login, user, loading }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
