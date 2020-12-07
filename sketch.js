//Create variables here
var dog,happyDog,starvingDog,database,foodS,foodStock;

function preload()
{
  //load images here
  happyDog = loadImage("images/happyDog.png",happyDog);
  starvingDog = loadImage("images/starvingDog.png",starvingDog);

}

function setup() {

  createCanvas(500, 500);
  
  database = firebase.database();
  dog = createSprite(250,250,20,20);
  dog.addImage(starvingDog);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);

}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  text()


}

function readStock(data){

  foodS = data.val;

}

function writeStock(x){
 
   database.ref('/').update({
     food:x
   })

}