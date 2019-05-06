const countdown = () => {
  const deadline = new Date("may 21, 3059 01:37:25").getTime();

  const x = setInterval(function () {

    const now = new Date().getTime();
    const t = deadline - now;

    let hours = `${Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`;
    if (hours.length === 1) hours = `0${hours}`
    let minutes = `${Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))}`;
    if (minutes.length === 1) minutes = `0${minutes}`
    let seconds = `${Math.floor((t % (1000 * 60)) / 1000)}`;
    if (seconds.length === 1) seconds = `0${seconds}`


    const hoursNodeLeft = document.querySelector(".counter__hours-left")
    const hoursNodeRight = document.querySelector(".counter__hours-right")
    const minutesNodeLeft = document.querySelector(".counter__minutes-left")
    const minutesNodeRight = document.querySelector(".counter__minutes-right")
    const secondsNodeLeft = document.querySelector(".counter__seconds-left")
    const secondsNodeRight = document.querySelector(".counter__seconds-right")

    hoursNodeLeft.innerHTML = hours[0]
    hoursNodeRight.innerHTML = hours[1]
    minutesNodeLeft.innerHTML = minutes[0]
    minutesNodeRight.innerHTML = minutes[1]
    secondsNodeLeft.innerHTML = seconds[0]
    secondsNodeRight.innerHTML = seconds[1]


    if (t < 0) {
      clearInterval(x);
      hoursNodeLeft.innerHTML = '0'
      hoursNodeRight.innerHTML = '0'
      minutesNodeLeft.innerHTML = '0'
      minutesNodeRight.innerHTML = '0'
      secondsNodeLeft.innerHTML = '0'
      secondsNodeRight.innerHTML = '0'
    }
  }, 1000);
}

countdown()