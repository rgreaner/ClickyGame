import React, { Component } from 'react';
import Board from "./components/Board.js";
import Header from "./components/Header.js";
//import './App.css';

class App extends Component {

state = {
 score: 0,
 topScore:0
}


// handleGameOver = () => {
//   this.setState ({ score: 0 })
// };

incrementScore = () => {
  let {score, topScore} = this.state;
  score = score +1;
  //console.log("using incrementScore")
  this.setState({score: score})

  if (score > topScore) {
    this.setState({topScore: score})
  }
};

render () {
  return (
    <div className = "App">
    <Header
    currentScore={this.state.score}
    topScore={this.state.topScore}/>
    <Board
    //gameOver={this.handleGameOver()}
    incrementScore={() => this.incrementScore()}/>
  </div>
  );
}
}

export default App;
