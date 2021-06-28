var Speech_Recognisation = window.webkitSpeechRecognition;
var Recognisation = new Speech_Recognisation();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    Recognisation.start();
}
Recognisation.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
}