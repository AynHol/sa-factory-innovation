import "./reset.css";
import "./index.css";

function estoquePage() {
    (window as any).navigateAPI.estoquePage();
}

function producaoPage() {
    (window as any).navigateAPI.producaoPage();
}

function qualidadePage() {
    (window as any).navigateAPI.qualidadePage();
}

(window as any).estoquePage = estoquePage;
(window as any).producaoPage = producaoPage;
(window as any).qualidadePage = qualidadePage;
