import "./estoqueLista.css";
import "../../reset.css";
import Estoque from "../../entity/Estoque";

var estoqueList: Estoque[] = [];

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
        estoqueList.push(produto);
    }
    render();
};

function render() {
    var div = document.getElementById("tabelatudo");
    div.innerHTML = "";

    div.innerHTML = `
        <div class="tabelahead">
            <div class="nome">
                <p>Nome</p>
            </div>
            <div class="fabricante">
                <p>Fabricante</p>
            </div>
            <div class="qtd">
                <p>Quantidade</p>
            </div>
            <div class="descricao">
                <p>Descrição</p>
            </div>
        </div>
    `;
    
    for (var i = 0; i < estoqueList.length; i++) {
        div.innerHTML += `
            <div class="tabela">
                <div class="nome">
                    <p>${estoqueList[i].getNome()}</p>
                </div>
                <div class="fabricante">
                    <p>${estoqueList[i].getFabricante()}</p>
                </div>
                <div class="qtd">
                    <p>${estoqueList[i].getQuantidade()}</p>
                </div>
                <div class="descricao">
                    <p>${estoqueList[i].getDescricao()}</p>
                </div>
            </div>
        `;
    }
}

function estoquePage() {
    (window as any).navigateAPI.estoquePage();
}

function homePage() {
    (window as any).navigateAPI.homePage();
}

(window as any).estoquePage = estoquePage;
(window as any).homePage = homePage;