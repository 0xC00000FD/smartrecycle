var active = false;
var ok =true;
var range = 50;
var xPosante = null, yPosante = null

var theThing = document.querySelector("#report-grid");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", getClickPosition, false);
theThing.addEventListener("mouseenter", function(){ok = false;console.log(ok);}, false);
theThing.addEventListener("mouseleave", function(){ok = true;console.log(ok);}, false);

function getClickPosition(e)
{
    var xPos = e.clientX - (theThing.offsetWidth / 2);
    var yPos = e.clientY - (theThing.offsetHeight) - 80;
    if ((xPos - xPosante)*(xPos-xPosante) + (yPos - yPosante)*(yPos-yPosante) > range * range && ok == true && active == true)
    {
        theThing.style.display = "none";
        var translate3dValue = "translate3d(" + xPos + "px," + yPos + "px, 0)";
        setTimeout(function() {
            theThing.style.transform = translate3dValue;
            theThing.style.display = "grid";}, 500);
        xPosante = xPos;
        yPosante = yPos;
    }
}

function darkMap()
{
    console.log("3 in pula mea");
    if (active == false)
    {
        active = true;
        container.style.backgroundColor = "gray";
    }
    else
    {
        active = false;
        container.style.backgroundColor = "lightgray";
        theThing.style.display = "none";
    }    

}