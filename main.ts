function led2 (y: number, speed: number) {
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
let list: number[][] = []
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
basic.forever(function () {
	
})
control.inBackground(function () {
    led2(0, 200)
})
control.inBackground(function () {
    led2(1, 180)
})
control.inBackground(function () {
    led2(2, 160)
})
control.inBackground(function () {
    led2(3, 130)
})
control.inBackground(function () {
    led2(4, 100)
})
