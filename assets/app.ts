import { Observable } from "rxjs";


interface Websites  { 
    name:string ,
    category:string,
    monthlyVisitors:number,
    founded:number,
    founder:string 
}  

//type Alias
type websites ={  
    name:string ,
    category:string,
    monthlyVisitors:number | null,
    founded:number | null,
    founder:string | 'Anonumous' 
}




const websitesArr:Websites[] = [
    { name: "Google", category: "Search Engine", monthlyVisitors: 92, founded: 1998, founder: "Larry Page" },
    { name: "YouTube", category: "Video Sharing", monthlyVisitors: 34, founded: 2005, founder: "Steve Chen" },
    { name: "Facebook", category: "Social Media", monthlyVisitors: 28, founded: 2004, founder: "Mark Zuckerberg" },
    { name: "Wikipedia", category: "Encyclopedia", monthlyVisitors: 15, founded: 2001, founder: "Jimmy Wales" },
    { name: "Amazon", category: "E-commerce", monthlyVisitors: 26, founded: 1994, founder: "Jeff Bezos" }
]; 



// console.log(websites); 

function fetchWebsites(): Promise<Websites[]>{ 
    return Promise.resolve(websitesArr); 
} 
 

fetchWebsites()

  .then(res=>{ 
      console.log(res);
   }) 





//----------------- socialMedia-------------

interface socialMedia{ 
         name:string,
         users:number,
         launched:number,
         owner:string,
         type:string
}

const socialMedia:socialMedia[] = [
    { name: "Instagram", users: 2000, launched: 2010, owner: "Meta", type: "Photo Sharing" },
    { name: "TikTok", users: 1500, launched: 2016, owner: "ByteDance", type: "Video Sharing" },
    { name: "Twitter", users: 436, launched: 2006, owner: "Elon Musk", type: "Microblogging" },
    { name: "LinkedIn", users: 830, launched: 2003, owner: "Microsoft", type: "Professional" },
    { name: "Snapchat", users: 347, launched: 2011, owner: "Snap Inc.", type: "Multimedia" }
];

//-------Promise

function fetchSocialMedia(): Promise<socialMedia[]>{
     return Promise.resolve(socialMedia);
}

fetchSocialMedia()
.then(res=>{ 
          console.log(res);
})


//----------Hotels-------------

interface hotels{ 
             name:string,
             location:string,
             stars:number,
             rooms:number,
             pricePerNight:number
}

//--------Type alias----
type hotel={ 
             name:string,
             location:string,
             stars:number,
             rooms:number,
             pricePerNight:number
}









const hotelArr:hotels[] = [
    { name: "Burj Al Arab", location: "Dubai", stars: 5, rooms: 202, pricePerNight: 1500 },
    { name: "The Plaza", location: "New York", stars: 5, rooms: 282, pricePerNight: 1000 },
    { name: "Ritz Paris", location: "Paris", stars: 5, rooms: 142, pricePerNight: 1200 },
    { name: "Marina Bay Sands", location: "Singapore", stars: 5, rooms: 2561, pricePerNight: 400 },
    { name: "The Savoy", location: "London", stars: 5, rooms: 267, pricePerNight: 800 }
];



function  fetchHotels():Promise<hotels[]>{ 
      return Promise.resolve(hotelArr);
}



 fetchHotels()
     .then((res)=>{ 
            console.log(res);
     }) 

//-------------- 


interface inventions {
           name:string,
           inventor:string,
           year:number,
           impact:string,
           category:string

 }


 type invention ={ 
           name:string,
           inventor:string,
           year:number,
           impact:string,
           category:string
 }



const inventions:inventions[] = [
    { name: "Light Bulb", inventor: "Thomas Edison", year: 1879, impact: "High", category: "Technology" },
    { name: "Telephone", inventor: "Alexander Graham Bell", year: 1876, impact: "High", category: "Communication" },
    { name: "Printing Press", inventor: "Johannes Gutenberg", year: 1440, impact: "High", category: "Technology" },
    { name: "Penicillin", inventor: "Alexander Fleming", year: 1928, impact: "High", category: "Medicine" },
    { name: "Internet", inventor: "Tim Berners-Lee", year: 1989, impact: "High", category: "Technology" }
];

