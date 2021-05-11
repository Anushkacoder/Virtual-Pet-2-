var foodref,foodz,food;
var time;
var database;
var reset;
var happyDog, hungryDOG;
var happyCAT, hungryCAT;
var happyMACAW, hungryMACAW;
var happyHAMSTER, hungryHAMSTER;
var happyRABBIT, hungryRABBIT;
var background1 , background1IMG;
var background2 , background2IMG;
var background3 , background3IMG;
var dogfood, milk, carrot, berry, cheese;
var button1, button2, button3, button4, button5;
var foodOBJ1, foodOBJ2, foodOBJ3, foodOBJ4, foodOBJ5;
var vendor, v;

function preload(){
  background1IMG = loadImage("bkIMG.png");
  background2IMG = loadImage("store.png");

  happyDogIMG = loadImage("dogImg1.png");
  hungryDogIMG = loadImage("dogImg.png");
  happyCatIMG = loadImage("cat(happy).png");
  hungryCatIMG = loadImage("cat(hungry).png");
  happyHamsterIMG = loadImage("hamster(happy).png");
  hungryHamsterIMG = loadImage("hamster(hungry).png");
  happyRabbitIMG = loadImage("rabbit(happy).png");
  hungryRabbitIMG = loadImage("rabbit(hungry).png");
  happyMacawIMG = loadImage("macaw(happy).png");
  hungryMacawIMG = loadImage("macaw(hungry).png");

  dogfoodIMG = loadImage("dogfood.png");
  milkIMG = loadImage("milk.png");
  carrotIMG = loadImage("carrot.png");
  berryIMG = loadImage("berry.png");
  cheeseIMG = loadImage("cheese.png");

  button1IMG = loadImage("button1.png");
  button2IMG = loadImage("button2.png");
  button3IMG = loadImage("button3.png");
  button4IMG = loadImage("button4.png");
  button5IMG = loadImage("button5.png");

  v = loadImage("v.png");
}
function setup(){
  createCanvas(1330,500);
  background1 = createSprite(width/2,height/2,1000,500);
  background1.addImage(background1IMG);
  background1.scale = 3.0;

  background2 = createSprite(width/2,height/2,1000,500);
  background2.addImage(background2IMG);
  background2.scale = 1.7;
  background2.visible = false;

  vendor = createSprite(1100,280,20,20);
  vendor.addImage(v);
  vendor.scale = 1.9;
  vendor.visible = false;

  button1 = createSprite(300,60,50,50);
  button1.addImage(button1IMG);
  button1.scale = 1.4;
  button1.visible = false;

  button2 = createSprite(670,230,50,50);
  button2.addImage(button2IMG);
  button2.scale = 1.4;
  button2.visible = false;

  button3 = createSprite(300,460,50,50);
  button3.addImage(button3IMG);
  button3.scale = 1.4;
  button3.visible = false;

  button4 = createSprite(1030,460,50,50);
  button4.addImage(button4IMG);
  button4.scale = 1.4;
  button4.visible = false;

  button5 = createSprite(1030,60,50,50);
  button5.addImage(button5IMG);
  button5.scale = 1.4;
  button5.visible = false;
  
  dogfood = createSprite(450,250,50,50);
  dogfood.addImage(dogfoodIMG);
  dogfood.scale = 0.3;
  dogfood.visible = false;

  milk = createSprite(450,250,50,50);
  milk.addImage(milkIMG);
  milk.scale = 0.4;
  milk.visible = false;

  carrot = createSprite(450,250,50,50);
  carrot.addImage(carrotIMG);
  carrot.scale = 0.3;
  carrot.visible = false;

  berry = createSprite(450,250,50,50);
  berry.addImage(berryIMG);
  berry.scale = 0.2;
  berry.visible = false;

  cheese = createSprite(450,250,50,50);
  cheese.addImage(cheeseIMG);
  cheese.scale = 0.2;
  cheese.visible = false;

  dog = createSprite(230,250,50,50);
  dog.addImage(happyDogIMG);
  dog.scale = 0.4;
  dog.visible = false;

  cat = createSprite(230,250,50,50);
  cat.addImage(hungryCatIMG);
  cat.visible = false;

  rabbit = createSprite(230,250,50,50);
  rabbit.addImage(hungryRabbitIMG);
  rabbit.visible = false;

  macaw = createSprite(230,250,50,50);
  macaw.addImage(hungryMacawIMG);
  macaw.scale = 0.5;
  macaw.visible = false;

  hamster = createSprite(230,250,50,50);
  hamster.addImage(hungryHamsterIMG);
  hamster.visible = false;

  reset = createButton("REFILL THE PROVISIONS");
  reset.position(width/2-30,530);
  reset.style('width','170px');
  reset.style('height','45px');
  reset.style('background','indigo');
  reset.style('color','white');

  pet = createInput("                                  WHAT WOULD YOUR PET'S NAME BE ?  (Input the name here & press ENTER)");
  pet.position(350,5);
  pet.size(750,20);
  pet.style('background','black');
  pet.style('color','white');

  foodOBJ1 = new Food();
  foodOBJ2 = new DogFood();
  foodOBJ3 = new Cheese();
  foodOBJ4 = new Berry();
  foodOBJ5 = new Carrot();

  database = firebase.database();
  foodOBJ1.getFoodStock();
  foodOBJ2.getFoodStock();
  foodOBJ3.getFoodStock();
  foodOBJ4.getFoodStock();
  foodOBJ5.getFoodStock();
}
function reader(data){
  time = data.val();
}
 
