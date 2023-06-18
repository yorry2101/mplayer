// プレイリストを取得
var listitems = document.querySelectorAll('li');
for (var i=0; i<listitems.length; i++){
    // clickイベントを設定
    listitems[i].addEventListener('click',
        (e)=>{
            var li = e.target;
            var file = li.getAttribute('data-file');
            var audio = document.querySelector('audio');
            audio.setAttribute('src', file);
            audio.play();
            // activeな項目を変更
            var activeli = document.querySelector('.active');

            activeli.className = '';
            li.className = 'active';
        }
    );
}

// 再生中と停止中でイラストを切り替える
var audio = document.querySelector('audio');
audio.addEventListener('play',
    (e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'arona_portrait.png');
    }
);
audio.addEventListener('pause',
    (e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'arona_portrait_2.png');
    }
);

//曲を最後まで再生したとき
audio.addEventListener('ended',
  (e)=>{
    var img = document.querySelector('img');
    img.setAttribute('src', 'arona_portrait_2.png');
    // 次の曲に切り替え
    var activeli = document.querySelector('.active');

    var nextli = activeli.nextElementSibling;
    console.log('active '+activeli+activeli.getAttribute('data-file'));
    console.log('next '+nextli+nextli.getAttribute('data-file'));
  }
);