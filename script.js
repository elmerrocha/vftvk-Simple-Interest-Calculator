function compute() {
    const principal = document.getElementById('principal').value;
    if (principal <= 0) {
        alert('Enter a positive number');
        document.getElementById('principal').focus();
    }
    else {
        let rate = document.getElementById('rate').value;
        let years = document.getElementById('years').value;
        let interest = principal * years * rate /100;
        let year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML=`If you deposit \<span style="background-color:yellow;">`+principal+
        `\</span>,\<br\>at an interest rate of \<span style="background-color:yellow;">`+rate+
        `\</span>%\<br\>You will receive an amount of \<span style="background-color:yellow;">`+interest+
        `\</span>,\<br\>in the year \<span style="background-color:yellow;">`+year+"\</span>\<br\>"
    }
}
function updateRate() {
    let rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rateval;
}
