const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];



document.addEventListener("DOMContentLoaded", function () {
  const currentVid = document.querySelector("video");
  const aside = document.querySelector("aside");

  for (let file of files) {
    let img = document.createElement("img");
    img.src = "./images/" + file + ".jpg";
    img.alt = file;

    let vidSrc = "./videos/" + file + ".mp4";

    img.addEventListener("click", function () {
      currentVid.pause();
      let source = document.querySelector("source");
      source.src = vidSrc;
      console.log(source.src);
      currentVid.load();
    }
    );

    console.log(img);
    console.log(aside);
    console.log(img.src);
    aside.appendChild(img);
  
  
  };

  document.querySelector("#stop").addEventListener("click", stopBtn);

  function stopBtn() {
    currentVid.pause();
    currentVid.currentTime = 0;
  };


  document.querySelector("#play").addEventListener("click", playBtn);

  function playBtn() {
    currentVid.play();
  };

  // Skip backward functionality (ensure correct timing with loadedmetadata)
  currentVid.addEventListener("loadedmetadata", () => {
    document.querySelector("#back").addEventListener("click", skipBackward);
  });

  function skipBackward() {
    const skipTime = parseFloat(document.querySelector("#back").dataset.skip);
    currentVid.currentTime -= skipTime;
  }

  // Skip forward functionality (ensure correct timing with loadedmetadata)
  currentVid.addEventListener("loadedmetadata", () => {
    document.querySelector("#forward").addEventListener("click", skipForward);
  });

  function skipForward() {
    const skipTime = parseFloat(document.querySelector("#forward").dataset.skip);
    currentVid.currentTime += skipTime;
  }

  const volumeSlider = document.getElementById("volume");
  volumeSlider.addEventListener("change", adjustVolume);

function adjustVolume() {
  const newVolume = volumeSlider.value; // Get the current slider value

  currentVid.volume = newVolume;


};

});
