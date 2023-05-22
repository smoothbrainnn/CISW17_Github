function isBirthday() {
  // hide the picker div
  const picker = document.getElementById("picker")
  picker.style.visibility = "hidden"

  // set today 
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const year = today.getFullYear();

  // set bday
  const bday = new Date(document.getElementById("bday").value);
  const bd_month = bday.getMonth();
  const bd_day = bday.getDate() + 1;

  // test values
  console.log(bd_month, bd_day)

  // check for the birthday
  if (bd_month == month && bd_day == day) {
    console.log("Happy Birthday!")
    document.body.style.backgroundImage = "url('birthday_cupcakes.png')";
  } else {
    console.log("It's not your birthday.")
    document.body.style.backgroundImage = "url('sad_puppy.jpg')";
  }
}

button = document.getElementById('submit');
button.addEventListener('click', isBirthday);