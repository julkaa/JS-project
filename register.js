let form = document.forms.form;
let btn = document.querySelector("#validateBtn");

function writeIncorrectMsg(p, fieldName) {
    p.innerHTML += `${fieldName} is incorrect`;
}
const validateField = (field) => {
    let p = field.nextElementSibling;
    p.innerHTML = "";

    if (!field.value) {
        p.innerHTML = `${field.name} is required`;
        return;
    }

    switch (field.name) {

        case "firstName": {
            if (!checkName(field.value)) {
                writeIncorrectMsg(p, field.name);
                field.classList.add("incorr");
            }
            break;
        }
        case "lastName": {
            if (!checkSurname(field.value)) {
                writeIncorrectMsg(p, field.name);
                field.classList.add("incorr");
            }
            break;
        }
        case "date": {
            if (!checkDate(field.value)) {
                writeIncorrectMsg(p, field.name);
                field.classList.add("incorr");
            }
            break;
        }
        case "email": {
            if (!checkEmail(field.value)) {
                writeIncorrectMsg(p, field.name);
                field.classList.add("incorr");
            }
            break;
        }
        case "interests": {
            if (!checkInterests(field.value)) {
                writeIncorrectMsg(p, field.name);
                field.classList.add("incorr");
            }
            break;
        }

        case "photo": {
            if (!checkPhoto(field.value)) {
                writeIncorrectMsg(p, field.name);
                field.classList.add("incorr");
            }
            break;
        }
        case "passw": {
            if (!checkPassword(field.value)) {
                writeIncorrectMsg(p, field.name);
                field.classList.add("incorr");
            }
            break;
        }
        case "passw2": {
            if (!checkRepeatPassword(field.value)) {
                writeIncorrectMsg(p, field.name);
                field.classList.add("incorr");
            }
            break;
        }
    }
};

function checkSurname() {
    str = document.getElementById("surname").value;
    if (str) {
        str = str.replace(/^\s+|\s+$/g, "");
        let re = new RegExp("[A-Z][a-z]*'?[a-z]+(([ ]+|[-])(?=\\w)[A-Z]?[a-z]*'?[a-z]+)*");
        str = str.replace(re, "");
        if (str.length) {
            return false;
        } else {
            document.getElementById("surname").classList.remove("incorr");
            document.getElementById("surname").classList.add("corr");
            return true;
        }
    } else {
        return false;
    }
}

function checkName() {
    str = document.getElementById("name").value;
    if (str) {
        str = str.replace(/^\s+|\s+$/g, "");
        let re = new RegExp("[A-Z][a-z]*'?[a-z]+(([ ]+|[-])(?=\\w)[A-Z]?[a-z]*'?[a-z]+)*");
        str = str.replace(re, "");
        if (str.length) {
            return false;
        } else {
            document.getElementById("name").classList.remove("incorr");
            document.getElementById("name").classList.add("corr");
            return true;
        }
    } else {
        return false;
    }
}

function checkDate() {
    str = document.getElementById("date").value;
    if (str.length) {
        let re = new RegExp("((0[1-9]|[12][0-9]|3[0-1])(?=.(0[13578]|10|12))|(0[1-9]|[12][0-9]|30)(?=.(0[469]|11))|(0[1-9]|[12][0-8]|19)(?=.02)|(0[1-9]|[12][0-9])(?=(.*([13579][26]|[02468][048])$)|(.*([13579][26]|[02468][048])$)))(\\.(?=\\d\\d\\.)|\\/(?=\\d\\d\\/))(0[1-9]|1[0-2])[./]((19[2-9][0-9]|20([0-1][0-9]|20))|([0-9][0-9]))");
        str = str.replace(re, "");
        if (str.length) {
            return false;
        } else {
            document.getElementById("date").classList.remove("incorr");
            document.getElementById("date").classList.add("corr");
            return true;
        }
    } else {
        return false;
    }
}

