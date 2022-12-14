/*Only here For demonstration purposes.
Would recommend securely storing API key in an environmental variable on server, hidden from users.*/
const apiKey = "93fa9c4c03804d35b9a4178db6eb4808";

//Scroll animation object and properties
/*Classes are used as targets sent to the “reveal()” function as arguments. 
We can also pass objects and override the default settings of the constructor function “ScrollReveal()” for selected targets.
ScrollReveal employs the singleton design pattern, meaning we can repeatedly call the constructor and the same instance will always be returned.
*/
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2000,
  reset: true
})

//Main Page
sr.reveal('.logo',{})
sr.reveal('.heroText',{ delay: 100 })
sr.reveal('.button',{ delay: 300 })

//About
sr.reveal('.information',{})
sr.reveal('.coral',{ delay: 100 })
ScrollReveal().reveal('.headline', { delay: 500 })
ScrollReveal().reveal('.tagline', { delay: 1500 })
ScrollReveal().reveal('.punchline', { delay: 2000, interval: 500 })

//Articles
sr.reveal('.articleCard',{ interval: 200 })

//Contact
sr.reveal('.searchButton',{})

//Navigation switching for mobile responsiveness
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

//Function that, when called, uses the “classList” API’s “toggle()” function.
function toggleButton() {
  navList.classList.toggle('show')
}

//“addEventListener()” callback function with user “click” and the “toggleButton()” function as arguments
hamburgerButton.addEventListener('click', toggleButton)

//Variables for trending articles
const trendingNews = document.getElementById("trendingNews");
const trendingDetails = document.getElementById("trendingDetails");

//Array to store json fetch response
let newsDataArr = [];

//trending news api endpoint
const trendingUrl = "https://newsapi.org/v2/top-headlines?country=gb&category=general&pageSize=2&apiKey=";

//JavaScript Ajax fetch api function
const fetchTrendingNews = async () => {
  //Promise & response
  const response = await fetch(trendingUrl + apiKey);
  
  //If promise & response successful return json articles into array
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //Handle errors with console log and text error
    console.log(response.status, response.statusText);
    trendingDetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }
  
  //Call function
  trending();
};
  
//function to create div elements with json data
function trending() {
  trendingDetails.innerHTML = "";

  newsDataArr.forEach((news) => {
    //Declare variables to create div & date elements
    const date = news.publishedAt.split("T");  
    const col = document.createElement("div");  
    const card = document.createElement("div");  
    const cardBody = document.createElement("div");
    
    //News heading details
    const newsHeading = document.createElement("p");
    newsHeading.className = "cardTitle";
    newsHeading.innerHTML = news.title;
    
    //News data details
    const dateHeading = document.createElement("h5");
    dateHeading.className = "textPrimary";
    dateHeading.innerHTML = date[0];
    
    //a href link to news websites
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "View Here";
    
    //Method to move data from its current position to the new position
    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(link);
    card.appendChild(cardBody);
    col.appendChild(card);
    trendingDetails.appendChild(col);
  });
}

//Variables for gaming articles
const gamingNews = document.getElementById("gamingNews");
const gamingDetails = document.getElementById("gamingDetails");

//gaming news api endpoint
const gamingUrl = "https://newsapi.org/v2/everything?q=gaming&language=en&pageSize=2&apiKey=";

//JavaScript Ajax fetch api function
const fetchGamingNews = async () => {
  //Promise & response
  const response = await fetch(gamingUrl + apiKey);
  
  //If promise & response successful return json articles into array
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //Handle errors with console log and text error
    console.log(response.status, response.statusText);
    gamingDetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }
  
  //Call function
  gaming();
};
  
//function to create div elements with json data
function gaming() {
  gamingDetails.innerHTML = "";

  newsDataArr.forEach((news) => {
    //Declare variables to create div & date elements
    const date = news.publishedAt.split("T");  
    const col = document.createElement("div");  
    const card = document.createElement("div");  
    const cardBody = document.createElement("div");
    
    //News heading details
    const newsHeading = document.createElement("p");
    newsHeading.className = "cardTitle";
    newsHeading.innerHTML = news.title;
    
    //News data details
    const dateHeading = document.createElement("h5");
    dateHeading.className = "textPrimary";
    dateHeading.innerHTML = date[0];
    
    //a href link to news websites
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "View Here";
    
    //Method to move data from its current position to the new position
    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(link);
    card.appendChild(cardBody);
    col.appendChild(card);
    gamingDetails.appendChild(col);
  });
}
  
//Variables for tech articles
const newsType = document.getElementById("techNews");
const techDetails = document.getElementById("techDetails");

