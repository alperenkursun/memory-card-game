import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { cardsSelector } from "./redux/cards/cardsSlice";
import { useEffect } from "react";
import React from "react";
import PointDisplay from "./components/Point/point";

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function App() {
  const cards = useSelector(cardsSelector);
  const displayCards = shuffleArray([...cards, ...cards]);

  const handleTryAgain = () => {
    window.location.reload();
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="content">
        <div className="content-top">
          <PointDisplay />
          <button onClick={handleTryAgain}>Try Again</button>
        </div>
        <div className="content-middle ">
          {displayCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        <div className="content-footer">
          Bu uygulama{" "}
          <a
            href="https://alperenkursun.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alperen Kurşun
          </a>{" "}
          tarafından yapılmıştır.
        </div>
      </div>
    </div>
  );
}

export default App;
