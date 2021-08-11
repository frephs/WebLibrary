const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
     const hex = x.toString(16)
     return hex.length === 1 ? '0' + hex : hex
}).join('')

console.log("hey");

colors = [];
numeri = [];
imgs = document.querySelectorAll("img");
googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

for (i = 0; i<imgs.length;i++){
     console.log("hey");
     let colorThiefs = new ColorThief();
     let img = new Image();
     let imageURL = imgs[i].src;
     img.src = googleProxyURL + encodeURIComponent(imageURL);
     img.crossOrigin = 'Anonymous';
     img.alt = i;
     img.addEventListener('load', function() {
          console.log("this is from image " + i);
          console.log(colorThiefs.getColor(img), img.alt);
          console.log(colorThiefs.getPalette(img)[2], img.alt);

          rgb = colorThiefs.getColor(img);
          colors.push([rgbToHex(rgb[0], rgb[1], rgb[2]), img.alt]);
     });

}

console.log(colors);
for(i=0;i<libri.length;i++){
     $(".bookside")[colors[i][1]].style.backgroundColor = colors[i][0];
     console.log(colors[i]);
}
