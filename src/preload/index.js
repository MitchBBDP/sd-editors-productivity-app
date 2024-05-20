import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import fs from 'fs-extra'
import path from 'path'
import { Dropbox } from 'dropbox'

const dbPath = path.join(__dirname, '../../db.json')

const dbx = new Dropbox({
  accessToken: 'G3hNVKeqYx4AAAAAAAAAAa_r9FWAia1xAcFbfkdNUE94P2RVuEnaYpnBmLVO4Me0',
  clientId: 't3nq96ieypjy53b',
  clientSecret: '6eiwa6ypphia0hq',
  memberId: 'dbmid:AACKJTuYs-_SDsdiEFlFDSny9tRJEH8Y3kw',
})

// Custom APIs for renderer
const api = {
  selectFolder: () => ipcRenderer.invoke('select-folder'),
  selectTemplate: () => ipcRenderer.invoke('select-template'),
  savePath: async (attribute, itemPath) => {
    try {
      // Read the existing db.json file
      let db = await fs.readJson(dbPath)
      
      // Update the specific attribute with the folder path
      db[attribute] = itemPath
      
      // Write the updated JSON back to the file
      await fs.writeJson(dbPath, db, { spaces: 2 })
    } catch (error) {
      alert('Failed to save folder path:', error)
    }
  },
  createFolders: async (folderName) => {
    try {
      let db = await fs.readJson(dbPath)
      const newDropboxFolder = path.join(db.dropboxFolder, folderName)
      const newNasFolder = path.join(db.nasFolder, folderName)
  
      const dropboxExists = await fs.pathExists(newDropboxFolder)
      const nasExists = await fs.pathExists(newNasFolder)
  
      if (!dropboxExists && !nasExists) {
        await fs.mkdir(newDropboxFolder)
        await fs.mkdir(newNasFolder)
        
        const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
          path: `/${newDropboxFolder}`,
          settings: {
            requested_visibility: 'public',
          },
        })
        return {
          success: true,
          message: 'Folder created in both locations',
          sharedLink: sharedLink.result.url,
        }
      } else if (dropboxExists && nasExists) {
        return { success: false, message: 'Folder already exists in both locations' }
      } else if (dropboxExists) {
        return { success: false, message: 'Folder already exists in Dropbox folder' }
      } else if (nasExists) {
        return { success: false, message: 'Folder already exists in NAS folder' }
      }
    } catch (error) {
      console.error('Error checking or creating folders:', error)
      return { success: false, message: `Error creating folders: ${error.message}` }
    }
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
