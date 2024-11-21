import "./producao.css";
import "../../reset.css";

window.onload = async () => {
    ComboBox()
}

function ComboBox() {
    for (var i = 1; i < 7; i++) {
        var combobox = document.getElementById(`combobox${i}`);
        combobox.innerHTML = `<option value="" disabled="true">Selecione uma opção</option>`;
    }
}

function estoquePage() {
    (window as any).navigateAPI.estoquePage();
}

function homePage() {
    (window as any).navigateAPI.homePage();
}

function qualidadePage() {
    (window as any).navigateAPI.qualidadePage();
}

(window as any).estoquePage = estoquePage;
(window as any).homePage = homePage;
(window as any).qualidadePage = qualidadePage;