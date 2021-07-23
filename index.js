const menber=["daiki","kouhei","taisei","rina","yuta","9638","yusuke","syunsuke","yuya",
"mana","yukino","mahiro","mayu"];
const menber2=["daiki","kouhei","taisei","rina","yuta","9638","yusuke","syunsuke","yuya",
"mana","yukino","mahiro","mayu"];

let randamArray = [];
let n = 0, i = 0;
let start;

//�X�^�[�g���������Ƃ��̋����B���X�ɖ��O��\���i���[�v���o���Ȃ��j
function startRoulette() {
    start = setInterval(() => {
        document.getElementById("name").textContent = menber2[i++];
        if(i==menber2.length) i=0; 
    }, 100);
    //�{�^����A���\���o���Ȃ�����
    const startButton = document.getElementById("start");
    startButton.disabled = true;
    const stopButton = document.getElementById("stop");
    stopButton.disabled = false;
}

//�X�g�b�v���������Ƃ��̋����B���O�m��
function stopRoulette() {
    clearInterval(start);
    let selectNum = Math.floor(Math.random()*(menber.length));
    document.getElementById('name').textContent = menber[selectNum];
    menber.splice(selectNum,1);
    //�{�^����A���\���ł��Ȃ�����
    const startButton = document.getElementById("start");
    startButton.disabled = false;
    const stopButton = document.getElementById("stop");
    stopButton.disabled = true;
}