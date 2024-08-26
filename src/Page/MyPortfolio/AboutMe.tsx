// import { useNavigate } from "react-router-dom";
import classes from "./_AboutMe.module.scss";
const AboutMe = (): JSX.Element => {
  // const navigate = useNavigate();
  return (
    <>
      <div className={classes.container}>
        {/* <dialog className={classes["content-links"]}>
          <a onClick={() => navigate("/portfolio/content")}>• Content</a>
          <a
            onClick={() => navigate("/portfolio/about")}
            className={classes.isSelect}
          >
            • About me
          </a>
          <a href="#">• Education</a>
          <a href="#">• Project</a>
          <a href="#">• Experience</a>
        </dialog> */}
        <div className={classes["main-content"]}>
          {/* <span className={classes["main-content-header"]}>---About me--</span> */}
          <div className={classes["main-content-body"]}>
            <div className={classes["main-content-introduction-text"]}>
              <div>
                <ul>
                  <li>Hello World, I'm Khang! Hello World, I'm Khang!</li>
                </ul>
                <ul>
                  <li>Hello World, I'm Khang! Hello World, I'm Khang!</li>
                </ul>
              </div>
              <div aria-hidden="true">
                <ul>
                  <li>Hello World, I'm Khang!</li>
                </ul>
                <ul>
                  <li>Hello World, I'm Khang!</li>
                </ul>
              </div>
              <div aria-hidden="true">
                <ul>
                  <li>Hello world! I'm Khang Hello world! I'm Khang</li>
                </ul>
                <ul>
                  <li>Hello world! I'm Khang Hello world! I'm Khang</li>
                </ul>
              </div>
              <div aria-hidden="true">
                <ul>
                  <li>Hello World, I'm Khang! Hello world! I'm Khang</li>
                </ul>
                <ul>
                  <li>Hello World, I'm Khang! Hello world! I'm Khang</li>
                </ul>
              </div>
            </div>
            <div className={classes["main-content-bio"]}>
              <div style={{ textAlign: "center", marginBottom: "2%" }}>
                ----- o -----
              </div>
              <div>
                Hello! I'm Thai Khang, an in-the-making frontend software
                engineer based in Vietnam. Thanks for visiting my portfolio.
              </div>
              <div className={classes["main-content-bio-header"]}>About me</div>
              <div>
                Ever since I was a child, I always love building and solving
                stuff. Because of that nature, Legos and rubik cubes were the
                two things that I extremely invested in. During middle school, I
                got the oppurtunity to attend a programming class, which led me
                to write my first ever line of code in Pascal.
              </div>
              <div className={classes["main-content-bio-img-wrapper"]}>
                <img src="/youngMe.jpg" alt="" />
                <div
                  style={{
                    position: "absolute",
                    left: "-10%",
                    top: "-80%",
                    scale: "0.15",
                    rotate: "20deg",
                  }}
                >
                  <img src="/tape.png" alt="" />
                </div>
                <div className={classes["main-content-bio-img-info"]}>
                  (Picture of me building... stuff)
                </div>
              </div>
              {/* In building comment */}
              <div className={classes["website-is-building"]}>
                🏗️Content is under developing...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
