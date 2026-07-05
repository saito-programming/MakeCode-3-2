input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        アナログ値 += 足すか引くか
        pins.analogWritePin(AnalogPin.P0, アナログ値)
        basic.showNumber(アナログ値)
        if (10 <= アナログ値) {
            足すか引くか = -1
        }
        if (アナログ値 <= 0) {
            足すか引くか = 1
        }
    }
})
let アナログ値 = 0
let 足すか引くか = 0
pins.analogWritePin(AnalogPin.P0, 0)
足すか引くか = 0
アナログ値 = 0
