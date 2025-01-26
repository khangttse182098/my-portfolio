import classes from "./_Taskbar.module.scss";
import { useContext } from "react";
import Tab from "../Tab/Tab";
import { OpenedTabType, WindowContext } from "../../context/WindowContext";
import useScreenStore from "../../store/useScreenStore";
const Taskbar = () => {
  const isClickStartButton = useScreenStore(
    (state) => state.isClickStartButton
  );
  const clickStartButton = useScreenStore((state) => state.clickStartButton);
  const { openedTabList, setOpenedTabList } = useContext(WindowContext);

  const handleClickTab = (selectedTab: OpenedTabType) => {
    setOpenedTabList((prev) => [
      ...prev.map((tab) => {
        if (tab.tabName === selectedTab.tabName) {
          return { ...tab, ["isClick"]: !selectedTab.isClick };
        }
        if (tab.isClick && tab.tabName !== selectedTab.tabName) {
          return { ...tab, ["isClick"]: false };
        }
        return tab;
      }),
    ]);
  };
  return (
    <>
      <div className={classes.taskbar}>
        <div>
          <button
            onClick={clickStartButton}
            className={`${classes["start-button"]} ${
              isClickStartButton ? classes.isClick : ""
            }`}
          >
            Start
          </button>
          {openedTabList.map((tab) => (
            <span
              key={tab.tabImg}
              onClick={(event) => {
                event.stopPropagation();
                handleClickTab(tab);
              }}
            >
              <Tab name={tab.tabName} img={tab.tabImg} isClick={tab.isClick} />
            </span>
          ))}
          <div
            className={`${classes["start-menu-wrapper"]} ${
              !isClickStartButton ? classes.hidden : ""
            }`}
          >
            <div className={classes["start-menu-title"]}>
              <span>
                <strong>ThaiKhang</strong>
              </span>
            </div>

            <div className={classes["start-menu"]}>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                }}
                className={classes["start-menu-link"]}
              >
                Sh<u>u</u>t Down...
              </button>
            </div>
          </div>
        </div>
        <div className={classes.time}></div>
      </div>
    </>
  );
};

export default Taskbar;
