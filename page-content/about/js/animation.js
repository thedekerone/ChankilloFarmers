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




var isScrolling = false;
var altura=0;
const $aboutInfo=document.getElementById('info-about');
const $contentInfo=document.getElementById('info-content');
const $contentInfo2=document.getElementById('info-content2');
const $aboutContainer=document.getElementById('about-container');
window.addEventListener("scroll", throttleScroll, false);



  $aboutInfo.animate([
    {
      opacity: "0",
      paddingTop: "300px"
    },
    {
      opacity:"1",
      paddingTop: "0px"
    }
  ],{
duration: 700, easing:"ease" }
 );

  $aboutInfo.style.opacity=1;
function throttleScroll(e) {
  altura=window.scrollY;
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}
$contentInfo.style.opacity=0;
$contentInfo.style.right="500px";
$contentInfo2.style.opacity=0;
$contentInfo2.style.left="500px";
function dealWithScrolling(e) {
  console.log(altura);
  $aboutInfo.style.opacity=1-0.0045*altura;
  if (altura>window.screen.height-450) {
    $contentInfo.style.opacity=1;
      $contentInfo.style.right="0px";
      $contentInfo2.style.opacity=1;
        $contentInfo2.style.left="0px";

  }
}
