import React from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deck: '', card: '', altContent: '', remaining: '' };
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        let deck = response.data.deck_id;
        this.setState({ deck });
        console.log(response);
    }
    async handleClick() {
        let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck}/draw/`),
            altContent = `${response.data.cards[0].value} OF ${response.data.cards[0].suit}`,
            card = response.data.cards[0].image,
            remaining = response.data.remaining;
        this.setState({ card, altContent, remaining });
    }
    render() {
        return(
            <div>
                <h1>♠︎ Card Dealer ♠︎</h1>
                <h3>Cards Remaining: {this.state.remaining}</h3>
                <button onClick={this.handleClick} disabled={this.state.remaining === 0}>Hit Me!</button>
                <Card card={this.state.card} altContent={this.state.altContent} />
            </div>
        );
    }
}

export default Deck;
