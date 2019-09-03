/*
Author: Raveena Sharma
Id: 19482564
*/
// preloader is a global variable
var preload;

function init(){
  //call function
  preloadAssets();
}

function preloadAssets(){
  // load images what you want
  preload = new createjs.LoadQueue(false);
  preload.installPlugin(createjs.Sound);  // install plugin for sound
  createjs.Sound.registerSound("audio/rain.wav","regSound");  //register sound
  createjs.Sound.registerSound("audio/good.wav","regSound1");
  createjs.Sound.registerSound("audio/bad.wav","regSound2");
  createjs.Sound.registerSound("audio/start.wav","regSound3");
// load images
  preload.loadFile({id:"hero",src:"images/sprite.png"});
  preload.loadFile({id:"img1",src:"images/earth.png"});
  preload.loadFile({id:"tree",src:"images/tree.png"});
  preload.loadFile({id:"bin",src:"images/bins.png"});
  preload.loadFile({id:"water",src:"images/riverWaste.png"});
  preload.loadFile({id:"rain",src:"images/waterstorage.png"});
  preload.loadFile({id:"no_img",src:"images/no.png"});
  preload.loadFile({id:"yes",src:"images/yes.png"});
  preload.loadFile({id:"cloud",src:"images/clouds.png"});
  preload.on("complete", setUpGraphics, this);
}


