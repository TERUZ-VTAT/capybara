var groupCircles = document.getElementsByClassName("groupcircle");
var groupFrames = document.getElementsByClassName("groupsframe");
var roommembers = document.getElementsByClassName("roommember")

for ( var i=0; i < groupCircles.length; i++ ) {

    var groupCircle = groupCircles[i];
    var frame = groupFrames[i];
    var membercount = parseInt(roommembers[i].textContent.split(":")[1]);

    var frameWidth = frame.clientWidth;
    var frameHeight = frame.clientHeight;

    var circlesize = returncirclesize(membercount);

    randomTop = getRandomNumber(frameHeight, circlesize);
    randomLeft = getRandomNumber(frameWidth, circlesize);

    groupCircle.style.top = randomTop +"px";
    groupCircle.style.left = randomLeft +"px";
    groupCircle.style.height = circlesize + "px";
    groupCircle.style.width = circlesize + "px";

    groupCircle.setAttribute("href", location.href+"rooms/"+groupCircle.id+"/")

    // console.log({{ roomdata.roomMember_Instant }}/100);

}

function returncirclesize(memberCounter) {
    if ( memberCounter > 500) {
        return 400;
    } else {
        return 150 + Math.floor(memberCounter/2);
    }
}

function getRandomNumber(max, size) {

    return Math.random() * (max - size);

}

var sidemenu = document.getElementById("sidemenu");

function sidemenuopen() {
    for ( var i=0; i<10; i++) {
        sidemenu.style.left = 0+"px";
    }
}

function sidemenuclose() {
    for ( var i=0; i<10; i++) {
        sidemenu.style.left = ((i+1)*-34)+"px";
    }
}