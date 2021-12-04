
var range = 50;
var theThing = document.querySelector("#report-grid");
var container = document.querySelector("#contentContainer");
var xPosante = null, yPosante = null
container.addEventListener("click", getClickPosition, true);

function getClickPosition(e)
{
    var xPos = e.clientX - (theThing.offsetWidth / 2);
    var yPos = e.clientY - (theThing.offsetHeight);
    console.log(Math.abs(xPos - xPosante));
    console.log(Math.abs(yPos - yPosante));
    if ((xPos - xPosante)*(xPos-xPosante) + (yPos - yPosante)*(yPos-yPosante) > range * range)
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
