import "./estoque.css";
import "../../reset.css";
import Estoque from "../../entity/Estoque";

var estoque: Estoque[] = [];

document.getElementById("cadastrarButton")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("nome") as HTMLInputElement
    var fabricante = document.getElementById("fabricante") as HTMLInputElement
    var quantidade = document.getElementById("quantidade") as HTMLInputElement
    var descricao = document.getElementById("descricao") as HTMLInputElement

    const newEstoque = new Estoque(
        nome.value,
        descricao.value,
        Number(quantidade.value),
        fabricante.value
    );

    console.log(newEstoque)

    estoque.push(newEstoque);
    (window as any).bankAPI.createEstoque(newEstoque)

    const campo_list = [
        "nome",
        "descricao",
        "quantidade",
        "fabricante",
    ];
    campo_list.forEach(
        (campo) =>
        ((document.getElementById(campo) as HTMLInputElement).value = "")
    );
})

function estoqueListPage() {
    (window as any).navigateAPI.estoqueListPage();
}

(window as any).estoqueListPage = estoqueListPage;