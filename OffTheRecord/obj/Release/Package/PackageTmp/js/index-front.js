// Form and video elements
var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
var vid = document.getElementById("bg-vid");
var form = $('#newUserForm');
var submitButton = $("#submit");
var msg = $('.msg-show');
var audio_loop = new Audio('Media/Sound/otr-music-loop.m4a');
var audio_end = new Audio('Media/Sound/otr-music-end.m4a');
var clipsPath = "Media/Clips/";
var clips = ["otr-start.mp4", "otr-middle.mp4", "otr-end.mp4"];
//var clips = ["otr1.mp4", "otr2.mp4", "otr3.mp4"];

// Loopar introlåt
audio_loop.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);
audio_loop.volume = 0.01;
var maxVol = 0.99;
audio_loop.play();
fadeVolume(audio_loop.volume, function () {
  console.log('fade complete');
});

function fadeVolume(volume, callback) {
  var factor = 0.01,
      speed = 200;
  if (volume < maxVol) {
    setTimeout(function () {
      fadeVolume((audio_loop.volume += factor), callback);
    }, speed);
  } else {
    (typeof (callback) !== 'function') || callback();
  }
}

function run() {
  if (!iOS) {
    vid.setAttribute("loop", "");
    vid.src = clipsPath + clips[1];
    vid.load();
    vid.play();
  }
  submitButton.attr("display", "block");
};

function runEnd() {
  audio_loop.pause();
  audio_end.play();
  form.fadeOut();
  if (!iOS) {
    setTimeout(function(){
      vid.removeAttribute("loop");
      vid.src = clipsPath + clips[2];
      vid.load();
      vid.play();
      vid.onended = function() {
        vid.remove();
      };
    }, 500);
  }
  //else {
  //  msg.fadeIn();
  //}
};

if (iOS) {
  //document.body.style = "background: #000 url('Media/ElevatorPics/otr_hiss.jpg') no-repeat; background-size: cover; background-position: center top 50px;";
  vid.parentNode.removeChild(vid);
  document.body.style = "background: #020202";
  //document.body.style = "background: #020202 url('Media/ElevatorPics/otr_hiss.gif') no-repeat; background-position: center bottom; background-size: cover;";
  //document.getElementById('submit').style = "margin-top: 30px;";
}

if (!iOS) {
  setTimeout(function () {
    vid.play();
  }, 800);
}

//delay på formulär
if (iOS) {
  setTimeout(function(){
    form.fadeIn(1200);
  }, 0);
}
else {
  setTimeout(function () {
    form.fadeIn(1200);
  }, 3000);
}


///----- Trash can------
//----------------------
// setTimeout(function(){
//     document.getElementById("bgvid").play();
// }, 800);
// function vidFade() {
//   vid.classList.add("stopfade");
// }
// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })
