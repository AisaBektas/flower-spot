import { useContext } from "react";
import { RegisterModalContext } from "../providers/RegisterModalProvider";

export const useRegisterModal = () => useContext(RegisterModalContext);
