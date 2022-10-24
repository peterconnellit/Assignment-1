const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('news-list');

searchFrom.addEventListener('submit', retrieve)

function retrieve(e){

    e.preventDefault()

    const apiKey = '93fa9c4c03804d35b9a4178db6eb4808'
    let topic = input.Value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}93fa9c4c03804d35b9a4178db6eb4808`

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', article.url );
        a.setAttribute('target', '_blank');
        a.textContent = article.title;
        li.appendChild(a);
        newsList.appendChild(li);


    })
    }


}