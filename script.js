var videoPlayer = document.getElementById("videoSource");
var tracks = document.querySelectorAll("#tracks li a");
var player = document.getElementsByTagName("video")[0];


// Stops links from moving away from page on click
window.onload = function() {
    var anchorElements = document.getElementsByTagName('a');
    for (var i in anchorElements)
        anchorElements[i].onclick = function() {
          return false;
        }
}

// Change video source and start playback
var changeSource = function() {
  player.pause();
  var newVideoSource = this.href;
  videoPlayer.setAttribute("src", newVideoSource);
  player.load();
  player.play();
}

// Binds events to each playlist item
for(var i = 0; i < tracks.length; i++) {
  tracks[i].addEventListener("click", changeSource);
}
