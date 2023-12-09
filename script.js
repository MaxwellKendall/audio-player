// Global Variables
const originalList = [...songs];

// DOM Elements
const songList = document.getElementById("song-list");

displaySongs(originalList);

function displaySongs(input) {
    songList.innerHTML = '';
    
    // Iterate through each song in the playlist and create list elements
    input.forEach(song => {
        console.log(song);
        let liElement = document.createElement("li");
        liElement.innerHTML = song.title; // Display song title
        songList.appendChild(liElement);
    });  
}


