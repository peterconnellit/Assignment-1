//Scroll Navigation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    reset: true
})

//Main Page
sr.reveal('.logo',{})
sr.reveal('.hero-text',{ delay: 100 })
sr.reveal('.button',{ delay: 300 })
sr.reveal('.socials',{ delay: 200 })

//About Me
sr.reveal('.information',{})
sr.reveal('.headshot',{ delay: 100 })
ScrollReveal().reveal('.headline', { delay: 500 })
ScrollReveal().reveal('.tagline', { delay: 2000 })
ScrollReveal().reveal('.punchline', { delay: 3500,interval: 800 })

//Projects
sr.reveal('.project-card',{ interval: 200 })

//Contact
sr.reveal('.contact-input',{ interval: 200 })
sr.reveal('.contact-button',{})







//Footer




/*blueprint
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });*/
