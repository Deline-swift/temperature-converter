


  
  //Dom Elements         
  const temperatureInput = document.getElementById("data");
  const fromUnitSelect = document.getElementById("Options");
  const toUnitSelect = document.getElementById("Option");
  const swapbutton = document.getElementById("btn");
  const output = document.getElementById("output");
  const History = document.getElementById("historystore");
 
  const MAX_HISTORY_ITEMS = 5;
 
 
 
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

const inputValue = parseInt(temperatureInput .value);
const FromUnit = fromUnitSelect.value;
const ToUnit = toUnitSelect.value;


if(isNaN(inputValue)) return;

let result = 0;


if(FromUnit === "Celsius" && ToUnit === "Fahrenheit"){
   result = celsuisToFahrenheit(inputValue)
}
else if(FromUnit === "Fahrenheit" && ToUnit === "Celsius"){
 result = fahrenheitToCelsuis(inputValue)
}
else if ( FromUnit === "Kelvin" && ToUnit === "Fahrenheit"){
   result = kelvinToFahrenheit(inputValue)
}
else if ( FromUnit === "Fahrenheit" && ToUnit === "Kelvin"){
   result = fahrenheitToKelvin(inputValue)
}
else if (FromUnit === "Celsius" && ToUnit === "Kelvin"){
   result = celsuisToKelvin(inputValue)
}
else if (FromUnit === "Kelvin" && ToUnit === "Celsius"){
   result =  kelvinToCelsuis(inputValue)
}

output.innerText = result;
saveHistory(result)

};

   //Swap button function
   function toggleUnits() {
      const tempUnit = fromUnitSelect.value;
      fromUnitSelect.value = toUnitSelect.value;
      toUnitSelect.value = tempUnit;
      
    

      swapbutton.style.transform = "rotate(180deg)";
      setTimeout(() => {
        swapbutton.style.transform = "rotate(0deg)";
      },200);
    // function converts the value entered after the swap
      convertTemp();
    }
    
      function saveHistory(entry){
         // get the new history from the local storage//
         const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
         history.unshift(entry) // adds the new result to the begin of the array//
         //Removes the oldest result in the history when it exist 5//
         if(history.length > 5){
            history.pop()
         }
         // updates the new entry in the local store//
       localStorage.setItem("conversionHistory", JSON.stringify(history))
       loadHistory();
      }
  
      function loadHistory(){
         let historyList = document.getElementById("History-list");
         try {
            //clears history //
            historyList.innerHTML = "";
           
            historyList.style.display = "block"
           //retrives entry from local store and display on the UI//
            let history = JSON.parse(localStorage.getItem("conversionHistory"))|| [];
            if(history.length === 0){
               let li = document.createElement("li");
               li.textContent = "No History Yet";
               li.classList.add("no-history");
               historyList.appendChild(li);
               return;
            }
   
            history.forEach(entry => {
               let li = document.createElement("li")
               li.textContent = entry;
               historyList.appendChild(li)
            })
        
         } catch (error) {
            console.error("safari storage issue:",error)
         }
      }
//loads history once the page is loaded//
   window.onload = loadHistory;

 
 


    
   
   

   
   





