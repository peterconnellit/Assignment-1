window.onload = function() {
    
const newsType = document.getElementById("news-type");
const newsDetails = document.getElementById("news-details");

//var newsDataArr = [];

const apiKey = "93fa9c4c03804d35b9a4178db6eb4808";

let url = `https://newsapi.org/v2/everything?q=tech&pageSize=10&apiKey=${apiKey}`

   //Built in fetch API
   fetch(url).then((res) => {
    //Return response in json format
    return res.json()
}).then((data) => {
    //Get data and show response on console
    console.log(data)

    //Callback function to create new list element and anchor tag
    data.articles.forEach(article => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        //Set list a tag attribute to URL
        a.setAttribute('href', article.url);
        //Prevent page from directing user away
        a.setAttribute('target', '_blank');
        //Sets link as article title
        a.textContent = article.title;
        //Append anchor tag to list element
        li.appendChild(a);
        //Append list to news-list
        newsDetails.appendChild(li);
    })

})



/*const fetchNews = async () => {
    const response = await fetch(url+apiKey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

fetchNews();

function displayNews() {

    newsDetails.innerHTML = "";

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        
        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        
      

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
       
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        news-Details.appendChild(col);
    });

}*/

};