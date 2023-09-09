import BrowserWinHandler from './Utilities/BrowserWinHandler'
import { isDev } from './Utilities/dev'
import BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;
import {APP_VERSION} from "../version";

export default function createMainWindow (options: BrowserWindowConstructorOptions = {
  height: 590,
  width: 920,
  minWidth: 920,
  minHeight: 590,
  title: `Countdown Settings - Countdown v${APP_VERSION}`
}) {
  const winHandler = new BrowserWinHandler(options)

  winHandler.onCreated(async () => {
    await winHandler.loadPage('/control/main')
    // Or load custom url
    // _browserWindow.loadURL('https://google.com')
    if (isDev) {
      winHandler.browserWindow.webContents.openDevTools();
    }
  })

  return winHandler
}
