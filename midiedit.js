console.log("Loading Midi Editor");
function authorizemidi(){
  navigator.requestMIDIAccess().then(function(info){
  }).err(console.log);
}
