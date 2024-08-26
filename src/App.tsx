import { useContext } from "react";
import Screen from "./components/Screen/Screen";
import { ScreenContext } from "./context/ScreenContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPortfolioMenu from "./Page/MyPortfolio/MyPortfolioMenu";
import AboutMe from "./Page/MyPortfolio/AboutMe";
import Window from "./components/Window/Window";

const App = (): JSX.Element => {
  const clickAudio = new Audio("/sound/click.mp3");
  const {
    setDesktopIconList,
    desktopIconList,
    setIsClickStartButton,
    isClickStartButton,
  } = useContext(ScreenContext);

  const handleMouseDown = () => {
    clickAudio.currentTime = 0;
    clickAudio.play();
  };
  const handleClick = () => {
    if (isClickStartButton) {
      setIsClickStartButton(false);
    }
    setDesktopIconList(
      desktopIconList.map((desktopIcon) => {
        if (desktopIcon.isClick) {
          return { ...desktopIcon, ["isPending"]: true, ["isClick"]: false };
        }
        if (desktopIcon.isPending) {
          return { ...desktopIcon, ["isPending"]: false };
        }
        return desktopIcon;
      })
    );
  };

  return (
    <div onClick={handleClick} onMouseDownCapture={handleMouseDown}>
      <Router>
        <Routes>
          <Route path="/" element={<Screen />}>
            <Route path="portfolio" element={<Window />}>
              <Route path="content" element={<MyPortfolioMenu />} />
              <Route path="about" element={<AboutMe />} />
            </Route>
            <Route path="computer" element={<Window />}></Route>
            <Route path="network" element={<Window />}></Route>
            <Route path="bin" element={<Window />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
