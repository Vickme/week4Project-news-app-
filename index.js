let currentQuery="Sports"
let currentPage= 1;
const fetchNews=async (page,q)=>{

    console.log(`fetching news for${q}, page number${page}...`);
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'q='+ q +
          'apiKey=3f123e3f023043158b150d7dec4ec715';
var req = new Request(url);
    
    let response = {
        "status": "ok",
        "totalResults": 34,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "AnandTech"
                },
                "author": "Ryan Smith",
                "title": "Qualcomm Previews Snapdragon X Elite SoC: Oryon CPU Starts in Laptops - AnandTech",
                "description": null,
                "url": "https://www.anandtech.com/show/21105/qualcomm-previews-snapdragon-x-elite-soc-oryon-cpu-starts-in-laptops-",
                "urlToImage": "https://images.anandtech.com/doci/21105/Snapdragon%20X%20Elite_Hero%20Image_678x452.jpg",
                "publishedAt": "2023-10-24T19:04:58Z",
                "content": "While Qualcomm has become wildly successful in the Arm SoC market for Android smartphones, their efforts to parlay that into success in other markets has eluded them so far. The company has produced … [+16257 chars]"
            },
            {
                "source": {
                    "id": "the-washington-post",
                    "name": "The Washington Post"
                },
                "author": "Cristiano Lima, Naomi Nix",
                "title": "41 states sue Meta, claiming Instagram, Facebook are addictive, harm kids - The Washington Post",
                "description": "Dozens of states are accusing Facebook and Instagram parent Meta of designing addictive features that harm kids.",
                "url": "https://www.washingtonpost.com/technology/2023/10/24/meta-lawsuit-facebook-instagram-children-mental-health/",
                "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JZNO5RS55BIKULNADU45IARKU4_size-normalized.jpg&w=1440",
                "publishedAt": "2023-10-24T18:52:00Z",
                "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nForty-one states and the District of Columbia are suing Meta, alleging that the tech giant harms children by building addictive featur… [+9485 chars]"
            },
            {
                "source": {
                    "id": "al-jazeera-english",
                    "name": "Al Jazeera English"
                },
                "author": "Al Jazeera",
                "title": "UN chief says ‘clear violations of international humanitarian law’ in Gaza - Al Jazeera English",
                "description": "Antonio Guterres pleads for civilians to be protected in Israel-Hamas war, warns of a wider regional conflagration.",
                "url": "https://www.aljazeera.com/news/2023/10/24/un-chief-says-clear-violations-of-international-humanitarian-law-in-gaza",
                "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/10/AP23297525042383-1698164552.jpg?resize=1200%2C675",
                "publishedAt": "2023-10-24T18:45:10Z",
                "content": "United Nations chief Antonio Guterres has renewed his demand for a ceasefire in Gaza and said that international law was being violated in the war between Israel and the Palestinian armed group Hamas… [+2519 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Cointelegraph"
                },
                "author": "Ray Salmond",
                "title": "Bitcoin bulls fight to hold $34K as CME BTC open interest surpasses 100K - Cointelegraph",
                "description": "Bitcoin slightly pulled back from its $35,300 high, but renewed interest in CME BTC futures is a huge positive.",
                "url": "https://cointelegraph.com/news/bitcoin-bulls-fight-to-hold-34-k-cme-btc-open-interest-surpasses-100-k",
                "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-10/070312c6-ddab-4b67-a009-5c53a034ae4e.jpg",
                "publishedAt": "2023-10-24T18:43:34Z",
                "content": "Bitcoin (BTC) is currently battling to hold the $34,000 level after a stellar rally and short squeeze saw its price push above $35,000 on Oct. 23.\r\nIn an Oct. 24 market update, Capriole Investments f… [+2960 chars]"
            },
            {
                "source": {
                    "id": "financial-times",
                    "name": "Financial Times"
                },
                "author": "Joshua Chaffin",
                "title": "Michael Cohen tells court he 'reverse engineered' Donald Trump's financial statements - Financial Times",
                "description": "Former US president turns up to New York courtroom where his one-time fixer was testifying",
                "url": "https://www.ft.com/content/ec620259-bb13-41f4-bc88-b0e3501c83a8",
                "urlToImage": null,
                "publishedAt": "2023-10-24T18:42:10Z",
                "content": "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1494 chars]"
            },
            {
                "source": {
                    "id": "nbc-news",
                    "name": "NBC News"
                },
                "author": "Scott Wong, Rebecca Kaplan, Kyle Stewart, Ali Vitali, Garrett Haake, Kristen Welker, Sahil Kapur, Alexandra Bacallao, Kate Santaliz",
                "title": "In third attempt to elect speaker, GOP nominates Tom Emmer - NBC News",
                "description": "House Republicans nominated Tom Emmer for speaker, but there's still no guarantee that he can get the 217 votes he needs on the floor to win the job.",
                "url": "https://www.nbcnews.com/politics/congress/house-republicans-vote-speaker-nominee-third-time-rcna121675",
                "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231011-SOTH-Main-blog-jg-1f01a0.jpg",
                "publishedAt": "2023-10-24T18:21:53Z",
                "content": "WASHINGTON House Majority Whip Tom Emmer, R-Minn., emerged from a crowded field of candidates Tuesday to become Republicans latest nominee for speaker.\r\nEmmer, the No. 3 Republican in leadership and … [+5613 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "San Francisco Chronicle"
                },
                "author": "Ricardo Cano",
                "title": "California DMV suspends Cruise's driverless cars in San Francisco - San Francisco Chronicle",
                "description": "California DMV suspends Cruise’s driverless taxis in San Francisco due to safety concerns.",
                "url": "https://www.sfchronicle.com/bayarea/article/s-f-cruise-driverless-taxis-suspended-18445110.php",
                "urlToImage": "https://s.hdnux.com/photos/01/34/76/45/24373614/3/rawImage.jpg",
                "publishedAt": "2023-10-24T18:21:06Z",
                "content": "The California Department of Motor Vehicles has suspended Cruise from operating its driverless taxis in San Francisco, effective immediately.The DMV, one of the states regulators for self-driving car… [+6369 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Brock Purdy was exposed AGAIN in 49ers' loss, talks Trevor Lawrence's rise, NBA tip off | THE HERD - The Herd with Colin Cowherd",
                "description": "Nick Wright joins Colin Cowherd after Monday Night Football appears to prove him right when it comes to Brock Purdy and the San Francisco 49ers. After they s...",
                "url": "https://www.youtube.com/watch?v=GMf23cOpuQE",
                "urlToImage": "https://i.ytimg.com/vi/GMf23cOpuQE/maxresdefault.jpg",
                "publishedAt": "2023-10-24T18:20:48Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Hollywood Reporter"
                },
                "author": "Katie Kilkenny",
                "title": "Inside the A-List Pressure Campaign and Powerful Call That Brought SAG-AFTRA and Studios Back to the Table - Hollywood Reporter",
                "description": "After Ben Affleck, Jennifer Aniston, George Clooney and other A-list talent lobbied to get back to dealmaking, a call between Bob Iger and Duncan Crabtree-Ireland broke the impasse. Says Fran Drescher, \"I don’t need to emulate male energy to be an effective l…",
                "url": "https://www.hollywoodreporter.com/news/general-news/ben-affleck-george-clooney-resume-actors-strike-talks-1235625097/",
                "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/2023_10-strike_SAG-03.jpg?w=1024",
                "publishedAt": "2023-10-24T18:09:55Z",
                "content": "A call from Disney CEO Bob Iger to SAG-AFTRA national executive director Duncan Crabtree-Ireland on Saturday, Oct. 21, set in motion the long-awaited return to negotiations between the union and Holl… [+7840 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": "David Shepardson, Joseph White",
                "title": "UAW strikes GM's Escalade factory, turning up pressure for higher wages - Reuters",
                "description": "The United Auto Workers (UAW) union on Tuesday struck a General Motors <a href=\"https://www.reuters.com/markets/companies/GM.N\" target=\"_blank\">(GM.N)</a> assembly plant in Texas that builds the U.S. automaker's profitable full-size sport utility vehicles in …",
                "url": "https://www.reuters.com/business/autos-transportation/uaw-expands-strike-against-gm-walking-out-texas-suv-plant-2023-10-24/",
                "urlToImage": "https://www.reuters.com/resizer/0_FFWxrYYC2MvBnNvTZyRhSqUlM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SVO3NSSDTBPUXHBTWWGSOSALGM.jpg",
                "publishedAt": "2023-10-24T17:59:00Z",
                "content": "Oct 24 (Reuters) - The United Auto Workers (UAW) union on Tuesday struck a General Motors (GM.N) assembly plant in Texas that builds the U.S. automaker's profitable full-size sport utility vehicles i… [+5597 chars]"
            },
            {
                "source": {
                    "id": "cbs-news",
                    "name": "CBS News"
                },
                "author": null,
                "title": "Scientists discover hidden landscape \"frozen in time\" under Antarctic ice for millions of years - CBS News",
                "description": "\"No one's laid eyes on it,\" the lead author of the study said. \"What is exciting is that it's been hiding there in plain sight.\"",
                "url": "https://www.cbsnews.com/news/hidden-landscape-frozen-in-time-antarctic-ice-millions-years/",
                "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/10/24/5300a554-e25e-4983-8a70-731bc2cca4f6/thumbnail/1200x630/2f31359255ef1fe949cf2e56b6a3c8d7/antarctica.jpg?v=4fae59acf57b6bb1efa9da07582ebc40",
                "publishedAt": "2023-10-24T17:56:55Z",
                "content": "Scientists revealed Tuesday that they had discovered a vast, hidden landscape of hills and valleys carved by ancient rivers that has been \"frozen in time\" under the Antarctic ice for millions of year… [+4731 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Thegardnernews.com"
                },
                "author": "The Gardner News",
                "title": "Gardner murder: People asked to check camera to track Pennington- Live - The Gardner News",
                "description": null,
                "url": "https://www.thegardnernews.com/story/news/local/2023/10/24/gardner-massachusetts-homicide-suspect-search-victim-breanne-pennington/71295425007/",
                "urlToImage": null,
                "publishedAt": "2023-10-24T17:41:38Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "WKYT"
                },
                "author": "WKYT News Staff",
                "title": "Several cases of ‘emerging pathogenic yeast’ reported at UK Chandler Hospital - WKYT",
                "description": "UK HealthCare says several cases of the fungus Candida auris have been reported at UK Chandler Hospital.",
                "url": "https://www.wkyt.com/2023/10/24/several-cases-emerging-pathogenic-yeast-reported-uk-chandler-hospital/",
                "urlToImage": "https://gray-wkyt-prod.cdn.arcpublishing.com/resizer/Lf9PhHZPtYyo8ZiC6IzwtRgCu8k=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/LGCVL6WF6JOJFJLXKATBCIDT64.jpg",
                "publishedAt": "2023-10-24T17:15:00Z",
                "content": "LEXINGTON, Ky. (WKYT) - UK HealthCare says several cases of the fungus Candida auris have been reported at UK Chandler Hospital.\r\nWere told the five cases are isolated to one floor of the hospital.\r\n… [+768 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CBS Sports"
                },
                "author": "",
                "title": "Dolphins and 49ers drop in Prisco's Power Rankings, plus early Week 8 picks and grading the Vikings' upset win - CBS Sports",
                "description": "Here's everything you need to know about the NFL for Oct. 24",
                "url": "https://www.cbssports.com/nfl/news/dolphins-and-49ers-drop-in-priscos-power-rankings-plus-early-week-8-picks-and-grading-the-vikings-upset-win/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/24/b29f402f-f2c4-4514-98a8-8dbb2ca54b08/thumbnail/1200x675/436f54407b25e3a3b4494c58f53fcd51/niners-jpeg.jpg",
                "publishedAt": "2023-10-24T16:58:28Z",
                "content": "Welcome to the Tuesday edition of the Pick Six newsletter!\r\nAfter a wild Week 7, the NFL is down to just two teams that only have one loss and those two teams are the Chiefs and Eagles, so I guess we… [+13382 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Anjalee Khemlani",
                "title": "AstraZeneca asks the FDA to let adults give themselves the annual flu vaccine - Yahoo Finance",
                "description": "AstraZeneca is asking the FDA to let adults self-administer its nasal flu vaccine. It would be the first of its kind if the regulatory agency agrees.",
                "url": "https://finance.yahoo.com/news/astrazeneca-asks-the-fda-to-let-adults-give-themselves-the-annual-flu-vaccine-163138259.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/f27VPe9OWD9fGuWgzcqUYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/a6b29bc0-7274-11ee-bfbf-cce22e89e339",
                "publishedAt": "2023-10-24T16:31:38Z",
                "content": "AstraZeneca (AZN) is asking the FDA to approve its nasal flu vaccine, FluMist, for use at home a move that would make it the first ever self-administered vaccine.\r\nThe pharmaceutical giant announced … [+2777 chars]"
            },
            {
                "source": {
                    "id": "cbs-news",
                    "name": "CBS News"
                },
                "author": "Emmet Lyons",
                "title": "Israeli hostage released by Hamas, Yochaved Lifshitz, talks about ordeal, and why she shook her captor's hand - CBS News",
                "description": "Yocheved Lifshitz, 85, says she \"went through hell\" being taken hostage by Hamas, but after 2 weeks in captivity, she shook one of the militants' hands.",
                "url": "https://www.cbsnews.com/news/israel-hostage-released-hamas-yochaved-lifshitz-gaza-palestinians/",
                "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/10/24/8a578f87-5841-469b-986c-3fe365831e61/thumbnail/1200x630/a8eb24b64d59750db0e604921a91c4ca/screenshot-19.jpg?v=4fae59acf57b6bb1efa9da07582ebc40",
                "publishedAt": "2023-10-24T16:18:00Z",
                "content": "Yocheved Lifshitz, one of two elderly hostages released Monday by Hamas, told journalists Tuesday morning that she \"went through hell\" and was beaten on the day she was captured, but that she shook t… [+4164 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Sports Illustrated"
                },
                "author": "Kevin Sweeney",
                "title": "Astros Fans Roasted for Tough Scene Behind Home Plate During Game 7 Loss to Rangers - Sports Illustrated",
                "description": "There were plenty of good seats available late in Houston’s loss to the Rangers.",
                "url": "https://www.si.com/mlb/2023/10/24/astros-fans-roasted-for-empty-seats-in-loss-to-rangers",
                "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAxNzIzMTcyNjM3MTI0MjM5/screenshot-2023-10-24-at-114247-am.png",
                "publishedAt": "2023-10-24T16:14:19Z",
                "content": "All you had to do was look behind home plate to see just how many Astros fans left early during the Astros' disastrous Game 7 loss to the Rangers on Monday night. \r\nA crowd that looked raucous in the… [+1056 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MacRumors"
                },
                "author": "Juli Clover",
                "title": "Apple Announces October Event for Macs: 'Scary Fast' - MacRumors",
                "description": "Apple today announced its second fall event of 2023, with the online event set to be held on Monday, October 30 at 5:00 p.m. Pacific Time....",
                "url": "https://www.macrumors.com/2023/10/24/apple-october-mac-event-2023/",
                "urlToImage": "https://images.macrumors.com/t/koSfRQp8Hj4Rjak2xJGXdEX4DMQ=/2500x/article-new/2023/10/apple-october-scary-fast-event.jpg",
                "publishedAt": "2023-10-24T16:01:05Z",
                "content": "Apple today announced its second fall event of 2023, with the online event set to be held on Monday, October 30 at 5:00 p.m. Pacific Time. Apple's October event will be about the Mac, and the company… [+1288 chars]"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "Mary Kekatos",
                "title": "Moderna doses 1st participant in phase 3 clinical trial of combo flu, COVID vaccine - ABC News",
                "description": "The company said a combo vaccine could raise overall coverage rates.",
                "url": "https://abcnews.go.com/Health/moderna-doses-1st-participant-phase-3-clinical-trial/story?id=104245700",
                "urlToImage": "https://i.abcnewsfe.com/a/357a5239-863d-44cb-a201-095496033809/moderna-headquarters-gty-jt-230117_1673990357357_hpMain_16x9.jpg?w=992",
                "publishedAt": "2023-10-24T15:12:34Z",
                "content": "Moderna announced Tuesday it has dosed its first participant in a phase III clinical trial of a combination influenza and COVID-19 vaccine.\r\nThis phase will evaluate the safety and efficacy of the co… [+2859 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Taylor Swift kisses Travis Kelce on the cheek in new photo - TODAY",
                "description": "After Taylor Swift cheered on Travis Kelce at the Kansas City Chiefs game on October 22, the pop superstar was photographed kissing the NFL player on the che...",
                "url": "https://www.youtube.com/watch?v=TIzP3wSJ-ys",
                "urlToImage": "https://i.ytimg.com/vi/TIzP3wSJ-ys/maxresdefault.jpg",
                "publishedAt": "2023-10-24T15:00:20Z",
                "content": null
            }
        ]
    }
let str = ""
resultCount.innerHTML= response.totalResults
for (let item of response.articles){
    str= str + ` <div class="card my-4 mx-2" style="width: 18rem;">
   <img src="${item.urlToImage}" class="card-img-top" alt="...">
   <div class="card-body">
       <h5 class="card-title">${item.title}</h5>
       <p class="card-text">${item.description}</p>
       <a href="${item.url}" target="_blank" class="btn btn-primary">Go somewhere</a>
   </div>
</div>`

}

document.querySelector(".Content").innerHTML = str
          
}

fetchNews(1, "Sports")
search.addEventListener("click", (e)=>{
    e.preventDefault()
    let query= searchInput.value;
    currentQuery= query
    fetchNews(1, query)
})

