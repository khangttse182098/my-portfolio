import classes from "./_Taskbar.module.scss";
import { ScreenContext } from "../../context/ScreenContext";
import { useContext } from "react";
import Tab from "../Tab/Tab";
import { OpenedTabType, WindowContext } from "../../context/WindowContext";
const Taskbar = () => {
  const { isClickStartButton, setIsClickStartButton } =
    useContext(ScreenContext);
  const { openedTabList, setOpenedTabList } = useContext(WindowContext);
  const handleToggleDialog = () => {
    if (!isClickStartButton) {
      setIsClickStartButton(true);
    } else {
      setIsClickStartButton(false);
    }
  };

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
            onClick={handleToggleDialog}
            className={`${classes["start-button"]} ${
              isClickStartButton ? classes.isClick : undefined
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
              !isClickStartButton ? classes.hidden : undefined
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
