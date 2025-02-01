import React from "react";
import "./Card.css";

const cardData = [
  {
    title: "Wordle",
    link: "/wordle",
    image: "./assets/wordle.svg",
  },
  {
    title: "Connections",
    link: "/connections",
    image: "./assets/connections.svg",
  },
  {
    title: "Weekly Quiz",
    link: "/quiz",
    image: "./assets/quiz.svg",
  },
];

const Card = () => {
  return (
    <>
      {cardData.map((game) => (
        <div
          key={game.title}
          className="game-card"
          onClick={() => (window.location.href = game.link)}
        >
          <img className="card-logo" src={game.image} alt={game.title} />
          <h2>{game.title}</h2>
        </div>
      ))}
    </>
  );
};

export default Card;
