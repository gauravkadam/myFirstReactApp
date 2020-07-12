import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <ul>
        <Link className="link" to="/Home">
          Home
        </Link>
        <Link className="link" to="/Service">
          Service
        </Link>
      </ul>
    );
  }
}
