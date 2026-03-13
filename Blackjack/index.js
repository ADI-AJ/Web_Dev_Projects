
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let messageEl=document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)
    console.log(randomCard)
    if(randomCard===0){
        getRandomCard()
    }
    
    if (randomCard===1){
        return 11
    }
    else if (randomCard>=11){
        return 10
    }
    else{
        return randomCard
    } 
     
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true
    cards = [firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(firstCard,secondCard){
    cardsEl.textContent = "Cards: "
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    if (sum<=20){
    message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "You've got Blackjack"
        hasBlackjack=true
    }
    else{
        message = "You're out of the game"
        isAlive=false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: "+sum

}

function newCard(){
    if (isAlive && hasBlackjack===false){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum+=newCard
        renderGame()
    }
    
}