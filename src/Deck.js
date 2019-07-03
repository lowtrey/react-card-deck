import React from 'react';
import Card from './Card';
import axios from 'axios';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deck: null, drawn: [] };
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/?deck_count=1`);
        this.setState({ deck: deck.data });
    }
    async getCard() {
        let id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if(!cardRes.data.success) {
                throw new Error('No cards remaining!')
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code, 
                        image: card.image,
                        name: `${card.value} OF ${card.suit}`
                    }
                ]
            }));
        } catch (err) {
            alert(err);
        }
    }
    render() {
        const cards = this.state.drawn.map(c => (
            <Card key={c.id} name={c.name} image={c.image} />
        ));
        return(
            <div>
                <h1>♠︎ Card Dealer ♠︎</h1>
                <button 
                    onClick={this.getCard} 
                    disabled={this.state.remaining === 0}
                >Hit Me!
                </button>
                {cards}
            </div>
        );
    }
}

export default Deck;
