fetch('http://hp-api.herokuapp.com/api/characters').then(
    (data) => {
        return data.json()
    }
).then(
    (res)=>{
        console.log(res[0]);
        
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            console.log(element.name);

            var link = element.image
            var img = document.createElement('img')
            img.src = link 

            document.getElementById('img').appendChild(img)
            
        }

    }
    
)