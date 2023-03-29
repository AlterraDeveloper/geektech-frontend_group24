const counterBlock = document.querySelector(".counter-inner");

const daysValueElement = counterBlock.querySelector("#timer-days-value");
const hoursValueElement = counterBlock.querySelector("#timer-hours-value");
const minutesValueElement = counterBlock.querySelector("#timer-minutes-value");
const secondsValueElement = counterBlock.querySelector("#timer-seconds-value");

const nextMonthDate = moment().add(2, "months");
const countdownEndDate = moment(
  `01-${nextMonthDate.month()}-${nextMonthDate.year()}`,
  "DD-MM-YYYY"
);

const countdownCancelToken = setInterval(countdown, 1000);

function countdown() {
  const dateNow = moment();

  const days = countdownEndDate.diff(dateNow, "days");
  const hours = countdownEndDate.diff(dateNow.add(days, "days"), "hours");
  const minutes = countdownEndDate.diff(dateNow.add(hours, "hours"), "minutes");
  const seconds = countdownEndDate.diff(
    dateNow.add(minutes, "minutes"),
    "seconds"
  );

  const totalSeconds = days + hours + minutes + seconds;

  const timeElements = [
    daysValueElement,
    hoursValueElement,
    minutesValueElement,
    secondsValueElement,
  ];

  if (totalSeconds <= 5) {
    timeElements.forEach((timeElement) => {
      timeElement.style.color = "red";
    });
  }

  if (totalSeconds <= 0) {
    clearInterval(countdownCancelToken);
  }

  daysValueElement.innerText = days;
  hoursValueElement.innerText = hours;
  minutesValueElement.innerText = minutes;
  secondsValueElement.innerText = seconds;

  timeElements.forEach((timeElement) => {
    timeElement.innerText = formatTimeValue(timeElement.innerText);
  });
}

function formatTimeValue(value) {
  return value.toString().padStart(2, "0");
}

countdown();

//CDN - Content Delivery Network





