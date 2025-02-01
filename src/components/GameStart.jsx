import React from "react";
import Navbar from "./Navbar";
import "./GameStart.css";

const gameData = {
  Wordle: {
    title: "Wordle",
    description:
      "Can you guess this USC-themed word? 6 strikes and you're out!",
    image: "./assets/wordle.svg",
  },
  Connections: {
    title: "Connections",
    description: "Group USC-related words together that share a common theme.",
    image: "./assets/connections.svg",
  },
  Quiz: {
    title: "Weekly Quiz",
    description:
      "Test your USC and current event knowledge with this 10-question quiz!",
    image: "./assets/quiz.svg",
  },
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const getCurrentDate = () => {
  return formatDate(new Date());
};

const getLastFridayRange = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const lastFriday = new Date(today);

  if (dayOfWeek !== 5) {
    const daysSinceLastFriday = ((dayOfWeek + 1) % 7) + 1;
    lastFriday.setDate(today.getDate() - daysSinceLastFriday);
  }

  const previousFriday = new Date(lastFriday);
  previousFriday.setDate(lastFriday.getDate() - 7);

  return `${formatDate(previousFriday)} - ${formatDate(lastFriday)}`;
};

const GameStart = ({ game }) => {
  const currentGame = gameData[game];

  const date = game === "Quiz" ? getLastFridayRange() : getCurrentDate();

  return (
    <div className="game-start-page">
      <Navbar />
      <div className="game-info">
        <h1>{currentGame.title}</h1>
        <p className="game-description">{currentGame.description}</p>
        <img
          src={currentGame.image}
          alt={currentGame.title}
          className="game-logo"
        />
        <p className="game-date">{date}</p>
        <button className="start-button">Start Game</button>
      </div>
    </div>
  );
};

export default GameStart;
