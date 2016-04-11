$(document).ready(function()  { 
  // calculation // 
  var procedures = [];
  var total = 0;
  var k;
  var store;
  var target;
  
  // button //
  var i;
  var entry;
  var operation;
  
  // numbers // 
  var value = [];
  var j;
  var num = "";
  var adder;
  var temp;
  var lastdigit;
  var hold;
  var decimal = false;
  
  $("button").click(function() { 

  entry = $(this).html();
    
  for (i = 0; i < entry.length; i++) {
    if (entry[i] == '/' || entry[i] == '*' || entry[i] == "." || entry[i] == '-' || entry[i] == '+' || entry[i] == '=' || entry[i] == 'c') {
      operation = entry[i];
      // gets the procedure
    }   
    if (entry[i] == '0' || entry[i] == '1' || entry[i] == '2' || entry[i] == '3' || entry[i] == '4' || entry[i] == '5' || entry[i] == '6' || entry[i] == '7' || entry[i] == '8' || entry[i] == '9') {
      operation = parseInt(entry[i]);  // gets the number
    }     
  } // end of loop
  
    
  if (operation == '/' || operation == '*' || operation == '-' || operation == '+') { // procedure
      if (typeof Number(num) === 'number') {
      procedures.push(Number(num));
      value = [];
        num = ""
        decimal = false;
      }
      if (procedures.length >= 1) {
      procedures.push(operation);
      }
  }
    
  else if (operation == '=') {        // calculation
    if (procedures.length == 0) {
      $(".inside").text("Enter...");
      total = 0;
      num = "";
      // value = [];
      procedures = [];
    }
    else {
    procedures.push(Number(num));  
    total = procedures[0];
    for (k = 1; k < procedures.length; k++) {
        target = procedures[k];
        if (typeof target === 'number') {
          if (store == '/') {
            total = total / target;
          }
          else if (store == '*') {
            total = total * target;
          }
          else if (store == '-') {
            total = total - target;
          }
          else if (store == '+') {
            total = total + target;
          }
        }
        else {                             // it's an math property
          store = target;
        }    
    }
    
    $(".inside").text(total);
    total = 0;
    num = "";
    value = [];
    procedures = [];
      decimal = false;
    }
  }
    
  else if (operation == 'c') {   // clearing
    $(".inside").text("clear");
    num = "";
    value = [];
    procedures = [];    
  }
  
  else if (Number(num) > 100000000000) {  // Calculation too advanced
    $(".inside").text("Max Reached");
    num = "";
    value = [];
  }
  
    
  else if (typeof operation === 'number' || operation == "." ) {  // number or decimanl
    if (operation == "." && !decimal) {
      num += ".";
      decimal = true;
    } else if (!decimal || typeof operation === 'number') {
      num += operation;
    }
    // value.push(num);
    // if (value.length == 2) {
    //     temp = value[0];
    //     hold = 1;
    //     while (temp > 0) {          
    //         lastdigit = temp % 10;
    //         if (lastdigit != 0) {
    //           num = (Math.pow(10, hold) * lastdigit) + num;
    //         }
    //         temp = Math.floor(temp / 10);
    //         hold += 1;
    //     }
    //     value = [num];
    // }
    
    $(".inside").text(num);
  }
    
  });   
});
