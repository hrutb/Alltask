//type Alias
var websites = [
    { name: "Google", category: "Search Engine", monthlyVisitors: 92, founded: 1998, founder: "Larry Page" },
    { name: "YouTube", category: "Video Sharing", monthlyVisitors: 34, founded: 2005, founder: "Steve Chen" },
    { name: "Facebook", category: "Social Media", monthlyVisitors: 28, founded: 2004, founder: "Mark Zuckerberg" },
    { name: "Wikipedia", category: "Encyclopedia", monthlyVisitors: 15, founded: 2001, founder: "Jimmy Wales" },
    { name: "Amazon", category: "E-commerce", monthlyVisitors: 26, founded: 1994, founder: "Jeff Bezos" }
];
// console.log(websites); 
function fetchWebsites() {
    return Promise.resolve(websites);
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
function fetchSocialMedia() {
    return Promise.resolve(socialMedia);
}
fetchSocialMedia()
    .then(function (res) {
    console.log(res);
});
