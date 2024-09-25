const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);


document.getElementById('home').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

      
    window.location.href = "home.html";
});


// Handle header appearance/disappearance on scroll
let lastScrollTop = 0;
const shellBar = document.getElementById('shell-bar');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        shellBar.style.top = '-70px'; // Scroll down, hide header
    } else {
        shellBar.style.top = '0'; // Scroll up, show header
    }
    lastScrollTop = scrollTop;
});

// Fade-in and fade-out effect
const fadeInElements = document.querySelectorAll('.fade-in');

const checkFade = () => {
    const triggerBottom = window.innerHeight * 0.855; // Adjust the trigger to be closer to the viewport bottom

    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Fade-in if element is in view, fade-out if not
        if (elementTop < triggerBottom && elementBottom > 0) {
            element.classList.add('fade-in-active');
        } else {
            element.classList.remove('fade-in-active');
        }
    });
};

window.addEventListener('scroll', checkFade);
checkFade(); // Initial check when the page loads

let index = 0,
    interval = 1000;

const randvar = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${randvar(-10, 100)}%`);
  star.style.setProperty("--star-top", `${randvar(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}