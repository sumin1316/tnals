let light_on = false
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.happy.playUntilDone()
})
input.onSound(DetectedSound.Loud, function () {
    light_on = !(light_on)
    if (light_on) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Scissors)
    soundExpression.happy.playUntilDone()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    soundExpression.twinkle.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    soundExpression.soaring.playUntilDone()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.happy.playUntilDone()
})
basic.forever(function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
