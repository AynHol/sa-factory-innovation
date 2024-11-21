import "./estoqueLista.css";
import "../../reset.css";

function estoquePage() {
    (window as any).navigateAPI.estoquePage();
}

function homePage() {
    (window as any).navigateAPI.homePage();
}

(window as any).estoquePage = estoquePage;
(window as any).homePage = homePage;