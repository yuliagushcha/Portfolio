let version = document.querySelector(".version");

version.addEventListener("click", function() {
    let mob = document.querySelector(".theyalowMobile");
    let desk = document.querySelector(".wrapper");
    let v = document.querySelector(".version").textContent;
    if (v === "Mobile") {
        document.querySelector("p.buttonText").textContent = "Desktop";
        mob.style.display = "block";
        desk.style.display = "none";
    } else {
        document.querySelector("p.buttonText").textContent = "Mobile";
        mob.style.display = "none";
        desk.style.display = "block";
    }
})

if (window.screen.width < 640) {
    document.querySelector(".version").style.display = "none";
}