//Tech news api endpoint
const techUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=2&apiKey=";

//JavaScript Ajax fetch api function
const fetchTechnologyNews = async () => {
  //Promise & response
  const response = await fetch(techUrl + apiKey);
  
  //If promise & response successful return json articles into array
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //Handle errors with console log and text error
    console.log(response.status, response.statusText);
    techDetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }
  
  //Call function
  tech();
};
  
//function to create div elements with json data
function tech() {
  techDetails.innerHTML = "";

  newsDataArr.forEach((news) => {
    //Declare variables to create div & date elements
    const date = news.publishedAt.split("T");  
    const col = document.createElement("div");  
    const card = document.createElement("div");  
    const cardBody = document.createElement("div");
    
    //News heading details
    const newsHeading = document.createElement("p");
    newsHeading.className = "cardTitle";
    newsHeading.innerHTML = news.title;
    
    //News data details
    const dateHeading = document.createElement("h5");
    dateHeading.className = "textPrimary";
    dateHeading.innerHTML = date[0];
    
    //a href link to news websites
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "View Here";
    
    //Method to move data from its current position to the new position
    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(link);
    card.appendChild(cardBody);
    col.appendChild(card);
    techDetails.appendChild(col);
  });
}

//Variables for business articles
const businessNews = document.getElementById("businessNews");
const businessDetails = document.getElementById("businessDetails");

//Business news api endpoint
const businessUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=2&apiKey=";

//JavaScript Ajax fetch api function
const fetchBusinessNews = async () => {
  //Promise & response
  const response = await fetch(businessUrl + apiKey);
  

  //If promise & response successful return json articles into array
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //Handle errors with console log and text error
    console.log(response.status, response.statusText);
    businessDetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }
  
  //Call function
  business();
};
  
//function to create div elements with json data
function business() {
  businessDetails.innerHTML = "";

  newsDataArr.forEach((news) => {
    //Declare variables to create div & date elements
    const date = news.publishedAt.split("T");  
    const col = document.createElement("div");  
    const card = document.createElement("div");  
    const cardBody = document.createElement("div");
    
    //News heading details
    const newsHeading = document.createElement("p");
    newsHeading.className = "cardTitle";
    newsHeading.innerHTML = news.title;
    
    //News data details
    const dateHeading = document.createElement("h5");
    dateHeading.className = "textPrimary";
    dateHeading.innerHTML = date[0];
    
    //a href link to news websites
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "View Here";
    
    //Method to move data from its current position to the new position
    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(link);
    card.appendChild(cardBody);
    col.appendChild(card);
    businessDetails.appendChild(col);
  });
}
  
//Initiate on page load
window.onload = function () {
  newsType.innerHTML = "";

  fetchTrendingNews();
  fetchGamingNews();
  fetchTechnologyNews();
  fetchBusinessNews();
 
  //Declare selectors to retrieve user input and from form and append results to news list
  const searchFrom = document.querySelector(".searchForm");
  const input = document.querySelector(".input");
  const newsList = document.querySelector(".newsList");

  //“submit” triggers retrieve the callback function
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

    /*The preventDefault() method of the Event interface tells the user agent that if the event does not
    get explicitly handled, its default action should not be taken as it normally would be.*/
    e.preventDefault();

    //Convert user input from form to topic variable for use within url template literal query
    let topic = input.value;

    //Fetch data from API
    let url = `https://newsapi.org/v2/everything?q=${topic}&pageSize=10&apiKey=${apiKey}`;

    //Built in Ajax fetch API to return json data
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
          a.className = "resultLinks";
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
      //Catch error and log to console
      .catch((error) => {
        console.log(error);
      });

    /*Created a clone of the map higher-order function for demonstration purposes.
    Here we are extracting information to developer console.
    Using an array of newsAPI urls, we can get all url lengths.
    mapClone takes an array and the fn callback function as arguments.
    The “urlList” value is used to contain the final result.
    The callback function is used on each element while iteratively looping over the “urlList” array
    The “urlList” array is returned with URL lengths and printed to the browser console.*/
    function mapClone(arr, fn) {
      const urlList = [];
      for(let i = 0; i < arr.length; i++) {
        urlList.push(
          fn(arr[i])
        );
      }
      return urlList;
    }
    
    const urls = [trendingUrl, gamingUrl, techUrl, businessUrl, url];
    const urlsLength = mapClone(urls, function(item) {
      return item.length;
    });
    
    //once search has been entered on webpage, mapClone returns all API url lengths to developer console
    console.log(urlsLength)
  }

};