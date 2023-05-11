    //Get current date
    //Compare to inputted birthdate
    bday = new Date(1977, 4, 7);
    bday_month = bday.getMonth();
    bday_day = bday.getDate();

    today = new Date();
    current_month = today.getMonth();
    current_day = today.getDate();

    message = document.getElementById("message");
    image = document.getElementById("birthday_image");
    // getelementbyid for birthday image

    if (bday_month == current_month && bday_day == current_day){
      message.innerHTML = "It's your birthday!"
      image.src = "parrot-dancing-parrot.gif";
    }

    else{
      message.innerHTML = "It's not your birthday. It will be soon :)";
      image.src = "cat-pussycat.gif"
    }