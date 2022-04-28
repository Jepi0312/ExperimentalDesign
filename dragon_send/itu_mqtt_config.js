// --- SETTING UP --------------------------------------
const myBroker = "wss://edp22:JlTwNIbtNIwZk0IA@edp22.cloud.shiftr.io";
const myID = "itu" + parseInt(Math.random() * 10000000, 10); //Construct a random unique ID
const client = mqtt.connect(myBroker, { clientId: myID });
