import "./qualidade.css";
import "../../reset.css";

window.onload = async () => {
    ComboBox()
}

function ComboBox() {
        var combobox = document.getElementById("combobox");
        combobox.innerHTML = `<option value="" disabled="true">Selecione uma opção</option>`;
}

function estoquePage() {
    (window as any).navigateAPI.estoquePage();
}

function homePage() {
    (window as any).navigateAPI.homePage();
}

function producaoPage() {
    (window as any).navigateAPI.producaoPage();
}

function qualidadeResultPage() {
    (window as any).navigateAPI.qualidadeResultPage();
}

(window as any).estoquePage = estoquePage;
(window as any).homePage = homePage;
(window as any).producaoPage = producaoPage;
(window as any).qualidadeResultPage = qualidadeResultPage;