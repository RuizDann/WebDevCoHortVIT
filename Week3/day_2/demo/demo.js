var position = 0;

function scrollup() {
  if (position < 2) {
    var slider = document.getElementById("slider");
    position += 1;
    var offset = position * 400 + 4;
    slider.style.transform = "translateY(-" + offset + "px)";
  };
};

function scrolldown() {
  if (position > 0) {
    var slider = document.getElementById("slider");
    position -= 1;
    var offset = position * 400 + 4;
    slider.style.transform = "translateY(-" + offset + "px)";
  };
};
