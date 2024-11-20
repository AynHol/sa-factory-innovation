import { contextBridge, ipcRenderer } from "electron";
import Estoque from "./entity/Estoque";

contextBridge.exposeInMainWorld("bankAPI", {
    createEstoque: async (estoque: Estoque) => await ipcRenderer.invoke("createEstoque", estoque),
    createUser: async (user: any) => await ipcRenderer.invoke("createUser", user),
    findByEmail: async (email: string) => await ipcRenderer.invoke("findByEmail", email),
    findByCPF: async (cpf: string) => await ipcRenderer.invoke("findByCPF", cpf),
});

contextBridge.exposeInMainWorld("navigateAPI", {
    homePage: () => ipcRenderer.send("changePageHome"),
    estoquePage: () => ipcRenderer.send("changePageEstoque"),
    estoqueListPage: () => ipcRenderer.send("changePageEstoqueList"),
});

contextBridge.exposeInMainWorld("authAPI", {
    hash: async (credentials: any) => await ipcRenderer.invoke("hash_password", credentials)
})