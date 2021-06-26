const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg = "sunrise1.png";
var engine, world;
var backgroundImg;


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=03 && hour<=05){
            bg = "sunrise1.png";
        }
        else if(hour>=05 && hour<=07){
            bg = "sunrise2.png";
        }
        else if(hour>=07 && hour<=09){
            bg = "sunrise3.png";
        }
        else if(hour>=09 && hour<=11){
            bg = "sunrise4.png";
        }
        else if(hour>=11 && hour<=15){
            bg = "sunrise5.png";
        }
        else if(hour>=15 && hour<=19){
            bg = "sunrise6.png";
        }
        else if(hour>=19 && hour<=20){
            bg = "sunrise7.png";
        }
        else if(hour>=20 && hour<=21){
            bg = "sunrise8.png";
        }
        else if(hour>=21 && hour<=22){
            bg = "sunrise10.png";
        }
        else if(hour>=22 && hour<=24){
            bg = "sunrise11.png";
        }
        else if(hour>=24 && hour<=03){
            bg = "sunrise12.png";
        }
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);

}
