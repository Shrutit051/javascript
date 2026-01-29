const randomColor = function(){
    let color = '#'
    const hex='0123456789ABCDEF'
    for(let i=0; i<6; i++){
        color+= hex[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color;
}

let intervalId; //scope has to be global to be accessible from both the below functions

const startChangingColors = function(){

    console.log("color changing started")
    const changeColor = function(){
    document.body.style.backgroundColor = randomColor();
    }

    if(intervalId ==null){
        intervalId = setInterval(changeColor, 1000)
    }
    
}

const stopChangingColors = function(){
    console.log("color changing stopped")
    clearInterval(intervalId)
    intervalId = null;
} 


document.querySelector('#start').addEventListener('click', startChangingColors);
document.querySelector('#stop').addEventListener('click', stopChangingColors);
