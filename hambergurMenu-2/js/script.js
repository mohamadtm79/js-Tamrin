let m = document.querySelectorAll('div');
let span = document.querySelectorAll('span');
let flag = true
function para(){
    if(flag){
    span[0].style.transform = 'rotate(410deg) translate(11px, 11px)'
    span[1].style.opacity = '0'
    span[2].style.transform = 'rotate(307deg) translate(9px, -8px)'
    }
    else{
    span[0].style.transform = 'rotate(0) translate(0, 0)'
    span[1].style.opacity = '1'
    span[2].style.transform = 'rotate(0) translate(0, 0)'
    }
    flag = !flag

    for(let i = 0; i <= m.length; i++){
        m[i].classList.toggle('test');
    }
}

