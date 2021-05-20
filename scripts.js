function validation(){
    var AD = document.getElementById("AD").value;
    var SOYADI = document.getElementById("SOYADI").value;
    var TELEFON = document.getElementById("TELEFON").value;
    var EMAİL = document.getElementById("EMAİL").value;
    var MESAJ = document.getElementById("MESAJ").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding ="10px";

    if(AD.length<5){
        text = "Lütfen gecerli isim giriniz";
        error_message.innerHTML = text;
        return false;
    }

    if(SOYADI.length<10){
        text = "Lütfen gecerli soyisim giriniz";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(TELEFON) || TELEFON.length !=10){
        text = "Lütfen gecerli telefon giriniz";
        error_message.innerHTML = text;
        return false;
    }

    if(EMAİL.indexOf("@") == -1|| EMAİL.length <6){
        text = "Lütfen gecerli email giriniz";
        error_message.innerHTML = text;
        return false;
    }

    if(MESAJ.length<=140){
        text = "Lütfen gecerli mesaj giriniz";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Başarıyla Gönderildi.");
    return false;
}