app.controller('audioController', function($scope){

    var src = "myrecording.amr";
    var timeInSecs;
    var ticker;
    var audioObject;
    // console.log(src);

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

    $scope.recordAudio = function(){
        console.log("RECOOOOORRD");

        document.getElementById("buttonTalk").style.backgroundColor = "#D3D3D3";
        document.getElementById("buttonTalk").style.boxShadow = "inset 0 0 10px 10px rgba(0, 0, 0, 0.2)";

        console.log("before record");
        mediaRec.startRecord();

        console.log("started record");

    }


$scope.stopRecord = function(){
    console.log("STOPPED")

    document.getElementById("buttonTalk").style.backgroundColor = "white";
    document.getElementById("buttonTalk").style.boxShadow = "0 9px 2px -2px rgba(0, 0, 0, 0.5)";
    mediaRec.stopRecord();
    document.getElementById("btUpload").style.opacity= "1";
    document.getElementById("btUpload").disabled = false;
    document.getElementById("buttonPlay").style.display = "block";
    audioObject = mediaRec;
    console.log(audioObject);
}
$scope.sendTextServer = function(){
    var myDataRef = new Firebase('https://yammer3.firebaseio.com/');
    var name = "Henk";
    var text = "testing 1";
    console.log($scope.talkText);
    myDataRef.push($scope.talkText);
}

$scope.sendAudioServer = function(){
    var myDataRef = new Firebase('https://yammer3.firebaseio.com/');
    var name = "Henk";
    var text = "testing 1";
    console.log($scope.talkText);
    myDataRef.push($scope.talkText);
}


// var spinner = new Spinner({color: '#ddd'});
// var firebaseRef = 'https://yammer3.firebaseio.com/';


// $scope.handleFileSelect = function(evt) {
//   var f = evt.target.files[0];
//   var reader = new FileReader();
//   reader.onload = (function(theFile) {
//     return function(e) {
//       var filePayload = e.target.result;
//       // Generate a location that can't be guessed using the file's contents and a random number
//       var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
//       var f = new Firebase(firebaseRef + hash + '/filePayload');
//       // Set the file payload to Firebase and register an onComplete handler to stop the spinner and show the preview
//       f.set(filePayload, function() { 
//         document.getElementById("pano").src = e.target.result;
//         $('#file-upload').hide();
//         // Update the location bar so the URL can be shared with others
//         window.location.hash = hash;
//       });
//     };
//   })(f);
//   reader.readAsDataURL(f);
// }

// $scope.function() {
//   $('#spin').append(spinner);

//   var idx = window.location.href.indexOf('#');
//   var hash = (idx > 0) ? window.location.href.slice(idx + 1) : '';
//   if (hash === '') {
//     // No hash found, so render the file upload button.
//     $('#file-upload').show();
//     document.getElementById("file-upload").addEventListener('change', handleFileSelect, false);
//   } else {
//     // A hash was passed in, so let's retrieve and render it.
//     spinner.spin(document.getElementById('spin'));
//     var f = new Firebase(firebaseRef + '/pano/' + hash + '/filePayload');
//     f.once('value', function(snap) {
//       var payload = snap.val();
//       if (payload != null) {
//         document.getElementById("pano").src = payload;
//       } else {
//         $('#body').append("Not found");
//       }
//       spinner.stop();
//     });
//   }
// });

$scope.playAudio = function() {
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

    $scope.switchType = function(){
        document.getElementById("buttonWhite").style.display = "none";
        document.getElementById("InputText").style.display = "block";
        //document.getElementById("switchTypeTalk").style.display = "none";


        document.getElementById("wrapperText").style.display = "none";
        document.getElementById("wrapperAudio").style.display = "block";

        document.getElementById("btPlay").style.display = "none";



        var inputBox = document.getElementById("InputType");
        inputBox.onkeyup = function(){
            document.getElementById("btUploadText").style.opacity= "1";
            document.getElementById("btUploadText").disabled = false;
        }
    }

    $scope.switchTypeBack = function(){
        document.getElementById("buttonWhite").style.display = "block";
        document.getElementById("InputText").style.display = "none";
        //document.getElementById("switchTypeTalk").style.display = "block";

        document.getElementById("wrapperText").style.display = "block";
        document.getElementById("wrapperAudio").style.display = "none";

        document.getElementById("btPlay").style.display = "block";
    }


    $scope.sendTextValue = function(){
        console.log("hoi");

        localStorage.setItem("textSave", document.getElementById('InputType').value);
        console.log(localStorage.textSave);



    }
});

