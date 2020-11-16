let topmenuLinks = document.getElementById("topmenu").getElementsByTagName("li");


for (let i = 0; i < topmenuLinks.length; i++) {
    let row = topmenuLinks[i].getElementsByClassName("submenu");

    //top menu
    if (row.length == 0) {
        //        console.log("error");
    } else {
        let temp = row[0];
        topmenuLinks[i].addEventListener("mouseover", function () {

            temp.style.display = "block";
        });
        topmenuLinks[i].addEventListener("mouseout", function () {

            temp.style.display = "none";
        });
        //
        let row2Links = temp.getElementsByTagName('li');
        for (let k = 0; k < row2Links.length; k++) {
            let row2 = row2Links[k].getElementsByClassName('submenu_2');

            if (row2.length > 0) {
                let temp2 = row2[0];
                row2Links[k].addEventListener("mouseover", function () {

                    temp2.style.display = "block";
                });
                row2Links[k].addEventListener("mouseout", function () {

                    temp2.style.display = "none";
                });
                continue;
            } else {

            }
        }

        continue;
    }


}
