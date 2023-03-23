function toggleNavigation(x) {
    const navigation = document.getElementById("navigation");

    x.classList.toggle("change");

    if (navigation.style.display === "none") {
        navigation.style.animation = "fadein 0.4s";
        navigation.style.display = "block";
        navigation.style.opacity = "1";
    } else {
        navigation.style.animation = "fadeout 0.4s";
        navigation.style.opacity = "0";
        setTimeout(() => {
            navigation.style.display = "none";
        }, 400);
    }
}