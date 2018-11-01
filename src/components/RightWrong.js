import React, { Component } from "react";

class RightWrong extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      answeredCorrect: ''
    };
  }

  setAnsweredCorrect(event) {
    console.log(event.target.value);
  }

  render() {
    console.log("props", this.props);
    return (
      <section onChange={this.setAnsweredCorrect.bind(this)}>
        <label><input type="radio" value="Right" name="answered"/>Right</label>
        <label><input type="radio" value="Wrong" name="answered"/>Wrong</label>
        </section>
    );
  }
}
export default RightWrong;
