var webTomb = [];

$(function () {


        WeboldalMegjelenit();



    $.ajax(
            {url: "termekek.json", success: function (result) {
                    console.log(result);
                    webTomb = result;                  
                    WeboldalMegjelenit();
           
                }});

});




function WeboldalMegjelenit() {
    $("article").empty();
    for (var item in webTomb) {
        var termek = "<div><h3>" + webTomb[item]["nev"] + " </h3\n\
                          <p>" + webTomb[item]["leiras"] + "</p>\n\
                          <img src='" + webTomb[item]['kep'] + "' alt='" + webTomb[item]['kep'].slice(7,webTomb[item]['kep'].length-4) + "' >\n\
                          <span>" + webTomb[item]["ar"] + "</span>\n\
                           </div>";
        $("article").append("<div id='" + webTomb[item]["nev"] + "'>" + termek + "</div>");

    }

}
