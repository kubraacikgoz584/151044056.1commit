



function validation() {
    var targetDiv = document.getElementById('error_message');
    var htmlContent = '';
    var AD = document.getElementById("AD").value;
    var SOYADI = document.getElementById("SOYADI").value;
    var TELEFON = document.getElementById("TELEFON").value;
    var EMAİL = document.getElementById("EMAİL").value;
    var MESAJ = document.getElementById("MESAJ").value; 

    if (AD.length < 5) {
        alert("Lütfen gecerli isim giriniz");
        return;

    }

    if (SOYADI.length < 10) {
        alert("Lütfen gecerli soyisim giriniz");
        return;

    }

    if (isNaN(TELEFON) || TELEFON.length != 10) {
        alert("Lütfen gecerli telefon giriniz");
        return;

    }

    if (EMAİL.indexOf("@") == -1 || EMAİL.length < 6) {
        alert("Lütfen gecerli email giriniz");
        return;

    }

    if (MESAJ.length <= 140) {
        alert("Lütfen gecerli mesaj giriniz");
        return;

    }


    alert("Form Başarıyla Gönderildi.");
    return;



}

