import { contextBridge, ipcRenderer } from "electron";
import Estoque from "./entity/Estoque";

contextBridge.exposeInMainWorld("bankAPI", {
    findAll: async () => await ipcRenderer.invoke('findAll'),
    createEstoque: async (estoque: Estoque) => await ipcRenderer.invoke("createEstoque", estoque),
    createUser: async (user: any) => await ipcRenderer.invoke("createUser", user),
    findName: async (cpf: string) => await ipcRenderer.invoke("findName", cpf),
    findByCPF: async (cpf: string) => await ipcRenderer.invoke("findByCPF", cpf),
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