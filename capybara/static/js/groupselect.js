const groupCircles = document.getElementsByClassName("groupcircle");
const groupFrames = document.getElementsByClassName("groupsframe");
const roomMembers = document.getElementsByClassName("roommember");

const sideMenu = document.getElementById("sidemenu");

for ( const i = 0; i < groupCircles.length; i++ ) {

    const groupCircle = groupCircles[i];
    const frame = groupFrames[i];
    const memberCount = parseInt(roomMembers[i].textContent.split(":")[1]);

    const frameWidth = frame.clientWidth;
    const frameHeight = frame.clientHeight;
    
    const circleSize = getCircleSize(memberCount);

    randomTop = getRandomNumber(frameHeight, circleSize);
    randomLeft = getRandomNumber(frameWidth, circleSize);

    groupCircle.style.top = randomTop +"px";
    groupCircle.style.left = randomLeft +"px";
    groupCircle.style.height = circleSize + "px";
    groupCircle.style.width = circleSize + "px";

    groupCircle.setAttribute("href", location.href + "rooms/" + groupCircle.id + "/");

    // console.log({{ roomdata.roomMember_Instant }} / 100);
}

function getCircleSize(memberCount) {
    if ( memberCount > 500) return 400;
     else return 150 + Math.floor(memberCount / 2);
}

function getRandomNumber(max, size) {
    return Math.random() * (max - size);
}

function sideMenuOpen() {
    for ( const i = 0; i < 10; i++) {
        sideMenu.style.left = 0 + "px";
    }
}

function sideMenuClose() {
    for ( const i = 0; i < 10; i++) {
        sideMenu.style.left = ((i+1) * -34) + "px";
    }
}