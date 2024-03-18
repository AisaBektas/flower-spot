import { createContext, FC, PropsWithChildren, useState } from "react";

interface ILoginModalContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const LoginModalContext = createContext<ILoginModalContextProps>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const LoginModalProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <LoginModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};
