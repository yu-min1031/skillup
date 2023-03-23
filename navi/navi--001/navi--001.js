//スクロー－ルすると上部に固定させるための設定を関数でまとめる
function FixedAnime(){
    var headerH = $('#header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll>=headerH){//headerの高さ以上になったら
        $('#header').addClass('fixed');//fixedというクラス名を付与
    }else{//それ以外は
        $('#header').removeClass('fixed');//fxedというクラス名を除去
    }
}

//ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
    var elmHash = $(this).attr('href'); //hrefの内容を取得
    var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
    $('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
    return false;//リンクの無効化
  });

//画面スクロールをしたら動かしたい場合の記述
$(window).scroll(function(){
    FixedAnime();/*スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

//ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    FixedAnime();/*スクロール途中からヘッダーを出現させる関数を呼ぶ*/
})

let text = document.querySelectorAll("h2");
for(let i = 0; i < text.length; i++){
  let f = text[i];
  f.style.color = 'red';
  //f.fontsize(6);
}

let text1 = document.querySelectorAll("h2");
for(let i = 0; i < text1.length; i++){
  let f = text[i];
  f.fontsize(3);
}

let area1text = document.querySelectorAll("h2");
for(let i = 0; i < area1text.length; i++){
  let fe = text[i];
  fe.style.color = 'red';
  fe.fontsize(3);
}
