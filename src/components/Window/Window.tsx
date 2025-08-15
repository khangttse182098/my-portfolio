import classes from "./_Window.module.scss";
// import MyPortfolioMenu from "../../Page/MyPortfolio/MyPortfolioMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useTab } from "../Screen/Screen";
import useScreenStore from "../../store/useScreenStore";
const Window = (): JSX.Element => {
  const { minimizeWindow, maximizeWindow, closeWindow } = useScreenStore(
    (state) => state
  );
  const navigate = useNavigate();
  const tab = useTab();

  return (
    <div className={`${tab.isMaximized ? classes.maximize : classes.window}`}>
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
            onClick={() => {
              closeWindow(tab);
              navigate("/");
            }}
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
