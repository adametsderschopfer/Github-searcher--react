import React, { Component } from "react";

export default class About extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">About</h1>
            <p className="lead">Application version <strong>1.0.0</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
