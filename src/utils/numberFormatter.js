export const formatFanNumber = (value) => {
    const numValue = parseFloat(value);

    if (!isNaN(numValue)) {
      const absValue = Math.abs(numValue);
  
      // Check if the absolute value is less than 1000
      if (absValue < 1000) {
        // Remove decimal places and convert to a string
        return absValue.toFixed(0);
      }
  
      // Format the value to 'K' e.g 300000 = 300K
      const formattedValue = Math.floor(absValue / 1000);
      return formattedValue.toString() + "K";
    }
  
    return value.toString(); // if input value is a string return as it is
}
  