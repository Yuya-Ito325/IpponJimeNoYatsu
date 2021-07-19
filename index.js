const menber=["daiki","kouhei","taisei","rina","yuta","9638","yusuke","syunsuke","yuya",
"mana","yukino","mahiro","mayu"];

let makeArray = [];
let n = 0;

for(i=1; i<=13; i++){
    while(true){
        let selectPerson = Math.floor(Math.random() * (13));
        if (!makeArray.includes(selectPerson)) {
            makeArray.push(selectPerson);
            break;
        }
    }
    }
    console.log(makeArray);



function onButtonClick() {

    let select = menber[makeArray[n]];
    console.log(select);
    console.log(makeArray[n]);
document.getElementById('name').textContent = select;
delete menber[makeArray[n]];
n = n + 1;
console.log(menber);
}