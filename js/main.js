var nricList = [];
var nameList = [];

$(document).ready(function () {
    retrieveData();

    setInterval(function () {
        //$("#nric-control").focus();
    }, 1000);
});


var retrieveData = function () {
    $.ajax({
        url: 'https://script.googleusercontent.com/macros/echo?user_content_key=vNfpxircLqNTqp3E0SL8n7FHWFMhvODoe9uX3Jeeujnoz5btETaVI3uWlQFUs_zY8sTd64dSdORm50m6HCOG5LuTTuPOr5O_OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp8qKaos0Ar9PJpv1EzfNB2zG95ixg1Ju9KTaXqEycbTBHs_nfHv-wakO9Oe92mAFHq_uDj7qsXF0yz39XobvtEQQc09CumtDuA&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx',
        success: function (responseText) {
            var data = responseText.AttendanceList;
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                nricList.push(data[i].NRIC);
                nameList.push(data[i].NAME);
            }
        }
    });
}

var welcomeFunction = function() {
    $("#error-page").hide("slide", {
        direction: "right",
    }, 1500);

    $("#start-page").hide("slide", {
        direction: "right",
    }, 1500);

    $("#welcome-page").show("slide", {
        direction: "left"
    }, 1500);

    setTimeout(function () {
        $("#welcome-page").hide("slide", {
            direction: "right"
        }, 1500);

        $("#start-page").show("slide", {
            direction: "left",
        }, 1500);
    }, 3000);
};


var errorFunction = function() {
    $("#welcome-page").hide("slide", {
        direction: "right",
    }, 1500);

    $("#start-page").hide("slide", {
        direction: "right",
    }, 1500);

    $("#error-page").show("slide", {
        direction: "left"
    }, 1500);

    setTimeout(function () {
        $("#error-page").hide("slide", {
            direction: "right"
        }, 1500);

        $("#start-page").show("slide", {
            direction: "left",
        }, 1500);
    }, 6000);

};

// Contine to read the thing. If the length of it is 9 letter, then do a function
$("#nric-control").keyup(function () {
    //console.log($("#nric-control").val());
    if ($("#nric-control").val().length == 9) {
        sendStuff();
        if (nricList.indexOf($("#nric-control").val()) == -1) {
            errorFunction();
        } else {
            welcomeFunction();
            $(".welcome-name").text(nameList[nricList.indexOf($("#nric-control").val())]);
        }
        $("#nric-control").val("");
    }
});

var sendStuff = function () {
    console.log("supposed to send somewhere.")
}
