import Settings from '../Settings';

test('Testing settings class getSettings() function', () => {
  const settings = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  const recieved = settings.getSettings();
  expect(expected).toEqual(recieved);
});

test('Testing settings class setSettings() function with theme setting', () => {
  const settings = new Settings();
  const expected = new Map([
    ['theme', 'gray'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  const recieved = settings.setSettings('theme', 'gray');
  expect(expected).toEqual(recieved);
});

test('Testing settings class setSettings() function with difficulty setting', () => {
  const settings = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'nightmare'],
  ]);
  const recieved = settings.setSettings('difficulty', 'nightmare');
  expect(expected).toEqual(recieved);
});

test('Testing settings class setSettings() function with music setting', () => {
  const settings = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]);
  const recieved = settings.setSettings('music', 'rock');
  expect(expected).toEqual(recieved);
});

test('Testing settings class setSettings() function with error', () => {
  expect(() => {
    const settings = new Settings();
    settings.setSettings('testing', 'error');
  }).toThrow(new Error('This setting is not available'));
});
