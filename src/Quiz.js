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
    this.addTeam = this.addTeam.bind(this)
    this.adjustScores = this.adjustScores.bind(this)
    this.moveToken = this.moveToken.bind(this)
    this.setTheirAnswers = this.setTheirAnswers.bind(this)
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
      score: defaultScore,
      rightOrWrong: ""
    });

    this.setState({ slider: newArray });
    e.preventDefault();
    this.teamName.value = "";
    this.teamScore = "";
  }

  adjustScores(rightOrWrong) {
    let copy = Object.assign({}, this.state); 
    copy.slider = copy.slider.map((sli) => {
      var score = parseInt(sli.score)
      if(rightOrWrong === sli.rightOrWrong)
      {
        score = score + 1
      }
      sli.score = score.toString() 
      return sli
    })
    this.setState(copy)
   }
  
   setTheirAnswers(event, id) {
    let copy = Object.assign({}, this.state); 
    copy.slider = copy.slider.map((sli) => {
      if(sli.id === id)
      {
      if(event !== null)
      {
        sli.rightOrWrong = event
      }
    }
      return sli
    })
    this.setState(copy)
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
            <Slider id={slider.id} team={slider.team} score={slider.score} moveToken={this.moveToken} setTheirAnswers={this.setTheirAnswers} />
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
