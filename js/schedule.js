function scrollLeftHandler(day) {
  var gameInfo = document.getElementById('game-info-container-' + day);
  gameInfo.scrollLeft -= 200; // Scroll left by 200px
}

function scrollRightHandler(day) {
  var gameInfo = document.getElementById('game-info-container-' + day);
  gameInfo.scrollLeft += 200; // Scroll right by 200px
}