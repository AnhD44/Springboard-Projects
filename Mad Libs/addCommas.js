function addCommas(num) {
    const [integerPart, decimalPart] = Math.abs(num).toString().split(".");
    const withCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formatted = decimalPart ? `${withCommas}.${decimalPart}` : withCommas;
    return num < 0 ? `-${formatted}` : formatted;
  }
  
  module.exports = addCommas;
  