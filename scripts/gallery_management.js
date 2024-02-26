function toggleSectionDisplay(index) {

    const hipicaButton = document.getElementById("hipica-button");
    const aldeaButton = document.getElementById("aldea-button");
    const capelaButton = document.getElementById("capela-button");
    const monteButton = document.getElementById("monte-button");
    const muinoButton = document.getElementById("muino-button");
    const xornada2024Button = document.getElementById("xornada-2024-button");

    if (hipicaButton.textContent.charAt(0) === "\u2022") hipicaButton.textContent = hipicaButton.textContent.slice(2);
    if (aldeaButton.textContent.charAt(0) === "\u2022") aldeaButton.textContent = aldeaButton.textContent.slice(2);
    if (capelaButton.textContent.charAt(0) === "\u2022") capelaButton.textContent = capelaButton.textContent.slice(2);
    if (monteButton.textContent.charAt(0) === "\u2022") monteButton.textContent = monteButton.textContent.slice(2);
    if (muinoButton.textContent.charAt(0) === "\u2022") muinoButton.textContent = muinoButton.textContent.slice(2);
    if (xornada2024Button.textContent.charAt(0) === "\u2022") xornada2024Button.textContent = xornada2024Button.textContent.slice(2);


    const hipica = document.getElementById("hipica");
    const aldea = document.getElementById("aldea");
    const capela = document.getElementById("capela");
    const monte = document.getElementById("monte");
    const muino = document.getElementById("muino");
    const xornada2024 = document.getElementById("xornada-2024");

    hipica.style.display = "none";
    aldea.style.display = "none";
    capela.style.display = "none";
    monte.style.display = "none";
    muino.style.display = "none";
    xornada2024.style.display = "none";

    switch (index){
        case 0:
            hipica.style.display = "block";
            hipicaButton.textContent = "\u2022\u00a0" + hipicaButton.textContent;
            break;
        case 1:
            aldea.style.display = "block";
            aldeaButton.textContent = "\u2022\u00a0" + aldeaButton.textContent;
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
        case 5:
            xornada2024.style.display = "block";
            xornada2024Button.textContent = "\u2022\u00a0" + xornada2024Button.textContent;
            break;
        default:
            hipica.style.display = "block";
            hipicaButton.textContent = "\u2022\u00a0" + hipicaButton.textContent;
            break;
    }

}