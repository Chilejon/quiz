import React, { Component } from "react";
import Slider from "./components/Slider";
import Cheggers from "./components/Cheggers";

class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      slider: [],
      showForm: false,
      CheggersRightOrWrong: "" 
    };
    this.addTeam = this.addTeam.bind(this);
    this.adjustScores = this.adjustScores.bind(this);
  }

  addTeam(e) {
    var newArray = this.state.slider.slice()
    var defaultScore = 0
    if (this.teamScore.value !== 0)
      {
        defaultScore = this.teamScore.value
      }
      else
      {
        defaultScore = 0
      }

    newArray.push({
      id: this.teamName.value,
      team: this.teamName.value,
      score: defaultScore
    });

    this.setState({ slider: newArray });
    e.preventDefault();
    this.teamName.value = "";
    this.teamScore = "";
  }

  adjustScores(rightOrWrong) {
    this.setState({
      CheggersRightOrWrong: rightOrWrong
    })

    let copy = Object.assign({}, this.state); 

    copy.slider = copy.slider.map((sli) => {
      sli.score = 5
      return sli
    })

    this.setState(copy) 
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
            <Slider id={slider.id} team={slider.team} score={slider.score}  />
          </section>
        ))}

        <section className="cheggersBorder">
          <h3>Chegger's</h3>
          <Cheggers adjustScores={this.adjustScores} />
          </section>
      </div>
    );
  }
}

export default Quiz;
