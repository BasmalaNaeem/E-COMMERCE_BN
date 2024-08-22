let profilePhoto = document.getElementById('profilePhoto')
let slides = document.querySelectorAll('.slide');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let auto = true; 
let intervalTime = 5000;
let slideInterval;

profilePhoto.addEventListener('click', function(event) {
    event.preventDefault();
    alert("Show Your Profile ? ");
    // window.location.href="./profile.html";
});



let nextSlide = () => {
    let current = document.querySelector('.current');   
    current.classList.remove('current');  

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }

    // setTimeout(() => current.classList.remove('current'));
};

let prevSlide = () => {
    let current = document.querySelector('.current');
    current.classList.remove('current');

    if (current.previousElementSibling) {
        
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }

    // setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        slideInterval = setInterval(nextSlide, intervalTime);
        clearInterval(slideInterval);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        slideInterval = setInterval(nextSlide, intervalTime);
        clearInterval(slideInterval);
    }
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
