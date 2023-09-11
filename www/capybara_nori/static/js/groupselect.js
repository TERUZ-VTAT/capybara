const groupCircles = document.getElementsByClassName("groupcircle");
const groupFrames = document.getElementsByClassName("groupsframe");
const roomMembers = document.getElementsByClassName("roommember");

const sideMenu = document.getElementById("sidemenu");

for (let i = 0; i < groupCircles.length; i++) {
  const groupCircle = groupCircles[i];
  const frame = groupFrames[i];
  const memberCount = parseInt(roomMembers[i].textContent.split(":")[1]);

  const frameWidth = frame.clientWidth;
  const frameHeight = frame.clientHeight;

  const circleSize = getCircleSize(memberCount);

  randomTop = getRandomNumber(frameHeight, circleSize);
  randomLeft = getRandomNumber(frameWidth, circleSize);

  groupCircle.style.top = randomTop + "px";
  groupCircle.style.left = randomLeft + "px";
  groupCircle.style.height = circleSize + "px";
  groupCircle.style.width = circleSize + "px";

  groupCircle.setAttribute(
    "href",
    "http://" + location.host + "/rooms/" + groupCircle.id + "/"
  );

  // console.log({{ roomdata.roomMember_Instant }} / 100);
}

function getCircleSize(memberCount) {
  if (memberCount > 500) return 400;
  else return 150 + Math.floor(memberCount / 2);
}

function getRandomNumber(max, size) {
  return Math.random() * (max - size);
}

function sideMenuOpen() {
  $("#sidemenu").animate({
    marginLeft: "340px",
  });
}

function sideMenuClose() {
  $("#sidemenu").animate({
    marginLeft: "0px",
  });
}
