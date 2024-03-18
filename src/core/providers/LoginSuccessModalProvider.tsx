import { createContext, FC, PropsWithChildren, useState } from "react";

interface ILoginSuccessModalContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const LoginSuccessModalContext =
  createContext<ILoginSuccessModalContextProps>({
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
  });

export const LoginSuccessModalProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <LoginSuccessModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </LoginSuccessModalContext.Provider>
  );
};
