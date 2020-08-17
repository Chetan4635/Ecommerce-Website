import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
  console.log("API IS", API);
  return (
    <Base title="Home Page" description="Welcome to our Tshirt store">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
        <button className="btn btn-success">TEST</button>
        <div className="col-4"></div>
        <button className="btn btn-success">TEST</button>
        <div className="col-4"></div>
      </div>
    </Base>
  );
}
