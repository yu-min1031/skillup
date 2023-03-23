const sq = function (x) {
	console.log(x * x);
};
sq(8);

console.log(Math.sqrt(2));

console.log("Hello!");

console.log("Hello!" + "World!");

console.log("No." + "1");

console.log(2 * 2 === 4);
console.log(9 / 2 < 4);
console.log(496 % 31 === 0 && 0 < 496);
console.log(42 < 1000 || 10000 < 42);

const n = 142857;
console.log(n * 3);

let i = 0;
i += 1;
console.log(i);

let m = "Wow!";
m += m;
console.log(m);

const check = function (num) {
	if (num % 2 == 0) {
		console.log("偶数!");
	} else {
		console.log("奇数!");
	}
};
check(31);


//ウィジェット･ライブラリを使う
//@need lib/widget

//チャット･ウィジェットを作って名前を「chat」に
const chat = new WIDGET.Chat(200, 300);

//歌を歌う
const sing = async function () {
	for (let i = 0; i < 3; i += 1) {
		chat.println("あれ?");
		await chat.sleep(1);  //1秒休む
	}
	chat.println("マツムシが鳴いているよ!");
	await chat.sleep(1);  //1秒休む
};
//関数を呼び出す
sing();