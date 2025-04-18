const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { exec } = require('child_process')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

ipcMain.on('run-clean', () => {
  exec('powershell -ExecutionPolicy Bypass -File ./powerclean.ps1', 
    (error, stdout, stderr) => {
      win.webContents.send('clean-done', {
        success: !error,
        output: stdout || stderr
      })
    }
  )
})

app.whenReady().then(createWindow)