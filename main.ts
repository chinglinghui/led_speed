function led_右往左 (y: number, speed: number) {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (list[y][index] == 1) {
                led.plot(index, y)
            } else {
                led.unplot(index, y)
            }
        }
        list[y].push(list[y].shift())
        basic.pause(speed)
    }
}
function led_左往右 (y: number, speed: number) {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (list[y][index] == 1) {
                led.plot(index, y)
            } else {
                led.unplot(index, y)
            }
        }
        list[y].unshift(list[y].pop())
        basic.pause(speed)
    }
}
input.onButtonPressed(Button.B, function () {
    if (狀態 == 1) {
        狀態 = 2
    } else {
        狀態 = 1
    }
})
let list: number[][] = []
let 狀態 = 0
狀態 = 1
list = [
[
0,
1,
0,
0,
0
],
[
0,
1,
0,
0,
0
],
[
0,
1,
0,
0,
0
],
[
0,
1,
0,
0,
0
],
[
0,
1,
0,
0,
0
]
]
control.inBackground(function () {
    if (狀態 == 1) {
        led_左往右(0, 200)
    } else {
        led_右往左(0, 200)
    }
})
control.inBackground(function () {
    if (狀態 == 1) {
        led_左往右(1, 170)
    } else {
        led_右往左(1, 170)
    }
})
control.inBackground(function () {
    if (狀態 == 1) {
        led_左往右(2, 140)
    } else {
        led_右往左(2, 140)
    }
})
control.inBackground(function () {
    if (狀態 == 1) {
        led_左往右(3, 100)
    } else {
        led_右往左(3, 100)
    }
})
control.inBackground(function () {
    if (狀態 == 1) {
        led_左往右(4, 70)
    } else {
        led_右往左(4, 70)
    }
})
