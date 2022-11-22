let count = 0;

document.getElementById("plus").onclick = function(){
    count +=1;
    document.getElementById("CountLabel").innerHTML = count;
}

document.getElementById("minos").onclick = function(){
  count -=1;
  document.getElementById("CountLabel").innerHTML = count
  
}

document.getElementById("reset").onclick = function(){
  count =0;
  document.getElementById("CountLabel").innerHTML = count
  
}

document.getElementById("as").onclick = function(){
  count +=10;
  document.getElementById("CountLabel").innerHTML = count
  
}

document.getElementById("me").onclick = function(){
  count +=100;
  document.getElementById("CountLabel").innerHTML = count
  
}

function ly(){
  if(count>1000)
   document.getElementById("Label").innerHTML = "ct"
  
}

ly();