const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  // This creates a new window
  mainWindow = new BrowserWindow({});
  mainWindow.loadFile('mainWindow.html');
});
