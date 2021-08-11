function loadcontrols() {
     html = `<div class="controls">
     <h2>Controls</h2>
     <form class="" action="index.html" method="post">
     <label for="angle">Angolo</label>
     <input type="range" name="angle" value  id="angle" min=-20 max=23 onchange="changeAngle(libri.length, this.value)"> <br>
     <label for="size">Size</label>
     <input type="range" name="size" id="size" min=50 max=100 onchange="changeZoom(libri.length, this.value)"> <br>
  
     </form>
     </div>`
     document.write(html);
}

function flibri(libri){
     loadcontrols();
     d = new Date().getFullYear();
     console.log(libri);
     document.write("<h1 style='font-size:xxx-large'>Libreria</h1> <div id='bookshelf'>");
     document.write("<div class='anno'><h1>"+"Reading"+"</h1>");
     for (var i=0; i<libri.length;i++){
          try{
               if(libri[i].anno != libri[i-1].anno)
               document.write("<br class='annibr'></div><div class='anno'> <h1>"+libri[i].anno+"</h1>");

          }catch(e){}

          document.write("<a href='https://duckduckgo.com/?q=!ducky+goodreads+"+libri[i].titolo.replace(/\s/g, '+') +"'><div class='book-container'><div class='book right'><img src='"+ libri[i].Img+"'><div class='bookside'></div></div><div class='description'><p class='title'>"+libri[i].titolo+"</p><p style='margin-top:-15px' class='author'>"+libri[i].Autore+"</p></div></div></a>");
     }

}

function changeZoom(length, zoom){
     //scaling books
     for (i=0;i<length;i++){
          $(".book-container")[i].style.zoom = zoom/100;
     }
     //scaling titles
     titles = $("h1");
     console.log(titles)
     for (i=1;i<titles.length;i++){
          titles[i].style.zoom = zoom/100;
     }
}

function changeAngle(length, angle){
     if(angle<9 && angle>9)
     angle = 0;
     document.documentElement.style.setProperty('--angle', (-angle).toString()+"deg");
     console.log(angle.toString());
     console.log(document.documentElement.style.cssText)
     if(angle<0){
               $(".book").addClass("left");
               $(".book").removeClass("right");
          }
     else {
               $(".book").addClass("right");
               $(".book").removeClass("left");
     }
     for(i=0;i<length;i++){
          $(".bookside")[colors[i][1]].style.backgroundColor = colors[i][0];
     }
}


function updatedescription(length, libri){
          console.log($("[type='checkbox']")[3].checked);
          if( $("[type='checkbox']"[3].checked!=true)){
               for (i=0;i<length;i++){
                    $(".description").addClass("hidden");
               }
          }
          if( $("[type='checkbox']")[3].checked){
               for (i=0;i<length;i++){
                    $(".description").removeClass("hidden");
               }
               console.log("libri nuovi");
          }
}

function updateyear(){

}
