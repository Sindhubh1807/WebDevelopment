const resendButton = document.getElementById('resend');
let timer = 117; // 1 minute 57 seconds

function startTimer() {
  const timerElement = document.querySelector('.timer span');
  const interval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
    if (timer === 0) {
      clearInterval(interval);
    }
    timer--;
  }, 1000);
}

resendButton.addEventListener('click', () => {
  alert('OTP sent again!');
  timer = 117;
  startTimer();
});
