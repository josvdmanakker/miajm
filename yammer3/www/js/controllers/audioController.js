app.controller('audioController', function($scope){

    var src = "myrecording.amr";
    var timeInSecs;
    var ticker;
    // console.log(src);

    // var mediaRec = new Media(src,
    //     // success callback
    //     function() {
    //         console.log("recordAudio():Audio Success");
    //     },

    //     // error callback
    //     function(err) {
    //         console.log("recordAudio():Audio Error: "+ err.message);
    //     },

    //     function(status){
    //         console.log('status changed: ', status);
    //     });

    $scope.recordAudio = function(){
        console.log("RECOOOOORRD");

        document.getElementById("buttonTalk").addClass("buttonTalkHold");
        
        console.log("before record");
        mediaRec.startRecord();

        // document.getElementById("buttonWhite"), ':after'.style.backgroundColor = "gray";
        console.log("started record");
    // setTimeout(function(){
    //     console.log("waiting");
    //     mediaRec.stopRecord();
    //     console.log("stopped record");
    // }, 3000);
}

$scope.stopRecord = function(){
    console.log("STOPPED")
    document.getElementById("buttonTalk").removeClass("buttonTalkHold");
    mediaRec.stopRecord();
    document.getElementById("btUpload").style.display = "block";
    document.getElementById("buttonPlay").style.display = "block";

        //document.getElementById("buttonWhite").style.backgroundColor = "#FCFCFC";
    }




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
        document.getElementById("btTalk").style.display = "none";
        document.getElementById("btType").style.display = "block";

        var inputBox = document.getElementById("InputType");
        inputBox.onkeyup = function(){
            document.getElementById("btUploadText").style.display = "block";
        }
    }

    $scope.switchTypeBack = function(){
        document.getElementById("buttonWhite").style.display = "block";
        document.getElementById("InputText").style.display = "none";
        document.getElementById("btTalk").style.display = "block";
        document.getElementById("btType").style.display = "none";
    }


    $scope.sendTextValue = function(){
        console.log("hoi");

        localStorage.setItem("textSave", document.getElementById('InputType').value);
        console.log(localStorage.textSave);
    }
});

