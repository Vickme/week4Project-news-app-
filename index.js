let currentQuery= "Technology"
let currentPage= 1;
const fetchNews = async (page, q) => {

    var url = 'https://newsapi.org/v2/everything?' +
        'q=' +q+
        '&pageSize=20&' +
        'language=en&' +
        'page=' +page+
        '&sortBy=popularity&' +
        'apiKey=3f123e3f023043158b150d7dec4ec715';

    var req = new Request(url);

   let a = await fetch(req)
   let response= await a.json()
   
   
    let str = ""
    resultCount.innerHTML = response.totalResults
    for (let item of response.articles){
        str = str + ` <div class="card my-4 mx-2" style="width: 18rem;">
   <img src="${item.urlToImage}" class="card-img-top" alt="...">
   <div class="card-body">
       <h5 class="card-title">${item.title}</h5>
       <p class="card-text">${item.description}</p>
       <a href="${item.url}" target="_blank" class="btn btn-primary">Read more</a>
   </div>
</div>`

    }

    document.querySelector(".Content").innerHTML = str

}

fetchNews(1, currentQuery)
search.addEventListener("click", (e) => {
    e.preventDefault()
    let query = searchInput.value;
    currentQuery = query
    fetchNews(1, query)
})

prev.addEventListener("click", (e) => {
    e.preventDefault()
    if ( currentPage> 1){
        currentPage=  currentPage - 1
        fetchNews( currentPage , currentQuery)
    }
})

next.addEventListener("click", (e) => {
    e.preventDefault()
    if ( currentPage > 1){
        currentPage=  currentPage + 1
        fetchNews( currentPage , currentQuery)
    }
    
})