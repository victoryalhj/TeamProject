function scrollLeftHandler(day) {
  var gameInfo = document.getElementById('game-info-container-' + day);
  gameInfo.scrollLeft -= 200; 
}

function scrollRightHandler(day) {
  var gameInfo = document.getElementById('game-info-container-' + day);
  gameInfo.scrollLeft += 200; 
}