function  fetchinventions(): Promise<inventions[]>{ 
           return Promise.resolve(inventions);
} 

fetchinventions()
.then((res)=>{ 
      console.log(res);
})



//-----pantings


interface paintings{ 
        title:string,
        artist:string,
        year:number,
        style:string,
        location:string    
}


type Paintings ={ 
        title:string,
        artist:string,
        year:number,
        style:string,
        location:string    
}

const paintings:paintings[] = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", year: 1503, style: "Renaissance", location: "Louvre" },
    { title: "Starry Night", artist: "Vincent van Gogh", year: 1889, style: "Post-Impressionism", location: "MoMA" },
    { title: "The Persistence of Memory", artist: "Salvador Dalí", year: 1931, style: "Surrealism", location: "MoMA" },
    { title: "Girl with a Pearl Earring", artist: "Johannes Vermeer", year: 1665, style: "Baroque", location: "Mauritshuis" },
    { title: "The Scream", artist: "Edvard Munch", year: 1893, style: "Expressionism", location: "National Gallery" }
];



function  fetchPaints(): Promise<paintings[]>{ 
       return Promise.resolve(paintings)
}

fetchPaints() 
.then((res)=>{ 
     console.log(res);
}) 



//----------Scientists----- 

interface scientist{ 
      name:string,
      field:string,
      discovery:string,
      nationality:string,
      era:string
}


type scientists ={ 
      name:string | null,
      field:string | null,
      discovery:string,
      nationality:string,
      era:string | null
} 

const scientists = [
    { name: "Isaac Newton", field: "Physics", discovery: "Laws of Motion", nationality: "English", era: "17th century" },
    { name: "Galileo Galilei", field: "Astronomy", discovery: "Heliocentrism", nationality: "Italian", era: "16th century" },
    { name: "Charles Darwin", field: "Biology", discovery: "Evolution", nationality: "English", era: "19th century" },
    { name: "Nikola Tesla", field: "Engineering", discovery: "AC Electricity", nationality: "Serbian", era: "19th century" },
    { name: "Marie Curie", field: "Chemistry", discovery: "Radioactivity", nationality: "Polish", era: "20th century" }
];





function fetchSci() : Promise<scientist[]>{ 
      return Promise.resolve(scientists);
}  

fetchSci()
 .then(res=>{ 
         console.log(res);
 })


//-------------Companies----------

 interface companies{ 
      name:string,
      industry:string,
      founded:number,
      founder:string,
      revenue:number
 }


type company ={ 
       name:string,
      industry:string,
      founded:number,
      founder:string,
      revenue:number       
}



const companies = [
    { name: "Apple", industry: "Technology", founded: 1976, founder: "Steve Jobs", revenue: 365 },
    { name: "Amazon", industry: "E-commerce", founded: 1994, founder: "Jeff Bezos", revenue: 386 },
    { name: "Google", industry: "Technology", founded: 1998, founder: "Larry Page", revenue: 182 },
    { name: "Microsoft", industry: "Technology", founded: 1975, founder: "Bill Gates", revenue: 168 },
    { name: "Tesla", industry: "Automotive", founded: 2003, founder: "Elon Musk", revenue: 31 }
];




function fetchcompanies():Promise<company[]>{ 
         return Promise.resolve(companies)
}


fetchcompanies()
.then(res=>{ 
     console.log(res);
}) 




interface tvShows{ 

     title:string,
     genre:string,
     seasons:number,
     episodes:number,
     rating:number
}



type tvShow ={ 

     title:string,
     genre:string,
     seasons:number,
     episodes:number,
     rating:number  
}

