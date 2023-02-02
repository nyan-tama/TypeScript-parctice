
const startTime = performance.now(); // 開始時間


for (let i: number = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("鮭フレーク")
        continue
    } else if (i % 5 === 0) {
        console.log("フレーク")
        continue
    } else if (i % 3 === 0) {
        console.log("鮭")
        continue
    } else {
        console.log(i)
    }
}

const endTime = performance.now(); // 終了時間

console.log(endTime - startTime); // 何ミリ秒かかったかを表示する
