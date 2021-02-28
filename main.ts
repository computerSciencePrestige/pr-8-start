basic.forever(function () {
    if (input.lightLevel() < 75) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # # # # .
                # # # # .
                # # # . #
                # # . . #
                . . # # #
                `)
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . # .
                . . # # .
                # # . . .
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
