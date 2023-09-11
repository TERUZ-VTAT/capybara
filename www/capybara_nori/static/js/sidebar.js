const sideMenu = document.getElementById("sidemenu");

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