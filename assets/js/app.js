const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const future = moment("2021-02-01"); // Outra data no passado

setInterval(() => {
    const now = moment(); // Data de hoje
    const duration = moment.duration(future.diff(now));
    days.innerHTML = parseInt(duration.days()) < 10 ? `0${duration.days()}` : duration.days();
    hours.innerHTML = parseInt(duration.hours()) < 10 ? `0${duration.hours()}` : duration.hours();
    minutes.innerHTML = parseInt(duration.minutes()) < 10 ? `0${duration.minutes()}` : duration.minutes();
    seconds.innerHTML = parseInt(duration.seconds()) < 10 ? `0${duration.seconds()}` : duration.seconds();
}, 1000)