var jsProtection = 'jsjiami.com.v7';

function decrypt(inputStr, key) {
    const charMapping = initCharMapping();
    return decrypt = function(encryptedStr, key) {
        encryptedStr = encryptedStr - 0x1b9;
        let decryptedChar = charMapping[encryptedStr];
        if (decrypt['cache'] === undefined) {
            var base64Decode = function(encodedStr) {
                const base64Chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let output = '',
                    tempStr = '';
                for (let i = 0x0, char1, char2, char3 = 0x0; char2 = encodedStr['charAt'](char3++); ~char2 && (char1 = i % 0x4 ? char1 * 0x40 + char2 : char2, i++ % 0x4) ? output += String['fromCharCode'](0xff & char1 >> (-0x2 * i & 0x6)) : 0x0) {
                    char2 = base64Chars['indexOf'](char2);
                }
                for (let j = 0x0, length = output['length']; j < length; j++) {
                    tempStr += '%' + ('00' + output['charCodeAt'](j)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(tempStr);
            };
            const decryptStr = function(encryptedStr, key) {
                let s = [],
                    j = 0x0,
                    temp, resultStr = '';
                encryptedStr = base64Decode(encryptedStr);
                for (let i = 0x0; i < 0x100; i++) {
                    s[i] = i;
                }
                for (let i = 0x0; i < 0x100; i++) {
                    j = (j + s[i] + key['charCodeAt'](i % key['length'])) % 0x100;
                    temp = s[i];
                    s[i] = s[j];
                    s[j] = temp;
                }
                i = 0x0, j = 0x0;
                for (let k = 0x0; k < encryptedStr['length']; k++) {
                    i = (i + 0x1) % 0x100;
                    j = (j + s[i]) % 0x100;
                    temp = s[i];
                    s[i] = s[j];
                    s[j] = temp;
                    resultStr += String['fromCharCode'](encryptedStr['charCodeAt'](k) ^ s[(s[i] + s[j]) % 0x100]);
                }
                return resultStr;
            };
            decrypt['cache'] = decryptStr, inputStr = arguments, decrypt['initialized'] = true;
        }
        const initialIndex = charMapping[0x0],
            mappedIndex = encryptedStr + initialIndex,
            cachedValue = inputStr[mappedIndex];
        return !cachedValue ? (decrypt['initialized'] === undefined && (decrypt['initialized'] = true), decryptedChar = decrypt['cache'](decryptedChar, key), inputStr[mappedIndex] = decryptedChar) : decryptedChar = cachedValue, decryptedChar;
    }, decrypt(inputStr, key);
}

const processRequest = decrypt;

(function(seed, length, charMappingFunc, shiftValue, isDecoded, isBase64, isModified) {
    return seed = seed >> 0x8, isBase64 = 'hs', isModified = 'hs',
        function(initFunc, numOfRounds, reverseFunc, joinFunc, splitFunc) {
            const decryptChar = decrypt;
            joinFunc = 'tfi', isBase64 = joinFunc + isBase64, splitFunc = 'up', isModified += splitFunc, isBase64 = reverseFunc(isBase64), isModified = reverseFunc(isModified), reverseFunc = 0x0;
            const randomCharGen = initFunc();
            while (true && --shiftValue + numOfRounds) {
                try {
                    joinFunc = parseInt(decryptChar(0x1c0, 'Htfj')) / 0x1 + parseInt(decryptChar(0x1d4, 'LNge')) / 0x2 + -parseInt(decryptChar(0x1c9, 'ojqh')) / 0x3 * (-parseInt(decryptChar(0x1de, 'N0EL')) / 0x4) + parseInt(decryptChar(0x1dc, 'AJPX')) / 0x5 * (-parseInt(decryptChar(0x1df, 'N(%5')) / 0x6) + parseInt(decryptChar(0x1ce, 'Du*&')) / 0x7 + -parseInt(decryptChar(0x1d7, 'N0EL')) / 0x8 * (parseInt(decryptChar(0x1c4, 'xczW')) / 0x9) + -parseInt(decryptChar(0x1d1, 'U]sj')) / 0xa * (parseInt(decryptChar(0x1cd, 'CvPr')) / 0xb);
                } catch (error) {
                    joinFunc = reverseFunc;
                } finally {
                    splitFunc = randomCharGen[isBase64]();
                    if (seed <= shiftValue) reverseFunc ? isDecoded ? joinFunc = splitFunc : isDecoded = splitFunc : reverseFunc = splitFunc;
                    else {
                        if (reverseFunc == isDecoded['replace'](/[ElQMtngAuhdpLqyDGK=]/g, '')) {
                            if (joinFunc === numOfRounds) {
                                randomCharGen['un' + isBase64](splitFunc);
                                break;
                            }
                            randomCharGen[isModified](splitFunc);
                        }
                    }
                }
            }
        }(charMappingFunc, length, function(str, delimiter, reverse, join, split, combine, decode) {
            return delimiter = 'split', str = arguments[0x0], str = str[delimiter](''), reverse = 'reverse', str = str[reverse]('v'), join = 'join', str[join]('');
        });
}(0xca00, 0x6420d, initCharMapping, 0xcc), initCharMapping) && (jsProtection = 0xcc);

const env = new Env(processRequest(0x1b9, '[ml%'));
let requestUrl = $request['url'],
    requestHeaders = $request[processRequest(0x1bd, 't@Xy')];
requestUrl = requestUrl[processRequest(0x1d8, 'xczW')](/\/\/(?!long)[^\.]+\./, processRequest(0x1ba, 'MI2O'))[processRequest(0x1d5, 'R]tn')](/\.m3u8/, processRequest(0x1da, '%D0O'));
if (requestHeaders[processRequest(0x1dd, 'Htfj')]('Referer') || requestHeaders[processRequest(0x1c3, 'CvPr')]('User-Agent'))) try {
    const notifyUrl = env[processRequest(0x1bb, '5Z6)')]('lastUrl');
    if (!notifyUrl || notifyUrl != requestUrl) {
        env[processRequest(0x1cb, 't@Xy')](requestUrl, processRequest(0x1db, 'ojZ#'));
        const playerUrl = processRequest(0x1c8, 'U]sj') + encodeURIComponent(requestUrl),
            mediaPlayerUrl = processRequest(0x1d6, 'L^3i');
        env[processRequest(0x1cc, 'Cdj8')]('Alert', 'Please install Aloha Browser', 'Open Now', {
            'open-url': playerUrl,
            'media-url': mediaPlayerUrl
        });
    }
} catch (error) {
    console[processRequest(0x1ca, 'Pb6A')]('Error', error);
}
env[processRequest(0x1c6, 'ojqh')]({});

function initCharMapping() {
    const charArray = (function() {
        return [jsProtection, 'QLjKsnjqiDaGmiA.utcoMQm.tv7DyGKGdlEhgpDM==', 'W7FcIvCIW5zdmCoT', 'dCksWRz9WQb+W6ZcRCoIWRhcNmoZcq', 'W5fAzCkg', 'qMPffGPUsSkXgmkxBSkj', 'hKhcHmondSkjfw5uW75eugWQW5CJW4RdU3dcLa7cI8kBcgq', 'WOyepCovxx96W6tdGcSjWRu', 'WO3dMN4UWQe', 'WRRdJ8kiWPjkW4bO', 'uZaQ', 'dSozWOr1hCorA18', 'WRfdWRDsCWxdNGBdUwZcG8oCWPi', 'WOJdTSkVduNdJmo5WR
