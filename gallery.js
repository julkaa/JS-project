let img = ["https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640", "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ-g1wJNsv0WzgGWV2BSYK_-UP22r4pejVgA&usqp=CAU"];
let Index = 0;

function mainChange() {
    document.getElementById("img_main").src = img[Index];
    switch (Index) {
        case 0: {
            document.getElementById("img1").className = "selected";
            document.getElementById("img2").className = "notselected";
            document.getElementById("img3").className = "notselected";
            break;
        }
        case 1: {
            document.getElementById("img2").className = "selected";
            document.getElementById("img1").className = "notselected";
            document.getElementById("img3").className = "notselected";
            break;
        }
        case 2: {
            document.getElementById("img3").className = "selected";
            document.getElementById("img1").className = "notselected";
            document.getElementById("img2").className = "notselected";
            break;
        }
    }
}

function arrowChange(direction) {
    switch (direction) {
        case 'left': {
            Index--;
            break;
        }
        case 'right': {
            Index++;
            break;
        }
    }
    if (Index > 2) {
        Index = 0;
    } else
    if (Index < 0) {
        Index = 2;
    }
    mainChange();
}

function imgChange(index) {
    Index = index;
    mainChange();
}
