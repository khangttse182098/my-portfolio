import { useContext } from "react";
import DesktopIcon from "../DesktopIcon/DesktopIcon";
import { ScreenContext } from "../../context/ScreenContext";

const DesktopIconList = (): JSX.Element => {
  const { desktopIconList } = useContext(ScreenContext);
  return (
    <div className="desktop-icon-list">
      {desktopIconList.map((desktopIcon) => (
        <DesktopIcon
          key={desktopIcon.img}
          img={desktopIcon.img}
          name={desktopIcon.name}
          isClick={desktopIcon.isClick}
          isPending={desktopIcon.isPending}
        />
      ))}
    </div>
  );
};

export default DesktopIconList;
