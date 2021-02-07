var database
var food=20
var foodStock
var dog,happyDog,dogImge

function preload()
{
  dogImage=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
  canvas = createCanvas(500,500);
  database = firebase.database();


  dog=createSprite(300,300,10,10)
  dog.scale=0.2
  dog.addImage(dogImage)


  foodStock=database.ref('food')
   foodStock.on("value",readStock)
  
}


function draw() {  
  background("green")
  drawSprites();
  
  fill("white")
  text("food="+food,200,20,30,30)

  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage(dogHappy)
  }

  readStock()
  writeStock()

 
   

}

function readStock(data){ 
  foodS=data.val();
 }

 function writeStock(x){
    if(x<=0){ 
      x=0;
     }
     else{ 
       x=x-1;
       } 
    database.ref('/').update({ 
      Food:x 
    }
    ) 
  }



