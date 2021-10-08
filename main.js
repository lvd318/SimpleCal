var firstNumber, secondNumber, resultNumber;
var errorMessage;

function validateForm(num) {
    var check = false;
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    
    if(num == 1){
        if (isNaN(firstNumber)) {
                errorMessage = "Giá trị nhập ở ô <span class='error-element'>Số thứ nhất</span> không phải là số";
                document.getElementById("message").innerHTML = errorMessage;
            }
    }
    else if(num == 2){
        if (isNaN(secondNumber)) {
                errorMessage = "Giá trị nhập ở ô <span class='error-element'>Số thứ hai</span> không phải là số";
                document.getElementById("message").innerHTML = errorMessage
            }
    }
    else{
         if (firstNumber === "" || secondNumber === "") {
                errorMessage = "Vui lòng điền đủ 2 số";
                document.getElementById("message").innerHTML = errorMessage
            }
            else if (isNaN(firstNumber)) {
                errorMessage = "Giá trị nhập ở ô <span class='error-element'>Số thứ nhất</span> không phải là số";
                document.getElementById("message").innerHTML = errorMessage
            }
            else if (isNaN(secondNumber)) {
                errorMessage = "Giá trị nhập ở ô <span class='error-element'>Số thứ hai</span> không phải là số";
                document.getElementById("message").innerHTML = errorMessage
            }
            else if (document.querySelectorAll('input[name=operator]:checked').length != 1) {
                errorMessage = "Vui lòng chọn phép tính";
                document.getElementById("message").innerHTML = errorMessage
            }
            else {
                check = true;
            }
    }
    return check;
}

function doCompute() {
    if (validateForm()) {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        if (document.getElementById("add").checked)
            resultNumber = firstNumber + secondNumber;
        else if (document.getElementById("subtract").checked)
            resultNumber = firstNumber - secondNumber;
        else if (document.getElementById("multi").checked)
            resultNumber = firstNumber * secondNumber;
        else if (document.getElementById("divide").checked)
            resultNumber = firstNumber / secondNumber;

        document.getElementById("resultNumber").value = resultNumber;
        document.getElementById("message").innerHTML = "";
    }
}