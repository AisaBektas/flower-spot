import { Navbar } from "./navbar/Navbar";
import LoginModal from "./navbar/LoginModal";
import RegistrationModal from "./navbar/RegistrationModal";
import ToasterProvider from "../providers/ToastProvider";
import LoginSuccessModal from "./navbar/LoginSuccessModal";
import RegistrationSuccessModal from "./navbar/RegistrationSuccessModal";
import ProfileModal from "./navbar/ProfileModal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ToasterProvider />
      <LoginModal />
      <LoginSuccessModal />
      <RegistrationModal />
      <RegistrationSuccessModal />
      <ProfileModal />
      <div className="mx-auto max-w-screen-xl">
        <Navbar />
        <div className="pt-20">{children}</div>
      </div>
    </div>
  );
}
