import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "./css/style.css";

class Home extends Component {
  render() {
    var styleImage = {
      width: "700px",
      height: "400px",
    };

    return (
      <div id="wrap" className="">
        <br />
        <br />
        <div className="container align-items-center">
          <h1>Patient Record Database</h1>
          <p>
            <br /> UI based on React.
          </p>

          <img
            className="img-thumbnail"
            src="/hospital.jfif"
            alt="filing"
            style={styleImage}></img>
        </div>
      </div>
    );
  }
}

export default Home;
