import { useContext } from "react";
import classes from "./_DesktopIcon.module.scss";
import { WindowContext } from "../../context/WindowContext";
import { useNavigate } from "react-router-dom";
import useScreenStore, { DesktopIconType } from "../../store/useScreenStore";
const DesktopIcon = ({ img, name, isClick, isPending }: DesktopIconType) => {
  const clickDesktopIcon = useScreenStore((state) => state.clickDesktopIcon);
  const { setOpenedTabList, openedTabList } = useContext(WindowContext);
  const navigate = useNavigate();
  const handleDoubleClick = () => {
    if (name === "My Portfolio") {
      const pageFlip = new Audio("/sound/pageTurn.mp3");
      pageFlip.volume = 0.3;
      pageFlip.play();
    }
    const tabItem = {
      tabName: name,
      tabImg: img,
      isClick: true,
      isMaximize: false,
    };
    if (
      !openedTabList.filter((tab) => tab.tabImg === img).length ||
      !openedTabList.length
    ) {
      setOpenedTabList((prev) => [...prev, tabItem]);
    }
    setOpenedTabList((prev) => [
      ...prev.map((tab) => {
        if (tab.isClick === true && tab.tabName !== name) {
          return { ...tab, ["isClick"]: false };
        }
        if (tab.tabName === name && !tab.isClick) {
          return { ...tab, ["isClick"]: true };
        }
        return tab;
      }),
    ]);
    //NAVIGATE
    if (name === "My Portfolio") {
      navigate("/portfolio/content");
    } else if (name === "My Computer") {
      navigate("computer");
    } else if (name === "Network") {
      navigate("network");
    } else if (name === "Recycle Bin") {
      navigate("bin");
    }
  };
  return (
    <>
      <div
        className={`${classes["desktop-icon"]} `}
        style={{ backgroundImage: `url(/${img})` }}
        onClick={(event) => {
          clickDesktopIcon(img), event.stopPropagation();
        }}
        onDoubleClick={handleDoubleClick}
      >
        <span
          className={`${isClick ? classes["is-click"] : undefined} ${
            isPending ? classes["pending-click"] : undefined
          }`}
        >
          {name}
        </span>
      </div>
    </>
  );
};

export default DesktopIcon;
