

function signIn() {

    var text1 = document.getElementById("Text1").value;
    var text2 = document.getElementById("Text2").value;
    var text3 = document.getElementById("Text3").value;

    if (text1 == "" && text2 == "" && text3 == "") {

        var oneT = document.getElementById("Text1");
        oneT.style.border = "2px solid Red";
        var twoT = document.getElementById("Text2");
        twoT.style.border = "2px solid Red";
        var threeT = document.getElementById("Text3");
        threeT.style.border = "2px solid Red";
       
        return false;

    }
    else if (text1 == "" || isNaN(text1) == false) {

        var oneT = document.getElementById("Text1");
        oneT.style.border = "2px solid Red";
      document.getElementById("Text2").style.border = "2px solid Grey";
       document.getElementById("Text3").style.border = "2px solid Grey";
        return false;

    }
    else if (text2 == "" || isNaN(text2) == false) {

        var twoT = document.getElementById("Text2");
        twoT.style.border = "2px solid Red";        
        document.getElementById("Text1").style.border = "2px solid Grey";
        document.getElementById("Text3").style.border = "2px solid Grey";
        return false;

    }
    else if (text3 == "" || isNaN(text3) == false) {

        var threeT = document.getElementById("Text3");
        threeT.style.border = "2px solid Red";        
        document.getElementById("Text2").style.border = "2px solid Grey"
        document.getElementById("Text1").style.border = "2px solid Grey";
        return false;
    }
    else {

        var userName = text1 + " " + text2;
        localStorage.setItem('username', JSON.stringify(userName));

        return true;
    }


}