input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
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
basic.forever(function () {
	
})
