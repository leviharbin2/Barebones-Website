var a = document.querySelector('h2');// creates variable a, and queries header h2
var button = document.querySelector('#runjs');//sets the variable button to the button with id "runjs" in html file
var numberOfBags = document.querySelector('select');//sets the variable numberOfBags to the list "select" 

var pricePerBag = 10;
var salesTax = .07;
var shipping = 7;
var c = document.querySelector('#orderButton');// creates variable c, and queries the button with id "orderButton"
var d = document.querySelector('#totalDueBox');// creates variable d, and queries the text box with id "totalDueBox"


function changeTitle(){
	a.textContent = 'Order North Georgia Coffee';//	runs the method "textContent" on variable a, setting the header to "Order North Georgia Coffee" 

}
button.addEventListener('click', changeTitle);// on click, the function changeTitle will be called


function calculatePrice(){
//	totalDueBox.value = numberOfBags*pricePerBag+salesTax+shipping;
var amount;


//if the user selects 3 bags or more, take the shipping price off
if (numberOfBags.value >=3){
	amount = numberOfBags.value *pricePerBag +numberOfBags.value *pricePerBag * salesTax;


}
//else keep the shipping price on
else {
	amount = numberOfBags.value *pricePerBag +numberOfBags.value *pricePerBag * salesTax +shipping;

}
	
	totalDueBox.value = amount;
//	totalDueBox.value  = (numberOfBags.val)*pricePerBag+salesTax+shipping;
}
c.addEventListener('click', calculatePrice);// on click of orderButton, the function calculatePrice will be called