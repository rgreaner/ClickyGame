import React, { Component } from "react";
import"../styles/Board.css";
import Card from "./Card.js";
import  Bands from "../bandArray.json"

class Board extends Component {
    state = {
        bandPics: Bands
    }

shuffle = () => {
    console.log("shuffle");
    let a = this.state.bandPics;
    for (let i = a.length-1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [a[i], a[j]] = [a[j], a[i]];
    };
    this.setState({bandPics: a});
};

render() {
    const members = (
        this.state.bandPics.map(member => {
            return <Card
                key={member.key}
                member={member}
                gameOver={() => this.props.gameOver()}
                shuffle={() => this.shuffle()}
                incrementScore={() => this.props.incrementScore()}
                clickedOn={() => this.props.clickedOn()}
            />
        })
    )

   return ( 
    <div className= "container">
       <div className="row">
            {members}
        </div>
    </div>
            )
}}




export default Board;