import { useNavigate } from "react-router-dom";
import classes from "./_MyPortfolioMenu.module.scss";
const MyPortfolioMenu = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes["window-content"]}>
        <div className={classes["content-title-wrapper"]}>
          <span
            className={`${classes["content-title"]} ${classes["font-fill"]}`}
          >
            Table Of Contents
          </span>
          <span
            aria-hidden="true"
            className={`${classes["content-title"]} ${classes["font-outline"]}`}
          >
            Table Of Contents
          </span>
          <span
            aria-hidden="true"
            className={`${classes["content-title"]} ${classes["font-right"]}`}
          >
            Table Of Contents
          </span>
          <span
            aria-hidden="true"
            className={`${classes["content-title"]} ${classes["font-shadow"]}`}
          >
            Table Of Contents
          </span>
        </div>
        <div className={classes["content-links"]}>
          <a onClick={() => navigate("/portfolio/about")}>About me</a>
          <a href="#">Education</a>
          <a href="#">Project</a>
          <a href="#">Experience</a>
        </div>
      </div>
    </>
  );
};

export default MyPortfolioMenu;
