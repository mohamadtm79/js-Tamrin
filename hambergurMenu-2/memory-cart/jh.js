let _div = document.querySelectorAll('.div');
let _img = document.querySelectorAll('div>img');
let button = document.getElementById('button');
_img[0].src = 'img/bootstrap.png';
_img[1].src = 'img/bootstrap.png';

_img[2].src = 'img/js.png';
_img[3].src = 'img/js.png';

_img[4].src = 'img/css.png';
_img[5].src = 'img/css.png';

_img[6].src = 'img/scss.png';
_img[7].src = 'img/scss.png';

_img[8].src = 'img/html.png';
_img[9].src = 'img/html.png';

_img[10].src = 'img/react.png';
_img[11].src = 'img/react.png';

_img[12].src = 'img/php.png';
_img[13].src = 'img/php.png';

let ferstClick = 0;
let secendClick = 1;
let flag = 0;
let lock = false;
let shomaresh = 0


function imgDiv(){
    if(lock == true){
        return
    }
    if(this === ferstClick){
        return
    }
    this.style.transform = 'translateZ(55px) rotateY(0deg)';
    if(flag == 0){
        flag = 1;
        ferstClick = this;
    }else{
        flag = 0;
        secendClick = this;
        if(ferstClick.dataset.para === secendClick.dataset.para){
            shomaresh++
            if(shomaresh == 7){
                document.getElementsByTagName('h1')[0].innerHTML = "good job"
            }
            console.log('job');
            secendClick.removeEventListener('click',imgDiv);
            ferstClick.removeEventListener('click',imgDiv);
        }else{
            lock = true
            setInterval(() => {
                ferstClick.style.transform = 'translateZ(55px) rotateY(178deg)';
                secendClick.style.transform = 'translateZ(55px) rotateY(178deg)';
                lock = false
                ferstClick = null;
                secendClick = null;
            }, 1500);
        }
    }
}
(function random(){
    (_div.forEach((item)=>{
        let rand = parseInt(Math.random() * 7)
        item.style.order = rand;
        button.addEventListener('click',function(){
            location.reload()
        })
    }))
})()

let seconds  = 1
document.getElementById('date').innerHTML = seconds
function sa(){
    setInterval(() => {
        seconds++
        document.getElementById('date').innerHTML = seconds
        if(seconds == 5){
            seconds = 0
        }
    }, 1000);
}
sa()


_div.forEach((item)=>{
    item.addEventListener('click',imgDiv)
})



