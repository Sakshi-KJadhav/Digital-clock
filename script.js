function updateClock() {
      const now = new Date(); // Get current date and time
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let ampm = hours >= 12 ? 'PM' : 'AM';

      // Convert 24-hour format to 12-hour
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 => 12

      // Add leading zeros
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

      // Display in the clock div
      document.getElementById('digitalClock').textContent = timeString;
    }

    // Call function every second
    setInterval(updateClock, 1000);

    // Initial call to show clock immediately
    updateClock();