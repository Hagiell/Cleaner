const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  runClean: () => ipcRenderer.send('run-clean'),
  onCleanDone: (callback) => ipcRenderer.on('clean-done', callback)
})