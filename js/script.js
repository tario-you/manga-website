//----------------- TEST CODE ------------------------

let div = document.querySelector('#popup');
document.querySelector('div').addEventListener('click', function (event) {
    console.log(event);
})


//----------------- NAV BAR ------------------------
//----------------- ABOUT ------------------------

const popup1 = document.querySelector('#popup1');
const about = document.querySelector('#about');
const textcol1 = document.querySelector('.textcol1');

about.addEventListener('mouseover', function () {
    popup1.style.opacity = 1;
    popup1.style.display = 'flex';
    textcol1.style.color = 'rgba(255, 255, 255, 0.568)';
    fadeIn(popup1);
});

popup1.addEventListener('mouseover', function () {
    popup1.style.opacity = 1;
    popup1.style.display = 'flex';
    textcol1.style.color = 'rgba(255, 255, 255, 0.568)';
});

popup1.addEventListener('mouseover', function (event) {
    event.stopPropagation();
});

about.addEventListener('mouseout', function () {
    popup1.style.opacity = 0;
    popup1.style.display = 'none';
    textcol1.style.color = 'white';
});

//------------------ ADMISSIONS ---------------------

const popup2 = document.querySelector('#popup2');
const admissions = document.querySelector('#admissions');
const textcol2 = document.querySelector('.textcol2');

admissions.addEventListener('mouseover', function () {
    popup2.style.opacity = 1;
    popup2.style.display = 'flex';
    textcol2.style.color = 'rgba(255, 255, 255, 0.568)';
    fadeIn(popup2);
});

popup2.addEventListener('mouseover', function () {
    popup2.style.opacity = 1;
    popup2.style.display = 'flex';
    textcol2.style.color = 'rgba(255, 255, 255, 0.568)';
});

popup2.addEventListener('mouseover', function (event) {
    event.stopPropagation();
});

admissions.addEventListener('mouseout', function () {
    popup2.style.opacity = 0;
    popup2.style.display = 'none';
    textcol2.style.color = 'white';
});

//--------------------CAMPUS LIFE --------------

const popup3 = document.querySelector('#popup3');
const campus = document.querySelector('#campus');
const textcol3 = document.querySelector('.textcol3');

campus.addEventListener('mouseover', function () {
    popup3.style.opacity = 1;
    popup3.style.display = 'flex';
    textcol3.style.color = 'rgba(255, 255, 255, 0.568)';
    fadeIn(popup3);
});

popup3.addEventListener('mouseover', function () {
    popup3.style.opacity = 1;
    popup3.style.display = 'flex';
    textcol3.style.color = 'rgba(255, 255, 255, 0.568)';
});

popup3.addEventListener('mouseover', function (event) {
    event.stopPropagation();
});

campus.addEventListener('mouseout', function () {
    popup3.style.opacity = 0;
    popup3.style.display = 'none';
    textcol3.style.color = 'white';
});


//---------------- CONTACT US FORM ----------


const popup4 = document.querySelector('#popup4');
const contact = document.querySelector('#contact');
const textcol4 = document.querySelector('.textcol4');
const exit = document.querySelector('#exit');

contact.addEventListener('click', function () {
    popup4.style.opacity = 1;
    popup4.style.display = 'flex';
    textcol4.style.color = 'rgba(255, 255, 255, 0.568)';
    fadeIn(popup4);
});

popup4.addEventListener('click', function (event) {
    event.stopPropagation();
});

exit.addEventListener('click', function () {
    popup4.style.opacity = 0;
    popup4.style.display = 'none';
    textcol4.style.color = 'white';
    fadeIn(popup4);
});


//------------------NAV BAR ANIMATION


function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    const timer = setInterval(function () {
        opacity += 0.05;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(timer);
        }
    }, 1);
}


//----------------- SECTION 1 ------------------------

const counters = document.querySelectorAll('.count');

const runCounters = () => {
    counters.forEach((counter) => {
        let count = 0;
        const target = +counter.dataset.count;
        const interval = setInterval(() => {
            count++;
            counter.querySelector('.show-count').textContent = count;
            if (count === target) {
                clearInterval(interval);
            }
        }, -000);
    });
};

// Set up a function to check
const checkCounters = () => {
    const windowHeight = window.innerHeight;
    const offset = 100;

    counters.forEach((counter) => {
        const elementTop = counter.getBoundingClientRect().top;

        if (elementTop - windowHeight < offset) {
            runCounters();
        }
    });
};

// Run
window.addEventListener('load', checkCounters);
window.addEventListener('scroll', checkCounters);


//----------------- SECTION 4 ------------------------


$(function () {

    $(".prev").on('click', function (event) {
        event.preventDefault();
        prevSlide();
    });

    $(".next").on('click', function (event) {
        event.preventDefault();
        nextSlide();
    });

    if ($(".item").length <= 1) {
        $(".next").addClass('hide-nav');
    }

    $(".prev").addClass('hide-nav');

    function nextSlide() {
        var atual = $(".cd-slider").find('.current'),
            next = atual.next();

        next.addClass('current').removeClass('prev_slide').siblings().removeClass('current');
        next.prevAll().addClass('prev_slide');

        if (next.index() > 0) {
            $(".prev").removeClass('hide-nav');
        }
        if (next.index() == $(".item").last().index()) {
            $(".next").addClass('hide-nav');
        }
    }

    function prevSlide() {
        var atual = $(".cd-slider").find('.current'),
            prev = atual.prev();

        prev.addClass('current').removeClass('prev_slide').siblings().removeClass('current');

        if (prev.index() !== $(".item").last().index()) {
            $(".next").removeClass('hide-nav');
        }
        if (prev.index() == 0) {
            $(".prev").addClass('hide-nav');
        }
    }
});