import { createContext, FC, PropsWithChildren, useState } from "react";

interface IProfileModalContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ProfileModalContext = createContext<IProfileModalContextProps>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const ProfileModalProvider: FC<PropsWithChildren<{}>> = ({
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
    <ProfileModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};
