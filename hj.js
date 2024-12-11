/**************************************
#!name = 画镜
#!desc = 测试试看
#!author = 小白
#!date = 2024-12-11


[Script]

http-request https://api.iamok.in/api/Support/GetRuntimeData requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/hj.js, tag=测试

[MITM]

hostname = api.iamok.in
**************************************/

const body =JSON.parse($request.body)
body.token = 'MMJ2tC/zmghIHZBPB7qS6NWTYBrLQOoSNAUM/3PAeHomGJYutJ9Vj1KSmg+eRB8H7V2x17+aWSUo8Fqi53u/RvqJSB3TpoUIJXVTDDmJoDr0ANH4Hvj1z+QDUmYGyXjWLk+PNLiW7Nf8OEzwYOWkuSNonr6ZA/2mk2pxxa3N0sOZKMVNURXNYzQYXiy49/VMZNO0fkdpZMCA26ELLJvpyw==
console.log('测试无限试用')
$done({ body: JSON.stringify(body) })
