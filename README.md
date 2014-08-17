## Installation

To use this project for development, first clone the repo from GitHub, then run:

```bash
cd mbgl_FFOS/
sudo npm install -g cordova ionic gulp
npm install
gulp install
cordova platform add firefoxos
ionic build firefoxos
```

## Running

Testing the app on my desktop can be done using the [app manager](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager), which can be installed from
https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/
If you want to run on a device, also install the ADB helper.


In `about:app-manager`, select "Add Packaged App" and choose `platforms/firefoxos/www/` as app location.
To run the app in the simulator, choose "Run Simulator". Otherwise connect to your FFOS device, which needs to have ADB debugging enabled.

Having a running simulator or connected device, next to the "Update" button you will find a "Debug" button, which launches the app in debug mode.
