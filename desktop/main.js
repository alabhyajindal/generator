const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  // Create a new window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  // Load a URL in the newly created window
  mainWindow.loadURL('https://password-alabhya.netlify.app/');
});
