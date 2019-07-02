import React from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deck: '' };
    }
    async componentDidMount() {
        let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        let deck = response.data.deck_id;
        this.setState({ deck });
      }
    render() {
        return(
            <div>
                <h1>♠︎ Card Dealer ♠︎</h1>
                <button>Hit Me!</button>
                <h3>Render Cards Here</h3>
                <Card />
            </div>
        );
    }
}

export default Deck;