let resSpan = document.getElementsByTagName("output")[0];
let tempValue = 0;
let inputSpan = document.getElementsByClassName("mainInput")[0];
let resetBtn = document.getElementsByClassName('resetBtn')[0];

function GetValue(_input) {
    if (isNaN(parseInt(_input.value)))
        return 0;

    return parseInt(_input.value);


}

function SetValue(_input, value) {

    _input.value = value;
}

function Calculate(type) {
    switch (type) {
        case "+":
            tempValue += GetValue(inputSpan);
            SetValue(inputSpan, "");
            break;
        case "-":
            tempValue -= GetValue(inputSpan);
            SetValue(inputSpan, "");
            break;
        case "*":
            tempValue *= GetValue(inputSpan);
            SetValue(inputSpan, "");
            break;
        case "/":
            if (GetValue(inputSpan) != 0) {
                tempValue /= GetValue(inputSpan);
                SetValue(inputSpan, "");
                break;
            } else {
                console.log("/ 0!!!!");
            }
    }
    PrintResult(tempValue);
}



function LoadMethods() {
    let array = document.getElementsByClassName("actionBtn");
    for (var i = 0; i < array.length; i++) {
        let type = array[i].value;
        array[i].addEventListener("click", function () {
            Calculate(type)
        });
    }
}


function PrintResult(value) {
    if (isNaN(value))
        return;
    else {
        resSpan.innerHTML = value;
    }

}


function main() {
    LoadMethods();
    MenuBar();
}

resetBtn.addEventListener('click', function () {
    SetValue(inputSpan, "");
    resSpan.innerHTML = "0";
});

function MenuBar() {
    let submenu = document.getElementsByClassName("actionBtn");
}



main();
