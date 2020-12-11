//Create variables here

var dog,happyDog,starvingDog,foodS,foodStock;

function preload()
{
   //load images here
   starvingDog = loadImage("images/doglmg1.png");
   happyDog = loadImage("images/doglmg.png"); 

}

function setup() {

   createCanvas(500, 500);
  
   dog = createSprite(250,250,20,20);
   dog.addImage(starvingDog);
   dog.scale = 0.5;

   database = firebase.database();

   foodStock = fireBase.ref("food");
   foodStock.on("value",readStock);

}


function draw() {  

   backGround(46, 139, 87);

   if(keyDown("UP_ARROW")){
      dog.addImage(happyDog);
      writeStock(foodS);
   }

   drawSprites();
   //add styles here

}

function readStock(data){
   foodS = data.val();
}

function writeStock(x){
   if(x<=0){
      x = 0;
   } 
   else{
      x = x-1;
   }

   database.ref('/').update({
      food:x   
   })

}