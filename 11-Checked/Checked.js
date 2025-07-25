// .Checked = property that determmines the Checked state of an 
//             HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const MasterCardBtn = document.getElementById("MasterCardBtn")
const PayPAlBtn = document.getElementById("PayPAlBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function(){
    
    if(myCheckBox.checked){
        subResult.textContent = "You are Subscibed!";
    }
    else{
        subResult.textContent = "You are not Subscibed!";
    }
    if (visaBtn.checked){
        paymentResult.textContent = "You are paying with visa";
    }
    else if (MasterCardBtn.checked) {
        paymentResult.textContent = "You are paying with MasterCard";
    }
    else if (PayPAlBtn.checked) {
        paymentResult.textContent = "You are paying with PayPal";
    }
    else{
        paymentResult.textContent = "You must select a payment type ";
    }
}

