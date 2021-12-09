var paths = document.querySelectorAll("svg path");

for (let i = 0; i < paths.length; i++) {
    var tooltip = document.createElement("div");
    tooltip.id = "tooltip_" + i;
    tooltip.setAttribute("class", "tooltip");
    var whetherAttr = paths[i].hasAttribute("data-name");
    if (whetherAttr == true) {
        tooltip.innerHTML = "<img src='" + paths[i].getAttribute("image") + "'>" + "<h3>" + paths[i].getAttribute("data-name") + "</h3>" + "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, porro? Veniam, nulla!</p>";
    } else {
        tooltip.innerHTML = "<img src='" + paths[i].getAttribute("image") + "'>" + "<h3>" + paths[i].id + "</h3>" + "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, porro? Veniam, nulla!</p>";
    }
    tooltip.style.display = "none";
    tooltip.style.pointerEvents = "none";
    document.body.insertBefore(tooltip, document.body.childNodes[0]);
    paths[i].addEventListener("mousemove", function (e) {
        var xPos = e.pageX + 15;
        var yPos = e.pageY + 5;
        var transform = "translate3d(" + xPos + "px," + yPos + "px, 0)";
        document.getElementById("tooltip_" + i).style.transitionDuration = "50ms";
        document.getElementById("tooltip_" + i).style.display = "block";
        document.getElementById("tooltip_" + i).style.transform = transform;
        if (paths[i].getAttribute("fill") == "#1b262c") {
            paths[i].style.fillOpacity = "0.6";
        } else {

        }
    });
    paths[i].addEventListener("mouseout", function () {
        document.getElementById("tooltip_" + i).style.display = "none";
        paths[i].style.fillOpacity = "1";
    });
}