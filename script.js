    let timesRand;
    var doe = true;
    var a = 1;
    let isClicked = []
    var dice1 = 0;
    var diceT = 0;
    var first = 1;
    var one = 1;
    let Value_set =[[],[]]
    let ran = [[],['true']]
    let allPoints = [[0],[0]]
    let OncePerPlayer = [[true],[true]]
    let TESTV;
    let l;
    let ElementE=0;
    let Player = 0;
    let dice = 0;
    let RollDice = false

// Debugging -------------------------------------------------------------------------
    function Debug(){
      console.log("%c-------------------------------------","color: #bada55");
      console.log("%cDebugging Info ...","color: #bada55");
      console.log("%cFirst: " + first, "color: green;");
      imgInfo()
      console.log("%cPlayer: "+Player, "color: green;")
      console.log("%cRan: "+ran, "color: green;")
      console.log("%cCondition:"+ !ran[Player].includes("true"), "color: green;");
      console.log("%cAllPoints(Player): "+allPoints[Player][0], "color: green;")
      console.log("%cOncePerPlayer(Player): "+OncePerPlayer[Player][0], "color: green;")
      console.log("%cALL POINTS: "+ allPoints, "color: green;")
      console.log("%cIs Clicked: "+isClicked, "color: green;")
      console.log("%cdiceT: "+diceT, "color: green;")
      console.log("%ca: "+a, "color: green;")
      console.log("%cdice: "+dice, "color: green;")
      console.log("%cElement: "+ElementE, "color: green;")
      console.log("%RollDice: "+RollDice, "color: green;")
      console.log("%c-------------------------------------","color: #bada55");
    }
// -----------------------------------------------------------------------------------
    function imgInfo(){
      var i = 1
      while(i<= 5){
          var imgId = "img"+i;
          var imgElement = document.getElementById(imgId);
          var imgInfo = imgElement.getAttribute('data-info');
          i += 1
          console.log("%c"+ imgInfo, "color: green;")
        }
    }
// -----------------------------------------------------------------------------------

    function Test(){
    
     var TEST = document.getElementById("ijusrg").value
     allPoints[Player][0] = TEST
    }



    window.onload = function() {
      var first = 1;
      var one = 1;
  
      while (first !== 6) {
          var imgElement = document.getElementById("img" + first.toString());
  
          // Überprüfen, ob das Element gefunden wurde
          if (imgElement) {
              imgElement.setAttribute('data-info', one);
              
          }
  
          first += 1;
          
      }
  };



