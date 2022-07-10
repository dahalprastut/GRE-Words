import React from "react";
import "./card";

export default function MeaningCard({
  word,
  showMeaning,
  difficultHandler,
  easyHandler,
}) {
  return (
    <div className="meaning-card d-flex column ai-center">
      <h1>
        {word?.name || "No words available"}
      </h1>
      {showMeaning && (
        <div className="shown-detail">
          {word?.meaning && (
            <div className="meaning d-flex">
              <h4>Meaning</h4>
              <div className="m-0-2 d-flex column jc-center">
                {word.meaning.map((el, idx) => {
                  return <p key={idx}>{el}</p>;
                })}
              </div>
            </div>
          )}
          {word?.example && (
            <div className="sentence d-flex m-2-0">
              <h4>Sentence</h4>
              <div className="m-0-2 d-flex column jc-center">
                {word.example.map((el, idx) => {
                  return <p key={idx}>{el}</p>;
                })}
              </div>
            </div>
          )}

          {word?.syn && (
            <div className="synonyms d-flex m-2-0">
              <h4>Synonyms</h4>
              <div className="m-0-2 d-flex column jc-center">
                {word.syn.map((el, idx) => {
                  return <p key={idx}>{el}</p>;
                })}
              </div>
            </div>
          )}

          {word?.difficulty === "easy" ? (
            <div className="d-flex jc-center">
              <button
                onClick={() =>
                  difficultHandler(word)
                }
              >
                Mark as difficult
              </button>
            </div>
          ) : (
            <div className="d-flex jc-center">
              <button
                onClick={() => easyHandler(word)}
              >
                Mark as easy
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
