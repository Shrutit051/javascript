const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();

    const seconds=now.getSeconds();
    const secDeg = ((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secDeg}deg)`;

    const minutes=now.getMinutes();
    const minDeg=((minutes/60)*360)+((seconds/60)*6)+90;
    minuteHand.style.transform=`rotate(${minDeg}deg)`;

    const hours=now.getHours();
    const hourDeg= ((hours/12)*360)+ ((minutes/60)*60)+90;
    hourHand.style.transform=`rotate(${hourDeg}deg)`;

}
setInterval(setDate, 1000);
setDate();