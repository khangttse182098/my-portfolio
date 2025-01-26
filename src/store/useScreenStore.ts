import { create } from "zustand";

export interface OpenedTabType {
  tabName: string;
  tabImg: string;
  isClick: boolean;
  isMaximize: boolean;
}
export interface DesktopIconType {
  img: string;
  name: string;
  isClick: boolean;
  isPending: boolean;
}

interface ScreenStore {
  desktopIconList: DesktopIconType[];
  isClickStartButton: boolean;
  openedTabList: OpenedTabType[];
  clickStartButton: () => void;
  clickDesktopIcon: (img: string) => void;
  clickEmptyScreen: () => void;
  doubleClickDesktopIcon: (currentTab: OpenedTabType) => void;
  clickTabOnTaskbar: (selectedTab: OpenedTabType) => void;
  closeWindow: (selectedTab: OpenedTabType) => void;
  minimizeWindow: (selectedTab: OpenedTabType) => void;
  maximizeWindow: (selectedTab: OpenedTabType) => void;
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
  openedTabList: [],
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
      isClickStartButton: state.isClickStartButton || false,
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
      let newIsClickStartButton = state.isClickStartButton;
      const newDesktopIconList = state.desktopIconList.map((desktopIcon) => {
        if (desktopIcon.isClick) {
          return {
            ...desktopIcon,
            isPending: true,
            isClick: false,
          };
        }
        if (desktopIcon.isPending) {
          return { ...desktopIcon, isPending: false };
        }
        return desktopIcon;
      });

      if (state.isClickStartButton) {
        newIsClickStartButton = !state.isClickStartButton;
      } else {
        newIsClickStartButton = state.isClickStartButton;
      }

      return {
        desktopIconList: newDesktopIconList,
        isClickStartButton: newIsClickStartButton,
      };
    }),
  doubleClickDesktopIcon: (currentTab: OpenedTabType) =>
    set((state: ScreenStore) => {
      let newOpenedTabList = [...state.openedTabList];

      if (
        !newOpenedTabList.filter((tab) => tab.tabImg === currentTab.tabImg)
          .length ||
        !newOpenedTabList.length
      ) {
        newOpenedTabList = [...newOpenedTabList, currentTab];
      }
      newOpenedTabList = [
        ...newOpenedTabList.map((tab) => {
          if (tab.isClick === true && tab.tabName !== currentTab.tabName) {
            return { ...tab, ["isClick"]: false };
          }
          if (tab.tabName === currentTab.tabName && !tab.isClick) {
            return { ...tab, ["isClick"]: true };
          }
          return tab;
        }),
      ];
      return {
        openedTabList: newOpenedTabList,
      };
    }),
  clickTabOnTaskbar: (selectedTab: OpenedTabType) =>
    set((state: ScreenStore) => {
      let newOpenedTabList = [...state.openedTabList];

      newOpenedTabList = [
        ...newOpenedTabList.map((tab) => {
          if (tab.tabName === selectedTab.tabName) {
            return { ...tab, ["isClick"]: !selectedTab.isClick };
          }
          if (tab.isClick && tab.tabName !== selectedTab.tabName) {
            return { ...tab, ["isClick"]: false };
          }
          return tab;
        }),
      ];

      return {
        openedTabList: newOpenedTabList,
      };
    }),
  closeWindow: (selectedTab) =>
    set((state: ScreenStore) => ({
      openedTabList: state.openedTabList.filter(
        (tab) => tab.tabImg !== selectedTab.tabImg
      ),
    })),
  minimizeWindow: (selectedTab) =>
    set((state: ScreenStore) => ({
      openedTabList: state.openedTabList.map((tab) => {
        if (tab.tabImg === selectedTab.tabImg) {
          return { ...tab, ["isClick"]: false };
        }
        return selectedTab;
      }),
    })),
  maximizeWindow: (selectedTab) =>
    set((state: ScreenStore) => ({
      openedTabList: state.openedTabList.map((tab) => {
        if (tab.tabImg === selectedTab.tabImg) {
          return { ...tab, ["isMaximize"]: !selectedTab.isMaximize };
        }
        return tab;
      }),
    })),
}));

export default useScreenStore;