function setUpGraphics(){
  //get canvas
  canvas = document.getElementById("slide");
  var stage = new createjs.Stage(canvas); // set stage
  
  // create containers to store data
  var container = new createjs.Container();
  var container2 = new createjs.Container();
  var container3 = new createjs.Container();
  var container4 = new createjs.Container();
  var container5 = new createjs.Container();
  var container6 = new createjs.Container();
  var theend = new createjs.Container();
  var btn1 = new createjs.Container();
  var img1 = new createjs.Container();
  var rainWater = new createjs.Container();
  var bin = new createjs.Container();
  var yes = new createjs.Container();
  var no_img = new createjs.Container();
  var water = new createjs.Container();
  var cloud = new createjs.Container();
  var land = new createjs.Container();
  
  

  // The details of our spritesheet and frame
  var data = {
    // spritesheet image
    images: [preload.getResult("hero")],
    // structure of spritesheet image, size of each frame, number of frames
    frames: { width:100, height:100, count:20, spacing:0, margin:0},
    animations: {
        // stand displays a static frame
        stand:10,
        // true frame by frame animation - frames specified in array
        // speed allows us to influence frame by frame speed
        run:{
            frames: [0,1,2,3,4,5,6,7,8,9,10],
            speed: 0.03

        }

    }
};


// create new spritesheet object, create new sprite that will use stan
var spriteSheet = new createjs.SpriteSheet(data);  //set spritesheet
var runSprite = new createjs.Sprite(spriteSheet, "stand"); //set position

// scale up sprite since our spritesheet images are small
runSprite.scaleX = 3.0; runSprite.scaleY =3.0 ;


// create our tween and call gotoAndPlay to change the sprite animation
createjs.Tween.get(runSprite,{loop: true}).call(function(){
    runSprite.gotoAndPlay("run");
  }).wait(6000)
  .call(function(){
    runSprite.gotoAndPlay("stand");
  })
  stage.addChild(runSprite);  //add sprite animation in stage

  function start(){    
    btn1.x = 750;   //set button position using x and y
    btn1.y = 300;
    
    var target = new createjs.Shape();
    target.graphics.beginFill("#F00").drawRect(-10, -10, 180, 50).beginFill("#FFF"); //provide color to shape and drawRect is for Rectangle
    btn1.addChild(target);
    
    var txt3 = new createjs.Text("Start Animation!", "20px Arial", "#fff");  // add text
    
    txt3.textBaseline = "top";
    btn1.addChild(txt3); // assign text to shape
    stage.addChild(btn1);  // add button on stage
    
    btn1.on("click", function (evt) {     // on click functionality
      //alert("single Clicked the container object");
      createjs.Tween.get(btn1, {loop: false})
      .to({alpha: 0, x: -700}, 1600, createjs.Ease.getBackIn)    //tweenjs ease animation style
      .wait(1000)   // after a second
      .call(sec2);  //call another function
       // alert("m in 4th part");
    });
    }
 function bins_img(){
    var bins = new createjs.Bitmap("images/bins.png");   // call image
    bins.regX = 300;     //set position
    bins.regY = 100;
    bins.scaleX = 1.0;   //set scale
    bins.scaleY = 1.0;
    bins.x = 400;
    bins.y = 50;
    createjs.Tween.get(bins, {loop: false}).to({alpha: 1, x:400}, 3000, createjs.Ease.quadInOut);   //add animation
    bin.addChild(bins);
    stage.addChild(bin);  
  }
  function cloud_img(){
    var clouds = new createjs.Bitmap("images/clouds.png");
    clouds.regX = 300; 
    clouds.regY = 100;
    clouds.scaleX = 1.0; 
    clouds.scaleY = 1.0;
    clouds.x = 400;
    clouds.y = 50;
    createjs.Tween.get(clouds, {loop: false}).to({alpha: 1, x:400}, 3000, createjs.Ease.quadInOut);
    cloud.addChild(clouds);
    stage.addChild(cloud);
  }
  function yes_img(){
    var say_yes = new createjs.Bitmap("images/yes.png");
    say_yes.regX = 300; say_yes.regY = 100;
    say_yes.scaleX = 1.0; say_yes.scaleY = 1.0;
    say_yes.x = 400;
    say_yes.y = 150;
    createjs.Tween.get(say_yes, {loop: false}).to({alpha: 1, x:400}, 3000, createjs.Ease.quadInOut);
    createjs.Sound.play("regSound1");
    yes.addChild(say_yes);
    stage.addChild(yes);
  }
  function say_no(){
    var sayNo = new createjs.Bitmap("images/no.png");
    sayNo.regX = 300; sayNo.regY = 100;
    sayNo.scaleX = 1.0; sayNo.scaleY = 1.0;
    sayNo.x = 400;
    sayNo.y = 150;
    createjs.Tween.get(sayNo, {loop: false}).to({alpha: 1, x:400}, 3000, createjs.Ease.quadInOut);
    createjs.Sound.play("regSound2");
    no_img.addChild(sayNo);
    stage.addChild(no_img);
  }
  function water_img(){
    
    var water_pollution = new createjs.Bitmap("images/riverWaste.png");
    water_pollution.regX = 300; water_pollution.regY = 100;
    water_pollution.scaleX = 1.0; water_pollution.scaleY = 1.0;
    water_pollution.x = 300;
    water_pollution.y = 100;
    createjs.Tween.get(water_pollution, {loop: false}).to({alpha: 1, x:400}, 3000, createjs.Ease.quadInOut);
    water.addChild(water_pollution);
    stage.addChild(water);
  }
  function save_rain(){
   var rain = new createjs.Bitmap("images/waterstorage.png");
    rain.regX = 300; rain.regY = 100;
    rain.scaleX = 1.0; rain.scaleY = 1.0;
    rain.x = 400;
    rain.y = 100;
    createjs.Tween.get(rain, {loop: false}).to({alpha: 1, x:400}, 3000, createjs.Ease.quadInOut);
    rainWater.addChild(rain);
    stage.addChild(rainWater);
  }
  function land_area(){
    var earth_land = new createjs.Bitmap("images/land.png");
    earth_land.regX = 300; earth_land.regY = 100;
    earth_land.x = 700;
    earth_land.y = 50;
    createjs.Tween.get(earth_land, {loop: false}).to({alpha: 1, x:700}, 3000, createjs.Ease.quadInOut);
    land.addChild(earth_land);
    stage.addChild(land);
   }
  function rain_sound(){
    createjs.Sound.play("regSound");
  }  
  function stop_rain_sound(){
    createjs.Sound.stop("regSound");
  }  
  // Creating coding for text that showing in animation
  var info = new createjs.Text("", "18px Arial", "#");
  info.x = 400;
  info.y = 150;
info.text = "Save Environment\n";
info.text += "In this modern era, environment issues are increasing day by day which  \n" ;
info.text +="is leading to destruction of earth.\n" ;
info.text +="We should take responsibility and take necessary steps to save the earth.";
  container.addChild(info);
  stage.addChild(container);
  container.x = 700;

    createjs.Sound.play("regSound3");   // play sound
    // create js for Tween opration of text
    createjs.Tween.get(container, {loop: false})
    .to({alpha: 1, x: 0}, 2500, createjs.Ease.linear)
    .wait(2000)
    .call(start)
    .wait(3000);
    //.to({alpha: 0, x: -700}, 1600, createjs.Ease.getBackIn);
    //.call(sec4);
   
 function sec2(){
  stage.removeChild(runSprite);  // remove spritesheet from canvas stage
  stage.removeChild(container);  // remove data from canvas stage
  createjs.Sound.play("regSound3");   //play sound
  var earth = new createjs.Bitmap("images/earth.png");  //call image
  earth.regX = 300; earth.regY = 100;
  earth.x = 200;
  earth.y = 50;
  //animation call
  createjs.Tween.get(earth, {loop: false}).to({alpha: 1, x:400}, 1000, createjs.Ease.quadInOut).call(land_area);
  img1.addChild(earth);
  stage.addChild(img1);

// Crating coding for text that showing in animation
      var info1 = new createjs.Text("", "16px Arial", "#");
      info1.x = 400;
      info1.y = 300;

    info1.text = "Earth = 71% water + 29% land.\n";
	  info1.text += "According to current survey land and water pollution are major issues.\n";
	  info1.text += "We are left with less than 3% of drinkable water and we are growing food\n";
	  info1.text += "in polluted land and eating that is leading us to deceases.\n";
      container2.addChild(info1);
      container2.x = -600;
      container2.alpha = 0;
      stage.addChild(container2);
    
      // create js for Tween opration of text
  createjs.Tween.get(container2, {loop: false})
  .to({alpha: 1, x: 0}, 2500, createjs.Ease.linear)
  .wait(5000)
  .to({alpha: 0, x: 700}, 1600, createjs.Ease.getBackIn)
  .wait(2000)
  .call(sec3);
 
     // alert("m in first part");
  
  
 }

 function sec3(){
   //remove previous data from canvas stage
  stage.removeChild(img1);
  stage.removeChild(land);
 // Crating coding for text that showing in animation
 var info1 = new createjs.Text("", "20px Arial", "#");
 info1.x = 400;
 info1.y = 50;

info1.text = "Do not put rubbish in water.\n";
info1.text += "Thats the reason behind water pollution.\n";

 container3.addChild(info1);   //assign data to container
 container3.x = 300;
 container3.alpha = 0;
 stage.addChild(container3);
        // create js for Tween opration of text
    createjs.Tween.get(container3, {loop: false})
    .to({alpha: 1, x: 0}, 2500, createjs.Ease.linear)
    .wait(2000)
    .call(water_img)   //call function 
    .wait(3000)        // wait for 3 second
    .call(say_no)
    .wait(4000)
    .to({alpha: 0, x: -700}, 1600, createjs.Ease.getBackIn)
    .call(sec5);
   }
   var runSprite1;
   function sec4(){
    createjs.Sound.play("regSound3");  //play sound

    // remove data fron canvas stage
    stage.removeChild(rainWater);
    stage.removeChild(yes);
    stage.removeChild(cloud);
    stage.removeChild(container6);

    // Crating coding for text that showing in animation
    var part3 = new createjs.Text("", "16px Arial", "#");
    part3.x = 600;
    part3.y = 150;

    part3.text = "Plant More Trees.";
    part3.text += " \n"; 
    container4.addChild(part3);
    container4.x = 600;
    container4.alpha = 0;
    stage.addChild(container4);
    //stage.getChildByName(container1);
    // create js for Tween opration of text
createjs.Tween.get(container4, {loop: false})
.to({alpha: 1, x: 0}, 2500, createjs.Ease.linear)
.wait(6000);


      // specify the details of our spritesheet and frame by frame animations
  var data = {
    // spritesheet image
    images: [preload.getResult("tree")],
    // structure of spritesheet image, size of each frame, number of frames
    frames: { width:100, height:100, count:20, spacing:0, margin:0},
    animations: {
        // stand displays a static frame
        stand:10,
        // true frame by frame animation - frames specified in array
        // speed allows us to influence frame by frame playback speed
        run:{
            frames: [0,1,2,3,4,5,6,7,8,9,10],
            speed: 0.03

        }

    }
};


// create new spritesheet object, create new sprite that will use stand
var spriteSheet = new createjs.SpriteSheet(data);
var runSprite1 = new createjs.Sprite(spriteSheet, "stand");

// scale up sprite since our spritesheet images are small
runSprite1.scaleX = 3.0; runSprite1.scaleY =3.0 ;
stage.addChild(runSprite1);

// create our tween and call gotoAndPlay to change the sprite animation
createjs.Tween.get(runSprite1,{loop: false}).call(function(){
  runSprite1.gotoAndPlay("run");   //run sprite image
  })
  .wait(10000)
  .call(yes_img)
  .wait(5000)
  .call(end_now);
}
function sec5(){
  //remove data from canvas stage
    stage.removeChild(water);
    stage.removeChild(no_img);
    stage.removeChild(container3);
      // Crating coding for text that showing in animation
            var part5 = new createjs.Text("", "20px Arial", "#");
            part5.x = 400;
            part5.y = 150;
      
            part5.text = "Use Recycle Bins.";
            part5.text += " \n"; 
            container5.addChild(part5);
            container5.x = 600;
            container5.alpha = 0;
            stage.addChild(container5);
            //stage.getChildByName(container1);
          
        // create js for Tween opration of text
        createjs.Tween.get(container5, {loop: false})
        .to({alpha: 1, x: 0}, 2500, createjs.Ease.linear)
        .wait(2000)
        .call(bins_img)
        .wait(3000)
        .call(yes_img)
        .wait(4000)
        .to({alpha: 0, x: -700}, 1600, createjs.Ease.getBackIn)
        .call(sec6);
       }
       function sec6(){
         //remove previous data from canvas stage
        stage.removeChild(bin);
        stage.removeChild(yes);
        stage.removeChild(container5);
        // Crating coding for text that showing in animation
              var part6 = new createjs.Text("", "16px Arial", "#");
              part6.x = 700;
              part6.y = 50;
        
              part6.text = "Store Rain Water.\n";
              part6.text += " \n"; 
              container6.addChild(part6);
              container6.x = 700;
              container6.alpha = 0;
              stage.addChild(container6);
             
           // create js for Tween opration of text
          createjs.Tween.get(container6, {loop: false})
          .to({alpha: 1, x: 0}, 2500, createjs.Ease.linear)
          .wait(2000)     //wait for 2 sec.
          .call(rain_sound)
          .wait(4000)
          .call(cloud_img)   // call function
          .wait(4000)
          .call(save_rain)
          .wait(3000)
          .call(yes_img)
          .wait(4000)
          .to({alpha: 0, x: -700}, 1600, createjs.Ease.easeInOut)  // tween animation
          .call(stop_rain_sound)
          .wait(3000)
          .call(sec4);
         }
  function end_now(){
    stage.removeChild(container4);
    stage.removeChild(yes);
 // Crating coding for text that showing in animation
 var part3 = new createjs.Text("", "30px Arial", "#");
 part3.x = 600;
 part3.y = 150;

 part3.text = "THE END";
 part3.text += " \n"; 
 theend.addChild(part3);
 theend.x = -600;
 theend.alpha = 0;
 stage.addChild(theend);
 //stage.getChildByName(container1);


 // create js for Tween opration of text
createjs.Tween.get(theend, {loop: false})
.to({alpha: 1, x: 0}, 2500, createjs.Ease.easeIn)
.wait(6000);

  }
  createjs.Ticker.setFPS(60);  //frame oer second
  createjs.Ticker.addEventListener("tick", stage);
  
  function stage(){
    stage.update();
  }
}
