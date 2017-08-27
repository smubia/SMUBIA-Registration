$("#welcome").click(function () {
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

});


$("#error").click(function () {
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

});
