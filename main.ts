input.onButtonPressed(Button.A, function () {
    num_ += 1
    basic.showNumber(num_)
})
input.onButtonPressed(Button.B, function () {
    num_ += -1
    basic.showNumber(num_)
})
let num_ = 0
basic.showIcon(IconNames.Angry)
basic.forever(function () {
	
})
