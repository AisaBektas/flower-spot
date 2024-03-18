import { LOCAL_STORAGE } from "../../const/localStorage";
import { IToken } from "../../interfaces/token.interface";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../utils";

class TokenService {
  get token(): IToken | null {
    return getItemFromLocalStorage(LOCAL_STORAGE.TOKEN) as IToken;
  }

  set token(value: IToken | null) {
    setItemToLocalStorage(LOCAL_STORAGE.TOKEN, value);
  }

  clear() {
    this.token = null;
  }
}

export const tokenService = new TokenService();
