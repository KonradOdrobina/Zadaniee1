function koszt()
{
var ilosc=document.getElementById("1").value;
var popr=document.getElementById("2").checked;

var licz=ilosc*100;
if (popr)
{    
    var poprawiny=licz*0.3;
    licz+=poprawiny;
}

    document.getElementById("3").innerHTML="Koszt Twojego wesela to "+licz+" złotych";

}