console.log("x")
let songIndex=0;
let audioElement=new Audio('1.mp3')
let masterPlay=document.getElementById("masterPlay")
let masterPlayPath=document.getElementById("masterPlayPath");
let gif=document.getElementById("gif");
let progressbar=document.getElementById("progressbar");
let currentsongname=document.getElementById("currentsongname")
let songitems=Array.from(document.getElementsByClassName("songitem"));
let songs=[{songName:"Let me Love You",filePath:"1.mp3",coverPath:"10.jpg"},{songName:"Um Som",filePath:"2.mp3",coverPath:"9.jpg"},
{songName:"Amazing",filePath:"3.mp3",coverPath:"8.jpg"},
{songName:"Different Heaven & EH!DE",filePath:"4.mp3",coverPath:"7.jpg"},
{songName:"Mente Positiva",filePath:"5.mp3",coverPath:"6.jpg"},
{songName:"gym electronic music",filePath:"6.mp3",coverPath:"5.jpg"},
{songName:"Plug Walk",filePath:"7.mp3",coverPath:"4.jpg"},
{songName:"The Man",filePath:"8.mp3",coverPath:"3.jpg"}
]
let playPath="M10 8L16 12L10 16Z";
let pausePath="M9 8H11V16H9ZM138H15V16H13Z";
let next=document.getElementById("next")
let previous=document.getElementById("previous")
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay'))
.forEach((element)=>{
let path=element.querySelector("path");
path.setAttribute("d",playPath);
})
}
Array.from(document.getElementsByClassName('songItemPlay'))
.forEach((element,index)=>{
element.addEventListener('click',()=>{
makeAllPlays();
let path=element.querySelector("path");
path.setAttribute("d",pausePath);
audioElement.src=songs[index].filePath;
audioElement.currentTime=0;
audioElement.play();
currentsongname.innerText=songs[songIndex].songName;
masterPlayPath.setAttribute("d",pausePath)

})
})
songitems.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName
})

masterPlay.addEventListener("click",()=>{
if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
masterPlayPath.setAttribute("d",pausePath);
gif.style.opacity=1;
Array.from(document.getElementsByClassName('songItemPlay'))[songIndex].querySelector("path").setAttribute("d",pausePath);
}
else{
audioElement.pause();
masterPlayPath.setAttribute(
"d",playPath);
gif.style.opacity=0;
makeAllPlays()
}
})
next.addEventListener("click", () => {

    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex++;
    }

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    currentsongname.innerText=songs[songIndex].songName

    masterPlayPath.setAttribute("d", pausePath);
    gif.style.opacity = 1;

    makeAllPlays();

    Array.from(document.getElementsByClassName('songItemPlay'))[songIndex]
        .querySelector("path")
        .setAttribute("d", pausePath);

});
previous.addEventListener("click", () => {

    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex--;
    }

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    currentsongname.innerText=songs[songIndex].songName

    masterPlayPath.setAttribute("d", pausePath);
    gif.style.opacity = 1;

    makeAllPlays();

    Array.from(document.getElementsByClassName('songItemPlay'))[songIndex]
        .querySelector("path")
        .setAttribute("d", pausePath);

});
audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
audioElement.currentTime=progressbar.value*audioElement.duration/100;
})

