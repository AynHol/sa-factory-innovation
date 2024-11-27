import "./qualidade.css";
import "../../reset.css";
import Producao from "../../entity/Producao";
import Qualidade from "../../entity/Qualidade";

var listVeiculo: Producao[] = [];
var listQA: Qualidade[] = [];

document.getElementById("aprovarButton")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var veiculo_id = (document.getElementById("combobox") as HTMLSelectElement);
    var pneu = document.getElementById("checkPneu") as HTMLInputElement;
    var lataria = document.getElementById("checkLataria") as HTMLInputElement;
    var porta = document.getElementById("checkPorta") as HTMLInputElement;
    var interior = document.getElementById("checkInterior") as HTMLInputElement;
    var motor = document.getElementById("checkMotor") as HTMLInputElement;
    var farol = document.getElementById("checkFarol") as HTMLInputElement;

    var id = veiculo_id.value

    const newqualidade = new Qualidade(pneu.checked, porta.checked, motor.checked, lataria.checked, interior.checked, farol.checked, id);
    listQA.push(newqualidade);
    (window as any).bankAPI.createQualidade(newqualidade);
})

window.onload = async () => {
    const veiculo = await (window as any).bankAPI.findAllVeiculo();
    for (var i = 0; i < veiculo.length; i++) {
        const veiculoo = new Producao(
            veiculo[i].modelo,
            veiculo[i].chassi,
            veiculo[i].cor,
            veiculo[i].anoFabricacao,
            veiculo[i].motorid,
            veiculo[i].portaid,
            veiculo[i].pneuid,
            veiculo[i].farolid,
            veiculo[i].extraid,
            veiculo[i].id,
        );
        listVeiculo.push(veiculoo);
    }
    ComboBox();
}

function ComboBox() {
    var combobox = document.getElementById("combobox");
    combobox.innerHTML = `<option value="" disabled="true">Selecione um veículo</option>`;

    for (var i = 0; i < listVeiculo.length; i++) {
        combobox.innerHTML += `
            <option value="${listVeiculo[i].getId()}">${listVeiculo[i].getModelo()}</option>
        `;
    }
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

function qualidadeResultPageAP() {
    (window as any).navigateAPI.qualidadeResultPageAP();
}

function qualidadeResultPageRP() {
    (window as any).navigateAPI.qualidadeResultPageRP();
}


(window as any).estoquePage = estoquePage;
(window as any).homePage = homePage;
(window as any).producaoPage = producaoPage;
(window as any).qualidadeResultPageAP = qualidadeResultPageAP;
(window as any).qualidadeResultPageRP = qualidadeResultPageRP;