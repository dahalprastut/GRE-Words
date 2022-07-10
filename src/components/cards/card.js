import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ name, link }) {
  return (
    <Link
      to={`${link}`}
      className="card d-flex jc-center ai-center m-2 text-center"
    >
      <h1>{name}</h1>
    </Link>
  );
}
