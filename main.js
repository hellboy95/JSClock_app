


function setDate(){


  const newDate = new Date();
  const sec = newDate.getSeconds();
  const min = newDate.getMinutes();
  const hours = newDate.getHours();

  const secDegree = ((sec/60)* 360) +90;
  const minDegree = ((min/60)* 360) +90;
  const hourDegree = ((hours/12)* 360 +90);
  const secHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  secHand.style.transform = `rotate(${secDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;


  console.log("sec"+sec);
  console.log("min"+min);
  console.log("hour" +hours);

}

setInterval(setDate, 1000);
