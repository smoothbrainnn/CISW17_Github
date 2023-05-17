    const help = document.getElementById("help");
    help.style.visibility = "hidden";

    const nojs = document.getElementById("nojs");
    nojs.style.visibility = "hidden";

    function showHelp(e){
      //show/hide "help" div when ? or h is pressed
      if((e.keyCode == 72 || e.keyCode == 191) && help.style.visibility == "hidden"){
        help.style.visibility = "visible";
      }

      else if((e.keyCode == 72 || e.keyCode == 191) && help.style.visibility == "visible"){
        help.style.visibility = "hidden";
      }

    }

    document.onkeydown = showHelp;