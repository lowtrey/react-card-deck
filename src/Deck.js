import React from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deck: '', card: '', altContent: '' };
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        let deck = response.data.deck_id;
        this.setState({ deck });
        console.log(response);
    }
    async handleClick() {
        let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck}/draw/`);
        let altContent = `${response.data.cards[0].value} OF ${response.data.cards[0].suit}`;
        let card = response.data.cards[0].image;
        this.setState({ card, altContent });
        console.log(altContent);
    }
    render() {
        return(
            <div>
                <h1>♠︎ Card Dealer ♠︎</h1>
                <button onClick={this.handleClick}>Hit Me!</button>
                <Card card={this.state.card} altContent={this.state.altContent} />
            </div>
        );
    }
}

export default Deck;
