const convert = document.getElementById("convert");
const result = document.getElementById("result");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");

convert.addEventListener("click", function() {
   let fromCurrency = from.value;
  //  console.log(fromCurrency);
  
   let toCurrency = to.value;
   let amt = amount.value;
   
//    console.log(amt);

const apiUrl = `https://api.api-ninjas.com/v1/convertcurrency?have=${fromCurrency}&want=${toCurrency}&amount=${amt}`;
  const option={
       method: 'GET', 
      headers: { 'X-Api-Key': 'r3WH6W5nj1lYzHkMEFCAfuP5WU9esuZMnbXgOS0e'},
      contentType: 'application/json',  
    }
   fetch(apiUrl,option)
   .then(response => {
         return response.json();
   })
   .then(data => {
     console.log(data);
    document.getElementById("result").innerHTML = 
     "<span>" +`new_currency is:  ${data.new_currency} `+ "</span>"+
    "<p>" + `new_amount is:  ${data.new_amount}` + "</p>" +
    "<span>" +`old_currency is:  ${data.old_currency} `+ "</span>"+
       "<p>" + `old_amount is:  ${data.old_amount}` + "</p>";

   });
});