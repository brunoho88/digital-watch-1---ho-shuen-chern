input.onButtonPressed(Button.A, function () {
    if (HOUR < 24) {
        HOUR += 1
        basic.showNumber(HOUR)
    } else {
        HOUR = 0
        basic.showNumber(HOUR)
    }
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    if (mInUtEs < 60) {
        mInUtEs += 1
        basic.showNumber(mInUtEs)
    } else {
        mInUtEs = 0
        basic.showNumber(mInUtEs)
    }
})
input.onGesture(Gesture.Shake, function () {
    A_D_J_U_S_T = HOUR
    if (ampm) {
        if (HOUR > 12) {
            A_D_J_U_S_T = HOUR - 12
        } else if (HOUR == 0) {
            A_D_J_U_S_T = 12
        }
    }
    time = "" + A_D_J_U_S_T
    time = "" + time + ":"
    time = "" + time + Math.trunc(mInUtEs / 10)
    time = "" + time + mInUtEs % 10
    if (ampm) {
        if (HOUR > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
    }
    basic.showString(time)
})
let ampm = false
let A_D_J_U_S_T = 0
let time = ""
let mInUtEs = 0
let HOUR = 0
HOUR = 0
mInUtEs = 0
time = ""
A_D_J_U_S_T = 0
ampm = false
basic.forever(function () {
    basic.pause(60000)
    if (mInUtEs < 60) {
        mInUtEs += 1
    } else {
        mInUtEs = 0
    }
    if (HOUR < 24) {
        HOUR += 1
    } else {
        HOUR = 0
    }
})
