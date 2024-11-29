import "./qualidadeResultado.css";
import "../../reset.css";
import Qualidade from "../../entity/Qualidade";

var qualidadelist: Qualidade[] = [];

window.onload = async () => {
    const qualidades = await (window as any).bankAPI.findQualidade();
    for (var i = 0; i < qualidades.length; i++) {
        const qualidade = new Qualidade(
            qualidades[i].pneu,
            qualidades[i].porta,
            qualidades[i].motor,
            qualidades[i].lataria,
            qualidades[i].interior,
            qualidades[i].farol,
            qualidades[i].veiculoid,
            qualidades[i].stato,
            qualidades[i].trimestre,
            qualidades[i].id,
        );
        qualidadelist.push(qualidade);
    }
    render();
}


function statuspneu() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getPneu() === true) {
            return `<h3 class="aproved" id="PneuR">Aprovado</h3>`
        } else {
            return `<h3 id="PneuR">Reprovado</h3>`
        }
    }
}
function statuslataria() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getLataria() === true) {
            return `<h3 class="aproved" id="LatariaR">Aprovado</h3>`
        } else {
            return `<h3 id="LatariaR">Reprovado</h3>`
        }
    }
}
function statusporta() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getPorta() === true) {
            return `<h3 class="aproved" id="PortaR">Aprovado</h3>`
        } else {
            return `<h3 id="PortaR">Reprovado</h3>`
        }
    }
}
function statusinterior() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getIntereior() === true) {
            return `<h3 class="aproved" id="InteriorR">Aprovado</h3>`
        } else {
            return `<h3 id="InteriorR">Reprovado</h3>`
        }
    }
}
function statusmotor() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getMotor() === true) {
            return `<h3 class="aproved" id="MotorR">Aprovado</h3>`
        } else {
            return `<h3 id="MotorR">Reprovado</h3>`
        }
    }
}
function statusfarol() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getFarol() === true) {
            return `<h3 class="aproved" id="FarolR">Aprovado</h3>`
        } else {
            return `<h3 id="FarolR">Reprovado</h3>`
        }
    }
}
function statustotal() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getStatusQA() === true) {
            return `<span class="aprovedh2">Aprovado</span>`
        } else {
            return `<span>Reprovado</span>`
        }
    }
}

function render() {
    var div = document.getElementById("secondmainstatus");
    div.innerHTML = "";

    div.innerHTML = `
        <h2>Resultado: ${statustotal()}</h2>
        <div class="results">
            <div class="result-up">
                <div>
                    <label for="PneuR">Pneu:</label>
                    ${statuspneu()}
                </div>
                <div>
                    <label for="PortaR">Porta:</label>
                    ${statusporta()}
                </div>
                <div>
                    <label for="MotorR">Motor:</label>
                    ${statusmotor()}
                </div>
            </div>
            <div class="result-bottom">
                <div>
                    <label for="LatariaR">Lataria:</label>
                    ${statuslataria()}
                </div>
                <div>
                    <label for="InteriorR">Interior:</label>
                    ${statusinterior()}
                </div>
                <div>
                    <label for="FarolR">Farol:</label>
                    ${statusfarol()}
                </div>
            </div>
        </div>
    `;
}

function homePage() {
    (window as any).navigateAPI.homePage();
}

function qualidadePage() {
    (window as any).navigateAPI.qualidadePage();
}

(window as any).homePage = homePage;
(window as any).qualidadePage = qualidadePage;