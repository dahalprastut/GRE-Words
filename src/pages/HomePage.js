import React from "react";
import Card from "../components/cards/card";

const cards = [
  {
    name: "All",
    route: "/all",
    idx: 1,
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
    name: "Group 3",
    route: "/group-3",
    idx: 4,
  },
  {
    name: "Hard Meanings",
    route: "/hard-meanings",
    idx: 5,
  },
];

export default function HomePage() {
  return (
    <div className='main'>
      <div className='center d-flex f-wrap'>
        {cards.map((data) => {
          return <Card name={data.name} link={data.route} key={data.idx} />;
        })}
      </div>
    </div>
  );
}
