function changeColor() {
    let color = document.getElementById('colorInput').value;
    document.body.style.color = color
}

function ResetColor() {
    let texto = document.getElementById('titulo').value;
    let padrao = document.body.style.color = "black"

}

const btn = document.getElementById("status");
let valido = false;

    btn.addEventListener("click", function () {
        if (btn.classList.contains("off")) {
            btn.classList.remove("off");
            btn.classList.add("on");
            btn.textContent = "ligado";
            valido = true;
        } else {
            btn.classList.remove("on");
            btn.classList.add("off");
            btn.textContent = "Desligado";
            valido = false;
        }
        colorButton.disabled = !valido
    });