const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1


next.addEventListener('click', () => {
    currentActive++;

// if the number is greater than the circle's radius(i.e 4) then we should stop the animation and return immediately
    if (currentActive > circles.length) {
      currentActive = circles.length 
    };

    update()
});



prev.addEventListener('click', () => {
    currentActive--;

// if the number is greater than the circle's radius(i.e 4) then we should stop the animation and return immediately
    if (currentActive < 1) {
      currentActive = 1
    };

    update()
});


function update() {
    circles.forEach( (circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
   // the progress bar (the lines to show blue)
    const actives = document.querySelectorAll('.active');


    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + '%';


    if (currentActive === 1) {
        prev.disabled = true;
        // else if it quals to total length of circles
    }  else if(currentActive === circles.length) {
        next.disabled = true;
        // we don't want  either of them to be disabled
} else{
    prev.disabled = false;
    next.disabled = false;
     };
};