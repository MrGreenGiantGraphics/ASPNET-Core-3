$(document).ready(function () { 
var x = 0;
var s = "";

console.log("Hello Bit Main Street");


var theform = $("#theForm");

theform.hide();

var button = $("#buyButton");
button.on("click", function () {
    console.log("Buying Item");
});

var productInfo = $(".product-props li");
productInfo.on("click", function () {
    console.log("You clicked on " + $(this).text());
});

    var $loginToggle = $("#loginToggle");
    var $popupform = $(".popupform");

    $loginToggle.on("click", function () {
        $popupform.fadeToggle(1000);
    });

});
