cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.voicekick.cordova.microphone/www/ios/microphone.js",
        "id": "com.voicekick.cordova.microphone.microphone",
        "clobbers": [
            "navigator.microphone"
        ]
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/app/window.js",
        "id": "org.chromium.bootstrap.app.window",
        "clobbers": [
            "chrome.app.window"
        ]
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/mobile.js",
        "id": "org.chromium.bootstrap.mobile.impl",
        "clobbers": [
            "chrome.mobile.impl"
        ],
        "runs": true
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/helpers/ChromeExtensionURLs.ios.js",
        "id": "org.chromium.bootstrap.helpers.ChromeExtensionURLs"
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/org.chromium.common/events.js",
        "id": "org.chromium.common.events",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "file": "plugins/org.chromium.common/errors.js",
        "id": "org.chromium.common.errors"
    },
    {
        "file": "plugins/org.chromium.common/stubs.js",
        "id": "org.chromium.common.stubs"
    },
    {
        "file": "plugins/org.chromium.common/helpers.js",
        "id": "org.chromium.common.helpers"
    },
    {
        "file": "plugins/org.chromium.storage/storage.js",
        "id": "org.chromium.storage.Storage",
        "clobbers": [
            "chrome.storage"
        ]
    },
    {
        "file": "plugins/org.chromium.runtime/api/app/runtime.js",
        "id": "org.chromium.runtime.app.runtime",
        "clobbers": [
            "chrome.app.runtime"
        ]
    },
    {
        "file": "plugins/org.chromium.runtime/api/runtime.js",
        "id": "org.chromium.runtime.runtime",
        "clobbers": [
            "chrome.runtime"
        ]
    },
    {
        "file": "plugins/org.chromium.runtime/lib/CryptoJS/sha256.js",
        "id": "org.chromium.runtime.CryptoJS-sha256"
    },
    {
        "file": "plugins/org.chromium.runtime/lib/CryptoJS/enc-base64-min.js",
        "id": "org.chromium.runtime.CryptoJS-enc-base64-min"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.1-dev",
    "com.voicekick.cordova.microphone": "1.2.1",
    "org.chromium.bootstrap": "2.0.4",
    "com.ionic.keyboard": "1.0.4",
    "org.apache.cordova.vibration": "0.3.13",
    "org.apache.cordova.geolocation": "0.3.12",
    "org.chromium.common": "1.0.6",
    "org.chromium.storage": "1.0.3",
    "org.chromium.runtime": "1.1.0"
}
// BOTTOM OF METADATA
});