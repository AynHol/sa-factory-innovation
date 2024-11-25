import "./qualidadeResultado.css";
import "../../reset.css";

function homePage() {
    (window as any).navigateAPI.homePage();
}

function qualidadePage() {
    (window as any).navigateAPI.qualidadePage();
}

(window as any).homePage = homePage;
(window as any).qualidadePage = qualidadePage;