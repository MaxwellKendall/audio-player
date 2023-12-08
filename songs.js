/**
 * NOTE:
 * When this js file is loaded from the <head> of the
 * .html file, this variable will be accessible from the window.
 * In other words, this variable is defined in the "global scope"
 */
var songs = [
    {
        "title": "Cruel Summer",
        "artist-name": "Taylor Swift",
        "url": "songs/Cruel summer.mp3",
    },
    {
        "title": "I Remember Everything",
        "artist-name": "Zach Bryan",
        "url": "songs/I remember everything.mp3",
    },
    {
        "title": "Strangers",
        "artist-name": "Kenya Grace",
        "url": "songs/Strangers.mp3",
    },
    {
        "title": "Used To Be Young",
        "artist-name": "Miley Cyrus",
        "url": "songs/Used to be young.mp3",
    }
]

/**
 * As an example, consider that only songs will be 
 * visible/accessible in script.js
 * 
 * That is because songs_v2 is not defined in the "global scope";
 * rather, it is defined and accesible only within the scope of
 * the below function.
 */
var nonGlobalScope = () => {
    // this is a new lexical scope
    var songs_v2 = songs;
}

nonGlobalScope();