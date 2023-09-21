

function myFunction() {
    var y = document.getElementById("inputOrderDIV");
    var x = document.getElementById("submittedOrderDIV");

    if (x.style.display === "none") {
        x.style.display = "block";

    }

    y.style.display = "none";

    var inputElement = document.getElementById("email");
    var submittedElement = document.getElementById("emailSubmitted");

    submittedElement.value = inputElement.value;

    inputElement = document.getElementById("rbDesign");
    inputElement = document.querySelector('input[name="rbDesign"]:checked');

    submittedElement = document.getElementById("designSubmitted");
    submittedElement.value = inputElement.value;


    inputElement = document.getElementById("designSize");
    submittedElement = document.getElementById("designSizeSubmitted");
    //alert(inputElement.value);
    //alert(submittedElement.value);

    submittedElement.value = inputElement.value;

    inputElement = document.getElementById("phone");
    submittedElement = document.getElementById("phoneSubmitted");
    
    submittedElement.value = inputElement.value;
}