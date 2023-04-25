/* eslint-disable no-mixed-operators */
export default class Settings {
  constructor() {
    this.settings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userThemeSettings = ['light', 'gray'];
    this.userMusicSettings = ['pop', 'rock', 'chillout', 'off'];
    this.userDifficultySettings = ['normal', 'hard', 'nightmare'];
  }

  setSettings(settingName, settingValue) {
    if (settingName === 'theme' && this.userThemeSettings.includes(settingValue) || settingName === 'music' && this.userMusicSettings.includes(settingValue) || settingName === 'difficulty' && this.userDifficultySettings.includes(settingValue)) {
      this.settings.delete(settingName);
      this.settings.set(settingName, settingValue);
      return this.settings;
    }
    throw new Error('This setting is not available');
  }

  getSettings() {
    return this.settings;
  }
}
