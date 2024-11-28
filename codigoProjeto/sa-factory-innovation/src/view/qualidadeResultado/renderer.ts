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
            qualidades[i].id,
            qualidades[i].status,
        );
        qualidadelist.push(qualidade);
    }
    render();
}


function statuspneu() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getPneu() === true) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }
}
function statuslataria() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getLataria() === true) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }
}
function statusporta() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getPorta() === true) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }
}
function statusinterior() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getIntereior() === true) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }
}
function statusmotor() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getMotor() === true) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }
}
function statusfarol() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getFarol() === true) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }
}
function statusstatus() {
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getStatusQA() === true) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }
}

function render() {
    var div = document.getElementById("secondmainstatus");
    div.innerHTML = "";

    div.innerHTML = `
        <h2>Resultado: <span>${statusstatus()}</span></h2>
        <div class="results">
            <div class="result-up">
                <div>
                    <label for="PneuR">Pneu:</label>
                    <h3 id="PneuR">${statuspneu()}</h3>
                </div>
                <div>
                    <label for="PortaR">Porta:</label>
                    <h3 id="PortaR">${statusporta()}</h3>
                </div>
                <div>
                    <label for="MotorR">Motor:</label>
                    <h3 id="MotorR">${statusmotor()}</h3>
                </div>
            </div>
            <div class="result-bottom">
                <div>
                    <label for="LatariaR">Lataria:</label>
                    <h3 id="LatariaR">${statuslataria()}</h3>
                </div>
                <div>
                    <label for="InteriorR">Interior:</label>
                    <h3 id="InteriorR">${statusinterior()}</h3>
                </div>
                <div>
                    <label for="FarolR">Farol:</label>
                    <h3 id="FarolR">${statusfarol()}</h3>
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