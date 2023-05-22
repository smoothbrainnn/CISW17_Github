//Define variables for the function
//grab the fname form element
const fname = document.getElementById('fname');
//grab the welcome div
const welcome_message = document.getElementById('welcome');
const step1 =  document.getElementById('step1');
const step2 =  document.getElementById('step2');

step2.style.display = "none";

function hideStep1(){
  step1.style.display = "none";
}

function showStep2(){
  step2.style.display = "block";
}

//Display greeting when a button is clicked
function greeting(){
  if(fname.value == ""){
    //Default value
    var name = "World";
  }

  else{
    //stores the value entered in the fname form
    var name = fname.value;
  }
  
  //Display greeting
  let message = `Hello ${name}`;

  //change the inner html
  welcome_message.innerHTML = message;

  fname.value = "";

  hideStep1();

  showStep2();
}