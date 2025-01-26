import classes from "./_Window.module.scss";
// import MyPortfolioMenu from "../../Page/MyPortfolio/MyPortfolioMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useTab } from "../Screen/Screen";
import useScreenStore from "../../store/useScreenStore";
const Window = (): JSX.Element => {
  const { minimizeWindow, maximizeWindow, closeWindow } = useScreenStore(
    (state) => state
  );
  // const navigate = useNavigate();
  const tab = useTab();
  // const handleClose = () => {
  //   setOpenedTabList((prev) =>
  //     prev.filter((currTab) => currTab.tabImg !== tab.tabImg)
  //   );
  //   navigate("/");
  // };
  // const handleMinimize = () => {
  // setOpenedTabList((prev) =>
  //   prev.map((currTab) => {
  //     if (currTab.tabImg === tab.tabImg) {
  //       return { ...currTab, ["isClick"]: false };
  //     }
  //     return currTab;
  //   })
  // );
  // };
  // const handleMaximize = () => {
  // setOpenedTabList((prev) =>
  //   prev.map((currTab) => {
  //     if (currTab.tabImg === tab.tabImg) {
  //       return { ...currTab, ["isMaximize"]: !tab.isMaximize };
  //     }
  //     return currTab;
  //   })
  // );
  // };
  return (
    <div className={`${tab.isMaximize ? classes.maximize : classes.window}`}>
      <div className={classes["window-info"]}>
        <span
          className={classes["title-bar"]}
          style={{
            background: `url(/${tab.tabImg} ) no-repeat`,
            backgroundSize: "16px 16px",

            backgroundPosition: "0 4px",
          }}
        >
          {tab.tabName}
        </span>
        <div className={classes["traffic-light"]}>
          <button
            onClick={() => minimizeWindow(tab)}
            className={`${classes["minimize-btn"]} ${classes["btn"]}`}
          ></button>
          <button
            onClick={() => maximizeWindow(tab)}
            className={`${classes["maximize-btn"]} ${classes["btn"]}`}
          ></button>
          <button
            onClick={() => closeWindow(tab)}
            className={`${classes["close-btn"]} ${classes["btn"]}`}
          ></button>
        </div>
      </div>
      <div className={classes["window-content-wrapper"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default Window;
