import classes from "./_DesktopIcon.module.scss";
import { useNavigate } from "react-router-dom";
import useScreenStore, { DesktopIconType } from "../../store/useScreenStore";
const DesktopIcon = ({ img, name, isClick, isPending }: DesktopIconType) => {
  const { clickDesktopIcon, openedTabList, doubleClickDesktopIcon } =
    useScreenStore((state) => state);
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
    doubleClickDesktopIcon(tabItem);
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
