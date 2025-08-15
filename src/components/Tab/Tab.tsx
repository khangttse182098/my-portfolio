import { OpenedTabType } from "../../store/useScreenStore";
import classes from "./_Tab.module.scss";
const Tab = ({
  tabName,
  tabImg,
  isClicked: isClick,
}: Omit<OpenedTabType, "isMaximized">) => {
  return (
    <button
      className={`${classes["tab-item"]} ${isClick ? classes.isClick : ""}`}
      style={{
        background: `url(/${tabImg}) no-repeat 2px center / 24px`,
      }}
    >
      {tabName}
    </button>
  );
};

export default Tab;
