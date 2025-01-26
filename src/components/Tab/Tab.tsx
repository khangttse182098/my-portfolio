import { DesktopIconType } from "../../context/ScreenContext";
import classes from "./_Tab.module.scss";
const Tab = ({ name, img, isClick }: Omit<DesktopIconType, "isPending">) => {
  return (
    <button
      className={`${classes["tab-item"]} ${isClick ? classes.isClick : ""}`}
      style={{
        background: `url(/${img}) no-repeat 2px center / 24px`,
      }}
    >
      {name}
    </button>
  );
};

export default Tab;
