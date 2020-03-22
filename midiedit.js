console.log("Loading Midi Editor");
function authorizemidi(){
  window.navigator.requestMIDIAccess().then(function(info){
  }).catch(console.log);
}
