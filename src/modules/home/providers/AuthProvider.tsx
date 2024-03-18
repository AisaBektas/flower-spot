import { createContext, FC, PropsWithChildren } from "react";
import useToken from "../hooks/useToken";
import { IToken } from "../../../core/interfaces/token.interface";

export type IAuthContextProps = {
  token: IToken | null;
  setToken: (token: IToken | null) => void;
};

export const AuthContext = createContext<IAuthContextProps>({
  token: null,
  setToken: (token: IToken | null) => {
    localStorage.setItem("token", JSON.stringify(token));
  },
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { token, setToken } = useToken();

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
