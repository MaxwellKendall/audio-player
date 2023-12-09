// Global Variables
const originalList = [...songs];
let currentSongIndex = 0;
const MAXIMUM_SONG_INDEX = originalList.length - 1;

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

// Event Listeners
document.getElementById('play-button').addEventListener('click', () => {
    playSong(originalList);
});

function playSong(list) {
    const currentSong = list[currentSongIndex];
    audio.pause();
    audio.src = currentSong.url; // Set the audio source to the current song URL
    audio.play();
    renderCurrentSongUI(currentSongIndex, list);
}

document.getElementById('next-button').addEventListener('click', () => {
    const nextSong = currentSongIndex + 1;
    if (nextSong > MAXIMUM_SONG_INDEX) {
        currentSongIndex = 0;
    } else {
        currentSongIndex = nextSong;
    }
    playSong(originalList);
});


document.getElementById('prev-button').addEventListener('click', () => {
    const previousSong = currentSongIndex - 1;
    if (previousSong < 0) {
        currentSongIndex = 0;
    } else {
        currentSongIndex = previousSong;
    }
    playSong(originalList);
});

songList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const clickedSong = e.target.innerHTML;
        console.log(clickedSong);
        currentSongIndex = originalList.findIndex(obj => obj.title === clickedSong);
        playSong(originalList); // Play the selected song
    }
});