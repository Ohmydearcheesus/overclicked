import React, { Component } from "react";
import "./index.css";
import "./App.css";

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const state = this.props.state;
    const setClicked = this.props.setClicked;

    return (
      <div className="square" onClick={setClicked}>
        <img src={state.url} />
      </div>
    );
  }
}

export default Tile;
