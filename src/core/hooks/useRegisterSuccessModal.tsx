import { useContext } from "react";
import { RegisterSuccessModalContext } from "../providers/RegisterSuccessModalProvider";

export const useRegisterSuccessModal = () =>
  useContext(RegisterSuccessModalContext);
