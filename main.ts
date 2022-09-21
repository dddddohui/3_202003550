let degree = 0
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 45) {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    } else if (degree < 135) {
        basic.showString("E")
        basic.showArrow(ArrowNames.East)
    } else if (degree < 225) {
        basic.showString("S")
        basic.showArrow(ArrowNames.South)
    } else if (degree < 315) {
        basic.showString("W")
        basic.showArrow(ArrowNames.West)
    }
})
