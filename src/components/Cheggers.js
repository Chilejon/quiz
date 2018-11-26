import React, { Component } from "react";

class Cheggers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      answeredCorrect: "",
      CheggersRightOrWrong: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      answeredCorrect: event.target.value
    });
    console.log(this.state.answeredCorrect);
  }

  handleSubmit(event) {
    this.setState({
      answeredCorrect: event.target.value
    });
    console.log(this.state.answeredCorrect);
    event.preventDefault();
  }

  render() {
    console.log("props", this.props);
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <button
            onClick={() => {
              this.props.setCheggerAnswers(true, this.props.id);
            }}
          >
            <h2 className="green">&#10004;</h2>
          </button>
          <button
            onClick={() => {
              this.props.setCheggerAnswers(false, this.props.id);
            }}
          >
            <h2 className="red">&#10005;</h2>
          </button>
          <label className="rightWrong">
            {this.props.CheggersRightOrWrong}
          </label>
          <br />
          <button
            onClick={() => {
              this.props.adjustScores(this.props.CheggersRightOrWrong);
            }}
          >
            Adjust
          </button>
        </form>
      </section>
    );
  }
}
export default Cheggers;
