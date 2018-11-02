import React, { Component } from "react";

class Cheggers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      answeredCorrect: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      answeredCorrect: event.target.value
    });
    console.log(this.state.answeredCorrect)
  }

  handleSubmit(event) {
    this.setState({
      answeredCorrect: event.target.value
    });
    console.log(this.state.answeredCorrect)
    event.preventDefault();
  }

  render() {
    console.log("props", this.props);
    return (
      <section>
<form onSubmit={this.handleSubmit}>
      <p>Did they answer it right or wrong?</p>
     
          <label>
            <input type="radio" value="Right"
              checked={this.state.answeredCorrect === "Right"}
              onChange={this.handleChange}
            />
            Right
          </label>
          <label>
            <input type="radio" value="Wrong"
              checked={this.state.answeredCorrect === "Wrong"}
              onChange={this.handleChange}
            />
            Wrong
          </label>
     
      <button 
      onClick={() => {
              this.props.adjustScores(this.state.answeredCorrect);
            }}>
            adjust
            </button>
    </form>
       </section>
    )
  }
}
export default Cheggers;
