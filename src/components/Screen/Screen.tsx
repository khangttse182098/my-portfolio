import useScreenStore, { OpenedTabType } from "../../store/useScreenStore";
import DesktopIconList from "../DesktopIconList/DesktopIconList";
import Taskbar from "../Taskbar/Taskbar";
import classes from "./_Screen.module.scss";
import { Outlet, useOutletContext } from "react-router-dom";

const Screen = (): JSX.Element => {
  const openedTabList = useScreenStore((state) => state.openedTabList);
  return (
    <div className={classes.screen}>
      <Taskbar />
      <DesktopIconList />
      {openedTabList.map((tab) => {
        if (tab.isClick) {
          // return <Window key={tab.tabName} tab={tab} />;
          return (
            <Outlet key={tab.tabName} context={tab satisfies OpenedTabType} />
          );
        }
      })}
    </div>
  );
};

export function useTab() {
  return useOutletContext<OpenedTabType>();
}

export default Screen;
