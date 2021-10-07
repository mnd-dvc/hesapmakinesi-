function islem(deger) {
    document.gosterge.sonuc.value += deger;
}

function hesapla() {
    var sayi =eval(document.gosterge.sonuc.value);
    document.gosterge.sonuc.value = sayi;
}

function geri() {
    var sayi = document.gosterge.sonuc.value;
    document.gosterge.sonuc.value = sayi.substring(0, sayi.length - 1);
}

function temizle() {
    document.gosterge.sonuc.value = " ";
}
