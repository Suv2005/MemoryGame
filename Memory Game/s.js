const list=["A","C","B","H","D","E","F","G","A","C","B","H","D","E","F","G"];
var moves=0;
var score=0;
var shuf_arr= list.sort(()=>(Math.random()>.5)?2:-1);
for(var i=0; i<16; i++){
    let box= document.createElement('div');
    box.className = 'check';
    box.innerHTML = shuf_arr[i];
    box.onclick = function(){
        this.classList.add("Open");
        setTimeout(function(){
        if(document.querySelectorAll('.Open').length>1){
            moves++;
            if(document.querySelectorAll('.Open')[0].innerHTML == document.querySelectorAll('.Open')[1].innerHTML){
                score++;
                 document.querySelectorAll('.Open')[0].classList.add('boxMatch')
                 document.querySelectorAll('.Open')[1].classList.add('boxMatch')

                 document.querySelectorAll('.Open')[1].classList.remove('Open')
                 document.querySelectorAll('.Open')[0].classList.remove('Open')
                 document.getElementById("Moves").innerHTML=moves;
                 document.getElementById("score").innerHTML=score;

                if(document.querySelectorAll('.boxMatch').length == list.length) {
                    window.alert("Win!");
                }
            }
            else{
                document.querySelectorAll('.Open')[1].classList.remove('Open')
                document.querySelectorAll('.Open')[0].classList.remove('Open')
                document.getElementById("Moves").innerHTML=moves;
                document.getElementById("score").innerHTML=score;
            }
        }
    },500)
}




    document.querySelector('.game').appendChild(box);
}