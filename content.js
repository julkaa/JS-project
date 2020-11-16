let scrollBtn = document.querySelector("#scrollBtn");
let test = document.querySelector("#test");
let firstText = document.getElementsByClassName("firstText");
const availableTags = [
   'action', 'ambition', 'appretiate', 'adventure', 'always',
   'brave', 'balance', 'belong', 'build', 'be',
   'consostency', 'calm', 'change', 'connect', 'compromise',
   'drama', 'dump', 'disco', 'discover', 'dragon',
   'enlighten', 'energy', 'enough', 'encourage', 'embrace'
]

function mySlideToggle() {
    $(".firstText").slideToggle();
}

function boldText() {
    $(".firstText").css("fontWeight", "bold");
}

function changeColor() {
    $(".firstText").css("color", "pink");
}

function addAnimate1() {
    $(".animatedDiv1").animate({
        width: "100px",
        height: "100px"
    }, 3000);
}

function addAnimate2() {
    $(".animatedDiv2").animate({
        'marginLeft': "+=30px",
        'marginTop': "+=30px"
    }, 3000);
}

function addAnimate3() {
    $(".animatedDiv3").fadeTo("slow", 0.4).animate({
        'transform': "scaleX(-1)"
    }, 3000);
}
let tr = document.getElementsByTagName("tr");

function ChangeColor2() {
    $("tr:nth-child(1)").css("background-color", "blue");
    $("tr:nth-child(3)").css("background-color", "blue");
    $("tr:nth-child(2)").css("background-color", "yellow");
    $("tr:nth-child(4)").css("background-color", "yellow");
    $("tr:nth-child(4)").css("color", "blue");
}

$.ui.autocomplete.filter = function (array, term) {
    const matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
    return $.grep(array, function (value) {
        return matcher.test(value.label || value.value || value);
    });
};

$('#autocomplete').autocomplete({
    source: availableTags
});
