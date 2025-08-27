//Weather
function convertToFahrenheit() {
  let celsius = Number(prompt("Enter the temperature in Celsius:"));
  let fahrenheit = (celsius * 9/5) + 32;

  console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);

//Weather Icon

  let iconClass = (fahrenheit <= 60) ? "fas fa-snowflake" : "fas fa-sun";

//Document Pull

  document.getElementById("results").innerHTML += `
    <li>
      <i class="${iconClass}" style="margin-right: 10px; color: #ffa500;"></i>
      ${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F
    </li>
  `;
}
