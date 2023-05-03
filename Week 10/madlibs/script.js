const inst = document.getElementById('instructions');
const madlib = document.getElementById('madlib');
const button = document.getElementById("button");

function startMadLib(){
  const adjective1 = prompt("Enter an adjective:");
  const adjective2 = prompt("Enter another adjective:");
  const noun1 = prompt("Enter a noun:");
  const noun2 = prompt("Enter another noun:");
  const adjective3 = prompt("Enter an adjective:");
  const noun3 = prompt("Enter a noun:");
  const pluralNoun1 = prompt("Enter a plural noun:");
  const adjective4 = prompt("Enter an adjective:");
  const firstNumber = prompt("Enter a number:");
  const color1 = prompt("Enter a color:");
  const secondNumber = prompt("Enter a number:");
  const pluralNoun2 = prompt("Enter a plural noun:");
  const adjective5 = prompt("Enter an adjective:");
  const place = prompt("Enter a place:");
  const color2 = prompt("Enter a color:");
  const pluralNoun3 = prompt("Enter a plural noun:");
  const verb = prompt("Enter a verb:");
  const adverb = prompt("Enter an abverb:");
  const sillyName1 = prompt("Enter a silly name:");
  const sillyName2 = prompt("Enter another silly name:");

  const message = `Sonic's abode is a very <b>${adjective1}</b> place. At first glance, 
  it seems like a/an <b>${adjective2}</b> cave, but if you look closer, you'll see it's 
  actually a comfortable <b>${noun1}</b>. For one, Sonic has a super-cozy beanbag 
  <b>${noun2}</b>. When he feels like listening to some <b>${adjective3}</b> tunes from 
  the 1980s, Sonic turns on his old-school <b>${noun3}</b>, pulls out his collection of 
  <b>${pluralNoun1}</b>, and jams out. In addition to great tunes, Sonic has plenty of	
  <b>${adjective4}</b> equipment to keep him busy. There's a dryer that Sonic uses as a 
  treadmill to run <b>${firstNumber}</b>	miles a day. He has a/an <b>${color1}</b> 
  Ping-Pong table where he plays against...himself. (His record is 
  <b>${secondNumber}</b> wins and zero losses!) And for that final touch, Sonic hung 
  <b>${pluralNoun2}</b> all over his cave walls. He's got a/an <b>${adjective5}</b> 
  photo of (the) <b>${place}</b> next to a/an <b>${color2}</b> poster of 
  <b>${pluralNoun3}</b>. Sonic often loves to <b>${verb}</b> in his 
  cave. He also <b>${adverb}</b> runs over to invite his friends <b>${sillyName1}</b> 
  the Fox <b>${sillyName2}</b> the Echidna to his cave to do it with him!`;

  inst.style.visibility = "hidden";
  button.style.visibility = "hidden";
  madlib.innerHTML = message;
}

button.addEventListener("click", startMadLib);
