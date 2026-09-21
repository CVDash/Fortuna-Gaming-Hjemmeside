/*FUNKTION TIL AT ÅBEN DROPDOWN VINDUE NÅR DU TRYKKER PÅ DE TRE LINJER ELLER SLUKKER DEN HVIS DEN ER ÅBEN ALLEREDE*/

function dropdownopen() {
    var x = document.getElementById("dropdown");
     if (x.style.display === "flex") {
        x.style.display = "none";
     } else {
        x.style.display = "flex";
       }

/*FUNKTION TIL AT VISE X NÅR DU TRYKKER PÅ DE TRE LINJER ELLER SLUKKER DEN HVIS DEN ER ÅBEN ALLEREDE*/

    var y = document.getElementById("close")
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
/*FUNKTION TIL AT VISE DE TRE LINJER NÅR DU TRYKKER PÅ X ELLER SLUKKER DEM HVIS DE ER ÅBNE ALLEREDE*/

    var z = document.getElementById("open")
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
   }

   


 


    