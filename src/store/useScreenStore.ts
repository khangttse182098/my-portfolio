import { create } from "zustand";

export interface DesktopIcon {
  img: string;
  name: string;
  isClick: boolean;
  isPending: boolean;
}

interface ScreenStore {
  desktopIconList: DesktopIcon[];
  // setDesktopIconList: React.Dispatch<React.SetStateAction<DesktopIcon[]>>;
  isClickStartButton: boolean;
  // setIsClickStartButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialDesktopIconListValue = [
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
];

const useScreenStore = create<ScreenStore>((set) => ({
  desktopIconList: initialDesktopIconListValue,
  isClickStartButton: false,
  setIsclickStartButton: () =>
    set((state: ScreenStore) => ({
      isClickStartButton: !state.isClickStartButton,
    })),
  // increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears: any) => set({ bears: newBears }),
}));

export default useScreenStore;
