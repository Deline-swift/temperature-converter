


  
  //Dom Elements         
  const temperatureInput = document.getElementById("data");
  const fromUnitSelect = document.getElementById("Options");
  const toUnitSelect = document.getElementById("Option");
  const swapbutton = document.getElementById("btn");
  
 
 
 
 // Switching between white and black background
 const Switch = document.getElementById("switchmode");
 switchmode.addEventListener("click", function(){
    document.body.classList.toggle("darkmode")
   
    if(document.body.classList.toggle("dark-mode")){
      Switch.innerHTML = '<i class="fa-solid fa-moon"></i>'
   }
   else {
      Switch.innerHTML = '<i class="fa-solid fa-sun"></i>';
   }
 });

//conversion Functions
 const celsuisToFahrenheit = function(celsuis){
   return(celsuis*9/5)+32;
}
const fahrenheitToCelsuis = function(fahrenheit){
   return(fahrenheit-32)*5/9;
}
const fahrenheitToKelvin = function(fahrenheit){
   return(fahrenheit-32)*9/5+273.15;
}
const kelvinToFahrenheit = function(kelvin){
   return(kelvin-273.15)*9/5+32;
}
const celsuisToKelvin = function(celsuis){
   return(celsuis+273.15);
}
const kelvinToCelsuis = function(kelvin){
   return(kelvin-273.15);
}
// adding EvenListeners
document.addEventListener("DOMContentLoaded",function(){
   temperatureInput.addEventListener("input",convertTemp);
   fromUnitSelect.addEventListener("change",convertTemp);
   toUnitSelect.addEventListener("change",convertTemp);
   swapbutton.addEventListener("click",toggleUnits);
   
})
  
//temperature conversion function
function convertTemp(){

const value = parseInt(temperatureInput .value);
const FromUnit = fromUnitSelect.value;
const ToUnit = toUnitSelect.value;


if(isNaN(value)) return;

let result = 0;


if(FromUnit === "Celsius" && ToUnit === "Fahrenheit"){
   result = celsuisToFahrenheit(value)
}
else if(FromUnit === "Fahrenheit" && ToUnit === "Celsius"){
 result = fahrenheitToCelsuis(value)
}
else if ( FromUnit === "Kelvin" && ToUnit === "Fahrenheit"){
   result = kelvinToFahrenheit(value)
}
else if ( FromUnit === "Fahrenheit" && ToUnit === "Kelvin"){
   result = fahrenheitToKelvin(value)
}
else if (FromUnit === "Celsius" && ToUnit === "Kelvin"){
   result = celsuisToKelvin(value)
}
else if (FromUnit === "Kelvin" && ToUnit === "Celsius"){
   result =  kelvinToCelsuis(value)
}
};
   //Swap button function
   function toggleUnits() {
      const tempUnit = fromUnitSelect.value;
      fromUnitSelect.value = toUnitSelect.value;
      toUnitSelect.value = tempUnit;
    

      swapbutton.style.transform = "rotate(180deg)";
      setTimeout(() => {
        swapbutton.style.transform = "rotate(0deg)";
      }, 300);
    // function converts the value entered after the swap
      convertTemp();
    }






 
          


