import React from 'react';
import Card from './Card';

class Deck extends React.Component {
    render() {
        return(
            <div>
                <h3>Render Cards Here</h3>
                <Card />
            </div>
        );
    }
}

export default Deck;