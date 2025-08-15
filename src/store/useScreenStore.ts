import { create } from "zustand";

export interface OpenedTabType {
  tabName: string;
  tabImg: string;
  isClicked: boolean;
  isMaximized: boolean;
}

export enum DesktopIconStatus {
  isClicked,
  isPending,
  normal,
}
export interface DesktopIconType {
  img: string;
  name: string;
  status: DesktopIconStatus;
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
    status: DesktopIconStatus.normal,
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
        if (desktopIcon.status == DesktopIconStatus.isClicked) {
          return { ...desktopIcon, status: DesktopIconStatus.isPending };
        }
        if (desktopIcon.status == DesktopIconStatus.isPending) {
          return { ...desktopIcon, status: DesktopIconStatus.normal };
        }
        return desktopIcon;
      }),
    })),
  clickDesktopIcon: (img: String) =>
    set((state: ScreenStore) => ({
      isClickStartButton: state.isClickStartButton || false,
      desktopIconList: state.desktopIconList.map((desktopIcon) => {
        if (desktopIcon.img === img) {
          return { ...desktopIcon, status: DesktopIconStatus.isClicked };
        }
        if (
          desktopIcon.status == DesktopIconStatus.isClicked &&
          desktopIcon.img !== img
        ) {
          return { ...desktopIcon, status: DesktopIconStatus.isPending };
        }
        if (desktopIcon.status == DesktopIconStatus.isPending) {
          return { ...desktopIcon, status: DesktopIconStatus.normal };
        }
        return desktopIcon;
      }),
    })),
  clickEmptyScreen: () =>
    set((state: ScreenStore) => {
      let newIsClickStartButton = state.isClickStartButton;
      const newDesktopIconList = state.desktopIconList.map((desktopIcon) => {
        if (desktopIcon.status == DesktopIconStatus.isClicked) {
          return {
            ...desktopIcon,
            status: DesktopIconStatus.isPending,
          };
        }
        if (desktopIcon.status == DesktopIconStatus.isPending) {
          return { ...desktopIcon, status: DesktopIconStatus.normal };
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
          if (tab.isClicked === true && tab.tabName !== currentTab.tabName) {
            return { ...tab, isClicked: false };
          }
          if (tab.tabName === currentTab.tabName && !tab.isClicked) {
            return { ...tab, isClicked: true };
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
            return { ...tab, isClicked: !selectedTab.isClicked };
          }
          if (tab.isClicked && tab.tabName !== selectedTab.tabName) {
            return { ...tab, isClicked: false };
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
          return { ...tab, isClicked: false };
        }
        return selectedTab;
      }),
    })),
  maximizeWindow: (selectedTab) =>
    set((state: ScreenStore) => ({
      openedTabList: state.openedTabList.map((tab) => {
        if (tab.tabImg === selectedTab.tabImg) {
          return { ...tab, isMaximized: !selectedTab.isMaximized };
        }
        return tab;
      }),
    })),
}));

export default useScreenStore;
