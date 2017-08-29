var nricList = [];
var nameList = [];

$(document).ready(function () {
    retrieveData();

    setInterval(function () {
        $("#nric-control").focus();
    }, 1000);
});


var retrieveData = function () {
    $.ajax({
        url: 'https://script.googleusercontent.com/macros/echo?user_content_key=0amoNlIV6gc21BapdcZyeaMw40xsBtMyaLG3u-GrTSpnKg6IXMQZ7A_eSPCUCWbmIrkpmsAZG-NOe6xKyDrYF-rkZMF_vCWAOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp6myI78o9NC86WrdeeFbEqvTp3KCCDmpzBJIYT-ZdrtNoAKD_2nWLhB7mRe4EH6pyK_uDj7qsXF0yz39XobvtEQQc09CumtDuA&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx',
        success: function (responseText) {
            var data = responseText.AttendanceList;
            for (var i = 0; i < data.length; i++) {
                nricList.push(data[i].NRIC.toUpperCase());
                nameList.push(data[i].NAME);
            }
        }
    });
}

var welcomeFunction = function () {
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
        $("#nric-control").val("");

        $("#welcome-page").hide("slide", {
            direction: "right"
        }, 1500);

        $("#start-page").show("slide", {
            direction: "left",
        }, 1500);
    }, 3000);
};

var errorFunction = function () {
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
        $("#nric-control").val("");

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
        if (nricList.indexOf($("#nric-control").val().toUpperCase()) == -1) {
            errorFunction();
        } else {
            welcomeFunction();
            $(".welcome-name").text(nameList[nricList.indexOf($("#nric-control").val())]);
        }

    }
});

var script_url = "https://script.google.com/macros/s/AKfycbwz5grRQJ-4Dij2WKqfnSToK8NybcH7XPFxm0Q_fMkpSKR3LOBn/exec";

// Make an AJAX call to Google Script
function sendStuff() {
    var nric = $("#nric-control").val();
    var url = script_url + "?name=" + nric + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}
