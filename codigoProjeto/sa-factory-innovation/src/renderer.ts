import "./reset.css";
import "./index.css";
import * as echarts from "echarts";
import Qualidade from "./entity/Qualidade";

var qualidadelist: Qualidade[] = [];

window.onload = async () => {
    const qualidades = await (window as any).bankAPI.findQualidadeAll();
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
            qualidades[i].id
        );
        qualidadelist.push(qualidade);
    }
    desenharGrafico();
    desenharGraficoLinha();
    desenharGraficoPizza();
};

function QAqtdm() {
    var qtdminus = 0;
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getPneu() === false) {
            qtdminus += 1;
        }
        if (qualidadelist[i].getLataria() === false) {
            qtdminus += 1;
        }
        if (qualidadelist[i].getPorta() === false) {
            qtdminus += 1;
        }
        if (qualidadelist[i].getIntereior() === false) {
            qtdminus += 1;
        }
        if (qualidadelist[i].getMotor() === false) {
            qtdminus += 1;
        }
        if (qualidadelist[i].getFarol() === false) {
            qtdminus += 1;
        }
    }
    return qtdminus;
}

function QAqtdp() {
    var qtdplus = 0;
    for (var i = 0; i < qualidadelist.length; i++) {
        if (qualidadelist[i].getPneu() === true) {
            qtdplus += 1;
        }
        if (qualidadelist[i].getLataria() === true) {
            qtdplus += 1;
        }
        if (qualidadelist[i].getPorta() === true) {
            qtdplus += 1;
        }
        if (qualidadelist[i].getIntereior() === true) {
            qtdplus += 1;
        }
        if (qualidadelist[i].getMotor() === true) {
            qtdplus += 1;
        }
        if (qualidadelist[i].getFarol() === true) {
            qtdplus += 1;
        }
    }
    return qtdplus;
}

function QAqtdTp() {
    var qtdplust = 0;

        for (var i = 0; i < qualidadelist.length; i++) {
            if (qualidadelist[i].getTrimestre() === 'Primeiro') {
                qtdplust += 1;
            }
            if (qualidadelist[i].getLataria() === true  && qualidadelist[i].getTrimestre() === 'Primeiro') {
                qtdplust += 1;
            }
            if (qualidadelist[i].getPorta() === true  && qualidadelist[i].getTrimestre() === 'Primeiro') {
                qtdplust += 1;
            }
            if (qualidadelist[i].getIntereior() === true  && qualidadelist[i].getTrimestre() === 'Primeiro') {
                qtdplust += 1;
            }
            if (qualidadelist[i].getMotor() === true  && qualidadelist[i].getTrimestre() === 'Primeiro') {
                qtdplust += 1;
            }
            if (qualidadelist[i].getFarol() === true  && qualidadelist[i].getTrimestre() === 'Primeiro') {
                qtdplust += 1;
            }
        } return qtdplust; 
}

function desenharGraficoLinha() {
    const teste = document.getElementById("linha") as HTMLDivElement;
    const chart = echarts.init(teste);
    const option = {
        title: { text: "Veículos Produzidos", x: "center" },
        xAxis: { data: ["2020", "2021", "2022", "2023", "2024"] },
        yAxis: { type: "value" },
        tooltip: { trigger: "item", formatter: "{b}: {c}" },
        series: [
            {
                type: "line",
                data: [100, 354, 234, 70, 524],
            },
        ],
    };
    chart.setOption(option);
}

function desenharGrafico() {
    const teste = document.getElementById("barra") as HTMLDivElement;
    const chart = echarts.init(teste);
    const option = {
        title: {
            text: "Controle de Qualidade",
            subtext: "Por Trimestre",
            x: "center",
        },
        xAxis: {
            data: ["Primeiro", "Segundo", "Terceiro", "Quarto"],
        },
        yAxis: {
            type: "value",
        },
        tooltip: { trigger: "item", formatter: "{a} <br/>{b}: {c}" },
        legend: {
            orient: "horizontal",
            left: "left",
            data: ["Aprovado", "Reprovado"],
        },
        series: [
            {
                name: "Aprovado",
                type: "bar",
                color: ["#3ba94c"],
                data: [QAqtdTp(), 20, 30, 40],
            },
            {
                name: "Reprovado",
                type: "bar",
                color: ["#eb2a23"],
                data: [15, 15, 23, 43],
            },
        ],
    };
    chart.setOption(option);
}

function desenharGraficoPizza() {
    const teste = document.getElementById("pizza") as HTMLDivElement;
    const chart = echarts.init(teste);
    const option = {
        title: { text: "Controle de Qualidade", subtext: "Total", x: "center" },
        tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
        legend: {
            orient: "vertical",
            left: "left",
            data: ["Aprovado", "Reprovado"],
        },
        series: [
            {
                type: "pie", // Tipo de gráfico de pizza
                radius: ["0%", "70%"], // Donut (com buraco no meio)
                avoidLabelOverlap: false,
                label: { show: false, position: "center" },
                labelLine: { show: false },
                color: ["#3ba94c", "#eb2a23"],
                data: [
                    { value: QAqtdp(), name: "Aprovado" },
                    { value: QAqtdm(), name: "Reprovado" },
                ],
            },
        ],
    };
    chart.setOption(option);
}

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
