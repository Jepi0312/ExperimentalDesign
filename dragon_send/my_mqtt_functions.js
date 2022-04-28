
const myTopic = "hotpot";  //YOU MUST CHANGE THIS!


// --- CONNECTING--------------------------------------
client.on('connect', function () {
  console.log('connected!');
  client.subscribe(myTopic);
});



// --- SEND MESSAGE --------------------------------------
function sendMessage(msg) {
  let JSONmsg = JSON.stringify(msg); //JSON.stringify turns any datatype into String/text
  client.publish(myTopic, JSONmsg);
}


// --- RECEIVING MESSAGE --------------------------------------
// client.on('message', function (topic, message) {
//   let msg = JSON.parse(message); //Decode JSON string
//   console.log("msg is " + msg);

  // do your thing here when a message arrives--------
//   sendColor = msg[1];
// });
