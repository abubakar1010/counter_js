// variables

const decrease = document.getElementById("DECREASE")
const reset = document.getElementById("RESET")
const increase = document.getElementById("INCREASE")
const counts = document.getElementById("counts")
const stop = document.getElementById("stop")

let count = 0
let decreaseCount;
let increaseCount;

decrease.addEventListener('click', function(){

    if(!decreaseCount){
     decreaseCount = setInterval(decreaseValue,1000)
     setbg()
    }
})
increase.addEventListener('click', function(){

    clearInterval(decreaseCount)
    if(!increaseCount){

        increaseCount = setInterval(increaseValue,1000)
        setbg()
    }
})
reset.addEventListener('click', function(){

    count = 0
    counts.innerText = count
    clearInterval(decreaseCount)
    clearInterval(increaseCount)
    decreaseCount =null
    increaseCount = null
    setbg()

    
})

function decreaseValue(){
    count--
    counts.innerText = count
    setbg()
}
function increaseValue(){
    count++
    counts.innerText = count
    setbg()
}

function setbg(){
    
if (parseInt(counts.innerText) > 0) {

    counts.style.color = "green"
    
}else if(parseInt(counts.innerText) < 0) {
    counts.style.color = "red"

}else if( parseInt(counts.innerText) === 0) {
    counts.style.color = "black"

}
}

stop.addEventListener('click', function(){
    clearInterval(decreaseCount)
    clearInterval(increaseCount)
    decreaseCount =null
    increaseCount = null
})