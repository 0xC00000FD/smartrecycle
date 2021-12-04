    var isBlack1 = false;
    function popUp1() {
        console.log(isBlack1);
        if (isBlack1)
        {   
            document.getElementById("pic1").style.transform = "rotate(0deg)";
            document.getElementById("txt1").style.visibility = "hidden";
            isBlack1 = false;
        }
        else
        {
            document.getElementById("pic1").style.transform = "rotate(-90deg)";
            document.getElementById("pic1").style.transitionDuration = "1s";
            document.getElementById("txt1").style.visibility = "visible";
            isBlack1 = true;
        }
    }
    var isBlack2 = false;
    function popUp2() {
        console.log(isBlack2);
        if (isBlack2)
        {
            document.getElementById("pic2").style.transform = "rotate(0deg)";
            document.getElementById("txt2").style.visibility = "hidden";
            isBlack2 = false;
        }
        else
        {
            document.getElementById("pic2").style.transform = "rotate(90deg)";
            document.getElementById("pic2").style.transitionDuration = "1s";
            document.getElementById("txt2").style.visibility = "visible";
            isBlack2 = true;
        }
    }
    var isBlack3 = false;
    function popUp3() {
        console.log(isBlack3);
        if (isBlack3)
        {
            document.getElementById("pic3").style.transform = "rotate(0deg)";
            document.getElementById("txt3").style.visibility = "hidden";
            isBlack3 = false;
        }
        else
        {
            document.getElementById("pic3").style.transform = "rotate(-90deg)";
            document.getElementById("pic3").style.transitionDuration = "1s";
            document.getElementById("txt3").style.visibility = "visible";
            isBlack3 = true;
        }
    }