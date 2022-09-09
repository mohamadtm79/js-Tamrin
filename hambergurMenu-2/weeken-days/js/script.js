let textH1 = document.getElementsByTagName('h1')[1];
function send(){
    let text = document.getElementsByTagName('input')[0].value;
    if(text == 1){
        textH1.innerHTML = "saturday = شنبه"
    }
    else if(text == 2){
        textH1.innerHTML = "sunday = یکشنبه"
    }
    else if(text == 3){
        textH1.innerHTML = "monday = دوشنبه"
    }
    else if(text == 4){
        textH1.innerHTML = "tuesday = سشنبه"
    }
    else if(text == 5){
        textH1.innerHTML = "wensday = چهارشنبه"
    }
    else if(text == 6){
        textH1.innerHTML = "Thursday = پنجشنبه"
    }
    else if(text == 7){
        textH1.innerHTML = "friday = جمعه"
    }
    else{
        textH1.innerHTML = "Try again = دوباره امتحان کنید"
    }
}