//Navigation switching for mobile
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


//Scroll Navigation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
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
sr.reveal('.search-button',{})

















/*Would recommend storing in an environmental variable from user.
For demonstration purposes*/
const apiKey = "93fa9c4c03804d35b9a4178db6eb4808";

// variables
const technologyBtn = document.getElementById("technology");
const newsType = document.getElementById("tech-news");
const newsdetails = document.getElementById("tech-details");

// Array
var newsDataArr = [];

// apis

const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=2&apiKey=";

window.onload = function () {
  newsType.innerHTML = "";
  fetchTechnologyNews();

  //Declare selectors to retrieve user input and from form and append results to news list
  const searchFrom = document.querySelector(".search-form");
  const input = document.querySelector(".input");
  const newsList = document.querySelector(".news-list");

  //listen for submit which triggers retrieve function
  searchFrom.addEventListener("submit", retrieve);

  //Initialise function, listens for event
  function retrieve(e) {
    //Alert user to input search criteria
    if (input.value == "") {
      alert("Input field is empty");
      return;
    }

    //Clear and allow multiple searches
    newsList.innerHTML = "";

    e.preventDefault();

    //Convert user input from form to topic variable for use within url template literal query
    let topic = input.value;

    //Fetch data from API
    let url = `https://newsapi.org/v2/everything?q=${topic}&pageSize=10&apiKey=${apiKey}`;

    //Built in fetch API
    fetch(url)
      .then((res) => {
        //Return response in json format
        return res.json();
      })
      .then((data) => {
        //Get data and show response on console
        console.log(data);

        //Callback function to create new list element and anchor tag
        data.articles.forEach((article) => {
          let li = document.createElement("li");
          let a = document.createElement("a");
          //Set list a tag attribute to URL
          a.setAttribute("href", article.url);
          //Prevent page from directing user away
          a.setAttribute("target", "_blank");
          //Sets link as article title
          a.textContent = article.title;
          //Append anchor tag to list element
          li.appendChild(a);
          //Append list to news-list
          newsList.appendChild(li);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const newsDetails = document.getElementById("news-details");

  //var newsDataArr = [];

  //let url = `https://newsapi.org/v2/everything?q=tech&pageSize=4&apiKey=${apiKey}`

  let url = `https://newsapi.org/v2/top-headlines?category=general&country=gb&pageSize=3&apiKey=${apiKey}`;

  //Built in fetch API
  fetch(url)
    .then((res) => {
      //Return response in json format
      return res.json();
    })
    .then((data) => {
      //Get data and show response on console
      console.log(data);

      //Callback function to create new list element and anchor tag
      data.articles.forEach((article) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        //Set list a tag attribute to URL
        a.setAttribute("href", article.url);
        //Prevent page from directing user away
        a.setAttribute("target", "_blank");
        //Sets link as article title
        a.textContent = article.title;
        //Append anchor tag to list element
        li.appendChild(a);
        //Append list to news-list
        newsDetails.appendChild(li);
      });
    });
};

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + apiKey);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

function displayNews() {
  newsdetails.innerHTML = "";

  // if(newsDataArr.length == 0) {
  //     newsdetails.innerHTML = "<h5>No data found.</h5>"
  //     return;
  // }

  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");

    var col = document.createElement("div");

    var card = document.createElement("div");

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("p");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h5");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(link);

    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });
}
