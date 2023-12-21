
const divtime = document.getElementById('time');
const divdate = document.getElementById('date');
 
// console.log(date);


// while(1){
// const time = date.toLocaleTimeString();
// const currDate = date.toDateString();
// console.log(currDate);
// clock.innerHTML = (`${time}<br>${currDate}` )
//     setInterval()
// }
 

setInterval(()=>{
    const date = new Date();
    const time = date.toLocaleTimeString();
    const currDate = date.toDateString();
    console.log(currDate);
    // clock.innerHTML = (`${time}<br>${currDate}` )
    divtime.innerHTML = `<h3>${time}</h3>`;
    divdate.innerHTML = currDate;
},
1000)