class Deck {
    #cardsImages = ["deer.jpg", "fox.jpg", "hare.jpg", "mouse.jpg", "panda.jpg", "pig.jpg", "tiger.jpg", "flamingo.jpg", "bird.jpg"];

    constructor() {
        this.cards = [];
        this.#cardsImages.forEach(image => {
            this.cards.push(new Card(image));
            this.cards.push(new Card(image));
        });
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    removeCard (card) {
        let index = this.cards.findIndex(item => item.imagePath === card.imagePath);
        if (index !== -1) {
            this.cards.splice(index,1);
            card.disconnectFromDOM();
        }
    }
}