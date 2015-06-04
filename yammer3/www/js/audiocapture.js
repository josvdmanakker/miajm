// Record audio
//
var src = "myrecording.amr";
var timeInSecs;
var ticker;

function tick() {
    var secs = timeInSecs;
    if (secs>0) {
        timeInSecs--;
    }
    else {
                clearInterval(ticker); // stop counting at zero
            // startTimer(60);  // remove forward slashes in front of startTimer to repeat if required
        }
    document.getElementById("buttonTalk").innerHTML = secs;
}

function startTimer(secs){
     timeInSecs = parseInt(secs)-1;
    ticker = setInterval("tick()",1000);   // every second
}

var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.message);
        },

        function(status){
            console.log('status changed: ', status);
        });

function recordAudio() {
    document.getElementById("buttonTalk").innerHTML = "10";
    startTimer(10);
    // Record audio
    console.log("gfjdlksag");
    mediaRec.startRecord();
    console.log("ewrwerwe");
    // stoprecording after 10 seconds
    setTimeout(function() {
        console.log("aaaaaaaa");
        mediaRec.stopRecord();
        document.getElementById("btUpload").style.display = "block";
          // 60 seconds
      }, 10000);
    
}

function playAudio() {
    // Play the audio file at url
    var my_media = new Media(src,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
            console.log(err);
        }
        );
    // Play audio
    console.log(my_media);
    my_media.play();
    console.log(my_media);
}








    // function uploadAudio() {
    //     var my_media = new Media(src,
    //     // success callback
    //     function () {
    //         console.log("uploadAudio():Audio Success");
    //     },
    //     // error callback
    //     function (err) {
    //         console.log("uploadAudio():Audio Error: " + err);
    //         console.log(err);
    //     }
    // );
    //     var options = new FileUploadOptions();
    //     options.fileKey="file";
    //     options.fileName="AUDIO";
    //     options.mimeType="audio/AMR";

    //     var params = new Object();
    //     params.value1 = "test";
    //     params.value2 = "param";

    //     options.params = params;
    //     options.chunkedMode = false;

    //     var ft = new FileTransfer();
    //     ft.upload('AUDIO', "http://athena.fhict.nl/users/i260866/db/uploadapptest/upload.php", win, fail, options);
    // }

    // function win(r) {
    //     console.log("Code = " + r.responseCode);
    //     console.log("Response = " + r.response);
    //     console.log("Sent = " + r.bytesSent);
    //     alert(r.response);
    // }

    // function fail(error) {
    //     console.log("An error has occurred: Code = " + error.code);
    //     console.log(error);
    // }
