//Buttons
const genralBtn = document.getElementById("genral");
const businessBtn = document.getElementById("Business");
const sportsBtn = document.getElementById("Sports");
const entertainmentBtn = document.getElementById("Entertainment");
const technologyBtn = document.getElementById("Technology");
const searchBtn = document.getElementById("search");

const newsQuery= document.getElementById("newsQuery");
const newsType= document.getElementById("newsType");
const newsdetails= document.getElementById("newsdetails");

//Array
var newsDataArr = [];

//API'S
const API_KEY = "3f123e3f023043158b150d7dec4ec715";
const HEADLINES_NEWS = " https://newsapi.org/v2/top-headlines?country=us&apiKey= ";
const GENRAL_NEWS = " https://newsapi.org/v2/top-headlines?country=us&category=genral&apiKey= ";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=  ";
const SPORTS_NEWS = " https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey= ";
const ENTERTAINMENT_NEWS = " https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey= ";
const TECHNOLOGY_NEWS = " https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey= ";
const SEARCH_NEWS = " https://newsapi.org/v2/everything?q= ";


genralBtn.addEventListener("click",function(){
    fetchGenralNews();

});

businessBtn.addEventListener("click",function(){
    fetchBusinessNews();

});


sportsBtn.addEventListener("click",function(){
    fetchSportsNews();

});


entertainmentBtn.addEventListener("click",function(){
    fetchEntertainmentNews();

});

technologyBtn.addEventListener("click",function(){
    fetchTechnologyNews();

});


searchBtn.addEventListener("click",function(){
    fetchQueryNews();

});

const fetchGenralNews= async ()=> {
    const response = await fetch(GENRAL_NEWS + API_KEY);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300) {
        const myJson =await response.json();
        newsDataArr= myJson.articles;
    } else{
        console.log(response.status, response.statusText);

    }
    displayNews();
}

const fetchBusinessNews= async ()=> {
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300) {
        const myJson =await response.json();
        newsDataArr= myJson.articles;
    } else{
        console.log(response.status, response.statusText);


    }
    displayNews();
}

const fetchSportsNews= async ()=> {
    const response = await fetch(SPORTS_NEWS+ API_KEY);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300) {
        const myJson =await response.json();
        newsDataArr= myJson.articles;
    } else{
        console.log(response.status, response.statusText);


    }
    displayNews();
}

const fetchEntertainmentNews= async ()=> {
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300) {
        const myJson =await response.json();
        console.log(myJson);
        newsDataArr= myJson.articles;
    } else{
        console.log(response.status, response.statusText);


    }
    displayNews();
}

const fetchTechnologyNews= async ()=> {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300) {
        const myJson =await response.json();
        newsDataArr= myJson.articles;
    } else{
        console.log(response.status, response.statusText);


    }
    displayNews();
}

const fetchQueryNews= async ()=> {
      
          if(newsQuery.value== null)
          return;


    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey=" + API_KEY);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300) {
        const myJson =await response.json();
        newsDataArr= myJson.articles;
    } else{
        console.log(response.status, response.statusText);


    }
    displayNews();
}


function displayNews(){
       newsdetails.innerHTML= "";

    if(newsDataArr.length==0){
        newsdetails.innerHTML="<h5>No data found.</h5>"
        return;
    }
    
    newsDataArr.forEach(news=>{
        var col = document.createElement('div');
        col.className ="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card= document.createElement('div');
        card.className= "p-2";

        var image= document.createElement('img');
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width", "100%");
        image.src=news.urlToImage;

    
    })
}

 