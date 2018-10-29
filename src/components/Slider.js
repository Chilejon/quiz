import React, { Component } from "react";

class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      team: this.props.team,
      score: this.props.score,
      id: this.props.id
    };
  }

  componentDidMount() {
    this.moveToken('no')
  }

  moveToken(event) {
    var score = parseInt(this.state.score)
    if (event === 'back' || event === 'forward')
    {
      event === 'back'? score = score - 1 : score = score + 1 
    }
    this.setState({ score: score });
  }

  render() {
    console.log("props", this.props);
    return (
      <table className="sliderTable" id={this.props.id}>
        <tr>
          <th>{this.props.team}</th>
        </tr>
        <button onClick={() => {this.moveToken('back')}}>Minus</button>
        <tr id={this.props.id + "minus"}>
          <td>Minus</td>
        </tr>
        <tr className={this.state.score===-8?"token":"minus"}>
          <td>-8</td>
        </tr>
        <tr className={this.state.score===-7?"token":"minus"}>
          <td>-7</td>
        </tr>
        <tr className={this.state.score===-6?"token":"minus"}>
          <td>-6</td>
        </tr>
        <tr className={this.state.score===-5?"token":"minus"}>
          <td>-5</td>
        </tr>
        <tr className={this.state.score===-4?"token":"minus"}>
          <td>-4</td>
        </tr>
        <tr className={this.state.score===-3?"token":"minus"}>
          <td>-3</td>
        </tr>
        <tr className={this.state.score===-2?"token":"minus"}>
          <td>-2</td>
        </tr>
        <tr className={this.state.score===-1?"token":"minus"}>
          <td>-1</td>
        </tr>
        <tr className={this.state.score===0?"token":"even"}>
          <td>0</td>
        </tr>
        <tr className={this.state.score===1?"token":"plus"}>
          <td>+1</td>
        </tr>
        <tr className={this.state.score===2?"token":"plus"}>
          <td>+2</td>
        </tr>
        <tr className={this.state.score===3?"token":"plus"}>
          <td>+3</td>
        </tr>
        <tr className={this.state.score===4?"token":"plus"}>
          <td>+4</td>
        </tr>
        <tr className={this.state.score===5?"token":"plus"}>
          <td>+5</td>
        </tr>
        <tr className={this.state.score===6?"token":"plus"}>
          <td>+6</td>
        </tr>
        <tr className={this.state.score===7?"token":"plus"}>
          <td>+7</td>
        </tr>
        <tr className={this.state.score===8?"token":"plus"}>
          <td>+8</td>
        </tr>
        <tr id={this.props.id + "plus"}>
          <td>Plus</td>
        </tr>
        <button onClick={() => {this.moveToken('forward')}}>Plus</button>
        <tr>
          <td>{this.state.score}</td>
        </tr>
      </table>
    );
  }
}
export default Slider;
