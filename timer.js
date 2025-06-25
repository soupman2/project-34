var timer;
var duration;
var temp;
function start() {
    

    duration = document.getElementById("duration").value;
    duration = duration * 60
    if(duration == ""){alert("input duration of timer")} else{
    timer = setInterval(function () {
        document.getElementById("timer").innerHTML = duration--;
        if (duration<=0){
            clearInterval(timer)
        }
    },1000)
}
}

function reset(){
    clearInterval(timer)
    document.getElementById("duration").value=""
    document.getElementById("timer").innerHTML = ""

}

function pause(){
    temp = document.getElementById("timer").innerHTML;
    clearInterval(timer)
}

function play(){
    
    timer = setInterval(function () {
        document.getElementById("timer").innerHTML = temp--;
        if (temp<=0){
            clearInterval(timer)
        }
    },1000)
}
