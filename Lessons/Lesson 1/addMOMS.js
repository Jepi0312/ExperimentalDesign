function calculate()
{
    let number = prompt("Please enter your number. MOMS (VAT) will be added")
    document.getElementById("price").innerHTML = number * 1.25;
}