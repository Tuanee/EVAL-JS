const cookieBox = document.querySelector(".contentCookie");
const buttons = document.querySelectorAll(".button");
console.log(cookieBox, buttons);

function executesCodes() {
    if (document.cookie.includes("true")) return;
    cookieBox.classList.add("show");


    buttons.forEach(button => {
        button.addEventListener("click", () => {

            cookieBox.classList.remove("show");
            if (button.id == "accept") {
                document.cookie = "rgpd_consent=true; max-age=" + 60 * 60 * 24 * 30;
            }
        })
    })
};

window.addEventListener("load", executesCodes)