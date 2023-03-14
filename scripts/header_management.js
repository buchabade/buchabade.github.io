let showHeader = true;

function toggleHeader() {
    const iconButton = document.getElementById("iconButton");
    const header = document.getElementById("foldingHeader");
    iconButton.classList.toggle("rotate");
    showHeader = !showHeader;
    if (showHeader) header.classList.remove("folded");
    else header.classList.add("folded");
}

function loadHeader() {
    const iconButton = document.getElementById("iconButton");
    const header = document.getElementById("foldingHeader");
    showHeader = window.innerWidth > 920;
    if (showHeader) header.classList.remove("folded");
    else {
        header.classList.add("folded");
        iconButton.classList.toggle("rotate");
    }
}