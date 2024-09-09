/**************************************

#!name = PIKPAK
#!desc = 随机设备码和随机IP
#!author = 小白
#!date = 2024-09-09

[Script]
# PIKPAK网盘随机设备码和随机IP
http-request ^https?:\/\/.*\.mypikpak\.com\/.* script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/pkhd.js

[Mitm]
hostname = *.mypikpak.com

**************************************/

const $ = new Env('PIKPAK')
const Ip = generateRandomIPv4();
const deviceId = device_ID().replace(/-/g, '')
const Headers = $request.headers
Headers['x-device-id'] = deviceId
Headers['x-forwarded-for'] = Ip
$.log('随机IP', Ip)
$.log('随机device-id', deviceId)
$.done({ headers : Headers})

function generateRandomIPv4() {
  return Array.from({length: 4}, () => Math.floor(Math.random() * 256)).join('.');
}
function device_ID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
function Env(name, opts) {
}
