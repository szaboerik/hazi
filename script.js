var termekTomb = [];

$(function () {


    $("article").on("click", "torol", function () {
        var index = Number($(this).attr("index"));
        termekTomb.splice(index,1);



            
});
$(document).ready(function (){
    $.getJSON("termekek.json" , function(data){
        var termekekData = '';
        $.each(data , function(key,value){
            termekekData += '<tr>';
            termekekData += '<td>'+value.nev+'</td>';
            termekekData += '<td>'+value.leiras+'</td>';
            termekekData += '<td>'+value.ar+'</td>';
            termekekData +='<td>'+value.keszlet+'</td>';
            termekekData +='<td><input type=button id=modosit value=Módosítás></td>';
            termekekData +='<td><input type=button id=torol value=Törlés></td>';
        });
        $('#termekekTablazat').append(termekekData);
    });
    $.ajax(
        {url: "termekek.json", success: function (result) {
                console.log(result);
                termekTomb = result;
         
            }});

});


});







