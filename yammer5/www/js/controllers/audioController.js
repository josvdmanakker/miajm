app.controller('audioController', function($scope){
    var src = "myrecording.amr";
    var timeInSecs;
    var ticker;
    var audioObject;
    var textReceived;
    var stringObject;
    var myDataRef = new Firebase('https://yammer3.firebaseio.com/');
    myDataRef.once('value', function(dataSnapshot){
        dataSnapshot.forEach(function(childSnapshot){
                var childData = childSnapshot.val();
                console.log(childData);
                stringObject =  JSON.stringify(childData);
                console.log(stringObject);

                if (stringObject) {
                    document.getElementById("buttonReceive").style.display = "block";
                    document.getElementById("btReceive").innerHTML = "!";
                    document.getElementById("btReceive").style.color = "#26D9A6";
                }

            });
    });

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
        audioObject = mediaRec;
        document.getElementById("btUpload").style.opacity= "1";
        document.getElementById("btUpload").disabled = false;
        document.getElementById("buttonPlay").style.display = "block";
    }
    $scope.sendTextServer = function(){
        var myDataRef = new Firebase('https://yammer3.firebaseio.com/');
        //console.log($scope.talkText);
        myDataRef.push($scope.talkText);
    }
    $scope.sendAudio = function(){
        var myDataRef = new Firebase('https://yammer3.firebaseio.com/');
        console.log(src);
        myDataRef.push(src);
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
        document.getElementById("wrapText").style.display = "block";
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
        document.getElementById("wrapText").style.display = "none";
        document.getElementById("btPlay").style.display = "block";
    }
    $scope.sendTextValue = function(){
        console.log("hoi");
        localStorage.setItem("textSave", document.getElementById('InputType').value);
        console.log(localStorage.textSave);
    }
    $scope.showYam = function(){
        var str = stringObject;
        var res = str.replace(/["']/g, '');
        var res2 = res.replace('{','');
        var res3 = res2.replace('}','');
        console.log(res3);
        document.getElementById("yamContainer").style.display = "block";
        document.getElementById("yamRec").value = res3;
        document.getElementById("buttonWhite").style.display = "none";
        document.getElementById("InputText").style.display = "none";
        document.getElementById("wrapText").style.display = "block";

        document.getElementById("Titel1").style.display = "none";  
        document.getElementById("Titel2").style.display = "block";
        document.getElementById("yamBack").style.display = "block";
        document.getElementById("btUploadText").style.display = "none"; 
        document.getElementById("buttonReceive").style.display = "none";
        myDataRef.remove()
    }
    $scope.backToTalk = function(){
        document.getElementById("yamContainer").style.display = "none";
        document.getElementById("buttonWhite").style.display = "block";
        document.getElementById("InputText").style.display = "none";
        document.getElementById("wrapText").style.display = "none";
        document.getElementById("Titel1").style.display = "block";  
        document.getElementById("Titel2").style.display = "none";
        document.getElementById("yamBack").style.display = "none";
        document.getElementById("btUploadText").style.display = "block";

    }
}); // end of js

