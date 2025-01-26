import { create } from "zustand";

export interface DesktopIconType {
  img: string;
  name: string;
  isClick: boolean;
  isPending: boolean;
}

interface ScreenStore {
  desktopIconList: DesktopIconType[];
  isClickStartButton: boolean;
  clickStartButton: () => void;
  clickDesktopIcon: (img: string) => void;
  clickEmptyScreen: () => void;
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
  clickStartButton: () =>
    set((state: ScreenStore) => ({
      isClickStartButton: !state.isClickStartButton,
      desktopIconList: state.desktopIconList.map((desktopIcon) => {
        if (desktopIcon.isClick) {
          return { ...desktopIcon, ["isPending"]: true, ["isClick"]: false };
        }
        if (desktopIcon.isPending) {
          return { ...desktopIcon, ["isPending"]: false };
        }
        return desktopIcon;
      }),
    })),
  clickDesktopIcon: (img: String) =>
    set((state: ScreenStore) => ({
      isClickStartButton: state.isClickStartButton ? false : true,
      desktopIconList: state.desktopIconList.map((desktopIcon) => {
        if (desktopIcon.img === img) {
          return { ...desktopIcon, ["isClick"]: true };
        }
        if (desktopIcon.isClick && desktopIcon.img !== img) {
          return { ...desktopIcon, ["isClick"]: false, ["isPending"]: true };
        }
        if (desktopIcon.isPending) {
          return { ...desktopIcon, ["isPending"]: false };
        }
        return desktopIcon;
      }),
    })),
  clickEmptyScreen: () =>
    set((state: ScreenStore) => {
      if (state.isClickStartButton) {
        return {
          isClickStartButton: !state.isClickStartButton,
          desktopIconList: state.desktopIconList.map((desktopIcon) => {
            if (desktopIcon.isClick) {
              return {
                ...desktopIcon,
                ["isPending"]: true,
                ["isClick"]: false,
              };
            }
            if (desktopIcon.isPending) {
              return { ...desktopIcon, ["isPending"]: false };
            }
            return desktopIcon;
          }),
        };
      } else {
        return {
          isClickStartButton: state.isClickStartButton,
          desktopIconList: state.desktopIconList.map((desktopIcon) => {
            if (desktopIcon.isClick) {
              return {
                ...desktopIcon,
                ["isPending"]: true,
                ["isClick"]: false,
              };
            }
            if (desktopIcon.isPending) {
              return { ...desktopIcon, ["isPending"]: false };
            }
            return desktopIcon;
          }),
        };
      }
    }),
  // increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears: any) => set({ bears: newBears }),
}));

export default useScreenStore;
