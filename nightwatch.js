const launchUrl = 'http://localhost:8081'
const seleniumPort = 4444
const seleniumHost = 'localhost'
const silent = true
const screenshotsEnabled = true
const screenshotsPath = './screenshots/'

module.exports = {
  'src_folders': ['.'],
  'output_folder': './reports',
  'custom_commands_path': '',
  'custom_assertions_path': '',

  'test_settings': {

    'chrome34': {
      'launchUrl': launchUrl,
      'seleniumHost': seleniumHost,
      'seleniumPort': seleniumPort,
      'silent': silent,
      'screenshots': {
        'enabled': screenshotsEnabled,
        'path': screenshotsPath
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'version': '34'
      }
    }
  }
}
