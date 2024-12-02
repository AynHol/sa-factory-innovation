import "./producao.css";
import "../../reset.css";
import Estoque from "../../entity/Estoque";

var listProduto: Estoque[] = []
var listproducao: any[] = []

document.getElementById("buttonCadastroProduction")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var modelo = document.getElementById("modeloinput") as HTMLInputElement;
    var chassi = document.getElementById("chassiinput") as HTMLInputElement;
    var cor = document.getElementById("corinput") as HTMLInputElement;
    var ano = document.getElementById("anoinput") as HTMLInputElement;
    var pneubox = (document.getElementById("combobox1") as HTMLSelectElement);
    var portabox = (document.getElementById("combobox2") as HTMLSelectElement);
    var motorbox = (document.getElementById("combobox3") as HTMLSelectElement);
    var farolbox = (document.getElementById("combobox4") as HTMLSelectElement);
    var extrabox = (document.getElementById("combobox5") as HTMLSelectElement);

    const newVeiculo = {
        modelo: modelo.value,
        chassi: chassi.value,
        cor: cor.value,
        ano_fabricacao: Number(ano.value),
        motorid: motorbox.value,
        portaid: portabox.value,
        pneuid: pneubox.value,
        farolid: farolbox.value,
        extraid: extrabox.value
    }

    listproducao.push(newVeiculo);
    (window as any).bankAPI.createProducao(newVeiculo);
})

window.onload = async () => {
    const estoque = await (window as any).bankAPI.findAll();
    for (var i = 0; i < estoque.length; i++) {
        const produto = new Estoque(
            estoque[i].nome,
            estoque[i].descricao,
            estoque[i].quantidade,
            estoque[i].fabricante,
            estoque[i].id
        );
        listProduto.push(produto);
    }
    ComboBox()
}

function ComboBox() {
    var comboboxPneu = document.getElementById("combobox1");
    comboboxPneu.innerHTML = `<option value="" disabled="true">Selecione um Pneu</option>`;
    var comboboxMotor = document.getElementById("combobox3");
    comboboxMotor.innerHTML = `<option value="" disabled="true">Selecione um Motor</option>`;
    var comboboxPorta = document.getElementById("combobox2");
    comboboxPorta.innerHTML = `<option value="" disabled="true">Selecione uma Porta</option>`;
    var comboboxFarol = document.getElementById("combobox4");
    comboboxFarol.innerHTML = `<option value="" disabled="true">Selecione um Farol</option>`;
    var comboboxExtra = document.getElementById("combobox5");
    comboboxExtra.innerHTML = `<option value="" disabled="true">Selecione Extras</option>`;
    
    for (var i = 0; i < listProduto.length; i++) {
        comboboxPneu.innerHTML += `
            <option value="${listProduto[i].getId()}">${listProduto[i].getNome()}</option>
        `;
    }
    for (var i = 0; i < listProduto.length; i++) {
        comboboxPorta.innerHTML += `
            <option value="${listProduto[i].getId()}">${listProduto[i].getNome()}</option>
        `;
    }
    for (var i = 0; i < listProduto.length; i++) {
        comboboxMotor.innerHTML += `
            <option value="${listProduto[i].getId()}">${listProduto[i].getNome()}</option>
        `;
    }
    for (var i = 0; i < listProduto.length; i++) {
        comboboxFarol.innerHTML += `
            <option value="${listProduto[i].getId()}">${listProduto[i].getNome()}</option>
        `;
    }
    for (var i = 0; i < listProduto.length; i++) {
        comboboxExtra.innerHTML += `
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