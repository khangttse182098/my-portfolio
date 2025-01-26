import classes from "./_Taskbar.module.scss";
import Tab from "../Tab/Tab";
import useScreenStore from "../../store/useScreenStore";
const Taskbar = () => {
  const isClickStartButton = useScreenStore(
    (state) => state.isClickStartButton
  );
  const { clickStartButton, openedTabList, clickTabOnTaskbar } = useScreenStore(
    (state) => state
  );

  return (
    <>
      <div className={classes.taskbar}>
        <div>
          <button
            onClick={(event) => {
              clickStartButton(), event.stopPropagation();
            }}
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
                clickTabOnTaskbar(tab);
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
