import { useContext } from "react";
import { ProfileModalContext } from "../providers/ProfileModalProvider";

export const useProfileModal = () => useContext(ProfileModalContext);
