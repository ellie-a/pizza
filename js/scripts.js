function Pizza(sizes, toppings, price) {
  this.sizes = sizes;
  this.toppings = toppings;
  this.price= price;
}



Pizza.prototype.orderTotal = function() {
  this.price =0;
  if (this.sizes === "Small"){
   this.price += 14;
 } else if (this.sizes === "Medium") {
   this.price +=16;
 } else if (this.sizes === "Large") {
   this.price += 18;
 }
if (this.toppings === "Pepperoni") {
   this.price += 1;
 }
}




//userInterface
$(document).ready(function(){



  $("form.order").submit(function(event){
    event.preventDefault();

    $("#pizzaSize").show();
    var sizes = $("input:radio[name=size]:checked").val();


    $("#pizzaToppings").show();
    var toppings = $("input:radio[name=topping]:checked").val();

    // I THINK I WOULD GET IT HOW TO USE CHECKBPXES NOW

     var newPizza = new Pizza(sizes, toppings)

     newPizza.orderTotal();

     $("#pizzaSize").text(newPizza.sizes);
     $("#customerToppings").text(newPizza.toppings);
     $("#total").text(newPizza.price);

   });
  });
