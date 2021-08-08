document.querySelector(".skillbutton").addEventListener("click", function () {

    document.querySelector(".afterclick").classList.remove("hiddenclass");
    document.querySelector(".skillbutton").classList.add("hiddenclass");
    document.querySelector(".photoone").classList.remove("hiddenclass");
    var popsound = new Audio("assets/popsound.mp3");
    popsound.play();
    

    setTimeout(function() {
        
        document.querySelector(".phototwo").classList.remove("hiddenclass");
        popsound.play();

        setTimeout(function() {


          document.querySelector(".photothree").classList.remove("hiddenclass");
          popsound.play();

          setTimeout(function() {

            document.querySelector(".photofour").classList.remove("hiddenclass");
            popsound.play();

            
            document.querySelector(".tooltiptext").classList.add("hiddenclass");
          }, 300);
        }, 300);
      
      }, 300);


});