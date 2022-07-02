const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  // Create a new window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    show: false,
  });
  // Load a URL in the newly created window
  mainWindow.loadURL('https://password-alabhya.netlify.app/');

  // Show the application once the webpage has loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Exit',
        accelerator: 'CommandOrControl+Q',
        click() {
          app.quit();
        },
      },
    ],
  },
];
