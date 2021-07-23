const menber=["daiki","kouhei","taisei","rina","yuta","9638","yusuke","syunsuke","yuya",
"mana","yukino","mahiro","mayu"];
const menber2=["daiki","kouhei","taisei","rina","yuta","9638","yusuke","syunsuke","yuya",
"mana","yukino","mahiro","mayu"];

let randamArray = [];
let n = 0, i = 0;
let start;

//スタートを押したときの挙動。次々に名前を表示（ループが出来ない）
function startRoulette() {
    start = setInterval(() => {
        document.getElementById("name").textContent = menber2[i++];
        if(i==menber2.length) i=0; 
    }, 100);
    //ボタンを連続表示出来なくする
    const startButton = document.getElementById("start");
    startButton.disabled = true;
    const stopButton = document.getElementById("stop");
    stopButton.disabled = false;
}

//ストップを押したときの挙動。名前確定
function stopRoulette() {
    clearInterval(start);
    let selectNum = Math.floor(Math.random()*(menber.length));
    document.getElementById('name').textContent = menber[selectNum];
    menber.splice(selectNum,1);
    //ボタンを連続表示できなくする
    const startButton = document.getElementById("start");
    startButton.disabled = false;
    const stopButton = document.getElementById("stop");
    stopButton.disabled = true;
}