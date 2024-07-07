function updateTime(){
    const hour = document.querySelector('.hour');
    const minute = document.querySelector('.minute');
    const second = document.querySelector('.second');
    const period = document.querySelector('.period');
    let now = dayjs();
    hour.innerHTML = now.format('h');
    minute.innerHTML = now.format('mm');
    second.innerHTML = now.format('ss');
    period.innerHTML = now.format('A');
}

setInterval(updateTime, 1000);

function setAlarm(){
    let hour = document.querySelector('.alarm .time input').value;
    let minute = document.querySelector('.alarm .minute input').value;
    let second = document.querySelector('.alarm .second input').value;
    const period = document.getElementById('period').value;
    let alarmHour = hour;
    if (period === 'PM' && hour !== 12) {
        alarmHour += 12;
    } else if (period === 'AM' && hour === 12) {
        alarmHour = 0;
    }
    const alarmTime = dayjs().set('hour', alarmHour).set('minute', minute).set('second', second);
    const timeUntilAlarm = alarmTime.diff(dayjs());
    console.log(timeUntilAlarm);
    setTimeout(function() {
        alert('Alarm! Time to wake up!');
    }, timeUntilAlarm);
}