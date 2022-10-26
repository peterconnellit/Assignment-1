window.onload=function(){
    
            //Declare selectors to retrieve user input and from form and append results to news list
            const searchFrom = document.querySelector('.search-form');
            const input = document.querySelector('.input');
            const newsList = document.querySelector('.news-list');
    
            //listen for submit which triggers retrieve function
            searchFrom.addEventListener('submit', retrieve)        
    
            //Initialise function, listens for event
            function retrieve(e) {
    
                //Alert user to input search criteria
                if (input.value ==''){
                    alert('Input field is empty')
                    return
                }
    
                //Clear and allow multiple searches
                newsList.innerHTML=''
    
                e.preventDefault()
    
                /*Would recommend storing in an environmental variable from user.
                For demonstration purposes*/
                const apiKey = '93fa9c4c03804d35b9a4178db6eb4808'
    
                //Convert user input from form to topic variable for use within url template literal query
                let topic = input.value;
    
                //Fetch data from API
                let url = `https://newsapi.org/v2/everything?q=${topic}&pageSize=10&apiKey=${apiKey}`
    
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
                        newsList.appendChild(li);
                    })
    
                }).catch((error)=>{
                    console.log(error)
                })
            }
  }