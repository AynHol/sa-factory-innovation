import "./estoque.css";
import "../../reset.css";

var estoque: any[] = [];

document.getElementById("cadastrarButton")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("nome") as HTMLInputElement
    var fabricante = document.getElementById("fabricante") as HTMLInputElement
    var quantidade = document.getElementById("quantidade") as HTMLInputElement
    var descricao = document.getElementById("descricao") as HTMLInputElement

    const newEstoque =  {
        nome: nome.value,
        descricao: descricao.value,
        quantidade: Number(quantidade.value),
        fabricante: fabricante.value
    }

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
function homePage() {
    (window as any).navigateAPI.homePage();
}
function producaoPage() {
    (window as any).navigateAPI.producaoPage();
}
function qualidadePage() {
    (window as any).navigateAPI.qualidadePage();
}

(window as any).estoqueListPage = estoqueListPage;
(window as any).homePage = homePage;
(window as any).producaoPage = producaoPage;
(window as any).qualidadePage = qualidadePage;