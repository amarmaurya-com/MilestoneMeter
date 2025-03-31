console.log("hear we go");
const startDate = new Date("5 june, 2024 00:00:00").getTime();

let E = setInterval(()=>{
    const now = new Date().getTime()
    const completed = now-startDate;
    // const pending = endDate-now;
    const days = Math.floor(completed/86400000);
    const year = Math.floor(days/365)
    const hours = Math.floor(completed%86400000/(60*60*1000)); 
    const min = Math.floor(completed%(60*60*1000)/(60*1000)); 
    const sec = Math.floor(completed%(60*1000)/1000);
    
    document.getElementById("year").innerHTML = year;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    const totalDistance = now-startDate;
    const perDistance = (completed/totalDistance)*100;

    document.getElementById("progress").value = perDistance
},1000)