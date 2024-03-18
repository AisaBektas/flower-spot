import { useState } from "react";
import { IToken } from "../../../core/interfaces/token.interface";
import { LOCAL_STORAGE } from "../../../core/const/localStorage";

export default function useToken(): {
  setToken: (token: IToken | null) => void;
  token: IToken | null;
} {
  const getToken = () => {
    const tokenString: any = localStorage.getItem(LOCAL_STORAGE.TOKEN);
    const userToken: IToken = JSON.parse(tokenString);

    return userToken;
  };

  const [token, setToken] = useState<IToken>(getToken());

  const saveToken = (userToken: IToken | null) => {
    localStorage.setItem(LOCAL_STORAGE.TOKEN, JSON.stringify(userToken));
    userToken && setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
