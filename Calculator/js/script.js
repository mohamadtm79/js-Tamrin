let _div = document.querySelectorAll('.div');
let plass = document.getElementById('plas');
let input =  document.getElementsByTagName('input')[0];
let h1 = document.getElementsByTagName('h1')[0];
let Clear = document.getElementById('Clear-All');
let div3 = document.getElementsByClassName('div3')[0];
div3.addEventListener('click',function(){
    let len = input.value.length
    input.value = input.value.substr(0,len - 1)
});
_div.forEach(function(item , val){
    item.addEventListener('click',function(){
        console.log(item.textContent);
        if(input.value == "0.0"){
            input.value = item.textContent 
        }else{
            input.value += item.textContent
        }
    })
    if(plass.addEventListener("click",function(){
        h1.innerHTML = `${input.value} = ${eval(input.value)}`
    }));
    if(Clear.addEventListener('click',function(){
        input.value = "0.0"
        h1.textContent = ''
    }));
})
plass.addEventListener("click",function(){
    input.value = eval(input.value);
})