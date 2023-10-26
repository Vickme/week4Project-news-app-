const fetchNews=async (page)=>{

    console.log("fetching news...");
    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-10-25&' +
          'pageSize=20&' +
          'page=' +page+
          'sortBy=popularity&' +
          'apiKey=3f123e3f023043158b150d7dec4ec715';

var req = new Request(url);

let a= await fetch(req)
   let response = await a.json()
   console.log(response)
          
}

