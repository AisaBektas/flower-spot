import { createContext, FC, PropsWithChildren, useState } from "react";

interface IRegisterSuccessModalContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const RegisterSuccessModalContext =
  createContext<IRegisterSuccessModalContextProps>({
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
  });

export const RegisterSuccessModalProvider: FC<PropsWithChildren<{}>> = ({
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
    <RegisterSuccessModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </RegisterSuccessModalContext.Provider>
  );
};
