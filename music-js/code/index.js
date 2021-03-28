window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")

    pads.forEach((element,index) => {
        element.addEventListener("click",()=>{
            sounds[index].currentTime=0
            sounds[index].play()
        })
    });
})

// anime({
//     targets: '.visual',
//     translateX: 250,
//     duration: 3000
//   });


  var animation = anime({
    targets: '.visual',
    translateY: 150,
    delay: function(ele1, i) { return i * 100; },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
  
  document.querySelector('.restart-demo .restart').onclick = animation.restart;

