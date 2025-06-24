
  const countdown = () => {
    const birthday = new Date("June 28, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? '0' + days : days;
    document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;
  };

  setInterval(countdown, 1000);
  countdown(); // Llamada inicial para que cargue al instante
