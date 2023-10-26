const fetchNews=async (page)=>{

    console.log("fetching news...");
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=3f123e3f023043158b150d7dec4ec715';
var req = new Request(url);
let a= await fetch(req)
    let response = await a.json()
        console.log(JSON.stringify(response))
    


   let str =  ` <div class="card my-4 mx-2" style="width: 18rem;">
   <img src="..." class="card-img-top" alt="...">
   <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">
           card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
</div>`

          
}

fetchNews(1)