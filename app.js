function handelCountChange (product, isIncrease) {
    const productInput = document.getElementById(product + "Count");

    // call Function
    const productCount = getInputValue(product);

    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
   if(isIncrease == false && productCount > 0){
    productNewCount = productCount - 1;
    }

    productInput.value = productNewCount;

    let ProductPrice = 0;
    if (product == "iPhone") {
        ProductPrice = productNewCount * 1219;
    }
    if (product == "case") {
        ProductPrice = productNewCount * 59;
    }
    document.getElementById(product + "Price").innerText = "$" + ProductPrice;

    // function callBack
    calculateTotal ();
}
// Total Amount Count 
function calculateTotal () {
    // for Iphone
    // call Function
    const phoneCount = getInputValue("iPhone")

    // for Case
    // call Function
    const caseCount = getInputValue("case");

   
    const totalPrice = phoneCount * 1219 + caseCount * 59 ;
    document.getElementById("total-Price").innerText = '$' + totalPrice;
     
     // for tax
    const tax = Math.round(totalPrice * 0.15);
    document.getElementById("taxValue").innerText = "$" + tax;

    // For NetTotal
    const netTotal = totalPrice + tax;
    document.getElementById("net-total").innerText = "$" + netTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + "Count");
    const productCount = parseInt(productInput.value);
    return productCount;
}

// Remove Part
const removeBtn = document.getElementById("remove");
removeBtn.addEventListener('click', function(){
const removeArea = document.getElementById("removeArea");
removeArea.style.display = "none";
})

