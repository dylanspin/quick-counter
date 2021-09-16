input.onButtonPressed(Button.A, function () {
    if (counting == 0) {
        counting = 1
    }
})
let timer = 0
let counting = 0
let maxTime = 10
basic.forever(function () {
    if (counting == 1) {
        if (timer <= maxTime) {
            timer = timer + 1
        } else {
            timer = 0
            counting = 0
            music.playMelody("C5 A B G A F G E ", 120)
            basic.clearScreen()
        }
        basic.showNumber(timer)
    }
})
