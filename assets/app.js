"use strict";
// exports.__esModule = true;
var websitesArr = [
    { name: "Google", category: "Search Engine", monthlyVisitors: 92, founded: 1998, founder: "Larry Page" },
    { name: "YouTube", category: "Video Sharing", monthlyVisitors: 34, founded: 2005, founder: "Steve Chen" },
    { name: "Facebook", category: "Social Media", monthlyVisitors: 28, founded: 2004, founder: "Mark Zuckerberg" },
    { name: "Wikipedia", category: "Encyclopedia", monthlyVisitors: 15, founded: 2001, founder: "Jimmy Wales" },
    { name: "Amazon", category: "E-commerce", monthlyVisitors: 26, founded: 1994, founder: "Jeff Bezos" }
];
// console.log(websites); 
function fetchWebsites() {
    return Promise.resolve(websitesArr);
}
fetchWebsites()
    .then(function (res) {
    console.log(res);
});
var socialMedia = [
    { name: "Instagram", users: 2000, launched: 2010, owner: "Meta", type: "Photo Sharing" },
    { name: "TikTok", users: 1500, launched: 2016, owner: "ByteDance", type: "Video Sharing" },
    { name: "Twitter", users: 436, launched: 2006, owner: "Elon Musk", type: "Microblogging" },
    { name: "LinkedIn", users: 830, launched: 2003, owner: "Microsoft", type: "Professional" },
    { name: "Snapchat", users: 347, launched: 2011, owner: "Snap Inc.", type: "Multimedia" }
];
//-------Promise
function fetchSocialMedia() {
    return Promise.resolve(socialMedia);
}
fetchSocialMedia()
    .then(function (res) {
    console.log(res);
});
var hotelArr = [
    { name: "Burj Al Arab", location: "Dubai", stars: 5, rooms: 202, pricePerNight: 1500 },
    { name: "The Plaza", location: "New York", stars: 5, rooms: 282, pricePerNight: 1000 },
    { name: "Ritz Paris", location: "Paris", stars: 5, rooms: 142, pricePerNight: 1200 },
    { name: "Marina Bay Sands", location: "Singapore", stars: 5, rooms: 2561, pricePerNight: 400 },
    { name: "The Savoy", location: "London", stars: 5, rooms: 267, pricePerNight: 800 }
];
function fetchHotels() {
    return Promise.resolve(hotelArr);
}
fetchHotels()
    .then(function (res) {
    console.log(res);
});
var inventions = [
    { name: "Light Bulb", inventor: "Thomas Edison", year: 1879, impact: "High", category: "Technology" },
    { name: "Telephone", inventor: "Alexander Graham Bell", year: 1876, impact: "High", category: "Communication" },
    { name: "Printing Press", inventor: "Johannes Gutenberg", year: 1440, impact: "High", category: "Technology" },
    { name: "Penicillin", inventor: "Alexander Fleming", year: 1928, impact: "High", category: "Medicine" },
    { name: "Internet", inventor: "Tim Berners-Lee", year: 1989, impact: "High", category: "Technology" }
];
function fetchinventions() {
    return Promise.resolve(inventions);
}
fetchinventions()
    .then(function (res) {
    console.log(res);
});
var paintings = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", year: 1503, style: "Renaissance", location: "Louvre" },
    { title: "Starry Night", artist: "Vincent van Gogh", year: 1889, style: "Post-Impressionism", location: "MoMA" },
    { title: "The Persistence of Memory", artist: "Salvador Dalí", year: 1931, style: "Surrealism", location: "MoMA" },
    { title: "Girl with a Pearl Earring", artist: "Johannes Vermeer", year: 1665, style: "Baroque", location: "Mauritshuis" },
    { title: "The Scream", artist: "Edvard Munch", year: 1893, style: "Expressionism", location: "National Gallery" }
];
function fetchPaints() {
    return Promise.resolve(paintings);
}
fetchPaints()
    .then(function (res) {
    console.log(res);
});
var scientists = [
    { name: "Isaac Newton", field: "Physics", discovery: "Laws of Motion", nationality: "English", era: "17th century" },
    { name: "Galileo Galilei", field: "Astronomy", discovery: "Heliocentrism", nationality: "Italian", era: "16th century" },
    { name: "Charles Darwin", field: "Biology", discovery: "Evolution", nationality: "English", era: "19th century" },
    { name: "Nikola Tesla", field: "Engineering", discovery: "AC Electricity", nationality: "Serbian", era: "19th century" },
    { name: "Marie Curie", field: "Chemistry", discovery: "Radioactivity", nationality: "Polish", era: "20th century" }
];
function fetchSci() {
    return Promise.resolve(scientists);
}
fetchSci()
    .then(function (res) {
    console.log(res);
});
var companies = [
    { name: "Apple", industry: "Technology", founded: 1976, founder: "Steve Jobs", revenue: 365 },
    { name: "Amazon", industry: "E-commerce", founded: 1994, founder: "Jeff Bezos", revenue: 386 },
    { name: "Google", industry: "Technology", founded: 1998, founder: "Larry Page", revenue: 182 },
    { name: "Microsoft", industry: "Technology", founded: 1975, founder: "Bill Gates", revenue: 168 },
    { name: "Tesla", industry: "Automotive", founded: 2003, founder: "Elon Musk", revenue: 31 }
];
function fetchcompanies() {
    return Promise.resolve(companies);
}
fetchcompanies()
    .then(function (res) {
    console.log(res);
});
var tvShows = [
    { title: "Breaking Bad", genre: "Drama", seasons: 5, episodes: 62, rating: 9.5 },
    { title: "Game of Thrones", genre: "Fantasy", seasons: 8, episodes: 73, rating: 9.3 },
    { title: "Friends", genre: "Comedy", seasons: 10, episodes: 236, rating: 8.9 },
    { title: "Stranger Things", genre: "Sci-Fi", seasons: 4, episodes: 34, rating: 8.7 },
    { title: "The Office", genre: "Comedy", seasons: 9, episodes: 201, rating: 8.9 }
];
function fetchtvShow() {
    return Promise.resolve(tvShows);
}
fetchtvShow()
    .then(function (res) {
    console.log(res);
});
var musicArtists = [
    { name: "The Beatles", genre: "Rock", activeYears: "1960-1970", albums: 13, members: 4 },
    { name: "Michael Jackson", genre: "Pop", activeYears: "1964-2009", albums: 10, awards: 15, members: 4 },
    { name: "Queen", genre: "Rock", activeYears: "1970-present", albums: 15, members: 4 },
    { name: "Taylor Swift", genre: "Pop", activeYears: "2006-present", albums: 9, awards: 11, members: 4 },
    { name: "Beyoncé", genre: "R&B", activeYears: "1997-present", albums: 6, awards: 28, members: 4 }
];
function FetchmusicArtist() {
    return Promise.resolve(musicArtists);
}
FetchmusicArtist()
    .then(function (res) {
    console.log(res);
});
var videogame = {
    title: 'mario',
    genre: "RPG",
    releaseYear: 1992,
    developer: "nintendo",
    rating: 9.7
};
var videoGames = [
    { title: "The Witcher 3", genre: "RPG", releaseYear: 2015, developer: "CD Projekt Red", rating: 9.7 },
    { title: "Grand Theft Auto V", genre: "Action", releaseYear: 2013, developer: "Rockstar", rating: 9.5 },
    { title: "Red Dead Redemption 2", genre: "Adventure", releaseYear: 2018, developer: "Rockstar", rating: 9.8 },
    { title: "The Legend of Zelda: Breath of the Wild", genre: "Adventure", releaseYear: 2017, developer: "Nintendo", rating: 9.5 },
    { title: "Dark Souls III", genre: "RPG", releaseYear: 2016, developer: "FromSoftware", rating: 9.0 }
];
function fetchGame() {
    return Promise.resolve(videoGames);
}
fetchGame()
    .then(function (res) {
    console.log(res);
});
var recipes = [
    { name: "Pasta Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], time: 20, difficulty: "Medium" },
    { name: "Chicken Curry", ingredients: ["Chicken", "Curry paste", "Coconut milk"], time: 45, difficulty: "Easy" },
    { name: "Chocolate Cake", ingredients: ["Flour", "Sugar", "Cocoa", "Eggs"], time: 60, difficulty: "Hard" },
    { name: "Caesar Salad", ingredients: ["Lettuce", "Croutons", "Parmesan", "Dressing"], time: 15, difficulty: "Easy" },
    { name: "Beef Burger", ingredients: ["Beef patty", "Bun", "Lettuce", "Tomato"], time: 25, difficulty: "Easy" }
];
function fetchRecipes() {
    return Promise.resolve(recipes);
}
fetchRecipes()
    .then(function (res) {
    console.log(res);
});
