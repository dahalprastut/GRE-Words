import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="center">
        <div className="d-flex jc-end">
          <Link to="/" className="p-0-10 h-40">
            Dashboard
          </Link>
          <Link
            to="/hard-questions"
            className="p-0-10 h-40 m-0-2"
          >
            Hard Meanings
          </Link>
        </div>
      </div>
    </nav>
  );
}
