import { FC, useState, useEffect } from "react";
import clsx from "clsx";
import { Logo } from "../Logo";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../const/navItems";
import { INavItem } from "../../interfaces/navItem.interface";
import { useLoginModal } from "../../hooks/useLoginModal";
import { useRegisterModal } from "../../hooks/useRegisterModal";
import MenuIcon from "../../../assets/icons/menu.svg";
import CloseIcon from "../../../assets/icons/close.svg";
import UserPlaceholder from "../../../assets/images/user-placeholder.png";
import { useProfileModal } from "../../hooks/useProfileModal";
import { useMyInfo } from "../../../modules/home/providers/MyInfoProvider";

export const Navbar: FC = () => {
  const { pathname } = useLocation();
  const loginModal = useLoginModal();
  const registrationModal = useRegisterModal();
  const profileModal = useProfileModal();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { myInfo } = useMyInfo();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen, isScrolled]);

  return (
    <nav className="fixed lg:shadow-none shadow-lg left-0 right-0 top-0 z-50 md:z-10 w-full transition duration-300 ease-in-out bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-5">
        <Logo />
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMobileMenu}
            type="button"
            data-testid="mobile-menu-toggle"
            className="block items-center h-10 justify-center lg:hidden"
          >
            <img
              src={MenuIcon}
              alt="Menu Icon"
              className={`h-3 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
            />
            <img
              src={CloseIcon}
              alt="Close Icon"
              className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
            />
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } h-screen w-full items-center justify-between overflow-y-auto pb-20 lg:flex lg:h-auto lg:w-auto lg:justify-end lg:pb-0`}
        >
          <div className="flex lg:flex-row flex-col items-center">
            <ul className="flex flex-col rounded-md space-y-10 lg:space-y-0 my-6 lg:my-0 font-medium text-gray lg:flex-row lg:space-x-14">
              {navItems.map((item: INavItem) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={clsx(
                      "text-sm font-medium font-montserrat",
                      pathname === item.link
                        ? "border-blue border-b"
                        : pathname.startsWith(`${item.link}/`)
                        ? "border-blue border-b"
                        : "hover:border-blue border-b border-transparent"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 lg:mt-0 lg:mr-8 lg:ml-14 flex w-full lg:w-auto pl-5 lg:pl-0">
              {myInfo?.user ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    profileModal.onOpen();
                  }}
                  className="flex items-center space-x-4"
                >
                  <p className="text-red-600 font-montserrat font-medium text-xs">{`${myInfo?.user.first_name} ${myInfo?.user.last_name}`}</p>
                  <img
                    src={UserPlaceholder}
                    alt="Profile Image"
                    className="h-10 w-10 rounded-full"
                  />
                </button>
              ) : (
                <button
                  onClick={() => {
                    loginModal.onOpen();
                    setMobileMenuOpen(false);
                  }}
                  className="text-red-600 font-montserrat font-medium text-sm"
                >
                  Login
                </button>
              )}
            </div>
            {!myInfo?.user && (
              <div className="mt-12 lg:mt-0 ml-4 lg:ml-0">
                <button
                  onClick={() => {
                    registrationModal.onOpen();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-l font-montserrat font-medium from-red-100 via-red-100 to-red-500 rounded-3xl px-6 py-2.5 text-sm text-white"
                >
                  New Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
