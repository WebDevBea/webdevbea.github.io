//Add item to the cart.
function addToCart(){
    var productNameElement = $(this).siblings("p").first();
    var productName = productNameElement.text();
    var productPrice = productNameElement.next().text();

// Create a new list item in the cart.
    $("#cart").children("ul").prepend(
        "<li>"
        + "<div>"
        + productName
        + "</div>" 
        + " " 
        + "<div>"
        + productPrice
        + "</div>" 
        + "</li>");
    alert(productName + " Added to cart!");
    highlightCartButton();
    setSoldOut($(this));
}

//Highlight Cart Button.
function highlightCartButton(){
    $("#cart").children("a")
        .css("background-color","#169ae6")
        .css("color", "#ffa42c");
}

//Sold out item.
function setSoldOut(button){
    button
        .css("background-color", "red")
        .text("Sold Out")
        .prop("disabled", true);
};

//Open and close cart function.
// function toggleCart(){
//     if ($("#cart").children("ul").is(":empty")) {
//         alert("Your cart is empty!");
//         return;
//     }

//     if ($("#cart").children("ul").is(":hidden")) {
//         $("#cart").children("ul").css("display", "block");
//     }
//     else {
//         $("#cart").children("ul").css("display", "none");
//     }
// }

//Binds the addToCart and togglecart functions.
function main(){
    $("#outfits").find("button").click(addToCart);
    // $("#cart").children("a").click(toggleCart);
}

//Call main on document ready.
$(document).ready(main);