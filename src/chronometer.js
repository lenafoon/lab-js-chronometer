class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null;
  
    this.getMinutes() 
      return Math.floor(this.currentTime / 60)
    
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)

  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const stringValue = value.toString();
    if (stringValue.length < 2) {
      return "0".concat(stringValue);
    } else {
      return stringValue;
    }
  }
  

  stop() {
    
      clearInterval(this.intervalId);
    
  }

  reset() {
      this.currentTime = 0;
    }
  

  split() {
      const minutes = this.computeTwoDigitNumber(this.getMinutes());
      const seconds = this.computeTwoDigitNumber(this.getSeconds());
      return `${minutes}:${seconds}`;

    }
   
  }
  

