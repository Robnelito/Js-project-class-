var i = 0,
    imgsrc = new Array();
imgsrc[0] = "../image/1.jpg";
imgsrc[1] = "../image/2.jpg";
imgsrc[2] = "../image/3.jpg";
imgsrc[3] = "../image/4.jpg";
imgsrc[4] = "../image/5.jpg";
imgsrc[5] = "../image/6.jpg";
imgsrc[6] = "../image/7.jpg";
imgsrc[7] = "../image/8.jpg";
imgsrc[8] = "../image/9.jpg";
imgsrc[9] = "../image/10.jpg";
imgsrc[10] = "../image/11.jpg";
imgsrc[11] = "../image/12.jpg";
imgsrc[12] = "../image/13.jpg";
imgsrc[13] = "../image/14.jpg";
imgsrc[14] = "../image/15.jpg";
imgsrc[15] = "../image/16.jpg";
imgsrc[16] = "../image/17.jpg";

function mode(param) {
    smode = param;
}

function startSlideshow() {
    if (smode == "play") {
        document.getElementById("play").disabled = "disabled";
        document.getElementById("pause").disabled = "";
        document.getElementById("stop").disabled = "";
        document.getElementById("slideshow").src = imgsrc[i];
        i++;
        setTimeout("startSlideshow()", 1500);
    } else if (smode == "pause") {
        document.getElementById("pause").disabled = "disabled";
        document.getElementById("play").disabled = "";
        /*document.getElementById("play").value="Resume";*/
    } else if (smode == "stop") {
        document.getElementById("play").disabled = "";
        document.getElementById("play").value = "";
        document.getElementById("pause").disabled = "disabled";
        document.getElementById("stop").disabled = "disabled";
        document.getElementById("slideshow").src = imgsrc[0];
        i = 0;
    }
    if (i == imgsrc.length) {
        i = 0;
    }
}