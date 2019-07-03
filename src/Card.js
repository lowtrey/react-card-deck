import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        let angle = Math.random() * 90 - 45,
            xPos = Math.random() * 40 - 20,
            yPos = Math.random() * 40 - 20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    }
    render() {
        return(
            <img 
                style={{ transform: this._transform }}
                className='Card'
                src={this.props.image} 
                alt={this.props.name} 
            />
        );
    }
}

export default Card;