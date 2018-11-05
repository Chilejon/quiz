import React, { Component } from "react";
import RightWrong from "./RightWrong";

class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    console.log("props", this.props);
    return (
      <table className="sliderTable" id={this.props.id}>
        <tr>
          <th>
            <h2>{this.props.team}</h2>
          </th>
        </tr>

        <tr className={parseInt(this.props.score) < -8 ? "token" : "minus"}>
          <td>Minus</td>
        </tr>
        <tr className={this.props.score === "-8" ? "token" : "minus"}>
          <td>-8</td>
        </tr>
        <tr className={this.props.score === "-7" ? "token" : "minus"}>
          <td>-7</td>
        </tr>
        <tr className={this.props.score === "-6" ? "token" : "minus"}>
          <td>-6</td>
        </tr>
        <tr className={this.props.score === "-5" ? "token" : "minus"}>
          <td>-5</td>
        </tr>
        <tr className={this.props.score === "-4" ? "token" : "minus"}>
          <td>-4</td>
        </tr>
        <tr className={this.props.score === "-3" ? "token" : "minus"}>
          <td>-3</td>
        </tr>
        <tr className={this.props.score === "-2" ? "token" : "minus"}>
          <td>-2</td>
        </tr>
        <tr className={this.props.score === "-1" ? "token" : "minus"}>
          <td>-1</td>
        </tr>
        <tr className={this.props.score === "0" ? "token" : "even"}>
          <td>0</td>
        </tr>
        <tr className={this.props.score === "1" ? "token" : "plus"}>
          <td>+1</td>
        </tr>
        <tr className={this.props.score === "2" ? "token" : "plus"}>
          <td>+2</td>
        </tr>
        <tr className={this.props.score === "3" ? "token" : "plus"}>
          <td>+3</td>
        </tr>
        <tr className={this.props.score === "4" ? "token" : "plus"}>
          <td>+4</td>
        </tr>
        <tr className={this.props.score === "5" ? "token" : "plus"}>
          <td>+5</td>
        </tr>
        <tr className={this.props.score === "6" ? "token" : "plus"}>
          <td>+6</td>
        </tr>
        <tr className={this.props.score === "7" ? "token" : "plus"}>
          <td>+7</td>
        </tr>
        <tr className={this.props.score === "8" ? "token" : "plus"}>
          <td>+8</td>
        </tr>
        <tr className={parseInt(this.props.score) > 8 ? "token" : "plus"}>
          <td>Plus</td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => {
                this.props.moveToken("back", this.props.id);
              }}
            >
              Minus
            </button>
            <button
              onClick={() => {
                this.props.moveToken("forward", this.props.id);
              }}
            >
              Plus
            </button>
          </td>
        </tr>
        <tr className="currentScore">
          <td>
            <h2>{this.props.score}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <input
                type="radio"
                value="Right"
                name={this.props.id}
                checked={this.state.answeredCorrect === "Right"}
                onChange={() => {
                  this.props.setTheirAnswers("Right", this.props.id);
                }}
              />
              Right
            </label>
            <label>
              <input
                type="radio"
                value="Wrong"
                name={this.props.id}
                checked={this.state.answeredCorrect === "Wrong"}
                onChange={() => {
                  this.props.setTheirAnswers("Wrong", this.props.id);
                }}
              />
              Wrong
            </label>
          </td>
        </tr>
        <tr>
          <td>Answered: {this.props.rightOrWrong}</td>
        </tr>
      </table>
    );
  }
}
export default Slider;
