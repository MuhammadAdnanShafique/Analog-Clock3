let hour= document.getElementById('hour')
let minute= document.getElementById('minute')
let second= document.getElementById('second')

function displayTime(params) { 
    let date = new Date()

    let hr = date.getHours()
    let mn = date.getMinutes()
    let sec = date.getSeconds()
    //calculater rotation
    hRotation = hr*30+mn/2+sec/120;
    mRotation = 6 * mn + sec /10;
    sRotation = 6 * sec;
    
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime,1000)// 1s