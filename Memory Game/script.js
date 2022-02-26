const section = document.querySelector("section");
const livesCount = document.querySelector("span");
let playerLives = 5;

livesCount.textContent = playerLives;

const getData = () => [
  { imgSrc: "./assets/bmw.png", name: "bmw" },
  { imgSrc: "./assets/facebook.png", name: "facebook" },
  { imgSrc: "./assets/kfc.png", name: "kfc" },
  { imgSrc: "./assets/nike.png", name: "nike" },
  { imgSrc: "./assets/photoshop.png", name: "photoshop" },
  { imgSrc: "./assets/random.png", name: "random" },
  { imgSrc: "./assets/skype.png", name: "skype" },
  { imgSrc: "./assets/visa.png", name: "visa" },
  { imgSrc: "./assets/bmw.png", name: "bmw" },
  { imgSrc: "./assets/facebook.png", name: "facebook" },
  { imgSrc: "./assets/kfc.png", name: "kfc" },
  { imgSrc: "./assets/nike.png", name: "nike" },
  { imgSrc: "./assets/photoshop.png", name: "photoshop" },
  { imgSrc: "./assets/random.png", name: "random" },
  { imgSrc: "./assets/skype.png", name: "skype" },
  { imgSrc: "./assets/visa.png", name: "visa" }
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");

        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', e => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
}

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    console.log(flippedCards);
    
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');

            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        }
        else {
            console.log('not match');
            
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });

            playerLives--;
            livesCount.textContent = playerLives;
            
            if(playerLives === 0) {
                // alert('Game Over');
                restart("Game Over👎 Try again!!");
            }
        }
    }

    if(toggleCard.length === 16) {
        // alert('You Won');
        restart("You Won!!🎉");
    }
}

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = "none";
    
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });

    playerLives = 5;
    livesCount.textContent = playerLives;

    setTimeout(() => window.alert(text), 100);
}


cardGenerator();