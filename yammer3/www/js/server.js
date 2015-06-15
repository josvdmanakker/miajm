var channel = new HydnaChannel('yammer.hydna.net', 'rw');

channel.onopen = function(event) {
    // channel is open and ready to use 
    console.log("Server is open");
};

channel.onerror = function(event) {
    console.log("server error");
    // an error occured when connecting or opening the channel
};

channel.onmessage = function(event) {
    alert(event.data);
};

chan.send("this is a message");