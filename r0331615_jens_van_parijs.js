    window.onload = function() {
    let fout = document.getElementById("fout");
    let fout1 = document.getElementById("fout1");
    let goed = document.getElementById("goed");
    let goed1 = document.getElementById("goed1");
    let betalingswijze = document.getElementById("betalingswijze");
    let betalingswijze1 = document.getElementById("betalingswijze1");
    fout1.style.visibility = "hidden";
    goed1.style.visibility = "hidden";
    betalingswijze1.style.visibility = "hidden";

    
};
    // https://stackoverflow.com/questions/22234219/hide-div-while-the-page-is-loading
  
    
    let teller = 0;
    let eldomein = "";
    let elbegin = "";
   function validateForm()
   {
    
    let leeg = false;
    let ww1 = false;
    let ww2 = false;
    const errors = [];
    

    let voornaam = document.getElementById("voornaam").value;
    var a = voornaam;
    var b = "voornaam";
    checkemptyField(a,b);  
    let naam = document.getElementById("naam").value;
    var a = naam;
    var b = "naam";
    checkemptyField(a,b);
    let gebruikersnaam = document.getElementById("gebruikersnaam").value;
    var a = gebruikersnaam;
    var b = "gebruikersnaam";
    checkemptyField(a,b);
    let email = document.getElementById("email").value;
    var a = email;
    var b = "email";
    if(!checkemptyField(a,b)){
    
        if (!validateEmail(email))
        {
            errors.push("E-mailadres is niet correct")
        }
    };
    let wachtwoord = document.getElementById("ww").value;
    var a = wachtwoord;
    var b = "wachtwoord";
    if(!checkemptyField(a,b))
    {
        ww1 = true;
    };
    let checkwachtwoord = document.getElementById("wwcheck").value;
    var a = checkwachtwoord;
    var b = "herhaal wachtwoord";
    if(!checkemptyField(a,b))
    {
        ww2 = true;
    };
    if(ww1 && ww2)
    {
        checkPasword(checkwachtwoord,wachtwoord);
    }
    
    let adres = document.getElementById("adres").value;
    var a = adres;
    var b = "adres";
    checkemptyField(a,b);
    let land = document.getElementById("land").value;
    var a = land;
    var b = "land";
    checkemptyField(a,b);
    let provincie = document.getElementById("provincie").value;
    var a = provincie;
    var b = "provincie";
    checkemptyField(a,b);
    let postcode = document.getElementById("postcode").value;
    var a = postcode;
    var b = "postcode";
    if(!checkemptyField(a,b)){
        checkPC(postcode)
    };
 
    let betaling = document.querySelector('input[name = "flexRadioDefault"]:checked').value;
    validatePayment(betaling);

    let voorwaarde = document.querySelector('input:checked').value;
    if (voorwaarde != ""){
        leeg = true;
        errors.push("je moet de algemene voorwaarden accepteren.");
    }
    
    
    if(leeg === true){
        displayErrors(fout);
        goed1.style.visibility = "hidden";
        betalingswijze1.style.visibility = "hidden";

    }

    else if (leeg === false){
        fout1.style.visibility = "hidden"
        goed1.style.visibility = "visible";
        betalingswijze1.style.visibility = "visible";
    };
    teller ++;
   
   console.log(voorwaarde);


function checkemptyField(a,b)
  {
    
    if (a === "" || a === "Kies een land" || a === "Kies een provincie")
    { 
        let boodschap = "het veld " + b + " is vereist.";
        errors.push(boodschap);
        leeg = true;
        return true
    };
     return false;
    
  };

  function displayErrors() {
    if (teller > 0)
    {
        fout1.innerHTML = "";
 
    }
    

      for (let i = 0; i < errors.length; i++) {
        const error = errors[i];
        const errorboodschap = document.createElement("p");
        errorboodschap.textContent = error;
        fout1.appendChild(errorboodschap);
        //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
      
      fout1.style.visibility = "visible";
    }
    
};

function validatePayment(betaling)
{
    betalingswijze1.innerHTML = "<h4>Betalingswijze</h4>";
    if(betaling != "default")
    {
        
        const betaal = document.createElement("p")
    betaal.textContent = "Je betalingswijze is " + betaling;
    betalingswijze1.appendChild(betaal);
    }
    else{
    leeg = true;
    errors.push("Er werd geen betaalwijze geselecteerd");
    }
    
};

function validateEmail(email)
{
    //https://www.aspsnippets.com/Articles/Email-validation-without-using-Regular-Expression-in-JavaScript.aspx
        //Check minimum valid length of an Email.
        if (email.length <= 2) {
            return false;
        }
        //If whether email has @ character.
        if (email.indexOf("@") == -1) {
            return false;
        }
 
        var parts = email.split("@");
        var dot = parts[1].indexOf(".");
        var len = parts[1].length;
        var dotSplits = parts[1].split(".");
        var dotCount = dotSplits.length - 1;
        var begin = parts[0];
        elbegin = begin.substring(0,1);
        var domein = parts[1];
        eldomein = domein.substring(0,1);

        
        if ( !elbegin.match(/[a-z]/) && !elbegin.match(/[0-9]/))
        {
            return false
        }

        if ( !eldomein.match(/[a-z]/) && !eldomein.match(/[0-9]/))
        {
            return false
        }


        if (begin.length < 1) {

            return false;
        }
 
 
        //Check whether Dot is present, and that too minimum 1 character after @.
        if (dot == -1 || dot < 2 || dotCount > 2) {
            return false;
        }
       
 
        //Check whether Dot is not the last character and dots are not repeated.
        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
                return false;
            }
        }
 
        return true;
    };

    function checkPasword(checkwachtwoord, wachtwoord)
    {
        if(wachtwoord.length < 8)
        {
            errors.push("Het wachtwoord moet minstens 8 karakters lang zijn.")
        }
        
        else if(wachtwoord != checkwachtwoord)
        {
            errors.push("Beide wachtwoorden moeten hetzelfde zijn.")
        }
    };

    function checkPC(postcode){
        if( postcode < 1000 || postcode > 9999)
        {
            errors.push("De waarde van postcode moet tussen de 1000 en de 9999 liggen.")
        }
    }

   
};   
   


  
