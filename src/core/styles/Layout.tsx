import { Navbar } from "./navbar/Navbar";
import LoginModal from "./navbar/LoginModal";
// import { useLoginModal } from "../hooks/useLoginModal";
// import { useRegisterModal } from "../hooks/useRegisterModal";
import RegistrationModal from "./navbar/RegistrationModal";
import ToasterProvider from "../providers/ToastProvider";
import LoginSuccessModal from "./navbar/LoginSuccessModal";
// import { useLoginSuccessModal } from "../hooks/useLoginSuccessModal";
import RegistrationSuccessModal from "./navbar/RegistrationSuccessModal";
// import { useRegisterSuccessModal } from "../hooks/useRegisterSuccessModal";
import ProfileModal from "./navbar/ProfileModal";
// import { useProfileModal } from "../hooks/useProfileModal";

export default function Layout({ children }: { children: React.ReactNode }) {
  // const loginModal = useLoginModal();
  // const loginSuccessModal = useLoginSuccessModal();
  // const registerModal = useRegisterModal();
  // const registerSuccessModal = useRegisterSuccessModal();
  // const profileModal = useProfileModal();
  return (
    <div>
      <ToasterProvider />
      <LoginModal />
      <LoginSuccessModal />
      <RegistrationModal />
      <RegistrationSuccessModal />
      <ProfileModal />
      <div
        className="mx-auto max-w-screen-xl"
        // className={`mx-auto max-w-screen-xl overflow-auto ${
        //   (loginModal.isOpen ||
        //     loginSuccessModal.isOpen ||
        //     registerModal.isOpen ||
        //     registerSuccessModal.isOpen ||
        //     profileModal.isOpen) &&
        //   "h-screen overflow-hidden"
        // }`}
      >
        <Navbar />
        <div className="pt-20">{children}</div>
      </div>
    </div>
  );
}
