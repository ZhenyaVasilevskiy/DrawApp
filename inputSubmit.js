function getCommand(){
    var text = document.getElementById("input_form").value;
    menu(parser(text," "));
    document.getElementById("input_form").value="";
}

var parser = function (stringToSplit, separator) {
  var arrayFromString = stringToSplit.split(separator);
  return arrayFromString;
}

var menu = function (commandArray){

  let x = commandArray[0];
  switch (x) {
    case "c":
        if ((commandArray.length>3)||(commandArray.length<3)){
                  alert("Bad input");
               }
        else if((commandArray[1]>20)||(commandArray[1]<3)||(commandArray[2]<3)||(commandArray[2]>20)){
                  alert("Incorrect size.Canvas can be 3x3-20x20");
               }
        else{
                myMatrix = createMatrixArray(parseInt(commandArray[2],10),parseInt(commandArray[1],10))
                createCanvas(myMatrix);
            }
       break;
    case "l":
       if(((commandArray.length>5)||(commandArray.length<5))||((commandArray[1]!=commandArray[3])&&(commandArray[2]!=commandArray[4]))){
                alert("Bad input");
            }
      else if (commandArray[1]==commandArray[3]){
               createVertical(myMatrix,parseInt(commandArray[1],10),parseInt(commandArray[2],10),parseInt(commandArray[4],10))
            }
      else if (commandArray[2]==commandArray[4]){
                createHorizontal(myMatrix,parseInt(commandArray[2],10),parseInt(commandArray[1],10),parseInt(commandArray[3],10))
            }
        break;

      case "r":
      if(((commandArray.length>5)||(commandArray.length<5))/*||((commandArray[1]!=commandArray[3])&&(commandArray[2]!=commandArray[4]))*/)
            {
                alert("Bad input");
            }
       else {
          createRectangle(myMatrix,parseInt(commandArray[1],10),parseInt(commandArray[2],10),parseInt(commandArray[3],10),parseInt(commandArray[4],10),createHorizontal,createVertical)
           }
      break;
      case "b":
      if ((commandArray.length>4)||(commandArray.length<4)){
          alert("Bad input");
          }
      else{
      bucketFill(myMatrix,parseInt(commandArray[1],10),parseInt(commandArray[2],10),commandArray[3])
         }
      break;
        default:
        alert("Retype the commands");

  }
draw(myMatrix);
}
