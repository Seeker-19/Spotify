console.log("welcome");
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('fig');
let songItems=Array.from(document.getElementsByClassName("songitem"));
let songitemPlay=Array.from(document.getElementsByClassName("songitemplay"));
let index=0;
let masterSongName=document.getElementById('mastersongname');
let songs=[
  {songName:"Whatever It Takes",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
  {songName:"Hall of Fame",filepath:"songs/2.mp3",coverPath:"covers/2.jpg"},
  {songName:"Wake me Up",filepath:"songs/3.mp3",coverPath:"covers/3.jpg"},
  {songName:"Demons",filepath:"songs/4.mp3",coverPath:"covers/4.jpg"},
  {songName:"Champion",filepath:"songs/5.mp3",coverPath:"covers/5.jpg"},
  {songName:"Let Me Love You",filepath:"songs/6.mp3",coverPath:"covers/6.jpg"},
  {songName:"Unstoppable",filepath:"songs/7.mp3",coverPath:"covers/7.jpg"},
  {songName:"Believer",filepath:"songs/8.mp3",coverPath:"covers/8.jpg"},
  {songName:"Superheroes",filepath:"songs/9.mp3",coverPath:"covers/9.jpg"},
  {songName:"Phoenix ",filepath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]
songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
}
)
masterPlay.addEventListener('click',()=>{
     
    if(audioElement.paused||audioElement.currentTime<=0){

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
         
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

songitemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        gif.style.opacity=1;
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${index}.mp3`;
        masterSongName.innerText=songs[index-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    
})
document.getElementById('next').addEventListener('click',()=>{

    if(index>=10)
    {
        index=0;
    }
    else{
        index+=1;
    }
    gif.style.opacity=1;
    audioElement.src=`songs/${index+1}.mp3`;
    masterSongName.innerText=songs[index].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{

    if(index<=0)
    {
        index=0;
    }
    else{
        index-=1;
    }
    audioElement.src=`songs/${index+1}.mp3`;
    masterSongName.innerText=songs[index].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})