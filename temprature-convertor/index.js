function convert(deg){
    
    var f =document.getElementById('fahrenheit');
    var c =document.getElementById('celsius');
        
    if(deg=='c'){
        cel = (f.value-32)*(5/9);
        c.value=cel;
    }
            
    if(deg=='f'){
        far  = c.value * (9/5) +32;
        f.value=far;
    }
}