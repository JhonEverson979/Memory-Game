export interface Card {
    id: string;
    description: string;
    img: string;
}

const uniqueCards: Card[] = [
    { img: '01.png', description: 'card 1', id: 'card1' },
    { img: '02.jpg', description: 'card 2', id: 'card2' },
    { img: '03.jpg', description: 'card 3', id: 'card3' },
    { img: '04.png', description: 'card 4', id: 'card4' },
    { img: '05.png', description: 'card 5', id: 'card5' },
    { img: '06.jpg', description: 'card 6', id: 'card6' },
    { img: '07.jpg', description: 'card 7', id: 'card7' },
    { img: '08.jpg', description: 'card 8', id: 'card8' }
]

const cardsOriginais: Card[] = []

uniqueCards.forEach((card) => {
    cardsOriginais.push({ ...card })
    cardsOriginais.push({ ...card })
})

let cards: Card[] = []



function shuffleNumber(min: number, max: number) {
    return parseInt(String(Math.random() * (max - min + 1) + min))
}


const len = cardsOriginais.length

while (cards.length < len) {
    let shuffled = shuffleNumber(0, cardsOriginais.length - 1)
    const item = cardsOriginais.splice(shuffled, 1)
    cards.push(...item)
}















// const random = (): number => {
//     return parseInt(String(Math.random() * (6 - 0 + 1) + 0));
// }

// cardsOriginais.forEach(obj => {
//     let r = random()
//     let i = cardsOriginais.splice(r, 1)
//     console.log(cards.push(...i))
//     console.log(cards.push(...i))
// })









export { cards }