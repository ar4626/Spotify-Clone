console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitem = document.getElementsByClassName('songitem');


let songs = [
    {songName : " Warriyo-Mortals (feat,Laura Brehm) [NCS Release]",filepath:"songs/1.mp3",coverpath:"image/covers/1.jpg"},
    {songName : " Cielo - HUma-Huma",filepath:"songs/2.mp3",coverpath:"image/covers/2.jpg"},
    {songName : " DEAF KEV -Invincible [NCS Release]-320k",filepath:"songs/3.mp3",coverpath:"image/covers/3.jpg"},
    {songName : " Different Heaven & EHIDE - My Heart [NCS Release]-320k",filepath:"songs/4.mp3",coverpath:"image/covers/4.jpg"},
    {songName : " Janji-Heroes-Tonight-feat-Johnnings-NCS-Release-(kanhai80.wapkin.com)",filepath:"songs/5.mp3",coverpath:"image/covers/5.jpg"},
    {songName : " Janji - Heroes Tonight (feat. Johnning) [NCS Release]",filepath:"songs/6.mp3",coverpath:"image/covers/6.jpg"},
    {songName : " Janji - Heroes Tonight (feat. Johnning) [NCS Release]",filepath:"songs/7.mp3",coverpath:"image/covers/7.jpg"},
    {songName : " Bhula dena mujhe  (feat. Johnning) [NCS Release]",filepath:"songs/8.mp3",coverpath:"image/covers/8.jpg"},
    {songName : " Kassam ki kasam hai kasam se (feat. Johnning) [NCS Release]",filepath:"songs/9.mp3",coverpath:"image/covers/9.jpg"}
]

songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementByTagName("img")[0].src=songs[i].filepath;
});

// handle play/pause on click

masterplay.addEventListener('click',()=>{
    if( audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    } else {
        audioElement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');  
    // update seekbar  
    progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
    // console.log(audioElement.currentTime);
    // console.log(audioElement.duration);
    console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
});


