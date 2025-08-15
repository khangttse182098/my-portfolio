import useScreenStore from "../../store/useScreenStore";
import DesktopIcon from "../DesktopIcon/DesktopIcon";

const DesktopIconList = (): JSX.Element => {
  const desktopIconList = useScreenStore((state) => state.desktopIconList);
  return (
    <div className="desktop-icon-list">
      {desktopIconList.map((desktopIcon) => (
        <DesktopIcon
          key={desktopIcon.img}
          img={desktopIcon.img}
          name={desktopIcon.name}
          status={desktopIcon.status}
        />
      ))}
    </div>
  );
};

export default DesktopIconList;
