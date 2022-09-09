let flag = 1
let x = document.querySelectorAll('span');
function menu(){
    document.getElementsByClassName('menuMob')[0].classList.toggle('test');
    document.getElementsByClassName('test')[0].classList.toggle('hambergur');
    if(flag % 2){
       x[0].style.rotate = '57deg';
       x[0].style.transform = 'translate(7px, 2px)';
       x[2].style.rotate = '-57deg';
       x[2].style.transform = 'translate(8px, -2px)';

    }else{
       x[0].style.rotate = '0deg';
       x[0].style.transform = 'translate(0, 0)';
       x[2].style.transform = 'translate(0, 0)';
       x[2].style.rotate = '0deg';  
    }
    flag++
}