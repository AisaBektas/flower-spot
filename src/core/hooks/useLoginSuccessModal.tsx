import { useContext } from "react";
import { LoginSuccessModalContext } from "../providers/LoginSuccessModalProvider";

export const useLoginSuccessModal = () => useContext(LoginSuccessModalContext);
