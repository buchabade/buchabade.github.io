function toggleSectionDisplay(index) {

    const aldeaButton = document.getElementById("aldea-button");
    const hipicaButton = document.getElementById("hipica-button");
    const capelaButton = document.getElementById("capela-button");
    const monteButton = document.getElementById("monte-button");
    const muinoButton = document.getElementById("muino-button");

    if (aldeaButton.textContent.charAt(0) === "\u2022") aldeaButton.textContent = aldeaButton.textContent.slice(2);
    if (hipicaButton.textContent.charAt(0) === "\u2022") hipicaButton.textContent = hipicaButton.textContent.slice(2);
    if (capelaButton.textContent.charAt(0) === "\u2022") capelaButton.textContent = capelaButton.textContent.slice(2);
    if (monteButton.textContent.charAt(0) === "\u2022") monteButton.textContent = monteButton.textContent.slice(2);
    if (muinoButton.textContent.charAt(0) === "\u2022") muinoButton.textContent = muinoButton.textContent.slice(2);


    const aldea = document.getElementById("aldea");
    const hipica = document.getElementById("hipica");
    const capela = document.getElementById("capela");
    const monte = document.getElementById("monte");
    const muino = document.getElementById("muino");

    aldea.style.display = "none";
    hipica.style.display = "none";
    capela.style.display = "none";
    monte.style.display = "none";
    muino.style.display = "none";

    switch (index){
        case 0:
            aldea.style.display = "block";
            aldeaButton.textContent = "\u2022\u00a0" + aldeaButton.textContent;
            break;
        case 1:
            hipica.style.display = "block";
            hipicaButton.textContent = "\u2022\u00a0" + hipicaButton.textContent;
            break;
        case 2:
            capela.style.display = "block";
            capelaButton.textContent = "\u2022\u00a0" + capelaButton.textContent;
            break;
        case 3:
            monte.style.display = "block";
            monteButton.textContent = "\u2022\u00a0" + monteButton.textContent;
            break;
        case 4:
            muino.style.display = "block";
            muinoButton.textContent = "\u2022\u00a0" + muinoButton.textContent;
            break;
        default:
            aldea.style.display = "block";
            aldeaButton.textContent = "\u2022\u00a0" + aldeaButton.textContent;
            break;
    }

}