function updater(t){
  database.ref('/').update({
     LastFed : t
  })
  }
function draw(){
  background("black");
 
  h = hour();

  if(keyDown("space")){
    background1.visible = false;
    background2.visible = true;
  }
  
  lastFedTime = database.ref('LastFed');
  lastFedTime.on('value',reader);

  drawSprites();

  if(mousePressedOver(button1)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    // background3.visible = true;
    dog.visible = true;
    dogfood.visible = true;
  }
  if(mousePressedOver(button2)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    // background3.visible = true;
    cat.visible = true
    milk.visible = true;
  }
  if(mousePressedOver(button3)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    // background3.visible = true;
    rabbit.visible = true;
    carrot.visible = true;
  }
  if(mousePressedOver(button4)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    // background3.visible = true;
    macaw.visible = true;
    berry.visible = true;
  }
  if(mousePressedOver(button5)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    // background3.visible = true;
    hamster.visible = true;
    cheese.visible = true;
  }

  if(background2.visible == true){
    button1.visible = true;
    button2.visible = true;
    button3.visible = true;
    button4.visible = true;
    button5.visible = true;
  }  
  if(dog.visible == true){
    foodOBJ2.display();
    vendor.visible = true;
    feed = createButton("FEED YOUR PET FOOD");
    feed.position(160,100);
    feed.style('width','170px');
    feed.style('height','30px');
    feed.style('background','red');
    feed.style('color','white');
    feed.mousePressed(hope1);
    reset.mousePressed(()=>{
      refill2();
    })
    if(time >= 12){
      textSize(20);
      fill("white");
      textFont("Algerian");
      text("LAST FEED TIME AT: " + time%12 + " PM",470,110);
    }
   else if(time <= 12){
     textSize(20);
     fill("white");
     textFont("Algerian");
     text("LAST FEED TIME AT: " + time%12 + " AM",470,110);
    }
  }
  if(cat.visible == true){
    foodOBJ1.display();
    vendor.visible = true;
    feed = createButton("FEED YOUR PET FOOD");
    feed.position(160,100);
    feed.style('width','170px');
    feed.style('height','30px');
    feed.style('background','hotpink');
    feed.style('color','white')
    feed.mousePressed(()=> {
      hope2();
    });
    reset.mousePressed(()=>{
      refill1();
    })
    if(time >= 12){
      textSize(20);
      fill("white");
      textFont("Algerian");
      text("LAST FEED TIME AT: " + time%12 + " PM",470,110);
    }
   else if(time <= 12){
     textSize(20);
     fill("white");
     textFont("Algerian");
     text("LAST FEED TIME AT: " + time%12 + " AM",470,110);
    }
  }
  if(rabbit.visible == true){
    foodOBJ5.display();
    vendor.visible = true;
    feed = createButton("FEED YOUR PET FOOD");
    feed.position(160,100);
    feed.style('width','170px');
    feed.style('height','30px');
    feed.style('background','white');
    feed.style('color','black')
    feed.mousePressed(hope3);
    reset.mousePressed(()=>{
      refill3();
    })
    if(time >= 12){
      textSize(20);
      fill("white");
      textFont("Algerian");
      text("LAST FEED TIME AT: " + time%12 + " PM",470,110);
    }
   else if(time <= 12){
     textSize(20);
     fill("white");
     textFont("Algerian");
     text("LAST FEED TIME AT: " + time%12 + " AM",470,110);
    }
  }
  if(macaw.visible == true){
    foodOBJ4.display();
    vendor.visible = true;
    feed = createButton("FEED YOUR PET FOOD");
    feed.position(160,100);
    feed.style('width','170px');
    feed.style('height','30px');
    feed.style('background','green');
    feed.style('color','white')
    feed.mousePressed(hope4);
    reset.mousePressed(()=>{
      refill4();
    })
    if(time >= 12){
      textSize(20);
      fill("white");
      textFont("Algerian");
      text("LAST FEED TIME AT: " + time%12 + " PM",470,110);
    }
   else if(time <= 12){
     textSize(20);
     fill("white");
     textFont("Algerian");
     text("LAST FEED TIME AT: " + time%12 + " AM",470,110);
    }
  }
  if(hamster.visible == true){
    foodOBJ3.display();
    vendor.visible = true;
    feed = createButton("FEED YOUR PET FOOD");
    feed.position(160,100);
    feed.style('width','170px');
    feed.style('height','30px');
    feed.style('background','yellow');
    feed.style('color','black')
    feed.mousePressed(hope5);
    reset.mousePressed(()=>{
      refill5();
    })
    if(time >= 12){
      textSize(20);
      fill("white");
      textFont("Algerian");
      text("LAST FEED TIME  AT: " + time%12 + " PM",470,110);
    }
   else if(time <= 12){
     textSize(20);
     fill("white");
     textFont("Algerian");
     text("LAST FEED TIME AT: " + time%12 + " AM",470,110);
    }
  }

  if(keyDown("enter")){
    let u = pet.value();
    pet.hide();
    y = createElement('h2', u);
    y.position(200,350);
    y.style('color','white');
    y.style('font-size','50px');
  }
 }
 function hope1(){
  foodOBJ2.updateFoodStock(foodz-1);
  textSize(30);
    textFont("Algerian");
    fill("brown");
    text("THANK YOU !! :)",420,120);
    dog.addImage(hungryDogIMG);
 }
 function hope2(){
  foodOBJ1.updateFoodStock(foodz-1);
  updater(h);
  textSize(30);
    textFont("Algerian");
    fill("white");
    text("THANK YOU !! :)",420,120);
    cat.addImage(happyCatIMG);
    cat.scale = 0.5;
    foodOBJ1.foodStock = foodz;
 }
 function hope3(){
  foodOBJ5.updateFoodStock(foodz-1);
  updater(h);
  textSize(30);
  textFont("Algerian");
  fill("orange");
  text("THANK YOU !! :)",420,120);
  rabbit.addImage(happyRabbitIMG);
  rabbit.scale = 0.5;
 }
 function hope4(){
  foodOBJ4.updateFoodStock(foodz-1);
  updater(h);
  textSize(30);
  textFont("Algerian");
  fill("green");
  text("THANK YOU !! :)",420,120);
  macaw.addImage(happyMacawIMG);
 }
 function hope5(){
  foodOBJ3.updateFoodStock(foodz-1);
  updater(h);
  textSize(30);
  textFont("Algerian");
  fill("yellow");
  text("THANK YOU !! :)",420,120);
  hamster.addImage(happyHamsterIMG);
 }
function refill1(){
  foodOBJ1.display();
  foodOBJ1.updateFoodStock(foodz+1);
}
function refill2(){
  foodOBJ2.display();
  foodOBJ2.updateFoodStock(foodz+1);
}
function refill3(){
  foodOBJ5.display();
  foodOBJ5.updateFoodStock(foodz+1);
}
function refill4(){
  foodOBJ4.display();
  foodOBJ4.updateFoodStock(foodz+1);
}
function refill5(){
  foodOBJ3.display();
  foodOBJ3.updateFoodStock(foodz+1);
}