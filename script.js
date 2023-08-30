let flippedCards = [];
let locked = false;

function flipCard(card) {
    if (locked) return;

    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            locked = true;
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const card1 = flippedCards[0].querySelector('.card-back').textContent;
    const card2 = flippedCards[1].querySelector('.card-back').textContent;

    if (card1 === card2) {
        flippedCards.forEach(card => card.classList.add('matched'));
    } else {
        flippedCards.forEach(card => card.classList.remove('flipped'));
    }

    flippedCards = [];
    locked = false;
}
