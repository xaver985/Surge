const url = $request.url;
const limitpath = "https://m-api.nexon.com/sdk/enterToy.nx";
let body = $response.body;
let obj = JSON.parse(body);
if(url == limitpath){
 if(obj.result.service.title.indexOf("Global")> -1){
  obj['errorCode']=0
 }
 else if(obj.result.service.title.indexOf("Japan")>-1){
  obj['errorCode']=0
 }
 //console.log(body)
}
body = JSON.stringify(obj)
$done(body)