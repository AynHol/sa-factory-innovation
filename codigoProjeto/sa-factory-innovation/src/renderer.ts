import "./reset.css";
import "./index.css";
import * as echarts from 'echarts';

window.onload = async () => {
    // const cpf = new URLSearchParams(window.location.search).get("cpf");
    // const acNameget = await (window as any).bankAPI.findName(cpf)
    // var acName = document.getElementById("accountName");
    // acName.innerHTML = `${acNameget}`
    desenharGrafico();
    desenharGraficoLinha();
    desenharGraficoPizza();
}

function desenharGraficoLinha(){
    const teste = document.getElementById("linha") as HTMLDivElement
    const chart = echarts.init(teste);
    const option = {
        title: { text: 'Veículos Produzidos', x: 'center'},
        xAxis: { data: ['2020', '2021', '2022', '2023', '2024'] },
        yAxis: { type: 'value' },
        tooltip: { trigger: 'item', formatter: '{b}: {c}' },
        series: [{
            type: 'line',
            data: [100, 354, 234, 70, 524]
        }]
    };
    chart.setOption(option);
}
function desenharGrafico(){
    const teste = document.getElementById("barra") as HTMLDivElement
    const chart = echarts.init(teste);
    const option = {
        title: { text: 'Controle de Qualidade', subtext: 'Por Ano', x: 'center' },
        xAxis: { 
            data: ['2020', '2021', '2022', '2023'] 
        },
        yAxis: { 
            type: 'value' 
        },
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c}' },
        legend: { orient: 'horizontal', left: 'left', data: ['Aprovado', 'Reprovado'] },
        series: [{
            name: 'Aprovado',
            type: 'bar',
            color: ['#3ba94c'],
            data: [10, 20, 30, 40]
        },{
            name: 'Reprovado',
            type: 'bar',
            color: ['#eb2a23'],
            data: [15, 15, 23, 43]
        }
        ]   
    };
    chart.setOption(option);
}
function desenharGraficoPizza() {
    const teste = document.getElementById("pizza") as HTMLDivElement;
    const chart = echarts.init(teste);
    const option = {
        title: { text: 'Controle de Qualidade', subtext: 'Total', x: 'center' },
        tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', data: ['Aprovado', 'Reprovado'] },
        series: [{
            type: 'pie', // Tipo de gráfico de pizza
            radius: ['0%', '70%'], // Donut (com buraco no meio)
            avoidLabelOverlap: false,
            label: { show: false, position: 'center' },
            labelLine: { show: false },
            color: ['#3ba94c', '#eb2a23'],
            data: [
                { value: 335, name: 'Aprovado' },
                { value: 234, name: 'Reprovado' },
            ]
        }]
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
