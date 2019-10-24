let version = document.querySelector(".version");

version.addEventListener("click", function() {
    let mob = document.querySelector(".repairMobile");
    let desk = document.querySelector(".wrapper");
    let v = document.querySelector(".version").textContent;
    if (v === "Mobile") {
        document.querySelector("p.buttonText").textContent = "Desktop";
        mob.style.display = "flex";
        desk.style.display = "none";
    } else {
        document.querySelector("p.buttonText").textContent = "Mobile";
        mob.style.display = "none";
        desk.style.display = "flex";
    }
})