var content = document.querySelector("#launch");
var list = " ";
var list2 = " ";
var list3 = " ";

$.getJSON("https://launchlibrary.net/1.4/launch/next/5", function (rocket) {
    for (i = 0; i < rocket.launches.length; i++) {
        list += "<div class='eachLaunch'>Name: " + rocket.launches[i].name + " " + rocket.launches[i].id + " Time: " + "<b>" + rocket.launches[i].windowstart + "</b>" + "</div>" + "<br>"
    }
    $("#launch").html(list);
    $(".next").html("Next launch: " + rocket.launches[0].windowstart);
    $(".first").on({
        click: function () {

            $(".next").html("Next launch: " + rocket.launches[0].windowstart);
            $("#launch").html(list);

        }

    });
    $(".fourth").on({
        click: function () {

            $(".next").html("Next launch: " + rocket.launches[0].windowstart);
            $("#launch").html(list);

        }

    });

});

$.getJSON("https://launchlibrary.net/1.4/launch/launcherone", function (launcherone) {
    for (i = 0; i < launcherone.launches.length; i++) {
        list2 += "<div class='eachLaunch'>Name: " + launcherone.launches[i].name + " " + launcherone.launches[i].id + " Time: " + "<b>" + launcherone.launches[i].windowstart + "</b>" + "</div>" + "<br>"
    }
    $(".second").on({

        click: function () {

            $(".next").html("Next launch: " + launcherone.launches[0].windowstart);
            $("#launch").html(list2);

        }

    });


});


$.getJSON("https://launchlibrary.net/1.4/launch/2015-08-20/2015-09-20", function (arlane) {
    for (i = 0; i < 5; i++) {
        list3 += "<div class='eachLaunch'>Name: " + arlane.launches[i].name + " " + arlane.launches[i].id + " Time: " + "<b>" + arlane.launches[i].windowstart + "</b>" + "</div>" + "<br>"
    }
    $(".third").on({

        click: function () {
            $(".next").html("Next launch: " + arlane.launches[0].windowstart);

            $("#launch").html(list3);

        }

    });


});