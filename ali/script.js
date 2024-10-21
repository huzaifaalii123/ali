const textInput = document.querySelector("#myText");
const mybtn = document.querySelector("#btn");

 function textToSpeech()
 {
    const msg = new SpeechSynthesisUtterance;
    msg.text = textInput.value;
    msg.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(msg);
 }

 


