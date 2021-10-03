const day = document.querySelector("h2#day");

function getDay() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = date.getDate();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const week = weekday[date.getDay()];

    day.innerText = `${days} . ${month} . ${year} ${week}`;
}

getDay();
setInterval(getDay, 1000);
