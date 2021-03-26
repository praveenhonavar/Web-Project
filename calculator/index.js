function display(val){
    console.log(val);
    str = document.getElementById('screen')

    str.value += val

}

function clr(){
    str =document.getElementById('screen')
    str.value = ' '
}

function solve(){
    str=document.getElementById('screen')

    var res = eval(str.value)
    console.log(res);
    str.value = res
}