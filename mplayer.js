// プレイリストを取得
var listitems = document.querySelectorAll('li');
for (var i=0; i<listitems.length; i++){
    // clickイベントを設定
    listitems[i].addEventListener('click',
        (e)=>{
            var li = e.target;
            console.log(li);
        }
    );
}