function checkEmail() {
    str = document.getElementById("email").value;
    if (str.length) {
        let re = new RegExp("([A-Za-z!#$%&'*+\\-\\/=?^`{|}~z](([.](?![@]))?[\\w!#$%&'*+\\-\\/=?^`{|}~z])+)+@([A-za-z0-9]{1,63}|[-.](?![-.])){1,12}\\.[a-z]{2,6}");
        str = str.replace(re, "");
        if (str.length) {
            return false;
        } else {
            document.getElementById("email").classList.remove("incorr");
            document.getElementById("email").classList.add("corr");
            return true;
        }
    } else {
        return false;
    }
}

function checkInterests() {
    str = document.getElementById("interests").value;
    let re = new RegExp("[\\s]", "gm");
    str = str.replace(re, "");
    if (str.length) {
        let re = new RegExp(".{0,500}");
        str = str.replace(re, "");
        if (str.length) {
            return false;
        } else {
            document.getElementById("interests").classList.remove("incorr");
            document.getElementById("interests").classList.add("corr");
            return true;
        }
    } else {
        return false;
    }
}

function checkPassword() {
    str = document.getElementById("passw").value;
    if (str.length) {
        let re = new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}");
        str = str.replace(re, "");
        if (str.length) {
            return false;
        } else {
            document.getElementById("passw").classList.remove("incorr");
            document.getElementById("passw").classList.add("corr");
            return true;
        }
    } else {
        return false;
    }
}

function checkRepeatPassword() {
    str = document.getElementById("passw2").value;
    if (str.length) {
        let re = new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}");
        str = str.replace(re, "");
        if (!str.length && document.getElementById("passw2").value === document.getElementById("passw").value) {
            document.getElementById("passw2").classList.remove("incorr");
            document.getElementById("passw2").classList.add("corr");
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function checkPhoto() {
    str = document.getElementById("photo").value;
    if (str.match(/(\.png)$|(\.jpg)$|(\.jpeg)$|(\.bmp)$|(\.gif)$|(\.tiff)$/gi) !== null) {
        document.getElementById("photo").classList.remove("incorr");
        document.getElementById("photo").classList.add("corr");
        return true;
    } else {
        return false;
    }
}
let langArr = document.getElementsByTagName("select")[0].selectedOptions;


function displayFinalReg() {
    document.querySelector(".finalReg").style.display = "block";
    document.querySelector(".registerDiv").style.display = "none";
    document.querySelector(".ansSurname").innerHTML = form.lastName.value;
    document.querySelector(".ansName").innerHTML = form.firstName.value;
    document.querySelector(".ansDate").innerHTML = form.date.value;
    document.querySelector(".ansEmail").innerHTML = form.email.value;
    for (let i = 0; i < langArr.length; i++)
        document.querySelector(".ansLanguages").innerHTML += langArr[i].value + "<br>";
    document.querySelector(".ansPhoto").src = URL.createObjectURL(document.getElementById("photo").files[0]);
    document.querySelector(".ansInterests").innerHTML = form.interests.value;
}

btn.addEventListener("click", () => {
    validateField(form.email);
    validateField(form.firstName);
    validateField(form.lastName);
    validateField(form.date);
    validateField(form.interests);
    validateField(form.photo);
    validateField(form.languages);
    validateField(form.passw);
    validateField(form.passw2);
    if (checkName() === false | checkSurname() === false | checkEmail() === false | checkInterests() === false | checkPassword() === false | checkRepeatPassword() === false | checkPhoto() === false | checkDate() === false) {
        alert("no");
        document.querySelector('.registerDiv').style.height = "900px";
        return false;
    } else {
        console.log("wow");
        displayFinalReg();
        return true;
    }
});

document.querySelector("#email").addEventListener("keyup", () => {
    validateField(form.email);
});

document.querySelector("#name").addEventListener("keyup", () => {
    validateField(form.firstName);
});
document.querySelector("#surname").addEventListener("keyup", () => {
    validateField(form.lastName);
});
document.querySelector("#date").addEventListener("keyup", () => {
    validateField(form.date);
});
document.querySelector("#interests").addEventListener("keyup", () => {
    validateField(form.interests);
});
document.querySelector("#passw").addEventListener("keyup", () => {
    validateField(form.passw);
});
document.querySelector("#passw2").addEventListener("keyup", () => {
    validateField(form.passw2);
});
