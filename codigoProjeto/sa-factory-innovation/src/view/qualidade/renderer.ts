import "./qualidade.css";
import "../../reset.css";
import Producao from "../../entity/Producao";

var listVeiculo: Producao[] = [];
var listQA: any[] = [];

document.getElementById("aprovarButton")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var veiculo_id = (document.getElementById("combobox") as HTMLSelectElement);
    var trimestre = (document.getElementById("combotri") as HTMLSelectElement);
    var pneu = document.getElementById("checkPneu") as HTMLInputElement;
    var lataria = document.getElementById("checkLataria") as HTMLInputElement;
    var porta = document.getElementById("checkPorta") as HTMLInputElement;
    var interior = document.getElementById("checkInterior") as HTMLInputElement;
    var motor = document.getElementById("checkMotor") as HTMLInputElement;
    var farol = document.getElementById("checkFarol") as HTMLInputElement;

    const newqualidade = {
        pneu: pneu.checked,
        porta: porta.checked,
        motor: motor.checked,
        lataria: lataria.checked,
        interior: interior.checked,
        farol: farol.checked,
        veiculoid: veiculo_id.value,
        stato: true,
        trimestre: Number(trimestre.value)
    }

    listQA.push(newqualidade);
    (window as any).bankAPI.createQualidade(newqualidade);
})

document.getElementById("reprovarButton")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var veiculo_id = (document.getElementById("combobox") as HTMLSelectElement);
    var trimestre = (document.getElementById("combotri") as HTMLSelectElement);
    var pneu = document.getElementById("checkPneu") as HTMLInputElement;
    var lataria = document.getElementById("checkLataria") as HTMLInputElement;
    var porta = document.getElementById("checkPorta") as HTMLInputElement;
    var interior = document.getElementById("checkInterior") as HTMLInputElement;
    var motor = document.getElementById("checkMotor") as HTMLInputElement;
    var farol = document.getElementById("checkFarol") as HTMLInputElement;

    const newqualidade = {
        pneu: pneu.checked,
        porta: porta.checked,
        motor: motor.checked,
        lataria: lataria.checked,
        interior: interior.checked,
        farol: farol.checked,
        veiculoid: veiculo_id.value,
        stato: false,
        trimestre: Number(trimestre.value)
    }

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
            veiculo[i].pecasid,
            veiculo[i].id,
        );
        listVeiculo.push(veiculoo);
    }
    ComboBox();
    ComboTri();
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

function ComboTri() {
    var combobox = document.getElementById("combotri");
    combobox.innerHTML = `
    <option value="" disabled="true">Selecione um Trimestre</option>
    <option value="1" >1º Trimestre</option>
    <option value="2" >2º Trimestre</option>
    <option value="3" >3º Trimestre</option>
    <option value="4" >4º Trimestre</option>
    `;
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
