function updateFeild(isIncreasing, productName, price) {
    const product = document.getElementById(productName + '-number');
    const productValue = parseInt(product.value);
    //plus number
    if (isIncreasing) {
        product.value = productValue + 1;
    } else { //minus number
        product.value = productValue - 1;
    }
    const ValueFixed = product.value;
    //update product value
    const productValueTotal = document.getElementById(productName + '-total');
    productValueTotal.innerText = ValueFixed * price;
    //sub total
    calculateTotal();
}

function getInput(product) {
    const productInput = document.getElementById(product + '-number');
    const productValue = parseInt(productInput.value);
    return productValue;
}

function calculateTotal() {
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}
//phn er increase,decrease,total amount
document.getElementById('phone-plus').addEventListener('click', function() {
    updateFeild(true, 'phone', 1219);
})
document.getElementById('phone-minus').addEventListener('click', function() {
    updateFeild(false, 'phone', 1219);

})

//case er increase,decrease,total amount
document.getElementById('case-plus').addEventListener('click', function() {
    updateFeild(true, 'case', 59);
})
document.getElementById('case-minus').addEventListener('click', function() {
    updateFeild(false, 'case', 59);

})