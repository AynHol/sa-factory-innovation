import { contextBridge, ipcRenderer } from "electron";
import Estoque from "./entity/Estoque";
import Qualidade from "./entity/Qualidade";
import Producao from "./entity/Producao";

contextBridge.exposeInMainWorld("bankAPI", {
    findAll: async () => await ipcRenderer.invoke('findAll'),
    createEstoque: async (estoque: Estoque) => await ipcRenderer.invoke("createEstoque", estoque),
    createUser: async (user: any) => await ipcRenderer.invoke("createUser", user),
    findName: async (cpf: string) => await ipcRenderer.invoke("findName", cpf),
    findByCPF: async (cpf: string) => await ipcRenderer.invoke("findByCPF", cpf),
    findAllVeiculo: async () => await ipcRenderer.invoke('findAllVeiculo'),
    createQualidade: async (qualidade: Qualidade) => await ipcRenderer.invoke("createQualidade", qualidade),
    createProducao: async (producao: Producao) => await ipcRenderer.invoke("createProducao", producao),
    findQualidade: async () => await ipcRenderer.invoke('findQualidade'),
    findQualidadeAll: async () => await ipcRenderer.invoke('findQualidadeAll'),
    findQualidadeTrimestre: async (trimestre: string) => await ipcRenderer.invoke('findQualidadeTrimestre', trimestre),
});

contextBridge.exposeInMainWorld("navigateAPI", {
    homePage: (cpf: string) => ipcRenderer.send("changePageHome", cpf),
    estoquePage: () => ipcRenderer.send("changePageEstoque"),
    estoqueListPage: () => ipcRenderer.send("changePageEstoqueList"),
    producaoPage: () => ipcRenderer.send("changePageProducao"),
    qualidadePage: () => ipcRenderer.send("changePageQA"),
    qualidadeResultPage: () => ipcRenderer.send("changePageQAResult"),
});

contextBridge.exposeInMainWorld("authAPI", {
    hash: async (credentials: any) => await ipcRenderer.invoke("hash_password", credentials)
})