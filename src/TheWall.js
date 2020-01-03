import React, { Component } from "react";
import Tile from "./components/Tile"

class TheWall extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sets: [
        {id: "Birds", tile1: "Duck",tile2: "Swan",tile3: "Pigeon",tile4: "Swallow", status: "unfound"},
        {id: "Cars", tile1: "Escort",tile2: "Fiesta",tile3: "Mini",tile4: "Beetle", status: "unfound"},
        {id: "Books", tile1: "IT",tile2: "Bible",tile3: "Creed",tile4: "1984", status: "unfound"},
        {id: "Trees", tile1: "Oak",tile2: "Beech",tile3: "Willow",tile4: "Maple", status: "unfound"}
      ],
      clicked: 0,
      selection1: null,
      selection2: null,
      selection3: null
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.checkClicked = this.checkClicked.bind(this);
    this.onUpdateItem = this.onUpdateItem.bind(this);

  }

  handleSelection(event, id) {
    console.log(event)
    var clickedSoFar = parseInt(this.state.clicked);
    if (clickedSoFar === 0)
    {
      this.setState({selection1: event + " " + id});
    }    

    if (clickedSoFar === 1)
    {
      this.setState({selection2: event + " " + id});
    }    

    if (clickedSoFar === 2)
    {
      this.setState({selection3: event + " " + id});
    }    

    if (clickedSoFar === 3)
    {
      //this.setState({selection4: event + " " + id});
      this.checkClicked(event, id)
      clickedSoFar = 0
    }
    else
    {
      clickedSoFar++ 
    }
    console.log(clickedSoFar)
    this.setState({clicked: clickedSoFar});
  }

  onUpdateItem = i => {
    this.setState(state => {
      const sets = state.sets.map((item, j) => {
        console.log(i + " " + j + " " + item.id)
        if (i === item.id) {
          return item.status = "found" // or + "found"
        } else {
          return item;
        }
      });
      return {
        sets,
      };
    });
  };



  checkClicked(selection4, id) {

    if (this.state.selection1.includes(id) && this.state.selection2.includes(id) && this.state.selection3.includes(id))
    {
      console.log("success")
      this.onUpdateItem(id)
      // this.setState(state => {
      //   const sets = state.sets.map(item => item.status = "found");
      //   return { 
      //     sets,
      // }
      //})
    
    console.log(this.state)
    }
    else
    {
      console.log(this.state.selection1 + " " + this.state.selection2 + " " + this.state.selection3 + " " + selection4 + " " + id + " - " + id)
    }
  }
  
  render() {
    return (
      <div>
        <h1>The Wall</h1>
        <p>Selected: {this.state.clicked} </p>

        <Tile label={this.state.sets[0].tile1} id={this.state.sets[0].id} status={this.state.sets[0].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[0].tile2} id={this.state.sets[0].id} status={this.state.sets[0].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[0].tile3} id={this.state.sets[0].id} status={this.state.sets[0].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[0].tile4} id={this.state.sets[0].id} status={this.state.sets[0].status} handleSelection={this.handleSelection} /><br/>
        <Tile label={this.state.sets[1].tile1} id={this.state.sets[1].id} status={this.state.sets[1].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[1].tile2} id={this.state.sets[1].id} status={this.state.sets[1].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[1].tile3} id={this.state.sets[1].id} status={this.state.sets[1].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[1].tile4} id={this.state.sets[1].id} status={this.state.sets[1].status} handleSelection={this.handleSelection} /><br/>
        <Tile label={this.state.sets[2].tile1} id={this.state.sets[2].id} status={this.state.sets[2].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[2].tile2} id={this.state.sets[2].id} status={this.state.sets[2].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[2].tile3} id={this.state.sets[2].id} status={this.state.sets[2].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[2].tile4} id={this.state.sets[2].id} status={this.state.sets[2].status} handleSelection={this.handleSelection} /><br/>
        <Tile label={this.state.sets[3].tile1} id={this.state.sets[3].id} status={this.state.sets[3].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[3].tile2} id={this.state.sets[3].id} status={this.state.sets[3].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[3].tile3} id={this.state.sets[3].id} status={this.state.sets[3].status} handleSelection={this.handleSelection} />
        <Tile label={this.state.sets[3].tile4} id={this.state.sets[3].id} status={this.state.sets[3].status} handleSelection={this.handleSelection} />
        
        </div>
    );
  }
}

export default TheWall;
