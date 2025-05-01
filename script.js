const Sechand = document.querySelector('.Clock-sec-hand');
const minhand = document.querySelector('.Clock-min-hand');
const hrhand = document.querySelector('.Clock-hr-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    Sechand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) *360) + 90;
    minhand.style.transform = `rotate(${minutesDegree}deg)`;
    console.log(minutes);

    const hour = now.getHours();
    const hourDegree = ((hour / 12) *360) + 90;
    hrhand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(hour)
}

setInterval(setDate, 1000)