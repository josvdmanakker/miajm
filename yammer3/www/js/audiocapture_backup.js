// Record audio
//
var src = "myrecording.amr";

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
    
    
    // Record audio
    mediaRec.startRecord();
    // stoprecording after 10 seconds
    setTimeout(function() {
        mediaRec.stopRecord();
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





// // Wait for device API libraries to load
//     //
//     document.addEventListener("deviceready", onDeviceReady, false);

//     // Record audio
//     //
//     function recordAudio() {
//         var src = "myrecording.amr";
//         var mediaRec = new Media(src, onSuccess, onError);

//         // Record audio
//         mediaRec.startRecord();

//         // Stop recording after 10 sec
//         var recTime = 0;
//         var recInterval = setInterval(function() {
//             recTime = recTime + 1;
//             setAudioPosition(recTime + " sec");
//             if (recTime >= 10) {
//                 clearInterval(recInterval);
//                 mediaRec.stopRecord();
//             }
//         }, 1000);
//     }

//     // device APIs are available
//     //
//     function onDeviceReady() {
//         recordAudio();
//     }

//     // onSuccess Callback
//     //
//     function onSuccess() {
//         console.log("recordAudio():Audio Success");

//     }

//     // onError Callback
//     //
//     function onError(error) {
//         alert('code: '    + error.code    + '\n' +
//           'message: ' + error.message + '\n');
//     }

//     // Set audio position
//     //
//     function setAudioPosition(position) {
//         document.getElementById('audio_position').innerHTML = position;
//     }

//     function playAudio(url) {
//     // Play the audio file at url
//     var my_media = new Media(url,
//         // success callback
//         function () {
//             console.log("playAudio():Audio Success");
//             my_media.play();
//         },
//         // error callback
//         function (err) {
//             console.log("playAudio():Audio Error: " + err);
//         }
//     );
//     // Play audio
//     my_media.play();

// }