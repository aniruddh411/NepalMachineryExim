var divs = ["Scaffold", "Other", "BarCutter", "BarBender", "StirrupBender", "SteelBarCutter", "GUTEetc", "Pneumatic", "Power", "Hand", "Hydraulic", "Municipal", "Ramming", "Lifting", "Ventilation", "Camps", "Electrical", "Welding", "Safety", "OtherM"];
var visibleDivId = null;

function toggleVisibility(divId) {
    if (visibleDivId === divId) {
        //visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId) {
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
        } else {
            div.style.display = "none";
        }
    }
}