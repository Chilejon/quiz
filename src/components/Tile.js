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
      onClick={(e) => {
        this.props.handleSelection(e, this.props.label, this.props.id);
      }}
      className="tileButton"
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
