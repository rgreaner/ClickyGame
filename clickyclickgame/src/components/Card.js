import React, { Component } from "react";
import "../styles/Card.css";

class Card extends Component  {
    state = { 
        clickedOn: false
    }

handleClick = props => {
    if (!this.state.clickedOn) {
        this.setState({ clickedOn: true })
        this.props.shuffle();
        this.props.incrementScore();
    }
    else {
        //this.props.gameOver();
        this.setState({ clickedOn: false })
    }
};

render() {
    return (
        <div className="col-md-3 photo" onClick={this.handleClick}>
            <img className="character-image" src={this.props.member.url}/>
        </div>
    )
}
}

export default Card;