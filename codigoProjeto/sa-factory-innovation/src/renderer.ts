import "./reset.css";
import "./index.css";

function estoquePage(id: string) {
    (window as any).navigateAPI.estoquePage(id);
}

(window as any).estoquePage = estoquePage;