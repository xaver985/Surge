var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 16796852900000;
body = JSON.stringify(obj);
$done({body});