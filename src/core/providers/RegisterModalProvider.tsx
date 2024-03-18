import { createContext, FC, PropsWithChildren, useState } from "react";

interface IRegisterModalContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const RegisterModalContext = createContext<IRegisterModalContextProps>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const RegisterModalProvider: FC<PropsWithChildren<{}>> = ({
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
    <RegisterModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </RegisterModalContext.Provider>
  );
};
