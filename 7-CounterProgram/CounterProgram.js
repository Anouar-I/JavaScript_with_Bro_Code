// Counter Program

const DecreaseBtn = document.getElementById("DecreaseBtn");
const Reset = document.getElementById("Reset");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const CountLabel = document.getElementById("CountLabel");

let Count = 0 

IncreaseBtn.onclick = function(){
    Count++;
    CountLabel.textContent = Count;
}
DecreaseBtn.onclick = function(){
    Count--;
    CountLabel.textContent = Count;
}
Reset.onclick = function(){
    Count = 0 ;
    CountLabel.textContent = Count;
}