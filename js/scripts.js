function Pizza(size, toppings) {
  this.sizes = size;
  this.toppings = toppings;
  this.price= 0;
}

//var cutomerOrder;

Pizza.prototype.orderTotal = function() {
  alert("hello")
  this.price =0;
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



//userInterface
$(document).ready(function(){

  //  var newPizza = new Pizza()

  $("form.order").submit(function(event){
    event.preventDefault();
    debugger;

    $("#pizzaSize").show();
    var size = $("input:radio[name=size]:checked").val();


    $("#pizzaToppings").show();
    var customerToppings = [];
   $("input:checkbox[name=toppings]:checked").each(function() {
       var toppings = $(this).val();
       customerToppings.push(toppings);
     });

     $("#.total").show();
     var newPizza = new Pizza(size,toppings);
     $("#total").text(newPizza)

   });
  });


    // $("#price").show();
    // var yourPrice = customerOrder.orderTotal();
    // $("#price").append(yourPrice + "<br>");
