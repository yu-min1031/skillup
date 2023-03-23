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


const ts = [-4, -3, 0, 7, 12, 17, 21, 22, 18, 12, 5, -1];
for (let i = 0; i < ts.length; i += 1) {
	console.log(ts[i] + "℃");
}

