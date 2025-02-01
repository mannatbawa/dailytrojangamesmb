import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import HomePage from "./components/HomePage";
import GameStart from "./components/GameStart";
// import WeeklyQuiz from "./components/weeklyquiz";
// import WeeklyQuiz from "./components/WeeklyQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/wordle" element={<GameStart game="Wordle" />} />
        <Route path="/connections" element={<GameStart game="Connections" />} />
        <Route path="/quiz" element={<GameStart game="Quiz" />} />
        <Route path="/wordle/play" element={<div>Wordle Game</div>} />
        <Route path="/connections/play" element={<div>Connections Game</div>} />
        <Route path="/quiz/play" element={<div>{/* <WeeklyQuiz /> */}</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
