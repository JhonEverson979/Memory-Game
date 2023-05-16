import { Card } from "./card";

export class Game {
    constructor(private dom: HTMLDivElement, private cards: Card[]) { }

    private firstCard: HTMLDivElement | null = null
    private secondCard: HTMLDivElement | null = null

    reset() {
        this.firstCard?.classList.remove('show')
        this.secondCard?.classList.remove('show')
        this.firstCard = null
        this.secondCard = null
    }

    addListeners() {
        Array.from(this.dom.querySelectorAll('[data-card]')).forEach((card, i) => {
            card.addEventListener('click', e => {

                if (this.firstCard === e.currentTarget ||
                    this.secondCard === e.currentTarget ||
                    (e.currentTarget as HTMLDivElement).classList.contains("show")
                ) return

                if (!this.firstCard) {
                    this.firstCard = e.currentTarget as HTMLDivElement
                    this.firstCard.classList.add('show')
                    console.log('first', this.firstCard)

                } else if (!this.secondCard) {
                    this.secondCard = e.currentTarget as HTMLDivElement
                    this.secondCard.classList.add('show')
                    console.log('second', this.secondCard)

                    if (this.firstCard.getAttribute('data-card') === this.secondCard.getAttribute('data-card')) {
                        this.firstCard = null
                        this.secondCard = null

                    } else {
                        setTimeout(this.reset.bind(this), 1500)
                    }
                }
            })
        })
    }



    init() {
        console.log('initi chamado')
        this.dom.innerHTML = `
        ${this.cards.map(card => (`
         <div class='card'  data-card='${card.id}'>
            <img src='img/${card.img}' class='card-front' alt=''>
            <img src='img/back.png' class='card-back' alt='Memory card'>
            </div> `
        )).join('')}
        `
        this.addListeners()
    }
}