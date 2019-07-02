import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.card} alt={this.props.altContent} />
            </div>
        );
    }
}

export default Card;