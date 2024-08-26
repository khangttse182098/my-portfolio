import { createContext, useState } from "react";

export interface DesktopIconType {
  img: string;
  name: string;
  isClick: boolean;
  isPending: boolean;
}

interface ScreenContext {
  desktopIconList: DesktopIconType[];
  setDesktopIconList: React.Dispatch<React.SetStateAction<DesktopIconType[]>>;
  isClickStartButton: boolean;
  setIsClickStartButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScreenContext = createContext<ScreenContext>({
  desktopIconList: [],
  setDesktopIconList: () => {},
  isClickStartButton: Boolean(),
  setIsClickStartButton: () => {},
});

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClickStartButton, setIsClickStartButton] = useState(false);
  const [desktopIconList, setDesktopIconList] = useState([
    // {
    //   img: "computer.png",
    //   name: "My Computer",
    //   isClick: false,
    //   isPending: false,
    // },
    {
      img: "documents.png",
      name: "My Portfolio",
      isClick: false,
      isPending: false,
    },
    // {
    //   img: "network.png",
    //   name: "Network",
    //   isClick: false,
    //   isPending: false,
    // },
    // {
    //   img: "trash.png",
    //   name: "Recycle Bin",
    //   isClick: false,
    //   isPending: false,
    // },
  ]);
  const value = {
    desktopIconList,
    setDesktopIconList,
    isClickStartButton,
    setIsClickStartButton,
  };
  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};
