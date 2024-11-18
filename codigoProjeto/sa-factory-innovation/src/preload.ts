import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("bankAPI", {
    createUser: async (user: any) => await ipcRenderer.invoke("createUser", user),
    findByEmail: async (email: string) => await ipcRenderer.invoke("FindByEmail", email),
    findByCPF: async (cpf: string) => await ipcRenderer.invoke("FindByCPF", cpf),
});

contextBridge.exposeInMainWorld("navigateAPI", {
    detailsPage: (id: string) => ipcRenderer.send("changePage", id),
    homePage: () => ipcRenderer.send("changePageHome"),
});

contextBridge.exposeInMainWorld("authAPI", {
    hash: async (credentials: any) => await ipcRenderer.invoke("hash_password", credentials)
})