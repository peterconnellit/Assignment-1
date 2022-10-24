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

//About Me
sr.reveal('.information',{})
sr.reveal('.coral',{ delay: 100 })
ScrollReveal().reveal('.headline', { delay: 500 })
ScrollReveal().reveal('.tagline', { delay: 2000 })
ScrollReveal().reveal('.punchline', { delay: 3500,interval: 1000 })

//Projects
sr.reveal('.article-card',{ interval: 200 })

//Contact
sr.reveal('.search-input',{ interval: 200 })
sr.reveal('.search-button',{})