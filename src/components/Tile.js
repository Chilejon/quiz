import React, { Component } from "react";

class Tile extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tileFound : "false"
    };
  }

  setAnsweredCorrect(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <button
      onClick={() => {
        this.props.handleSelection(this.props.label);
      }}
      >
        {this.props.label}
        <br/>
        {this.state.tileFound}
        <br/>
        {this.props.id}

      </button>
      );
  }
}
export default Tile;
