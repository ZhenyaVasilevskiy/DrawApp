var myMatrix;

var createMatrixArray = function (rows,columns){ //динамически создаем матрицу.
  var arr = new Array();
  for(var i=0; i<rows+2; i++){
    arr[i] = new Array();
    for(var j=0; j<columns+2; j++){
          arr[i][j] = '&#160';
    }
  }
  return arr;
}


var createCanvas = function (arr){     //создаем область для рисования.
  for (var i = 0; i< arr.length;i++){
    for (var j =0 ; j< arr[0].length;j++)
      if ( i == 0 || i == arr.length-1){
      arr[i][j] = "-" ; /*&#8212';*/
      }
      else if (j==0){
      arr[i][j]='|'
      }
      else if (j==arr[0].length-1){
      arr[i][j]='|'
      }
  }
}


var createHorizontal = function (arr,x,y1,y2){ //Добавление горизонтальных линий.
  if(x>arr.length||y1>arr[x].length-2||y2>arr[x].length-2){
    alert("Too high values");
    return 0;
  }
  if(x==0||y1==0||y2==0){
    alert("Too small values");
    return 0;
  }
  if(y1>y2){
      [y1, y2] = [y2, y1];
  }
  for(var i = y1 ; i<=y2 ; i++){
      arr[x][i]='x'
    }
}

var createVertical = function (arr,y,x1,x2){ // //Добавление вертикальных линий.
  if(x1>=arr[y].length-1||y>arr.length||x2>=arr[y].length-1){
    alert("Too high values");
    return 0;
  }
  if(x1==0||y==0||x2==0){
    alert("Too small values");
    return 0;
  }
  if(x1>x2){
    [x1, x2] = [x2, x1];
  }
  for(var i = x1 ; i<=x2 ; i++){
     arr[i][y]='x';
    }
    alert("ver");
}

function createRectangle(arr,x1,y1,x2,y2,f1,f2) //Добавление прямоугольника.
{
  f1(arr,y1,x1,x2)
  f1(arr,y2,x1,x2)
  f2(arr,x1,y1,y2)
  f2(arr,x2,y1,y2)
}

function bucketFill(arr,x,y,c){
  if(x>arr[0].lenght||y>arr.length||x<1||y<1){
    alert("Bad input");
    return 0;
  }
  for (var i = 1; i<y;i++){
    for (var j =1 ; j< x;j++){
      if(arr[i][j]=="x"){
        j++;
      }
      arr[i][j]= c;
    }
  }
}

var draw = function (arr) { // отрисовка всей матрицы
  var out="";
  for (var i = 0; i< arr.length;i++){
    for (var j =0 ; j< arr[0].length;j++){
      out+=arr[i][j]+" ";
    }
  out+='<br>';
  }
  document.querySelector('.out').innerHTML = out;
}

/*
var xCompare = function(x1,x2){
  return [x1, x2] = [x2, x1];
}

var yCompare = function(y1,y2){
  return [y1, y2] = [y2, y1];
}
*/
