function led_右往左 (y: number, speed: number) {
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
function 呼叫_led_上往下 (x: number, speed: number) {
    for (let index = 0; index <= 4; index++) {
        if (list[x][index] == 1) {
            led.plot(x, index)
        } else {
            led.unplot(x, index)
        }
    }
    list[x].push(list[x].shift())
    basic.pause(speed)
}
function led_左往右 (y: number, speed: number) {
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
input.onButtonPressed(Button.B, function () {
    if (狀態 < 4) {
        狀態 += 1
    } else {
        狀態 = 1
    }
})
function 呼叫_led_下往上 (x: number, speed: number) {
    for (let index = 0; index <= 4; index++) {
        if (list[x][index] == 1) {
            led.plot(x, index)
        } else {
            led.unplot(x, index)
        }
    }
    list[x].unshift(list[x].pop())
    basic.pause(speed)
}
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
    while (true) {
        if (狀態 == 1) {
            led_左往右(0, 200)
        } else if (狀態 == 2) {
            led_右往左(0, 200)
        } else if (狀態 == 3) {
            呼叫_led_上往下(0, 200)
        } else {
            呼叫_led_下往上(0, 200)
        }
    }
})
control.inBackground(function () {
    while (true) {
        if (狀態 == 1) {
            led_左往右(1, 170)
        } else if (狀態 == 2) {
            led_右往左(1, 170)
        } else if (狀態 == 3) {
            呼叫_led_上往下(1, 170)
        } else {
            呼叫_led_下往上(1, 170)
        }
    }
})
control.inBackground(function () {
    while (true) {
        if (狀態 == 1) {
            led_左往右(2, 140)
        } else if (狀態 == 2) {
            led_右往左(2, 140)
        } else if (狀態 == 3) {
            呼叫_led_上往下(2, 140)
        } else {
            呼叫_led_下往上(2, 140)
        }
    }
})
control.inBackground(function () {
    while (true) {
        if (狀態 == 1) {
            led_左往右(3, 100)
        } else if (狀態 == 2) {
            led_右往左(3, 100)
        } else if (狀態 == 3) {
            呼叫_led_上往下(3, 100)
        } else {
            呼叫_led_下往上(3, 100)
        }
    }
})
control.inBackground(function () {
    while (true) {
        if (狀態 == 1) {
            led_左往右(4, 70)
        } else if (狀態 == 2) {
            led_右往左(4, 70)
        } else if (狀態 == 3) {
            呼叫_led_上往下(4, 70)
        } else {
            呼叫_led_上往下(4, 70)
        }
    }
})
