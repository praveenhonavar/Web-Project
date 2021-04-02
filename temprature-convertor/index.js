function convert(deg){
    
    var f =document.getElementById('fahrenheit');
    var c =document.getElementById('celsius');
    var k = document.getElementById('kelvin');
        
    if(deg=='c'){
        cel = (f.value-32)*(5/9);
        c.value=cel;

        kel = (5/9) * (f.value - 32) + 273.15

        k.value = kel;

    }
            
    if(deg=='f'){
        far  = c.value * (9/5) +32;
        f.value=(far);

        kel = c.value + 273.15
        k.value = kel;
    }

    if(deg=='k'){
        
        far = 1.8*(k.value-273) + 32
        cel = k.value - 273.15

        console.log(far);

        f.value = far;
        c.value = cel;

    }


}