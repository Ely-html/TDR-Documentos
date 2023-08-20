var images = [
    'https://c4.wallpaperflare.com/wallpaper/90/1010/341/barmsee-wallpaper-preview.jpg', 
    'https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg', 
    'https://img.freepik.com/foto-gratis/puesta-sol-sobre-aguas-tranquilas-belleza-espectacular-generada-ia_188544-23059.jpg    '
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}


