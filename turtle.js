// クロッキー、スタイル・ライブラリを使う
// @need lib/croqujs lib/style
// パス、カメ・ライブラリを使う
// @need lib/path lib/turtle

// 準備する
const setup = function () {
	// 紙を作って名前を「p」に
	const p = new CROQUJS.Paper(600, 600);
	p.translate(300, 300);
	// カメを作って名前を「t」に
	const t = new TURTLE.Turtle(p);
	// t.visible(true);  // カメが見えるか
	p.animate(draw, [p, t]);  // アニメーションする
};

// 絵を描く（紙、カメ）
const draw = function (p, t) {
	p.styleClear().color("White").draw();  // 消す
	t.home();  // ホームに帰る

	t.mode("fillStroke");  // モードを設定
	t.fill().grad("radius")
		.addColor("red")
		.addColor("Orange")
		.addColor("Yellow")
		.addColor("Green")
		.addColor("Blue")
		.addColor("Indigo")
		.addColor("Purple");  // ぬりスタイル
	t.stroke().rgb(169, 104, 0, ).width(4).dash([3, 4]);  // 線スタイル
	t.edge(PATH.normalEdge());  // エッジを設定
	t.pd();  // ペンを下ろす

	t.cl(90, 72, 90).tl(72);
	t.cl(90, 72, 90).tl(72);
	t.cl(90, 72, 90).tl(72);
	t.cl(90, 72, 90).tl(72);
	t.cl(90, 72, 90);

	t.pu();  // ペンを上げる
	t.stepNext(1);  // カメのアニメを進める
};
