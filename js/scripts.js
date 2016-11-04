function Pizza(size, toppings,price) {
  this.sizes = size;
  this.toppings = toppings;
  this.price= 0;
}
var cutomerOrder;


Pizza.prototype.orderTotal = function() {
  if (this.size === "Small"){
   this.price += 14;
 } else if (this.size === "Medium") {
   this.price +=16;
 } else if (this.size === "Large") {
   this.price += 18;
 } for (var i = 0; i < this.toppings.length; i++) {
   this.price += 0.5;
 } return this.price.toFixed(2);
}



// adding for loops  size price and for topping price
// add all
// give it to customer
// call on customer in front end











//userInterface
$(document).ready(function(){
  $("form.order").submit(function(event){
    event.preventDefault();
    $("#pizzaSize").show();
    $("input:radio[name=size]:checked").each(function(){
      var pizzaSize = $(this).val();
      $("#pizzaSize").append(pizzaSize + "<br>");
    });
    $("#pizzaToppings").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $("#pizzaToppings").append(pizzaToppings + "<br>");
    });
  });
});
