// Core temperature converter function
function convertTemperature() {
  let scale = prompt("Enter scale (C or F):");
  if (!scale) return;

  scale = scale.toUpperCase();

  let temperature = Number(prompt("Enter the temperature:"));
  if (isNaN(temperature)) {
    alert("Please enter a valid number.");
    return;
  }

  let result;
  let displayText = "";
  let color = "";

  if (scale === "C") {
    result = (temperature * 9/5) + 32;
    displayText = `${temperature}°C is equal to ${result.toFixed(2)}°F`;
  } else if (scale === "F") {
    result = (temperature - 32) * 5/9;
    displayText = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
  } else {
    alert("Invalid scale. Use 'C' or 'F'.");
    return;
  }

  // Add color feedback
  if (result <= 32) {
    color = "blue";
  } else if (result >= 85) {
    color = "red";
  } else {
    color = "green";
  }

  document.getElementById("results").innerHTML += `
    <li style="color: ${color};">
      ${displayText}
    </li>
  `;
}

// Separate function for just C to F
function convertCtoF() {
  let celsius = Number(prompt("Enter temperature in Celsius:"));
  if (isNaN(celsius)) {
    alert("Please enter a valid number.");
    return;
  }

  let fahrenheit = (celsius * 9/5) + 32;

  // Set icon class based on temp
  let iconClass = (fahrenheit <= 60) ? "fas fa-snowflake" : "fas fa-sun";

  // Change F color
  let color = "";
  if (fahrenheit <= 32) {
    color = "blue";
  } else if (fahrenheit >= 85) {
    color = "red";
  } else {
    color = "green";
  }

  // Append result with color styling
  document.getElementById("results").innerHTML += `
    <li style="color: ${color};">
      <i class="${iconClass}" style="margin-right: 10px; color: #ffa500;"></i>
      ${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F
    </li>
  `;
}

// Attach event listeners after DOM loads
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnCtoF").addEventListener("click", convertCtoF);
  document.getElementById("btnGeneric").addEventListener("click", convertTemperature);
});
