// listen for a key press, if we press the right key, then find the matching audio file and play it, if the key doesnt show up on the keyboard, the script shouldnt do anything


(() => {
  // this shows up in the console in the inspect element, used to show that js is linked up
  console.log('drumkit file loaded!');

  //remove highlight from each element after a keypress/ transition
  function removeHighlight(e) {
    console.log(e);
    //if property name is not "transform" then return
    if (e.propertyName !== 'transform')
    {
      return;
    }
    //otherwise (if it does have transform as propertyName), remove the "playing" class
    else
    {
    e.target.classList.remove('playing');
    }
  }

//this should fire everytime a key is pushed
function playSound(e) {
  //debugger;
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //add a the class of .playing to a key
  key.classList.add('playing');


  //if we press a key with no audio corresponding, then it returns to the start
  if (!audio) { return; }
  audio.currentTime = 0;
  audio.play();
}

  //tell the browser to listen for a keypress event
  window.addEventListener('keydown', playSound);

// log through all the keys...
const keys = Array.from(document.querySelectorAll('.key')); //select all of the key divs
keys.forEach(key => key.addEventListener('transitionend', removeHighlight));


})();
