import React, { Component } from "react";
import Slider from "./components/Slider";

class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      slider: [],
      showForm: false
    };
    this.addTeam = this.addTeam.bind(this);
  }

  addTeam(e) {
    var newArray = this.state.slider.slice();
    newArray.push({
      id: this.teamName.value,
      team: this.teamName.value,
      score: this.teamScore.value
    });
    this.setState({ slider: newArray });
    e.preventDefault();
    this.teamName.value = "";
    this.teamScore = "";
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.addTeam}>
            <p>Enter a team</p>
            <label>Team name</label>
            <input
              id="teamName"
              ref={teamName => (this.teamName = teamName)}
              required
            />
            <label>score</label>
            <input
              id="teamscore"
              ref={teamScore => (this.teamScore = teamScore)}
              required
            />
            <button type="submit">add</button>
          </form>
        </div>

        {this.state.slider.map(slider => (
          <section className="slider">
            <Slider id={slider.id} team={slider.team} score={slider.score} />
          </section>
        ))}
      </div>
    );
  }
}

export default Quiz;
