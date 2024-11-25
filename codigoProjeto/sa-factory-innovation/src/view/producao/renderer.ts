import "./producao.css";
import "../../reset.css";
import Estoque from "src/entity/Estoque";


var listProduto: Estoque[] = []

window.onload = async () => {
    ComboBox()
}

function ComboBox() {
    for (var i = 1; i < 6; i++) {
        var combobox = document.getElementById(`combobox${i}`);
        combobox.innerHTML = `<option value="" disabled="true">Selecione uma opção</option>`;
    }

    for (var i = 0; i < listProduto.length; i++) {
        combobox.innerHTML += `
            <option value="${listProduto[i].getId()}">${listProduto[i].getNome()}</option>
        `;
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