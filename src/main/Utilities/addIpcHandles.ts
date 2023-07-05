import {BrowserWindow, ipcMain, screen} from "electron";
import {CountdownApp} from "../App";
import {sleep} from "./utilities";
import {
  DEFAULT_NDI_ALPHA,
  DEFAULT_NDI_ENABLED,
  DEFAULT_TIMER_ALWAYS_ON_TOP,
  DEFAULT_WINDOW_BOUNDS
} from "../../common/config";

export async function setCountdownWindowPosition(app: CountdownApp) {
  const browserWindow = app.countdownWindowHandler.browserWindow
  const fullscreenOn = app.store.get('window.fullscreenOn', null)
  const selectedScreen = screen.getAllDisplays().find((display) => display.id === fullscreenOn)

  if (browserWindow.fullScreen) {
    browserWindow.setFullScreen(false)
  }
  if (fullscreenOn !== null) {
    await sleep(1000)
    browserWindow.setPosition(selectedScreen.bounds.x + 100, selectedScreen.bounds.y + 100)
    browserWindow.setFullScreen(true)
    return;
  }

  browserWindow.setBounds({
    x: this.store.get('window.x', DEFAULT_WINDOW_BOUNDS.x),
    y: this.store.get('window.y', DEFAULT_WINDOW_BOUNDS.y),
    height: this.store.get('window.height', DEFAULT_WINDOW_BOUNDS.height),
    width: this.store.get('window.width', DEFAULT_WINDOW_BOUNDS.width)
  })
}

export default function addIpcHandles(app: CountdownApp)
{
  ipcMain.handle('get-screens', (event, ...args) => {
    return screen.getAllDisplays()
  })

  ipcMain.on('window-updated', async (event, arg) => {
    await setCountdownWindowPosition(app)
  })

  ipcMain.on('temporary-settings-updated', (event, arg) => {
    const browserWindow = app.countdownWindowHandler.browserWindow
    browserWindow.webContents.send('temporary-settings-updated', arg)
  })

  ipcMain.on('settings-updated', (event, arg) => {
    const browserWindow = app.countdownWindowHandler.browserWindow
    browserWindow.webContents.send('settings-updated')

    browserWindow.setAlwaysOnTop(app.store.get('settings.timerAlwaysOnTop', DEFAULT_TIMER_ALWAYS_ON_TOP))

    if (app.store.get('settings.ndiEnabled', DEFAULT_NDI_ENABLED)) {
      app.ndiManager.start();
    } else {
      app.ndiManager.stop()
    }
    app.ndiManager.alpha = app.store.get('settings.ndiAlpha', DEFAULT_NDI_ALPHA);
  })

  ipcMain.on('send-to-countdown-window', (event, arg) => {
    const browserWindow = app.countdownWindowHandler.browserWindow
    browserWindow.webContents.send('command', arg)
  })

  ipcMain.handle('countdown-bounds', (event, args) => {
    const browserWindow = app.countdownWindowHandler.browserWindow;
    return browserWindow.getBounds();
  })
}