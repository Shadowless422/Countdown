const DEFAULT_BACKGROUND_COLOR = '#000000';
const DEFAULT_TEXT_COLOR = '#ffffff';
const DEFAULT_TIMER_FINISHED_TEXT_COLOR = '#ff0000';
const DEFAULT_CLOCK_COLOR = '#ffffff';
const DEFAULT_CLOCK_TEXT_COLOR = '#ffffff';

const DEFAULT_PRESETS = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

const DEFAULT_WEBSERVER_ENABLED = true;
const DEFAULT_WEBSERVER_PORT = 6565;

const DEFAULT_STOP_TIMER_AT_ZERO = false;
const DEFAULT_SHOW_HOURS = false;
const DEFAULT_PULSE_AT_ZERO = false;

const DEFAULT_WINDOW_BOUNDS = {
  fullscreenOn: null,
  x: 100,
  y: 100,
  width: 1280,
  height: 720
}

const DEFAULT_STORE = {
  defaults: {
    settings: {
      backgroundColor: DEFAULT_BACKGROUND_COLOR,
      textColor: DEFAULT_TEXT_COLOR,
      timerFinishedTextColor: DEFAULT_TIMER_FINISHED_TEXT_COLOR,
      clockColor: DEFAULT_CLOCK_COLOR,
      clockTextColor: DEFAULT_CLOCK_TEXT_COLOR,
      presets: DEFAULT_PRESETS,
      stopTimerAtZero: DEFAULT_STOP_TIMER_AT_ZERO,
      showHours: DEFAULT_SHOW_HOURS,
      pulseAtZero: DEFAULT_PULSE_AT_ZERO,
      webServerEnabled: DEFAULT_WEBSERVER_ENABLED,
      webServerPort: DEFAULT_WEBSERVER_PORT
    },
    window: DEFAULT_WINDOW_BOUNDS,
  }
}

export {
  DEFAULT_STORE,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_TEXT_COLOR,
  DEFAULT_TIMER_FINISHED_TEXT_COLOR,
  DEFAULT_CLOCK_COLOR,
  DEFAULT_CLOCK_TEXT_COLOR,
  DEFAULT_WEBSERVER_ENABLED,
  DEFAULT_WEBSERVER_PORT,
  DEFAULT_PRESETS,
  DEFAULT_STOP_TIMER_AT_ZERO,
  DEFAULT_PULSE_AT_ZERO,
  DEFAULT_SHOW_HOURS,
  DEFAULT_WINDOW_BOUNDS,
}
