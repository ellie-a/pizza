function Pizza(sizes, toppings, price) {
  this.sizes = sizes;
  this.toppings = toppings;
  this.price= price;
}



Pizza.prototype.orderTotal = function() {
  alert("hello")
  this.price =0;
  if (this.sizes === "Small"){
   this.price += 14;
 } else if (this.sizes === "Medium") {
   this.price +=16;
 } else if (this.sizes === "Large") {
   this.price += 18;
 }
 for (var i = 0; i < this.toppings.length; i++) {
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
    // var customerToppings = [];
  //  $("input:checkbox[name=toppings]:checked").each(function() {
    //    var toppings = $(this.toppings).val();
    //    $("#pizzaToppings").append(toppings)
    //   //  customerToppings.push(toppings);
    //  });

     var newPizza = new Pizza(sizes, toppings)

     newPizza.orderTotal();
     console.log(newPizza)

     $("#total").show();

     $("#total").text(newPizza)

   });
  });
