function attachEventsListeners() {
    // Retrieve all the input elements
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
  
    // Retrieve all the convert buttons
    const daysBtn = document.getElementById("daysBtn");
    const hoursBtn = document.getElementById("hoursBtn");
    const minutesBtn = document.getElementById("minutesBtn");
    const secondsBtn = document.getElementById("secondsBtn");
  
    // Add click event listeners to the convert buttons
    daysBtn.addEventListener("click", function () {
      const days = Number(daysInput.value);
      const hours = days * 24;
      const minutes = hours * 60;
      const seconds = minutes * 60;
  
      hoursInput.value = hours;
      minutesInput.value = minutes;
      secondsInput.value = seconds;
    });
  
    hoursBtn.addEventListener("click", function () {
      const hours = parseFloat(hoursInput.value);
      const days = hours / 24;
      const minutes = hours * 60;
      const seconds = hours * 60 * 60;
  
      daysInput.value = days;
      minutesInput.value = minutes;
      secondsInput.value = seconds;
    });
  
    minutesBtn.addEventListener("click", function () {
      const minutes = Number(minutesInput.value);
      const hours = minutes / 60;
      const days = hours / 24;
      const seconds = minutes * 60;
  
      daysInput.value = days;
      hoursInput.value = hours;
      secondsInput.value = seconds;
    });
  
    secondsBtn.addEventListener("click", function () {
      const seconds = Number(secondsInput.value);
      const minutes = seconds / 60;
      const hours = minutes / 60;
      const days = hours / 24;
  
      daysInput.value = days;
      hoursInput.value = hours;
      minutesInput.value = minutes;
    });
  }
  