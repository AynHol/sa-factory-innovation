import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("bankAPI", {
    createUser: async (user: any) => await ipcRenderer.invoke("createUser", user),
    findByEmail: async (email: string) => await ipcRenderer.invoke("findByEmail", email),
    findByCPF: async (cpf: string) => await ipcRenderer.invoke("findByCPF", cpf),
});

contextBridge.exposeInMainWorld("navigateAPI", {
    homePage: () => ipcRenderer.send("changePageHome"),
    estoquePage: (id: string) => ipcRenderer.send("changePageEstoque", id),

});

contextBridge.exposeInMainWorld("authAPI", {
    hash: async (credentials: any) => await ipcRenderer.invoke("hash_password", credentials)
})