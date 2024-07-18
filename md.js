/****************************

#!name = # >美队tv（永久会员+去广告）18+
#!desc = 解锁会员
#!author = 小白
#!date = 2024-08-18

[Script]
# >美队tv（永久会员+去广告）18+
http-response ^https?:\/\/api.+.com\/api\/video\/(user/info|banner\?type|config\?field) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/md.js

[Mitm]
hostname = api.*.com
****************************/

function decryptString(encodedString, key) {
    key = 9;
    var decodedString = "";
    var segments = encodedString.split(".");
    for (var i = 0; i < segments.length - 1; i++) {
        decodedString += String.fromCharCode(segments[i] ^ key);
    }
    return decodedString;
}

function executeOperations(inputArray) {
    var operations = {
        push: 32,
        add: 33,
        sub: 34,
        mul: 35,
        div: 36,
        pop: 37,
        xor: 38
    };
    var stack = [];
    var stackPointer = -1;
    for (var i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            case operations.push:
                stackPointer++;
                stack.push(inputArray[++i]);
                break;
            case operations.add:
                var op1 = stack[stackPointer - 1];
                var op2 = stack[stackPointer];
                var value = op1 + op2;
                stack.push(value);
                stackPointer++;
                break;
            case operations.sub:
                var op1 = stack[stackPointer - 1];
                var op2 = stack[stackPointer];
                var value = op1 - op2;
                stack.push(value);
                stackPointer++;
                break;
            case operations.mul:
                var op1 = stack[stackPointer - 1];
                var op2 = stack[stackPointer];
                var value = op1 * op2;
                stack.push(value);
                stackPointer++;
                break;
            case operations.div:
                var op1 = stack[stackPointer - 1];
                var op2 = stack[stackPointer];
                var value = op1 / op2;
                stack.push(value);
                stackPointer++;
                break;
            case operations.xor:
                var op1 = stack[stackPointer - 1];
                var op2 = stack[stackPointer];
                var value = op1 ^ op2;
                stack.push(value);
                stackPointer++;
                break;
            case operations.pop:
                return stack[stackPointer];
        }
    }
}

var visitors = {
    File(node, scope) {
        executeAST(node['program'], scope);
    },
    Program(program, scope) {
        for (var i = 0; i < program['body'].length; i++) {
            executeAST(program['body'][i], scope);
        }
    },
    ExpressionStatement(node, scope) {
        return executeAST(node['expression'], scope);
    },
    CallExpression(node, scope) {
        var func = executeAST(node['callee'], scope);
        var args = node['arguments'].map(function(arg) {
            return executeAST(arg, scope);
        });
        var value;
        if (node['callee']['type'] === decryptString('MemberExpression')) {
            value = executeAST(node['callee']['object'], scope);
        }
        return func.apply(value, args);
    },
    MemberExpression(node, scope) {
        var obj = executeAST(node['object'], scope);
        var name = node['property']['name'];
        return obj[name];
    },
    Identifier(node, scope) {
        return scope[node['name']];
    },
    StringLiteral(node) {
        return node['value'];
    },
    NumericLiteral(node) {
        return node['value'];
    }
};

function executeAST(node, scope) {
    var operations = "0|1|2".split(decryptString('117.'));
    var currentIndex = 0;
    while (true) {
        switch (+operations[currentIndex++]) {
            case 0:
                var evaluateNode = visitors[node['type']];
                continue;
            case 1:
                if (!evaluateNode) {
                    throw new Error(decryptString('92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51.'), node['type']);
                }
                continue;
            case 2:
                return evaluateNode(node, scope);
                continue;
        }
        break;
    }
}

if ($request['url']['includes'](decryptString("ofni/resu/oediv/ipa/")['split']("").reverse().join(""))) {
    var encryptedValue;
    let body = JSON.parse($response['body']);
    encryptedValue = executeOperations([32, 291718, 32, 291718, 38, 37]) + executeOperations([32, 569275, 32, 569266, 38, 37]);
    Object.assign(body['data'], {
        level: 5,
        nickname: "小白解锁",
        agent_mobile: "小白解锁",
        agent_url: "小白解锁",
        is_end: 1,
        end_time: "2099-12-01"
    });
    $done({
        body: JSON.stringify(body)
    });
} else if ($request['url']['includes'](decryptString("epyt?rennab/oediv/ipa/")['split']("").reverse().join(""))) {
    let body = JSON.parse($response['body']);
    Object.assign(body, {
        data: JSON.parse("}{".split("").reverse().join(""))
    });
    $done({
        body: JSON.stringify(body)
    });
} else if ($request['url']['includes'](decryptString("dleif?gifnoc/oediv/ipa/")['split']("").reverse().join(""))) {
    let body = JSON.parse($response['body']);
    Object.assign(body['data'], {
        value: "小白解锁"
    });
    $done({
        body: JSON.stringify(body)
    });
}
