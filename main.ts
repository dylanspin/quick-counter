input.onButtonPressed(Button.A, function () {
    if (counting == 0) {
        counting = 1
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    counting = 0
    timer = 0
    basic.clearScreen()
})
let timer = 0
let counting = 0
let maxTime = 10
basic.forever(function () {
    if (counting == 1) {
        if (timer < maxTime) {
            timer = timer + 1
        } else {
            timer = 0
            counting = 0
            music.playMelody("C5 A B G A F G E ", 120)
            basic.clearScreen()
        }
        basic.showNumber(timer)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . . . .
            . . . # .
            `)
    }
})
