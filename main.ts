radio.onReceivedNumber(function (receivedNumber) {
    turn = receivedNumber
})
function 前 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    255
    )
}
function 左 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    0
    )
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    turn = 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    turn = 3
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    turn = 2
})
function 後 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    255
    )
}
function 停 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    0
    )
}
let turn = 0
radio.setGroup(4)
basic.forever(function () {
    if (turn == 1) {
        前()
    }
    if (turn == 2) {
        後()
    }
    if (turn == 3) {
        停()
    }
    if (turn == 4) {
    	
    }
    if (turn == 5) {
    	
    }
})
