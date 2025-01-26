import Screen from "./components/Screen/Screen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPortfolioMenu from "./Page/MyPortfolio/MyPortfolioMenu";
import AboutMe from "./Page/MyPortfolio/AboutMe";
import Window from "./components/Window/Window";
import useScreenStore from "./store/useScreenStore";

const App = (): JSX.Element => {
  const clickAudio = new Audio("/sound/click.mp3");
  const clickEmptyScreen = useScreenStore((state) => state.clickEmptyScreen);

  const handleMouseDown = () => {
    clickAudio.currentTime = 0;
    clickAudio.play();
  };

  return (
    <div onClick={clickEmptyScreen} onMouseDownCapture={handleMouseDown}>
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
