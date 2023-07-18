let color = 'black'
let erase = document.querySelector('.erase')
let click = false;
let body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", function () {
    createBoard(32)
    body.addEventListener('click', function (e) {
        if (e.target.tagName != 'BUTTON') {
            click = !click;
            let draw = document.querySelector('#draw')
            if (click) {
                draw.innerHTML = 'you can draw'
            } else {
                draw.innerHTML = 'click to draw'
            }
        }
    })

    let select = document.querySelector('#popup');

    select.addEventListener('click', function () {
        let size = getSize()
        createBoard(size)
    })

})

function createBoard(size) {
    let board = document.querySelector('.board')

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div')
        board.insertAdjacentElement('beforeend', div)

        erase.addEventListener('click', function () {
            div.style.backgroundColor = 'white'
        })

        div.addEventListener('mouseover', function () {
            if (click) {

                div.style.backgroundColor = color
            }
        })

    }
}

function getSize() {
    let input = prompt('enter the size')
    let message = document.querySelector('#message')
    if (input == '') {
        message.textContent = "pls provide a size"
    } else if (input < 0 || input > 100) {
        message.textContent = 'provide number between 0 and 100'
    } else {
        message.textContent = 'now u play'
    }

    return input
}


let btns = Array.from(document.querySelectorAll('.btn'))

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i]

    btn.addEventListener('click', function () {
        color = btn.textContent

    })
}

