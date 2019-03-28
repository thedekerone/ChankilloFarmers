const $bar_icon=document.getElementById('icon-bar');
const $nav_bar=document.getElementById('nav-container');
const $page=document.getElementById('page');
var $regulator=0;
  //element.style.webkitAnimationPlayState
  //element.animated(keyframes=[], options{} )
  $bar_icon.addEventListener('click', ()=>{
    if (($nav_bar.style.right>="-120%"||$nav_bar.style.right=="")&&$nav_bar.style.right!="0%"&&$regulator==0) {
        $page.style.paddingBottom="270px";


        $nav_bar.style.right="0%";
        $regulator=1;
    }
    else if($nav_bar.style.right=="0%" ){

        $page.style.paddingBottom="0px";
              $nav_bar.style.right="-120%";
              $regulator=0;
    }
  });


/*                           MODIFICACIONES                              */