const tvShows = [
    { title: "Breaking Bad", genre: "Drama", seasons: 5, episodes: 62, rating: 9.5 },
    { title: "Game of Thrones", genre: "Fantasy", seasons: 8, episodes: 73, rating: 9.3 },
    { title: "Friends", genre: "Comedy", seasons: 10, episodes: 236, rating: 8.9 },
    { title: "Stranger Things", genre: "Sci-Fi", seasons: 4, episodes: 34, rating: 8.7 },
    { title: "The Office", genre: "Comedy", seasons: 9, episodes: 201, rating: 8.9 }
];



function  fetchtvShow():Promise<tvShow[]>{ 
        return Promise.resolve(tvShows)
}


fetchtvShow()
 .then((res)=>{ 
     console.log(res)
 })





 //------musicArtis--------

 interface musicArtist{ 
                name:string,
                genre:string,
                activeYears:string,
                albums:number,
                members:number
  }


  type musicartist = { 
                name:string,
                genre:string,
                activeYears:string,
                albums:number,
                members:number
            }

 const musicArtists = [
    { name: "The Beatles", genre: "Rock", activeYears: "1960-1970", albums: 13, members: 4 },
    { name: "Michael Jackson", genre: "Pop", activeYears: "1964-2009", albums: 10, awards: 15, members: 4 },
    { name: "Queen", genre: "Rock", activeYears: "1970-present", albums: 15, members: 4 },
    { name: "Taylor Swift", genre: "Pop", activeYears: "2006-present", albums: 9, awards: 11, members: 4 },
    { name: "Beyoncé", genre: "R&B", activeYears: "1997-present", albums: 6, awards: 28, members: 4 }
];

function FetchmusicArtist():Promise<musicArtist[]>{ 
         return Promise.resolve(musicArtists);
}

FetchmusicArtist()
    .then(res=>{ 
                console.log(res);
    })

//-----------videoGames-----

interface videoGame{ 
             title:string,
             genre:string,
             releaseYear:number,
             developer:string,
             rating:number
} 


type videogames ={ 
            title:string,
             genre:string,
             releaseYear:number,
             developer:string,
             rating:number
}

let videogame: videogames ={ 
             title:'mario',
              genre:"RPG",
             releaseYear:1992,
             developer:"nintendo",
             rating:9.7 
}


const videoGames = [
    { title: "The Witcher 3", genre: "RPG", releaseYear: 2015, developer: "CD Projekt Red", rating: 9.7 },
    { title: "Grand Theft Auto V", genre: "Action", releaseYear: 2013, developer: "Rockstar", rating: 9.5 },
    { title: "Red Dead Redemption 2", genre: "Adventure", releaseYear: 2018, developer: "Rockstar", rating: 9.8 },
    { title: "The Legend of Zelda: Breath of the Wild", genre: "Adventure", releaseYear: 2017, developer: "Nintendo", rating: 9.5 },
    { title: "Dark Souls III", genre: "RPG", releaseYear: 2016, developer: "FromSoftware", rating: 9.0 }
]; 


function fetchGame():Promise<videoGame[]>{ 
         return Promise.resolve(videoGames)
}

fetchGame()
 .then((res)=>{ 
     console.log(res);
 })



 //------------recipies------ 




interface recipes{ 
            name:string,
            ingredients:string[],
            time:number,
            difficulty:string
}


type recipe ={ 
            name:string,
            ingredients:string[],
            time:number,
            difficulty:string
}


 const recipes = [
    { name: "Pasta Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], time: 20, difficulty: "Medium" },
    { name: "Chicken Curry", ingredients: ["Chicken", "Curry paste", "Coconut milk"], time: 45, difficulty: "Easy" },
    { name: "Chocolate Cake", ingredients: ["Flour", "Sugar", "Cocoa", "Eggs"], time: 60, difficulty: "Hard" },
    { name: "Caesar Salad", ingredients: ["Lettuce", "Croutons", "Parmesan", "Dressing"], time: 15, difficulty: "Easy" },
    { name: "Beef Burger", ingredients: ["Beef patty", "Bun", "Lettuce", "Tomato"], time: 25, difficulty: "Easy" }
]; 




function fetchRecipes():Promise<recipes[]>{ 
          return Promise.resolve(recipes);
}


fetchRecipes() 
 .then(res=>{ 
       console.log(res);
    })
