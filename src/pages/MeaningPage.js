import React, {
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import MeaningCard from "../components/cards/meaningCard";
import words from "./../data/data";

export default function MeaningPage() {
  const location = useLocation();
  let neededWords;

  const [word, setWord] = useState({});
  const [showMeaning, setShowMeaning] =
    useState(false);

  if (
    location.pathname !== "/all" &&
    location.pathname !== "/hard-questions"
  ) {
    const group = location.pathname.split("-")[1];
    neededWords = words.filter(
      el => el.group == group
    );
  } else if (location.pathname === "/all") {
    neededWords = [...words];
  } else {
    neededWords = JSON.parse(
      localStorage.getItem("words")
    );
  }

  const lengthOfWords = neededWords.length;

  useEffect(() => {
    changeWord();
  }, []);

  const changeRandomHandler = () => {
    changeWord();
    setShowMeaning(false);
  };

  const changeWord = () => {
    const randomNumber = Math.floor(
      Math.random() * lengthOfWords
    );
    setWord(neededWords[randomNumber]);
  };

  const changeShowHandler = () => {
    setShowMeaning(true);
  };

  const [localItems, setLocalItems] = useState(
    []
  );
  const difficultHandler = word => {
    const newLocalItem = [
      ...localItems,
      { ...word, difficulty: "difficult" },
    ];
    setLocalItems(newLocalItem);
    localStorage.setItem(
      "words",
      JSON.stringify(newLocalItem)
    );
    changeWord();
    setShowMeaning(false);
  };

  const easyHandler = word => {
    const newLocalItem = neededWords.filter(
      el => el.id !== word.id
    );
    setLocalItems(newLocalItem);
    localStorage.setItem(
      "words",
      JSON.stringify(newLocalItem)
    );
    changeWord();
    setShowMeaning(false);
  };

  return (
    <div className="main">
      <div className="center d-flex column">
        <MeaningCard
          word={word}
          showMeaning={showMeaning}
          difficultHandler={() =>
            difficultHandler(word)
          }
          easyHandler={easyHandler}
        />
        <div className="buttons-wrapper d-flex jc-center m-2-0">
          <button
            disabled={showMeaning}
            onClick={changeShowHandler}
          >
            Show Meaning
          </button>
          <button onClick={changeRandomHandler}>
            Next Word
          </button>
        </div>
      </div>
    </div>
  );
}
