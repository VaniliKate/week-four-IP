/*
for (var i = 0; i < size.length; i++) {
    console.log(size[i]);

var size = ["Regular", "Medium", "Large", "Extra large"];
var toppings = ["Pepperoni", "Sausage", "Mushrooms", "Chicken", "Extra cheese"];
var crust = ["Thin crust", "Glutten-free crust", "Stuffed crust", "Pan-tossed crust", "Crispy crust"]
/*
function Getpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}
*/
/*
//getting price of sizes
var size = document.getElementById("size").value;

switch (size) {
    case "Regular":
        price = 850;
        console.log(price);
        break;
    case "Medium":
        price = 1000;
        console.log(price);
        break;
    case "Large":
        price = 1200;
        console.log(price);
        break;
    case "Extra large":
        price = 1400;
        console.log(price);
        break;
    default:
        console.log("error");
}

//getting prices of the crust
var crust = document.getElementById("size").value;

switch (crust) {
    case "Thin crust":
        price = 100;
        console.log(price);
        break;
    case "Glutten-free crust":
        price = 150;
        console.log(price);
        break;
    case "Stuffed crust":
        price = 180;
        console.log(price);
        break;
    case "Pan-tossed crust":
        price = 180;
        console.log(price);
        break;
    case "Crispy crust":
        price = 180;
        console.log(price);
        break;
    default:
        console.log("error");
}




//getting topping values
$("button#btn").click(function(event){
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = [];
    $.each($("input[name='toppings']:checked"), function(){            
        ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

});
*/

var price = pizza_price,
    crust_price, topping_price;
let total = 0;

//Get inputs
$("#checkout").click(function () {
    let flavour = $(".flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size);




});