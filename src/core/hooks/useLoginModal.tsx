import { useContext } from "react";
import { LoginModalContext } from "../providers/LoginModalProvider";

export const useLoginModal = () => useContext(LoginModalContext);
