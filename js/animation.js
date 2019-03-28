const $bar_icon=document.getElementById('icon-bar');
const $nav_bar=document.getElementById('nav-container');
const $texto=document.getElementById('text-asignar');
const $img_principal=document.getElementById('mover-img');
const $page=document.getElementById('page');
var $regulator=0;
  //element.style.webkitAnimationPlayState
  //element.animated(keyframes=[], options{} )
  $bar_icon.addEventListener('click', ()=>{
    if (($nav_bar.style.right>="-120%"||$nav_bar.style.right=="")&&$nav_bar.style.right!="0%"&&$regulator==0) {

        if (screen.width<=500) {
          $texto.style.marginTop="236px";
        }
        else {
            $texto.style.marginTop="210px";
        }
        $nav_bar.style.right="0%";
        $regulator=1;
    }
    else if($nav_bar.style.right=="0%" ){
      $img_principal.style.top="0";
        if (screen.width<=500) {
          $texto.style.marginTop="120px";
        }
        else {
            $texto.style.marginTop="100px";
        }

              $nav_bar.style.right="-120%";
              $regulator=0;
    }
  });

/*                           MODIFICACIONES                              */
