import { app, BrowserWindow, ipcMain } from "electron";
import User from "./entity/User";
import UserRepository from "./repository/UserRepository";
import { compare, hash} from 'bcrypt';
// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

var mainWindow: BrowserWindow;
const createWindow = (): void => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  // mainWindow.loadURL("http://localhost:3000/login");
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // mainWindow.loadURL("http://Localhost:3000/estoqueLista");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// ipcMain.on("changePage", (_: any, id: string) => {
//   mainWindow.loadURL(DETAILS_WEBPACK_ENTRY + `?id=${id}`);
// });

ipcMain.on("changePageHome", () => {
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
});

ipcMain.handle("createUser", async (_: any, user: any) => {
  const { nome, email, cpf, password } = user;
  const passwordHash = await hash(password, 12)
  const newUser = new User(nome, email, cpf, passwordHash);
  new UserRepository().save(newUser);
});

ipcMain.handle("findByEmail", async (_: any, email: string) => {
  return await new UserRepository().findByEmail(email);
});

ipcMain.handle("findByCPF", async (_: any, cpf: string) => {
  return await new UserRepository().findByCPF(cpf);
});

ipcMain.handle('hash_password', async (_: any, credentials: any) => {
  const { password, password_hash } = credentials;
  return await compare(password, password_hash);
});

ipcMain.on("changePageEstoque", (_: any, id: string) => {
  mainWindow.loadURL(`http://localhost:3000/estoque?id=${id}`);
});