// Change ------------------------------------------------------------------------------------------------
    function change(Change,ID,Player){
      var Points = 0;
      
 if(!RollDice){
    
    // Change shown Points of Player 1/2 only 1´s  
      if (Change === 1 && !Value_set[Player].includes(1) && !ran[Player].includes("true")){
        for (let i = 1; i <= 5; i++) {
          var imgId = "img"+i;
          var imgElement = document.getElementById(imgId);
          var imgInfo = imgElement.getAttribute('data-info');
          
          if (imgInfo === "1"){
            Points +=1;
            object = document.getElementById(ID)
            object.innerHTML = Points

           }
          }
        Value_set[Player].push(1)
        
        ran[Player].push("true") 

        }
    // Change shown Points of Player 1/2 only 2´s  
      else if (Change === 2 && !Value_set[Player].includes(2) && !ran[Player].includes("true")){
          for (let i = 1; i <= 5; i++) {
            var imgId = "img"+i;
            var imgElement = document.getElementById(imgId);
            var imgInfo = imgElement.getAttribute('data-info');
            
            if (imgInfo === "2"){
              Points +=2;
              object = document.getElementById(ID)
              object.innerHTML = Points

             }
            }
          Value_set[Player].push(2)
          
          }
    // Change shown Points of Player 1/2 only 3´s  
      else if (Change === 3 && !Value_set[Player].includes(3) && !ran[Player].includes("true")){
            for (let i = 1; i <= 5; i++) {
              var imgId = "img"+i;
              var imgElement = document.getElementById(imgId);
              var imgInfo = imgElement.getAttribute('data-info');
              
              if (imgInfo === "3"){
                Points +=3;
                object = document.getElementById(ID)
                object.innerHTML = Points

               }
              }
            Value_set[Player].push(3)
            ran[Player].push("true")
            }
    // Change shown Points of Player 1/2 only 4´s  
      else if (Change === 4 && !Value_set[Player].includes(4) && !ran[Player].includes("true")){
              for (let i = 1; i <= 5; i++) {
                var imgId = "img"+i;
                var imgElement = document.getElementById(imgId);
                var imgInfo = imgElement.getAttribute('data-info');
                
                if (imgInfo === "4"){
                  Points +=4;
                  object = document.getElementById(ID)
                  object.innerHTML = Points

                 }
                }
              Value_set[Player].push(4)
              ran[Player].push("true")
              }
    // Change shown Points of Player 1/2 only 5´s  
      else if (Change === 5 && !Value_set[Player].includes(5) && !ran[Player].includes("true")){
                for (let i = 1; i <= 5; i++) {
                  var imgId = "img"+i;
                  var imgElement = document.getElementById(imgId);
                  var imgInfo = imgElement.getAttribute('data-info');
                  
                  if (imgInfo === "5"){
                    Points +=5;
                    object = document.getElementById(ID)
                    object.innerHTML = Points

                   }
                  }
                Value_set[Player].push(5)
                ran[Player].push("true")
                }
    // Change shown Points of Player 1/2 only 6´s  
      else if (Change === 6 && !Value_set[Player].includes(6) && !ran[Player].includes("true")){
                  for (let i = 1; i <= 5; i++) {
                    var imgId = "img"+i;
                    var imgElement = document.getElementById(imgId);
                    var imgInfo = imgElement.getAttribute('data-info');
                   
                    if (imgInfo === "6"){
                      Points +=6;
                      object = document.getElementById(ID)
                      object.innerHTML = Points
       
                     }
                    }
                  Value_set[Player].push(6)
                  
                  }
      if (Points === 0 && !ran[Player].includes("true")){
        
        object = document.getElementById(ID)
        object.innerHTML = Points
      }
       
      if (Player === 0){ 
        if (ran[1].includes("true")){
          ran[1] = ran[1].filter(item => item !== "true");

      }

    }
    
      if (Player === 1){
        if (ran[0].includes("true")){
          ran[0] = ran[0].filter(item => item !== "true");

      }
    }


    var placeholder2 = Player+1
    allPoints[Player][0] += 63;
    all = document.getElementById("All"+placeholder2)
    all.innerHTML = allPoints[Player][0]
    

    if(allPoints[Player][0] >= 63 && OncePerPlayer[Player][0]){
   
      ran[1] = ran[1].filter(item => item !== "true");
      allPoints[Player][0] += 35;
      all.innerHTML = allPoints[Player][0]
      OncePerPlayer[Player][0] = false
    }else if(!OncePerPlayer[Player][0]){
      var placeholder2 = Player+1
      allPoints[Player][0] += Points;
      all = document.getElementById("All1"+placeholder2)
    }
    
}
RollDice = true
    }
    
//  ------------------------------------------------------------------------------------------------



    function Run(){
        a = 1;
        Random();
      
    }

// Change ------------------------------------------------------------------------------------------------

    function Random(){
  
        if (isClicked.includes(a.toString())){
          a +=1;
        }else{
          
          diceT = Math.floor(Math.random() * 6) + 1;
          var imgElement = document.getElementById("img"+a);
          imgElement.setAttribute('data-info', diceT);
          
          dice1 = document.getElementById("img"+a);
          dice1.src = diceT + ".jpg";
          a+=1;
      }
       
      
      if (a !== 6 && a < 6){
        setTimeout(Random, 50);
        
      }else{
      RollDice = false
    }
     }
//     ------------------------------------------------------------------------------------------------


// Würfel ------------------------------------------------------------------------------------------------

    function Würfel(dice){
      var isExisting = isClicked.includes(dice);
      if (!isExisting){
        isClicked.push(dice)
      }else{
        isClicked = isClicked.filter(item => item !== dice);
        
        ElementE = document.getElementById("img"+dice);
        ElementE.style.outline = "0px solid red"
      }
      
      var placeholder = 0

      for (let element of isClicked){
        let Element = document.getElementById("img"+isClicked[placeholder]);
        Element.style.outline = "2px solid red";
        placeholder += 1
        
      }


    }
// ------------------------------------------------------------------------------------------------------------------

    