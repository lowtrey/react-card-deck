import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <img 
                className='Card'
                src={this.props.image} 
                alt={this.props.name} 
            />
        );
    }
}

export default Card;