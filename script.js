var termekTomb = [];

$(function () {


    $("aside").on("click", ".torol", function () {
        var index = Number($(this).attr("index"));
        termekTomb.splice(index,1);
        termekMegjelenit();




            
});
$.ajax(
    {url: "termekek.json", success: function (result) {
            console.log(result);
            termekTomb = result;
            termekMegjelenit();

         
        }});
});
function ujTermek(){
  
    var termekObjektum = {
    nev: $("#termeknev").val(),
    leiras: $("#leiras").val(),
    ar: $("#ar").val(),
    keszlet: $("#keszlet").val()                    
    };       
    termekTomb.push(termekObjektum);
    termekMegjelenit();
}




function termekMegjelenit() {
    $("aside").empty();
    $('#ok').click(ujTermek);
    for (var item in termekTomb) {
    var termekek =  "<table><tr><td>Terméknéve</td><td>Leírás</td>><td>Készlet</td><td>Ár</td></tr><tr><th>"+termekTomb[item]["nev"] +
    "</th><th>"+termekTomb[item]["leiras"] + "</th><th>"+termekTomb[item]["keszlet"] + "</th><th>"+termekTomb[item]["ar"]+"</th><th><input type='button' value='Módosít' class='modosit'></th><th><input type='button' value='Törlés' class='torol'</th></tr></table>"
        $("aside").append("<table='"+termekTomb[item][""] +"'>"+termekek+"</table>");
        
    
    }
    
}




