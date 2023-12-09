// Global Variables
const originalList = [...songs];
let currentSongIndex = 0;

// DOM Elements
const songList = document.getElementById("song-list");

displaySongs(originalList);
renderCurrentSongUI(currentSongIndex, originalList);

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

function renderCurrentSongUI(index, list) {
    const currentSong = list[index];
    document.getElementById('song-title').textContent = currentSong.title;
    document.getElementById('song-artist').textContent = currentSong["artist-name"];
}