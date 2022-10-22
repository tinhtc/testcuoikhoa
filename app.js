// bài 1
function checkValue() {
    document.getElementById("result").innerHTML = "";
    val1 = document.getElementById("num1").value;
    val2 = document.getElementById("num2").value;
    if ((Number.isInteger(val1) && Number.isInteger(val2)) || val2 < val1)
        return;
    let arrPrime = [];
    for (let i = val1; i <= val2; ++i) {
        if (isPrime(i)) {
            arrPrime.push(i);
        }
    }
    console.log(arrPrime.toString());
    document.getElementById("result").innerHTML = arrPrime.toString();
}

function isPrime(n) {
    let flag = true;
    if (n < 2) {
        flag = false;
    } else {
        for (let i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}


// bài 2: 
function numberOneTriangle(value) {
    if (value >= 1 && value <= 10) {
        let temp = "";
        for (let i = 0; i < value; i++) {
            temp += "*";
            el = document.createElement("li");
            el.innerHTML = temp;
            document.getElementById("que2").appendChild(el);
        }
        return temp;
    } else return;
}

function printfTriangle() {
    let temp = document.getElementById("num3").value;
    numberOneTriangle(temp);
}





