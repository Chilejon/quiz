import React, { Component } from "react";
import Tile from "./components/Tile"

class TheWall extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sets: [
        {id: "Birds", tile1: "Duck",tile2: "Swan",tile3: "Pigeon",tile4: "Swallow"},
        {id: "Cars", tile1: "Escort",tile2: "Fiesta",tile3: "Mini",tile4: "Beetle"},
        {id: "Books", tile1: "IT",tile2: "Bible",tile3: "Creed",tile4: "1984"},
        {id: "Trees", tile1: "Oak",tile2: "Beech",tile3: "Willow",tile4: "Maple"}
      ],
      clicked: 0,
      selection1: null,
      selection2: null,
      selection3: null,
      selection4: null 
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.checkClicked = this.checkClicked.bind(this);

  }

  handleSelection(event) {
    console.log(event)
    var clickedSoFar = parseInt(this.state.clicked);
    if (clickedSoFar == 0)
    {
      this.setState({selection1: event});
    }    

    if (clickedSoFar == 1)
    {
      this.setState({selection2: event});
    }    

    if (clickedSoFar == 2)
    {
      this.setState({selection3: event});
    }    

    if (clickedSoFar == 3)
    {
      this.setState({selection4: event});
      this.checkClicked(event)
      clickedSoFar = 0
    }
    else
    {
      clickedSoFar++ 
    }
    console.log(clickedSoFar)
    this.setState({clicked: clickedSoFar});
  }

  checkClicked(selection4) {
    console.log(this.state.selection1 + " " + this.state.selection2 + " " + this.state.selection3 + " " + selection4)
    
  }
  
  render() {
    return (
      <div>
        <h1>The Wall</h1>
        <p>Selected: {this.state.clicked} </p>

        <Tile label={this.state.sets[0].tile1} id={this.state.sets[0].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[0].tile2} id={this.state.sets[0].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[0].tile3} id={this.state.sets[0].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[0].tile4} id={this.state.sets[0].id} handleSelection={this.handleSelection} /><br/>
        <Tile label={this.state.sets[1].tile1} id={this.state.sets[1].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[1].tile2} id={this.state.sets[1].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[1].tile3} id={this.state.sets[1].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[1].tile4} id={this.state.sets[1].id} handleSelection={this.handleSelection} /><br/>
        <Tile label={this.state.sets[2].tile1} id={this.state.sets[2].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[2].tile2} id={this.state.sets[2].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[2].tile3} id={this.state.sets[2].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[2].tile4} id={this.state.sets[2].id} handleSelection={this.handleSelection} /><br/>
        <Tile label={this.state.sets[3].tile1} id={this.state.sets[3].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[3].tile2} id={this.state.sets[3].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[3].tile3} id={this.state.sets[3].id} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[3].tile4} id={this.state.sets[3].id} handleSelection={this.handleSelection} />
        
        </div>
    );
  }
}

export default TheWall;
