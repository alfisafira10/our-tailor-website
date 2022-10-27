// pesan awal
var n = prompt("Masukan nama anda:");
var c = confirm("Hai "+n+"! Mau dapatkan diskon 70%?");

if (c == true) {
    alert('Yuk order sekarang!');
}else{
    alert('Mungkin di lain waktu yaa!');
}

// drop down
var tombolMenu = document.getElementsByClassName('drop-down')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}