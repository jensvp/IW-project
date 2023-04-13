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
  
    

   function validateForm()
   {
    const errors = [];
    let leeg = false;

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
    checkemptyField(a,b);
    // validateEmail(email);
    // if (validateEmail == false)
    // {
    //     errors.push("E-mailadres is niet correct")
    // }
    let wachtwoord = document.getElementById("ww").value;
    var a = wachtwoord;
    var b = "wachtwoord";
    checkemptyField(a,b);
    let checkwachtwoord = document.getElementById("wwcheck").value;
    var a = checkwachtwoord;
    var b = "herhaal wachtwoord";
    checkemptyField(a,b);
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

    let betaling = document.querySelector('input[name = "flexRadioDefault"]:checked').value;
    validatePayment(betaling);
    
    if(leeg == true){
        displayErrors(fout);
    } 
    
   
console.log(errors);

function checkemptyField(a,b)
  {
    
    if (a === "")
    {
        
        let boodschap = "het veld " + b + " is vereist.";
        errors.push(boodschap);
        leeg = true;
        
    }
    
    
  };

  function displayErrors(leeg) {
  
    
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
    
    const betaal = document.createElement("p")
    betaal.textContent = "Je betalingswijze is " + betaling;
    betalingswijze1.appendChild(betaal);

    if(betaling = "")
    {
        errors.push("Er werd geen betaalwijze geselecteerd");
    }
    else{
        goed1.style.visibility = "visible"
        betalingswijze1.style.visibility = "visible"
    }
    
};



// function validateEmail(email)
// var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// if (email.value.match(validRegex)) {

//   alert("Valid email address!");

//   document.form1.text1.focus();

//   return true;

// } else {

//   alert("Invalid email address!");

//   document.form1.text1.focus();

//   return false;

// }
   
};   
   


  
