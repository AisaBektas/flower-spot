import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface IMyInfoContextProps {
  myInfo: any;
  setMyInfo: React.Dispatch<React.SetStateAction<any>>;
}

export const MyInfoContext = createContext<IMyInfoContextProps>({
  myInfo: {},
  setMyInfo: () => {},
});

export const MyInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [myInfo, setMyInfo] = useState<any>({});

  return (
    <MyInfoContext.Provider
      value={{
        myInfo,
        setMyInfo,
      }}
    >
      {children}
    </MyInfoContext.Provider>
  );
};

export const useMyInfo = () => useContext(MyInfoContext);
