import { createContext, useState } from "react";

export interface OpenedTabType {
  tabName: string;
  tabImg: string;
  isClick: boolean;
  isMaximize: boolean;
}

interface WindowContext {
  openedTabList: OpenedTabType[];
  setOpenedTabList: React.Dispatch<React.SetStateAction<OpenedTabType[]>>;
}

export const WindowContext = createContext<WindowContext>({
  openedTabList: [],
  setOpenedTabList: () => {},
});

export const WindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [openedTabList, setOpenedTabList] = useState<OpenedTabType[]>([]);
  const value = { openedTabList, setOpenedTabList };
  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  );
};
