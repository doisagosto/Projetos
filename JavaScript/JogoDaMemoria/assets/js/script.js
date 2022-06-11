const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var currentNumberWrapperAcerto = document.getElementById("currentNumberAcerto");
var currentNumberWrapperErro = document.getElementById("currentNumberErro")
var currentNumberAcerto = 0;
var currentNumberErro = 0

function increment(){
    currentNumberAcerto = currentNumberAcerto + 1;
    currentNumberWrapperAcerto.innerHTML = currentNumberAcerto;
}

function decrement(){
    currentNumberErro = currentNumberErro - 1;
    currentNumberWrapperErro.innerHTML = currentNumberErro;
}

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;


    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        increment();
        return;
    }else{
        unflipCards();
        decrement();
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}


function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500)
}


function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach((card) =>{
    let randomPosition = Math.floor(Math.random()*12);
    card.style.order = randomPosition;
})
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})





