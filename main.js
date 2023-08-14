x=0; y=0;

     
    screen_width=0;
    screen_height=0;
    
    draw_apple="";
    speak_data="";
    to_number="";
    var apple="";

function setup(){
    screen_width = window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width-100, screen_height-200);
   
    canvas.position(50,120);
   
    }
     

function preload(){
    apple=loadImage("apple.jpg")
}
  
var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition =new SpeechRecognition;
   
    
function start(){
        document.getElementById("status").innerHTML="system is listening please speak";
        Recognition.start()
    }

    Recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    to_number=Number(content);
    if(Number.isInteger(to_number)){
        draw_apple='set';
        document.getElementById("status").innerHTML="started drawing apple";
    }
    else {
    document.getElementById("status").innerHTML="the speech has not recognized in numbers";
   // document.getElementById("status").innerHTML="the speech has been recognized as: "+content;

    }}

function draw(){
   if (draw_apple == "set"){

    for (i=1; i<=to_number; i++)
   {
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*400);
    
    image(apple, x, y, 50, 50);
}
    speak_data=to_number+"  "+" Apples drawn";
    speak();
   
    document.getElementById("status").innerHTML = to_number + "  Apples Drawn";
 
   draw_apple = ""; 
   }
}    
        
        function speak(){
            var synth = window.speechSynthesis;
            var utterThis = new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);
                speak_data="";
            
            }