var position = 0;

function somethingLeft() {
    if (position > 0) {
        var slider = document.getElementById("slider");
        position -= 1;
        var offset = position * 1925;
        slider.style.transform = "translateX(-" + offset + "px)";
    }
}

function scrollRight() {
    if (position < 2) {
        var slider = document.getElementById("slider");
        position += 1;
        var offset = position * 1925;
        slider.style.transform = "translateX(-" + offset + "px)";
    }
}
