import React from "react";
import Card from "../components/cards/card";

const cards = [
  {
    name: "All",
    route: "/all",
    idx: 2,
  },
  {
    name: "Group 1",
    route: "/group-1",
    idx: 2,
  },
  {
    name: "Group 2",
    route: "/group-2",
    idx: 3,
  },
  {
    name: "Hard Meanings",
    route: "/hard-meanings",
    idx: 4,
  },
];

export default function HomePage() {
  return (
    <div className="main">
      <div className="center d-flex f-wrap">
        {cards.map(data => {
          return (
            <Card
              name={data.name}
              link={data.route}
              key={data.idx}
            />
          );
        })}
      </div>
    </div>
  );
}
