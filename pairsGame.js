
const animals = [
    {   picture: './media/animals/1.jpg',
        quote: '',
        id: 1},
    {   picture: './media/animals/2.jpg',
        quote: '',
        id: 2},
    {   picture: './media/animals/3.jpg',
        quote: '',
        id: 3},
    {   picture: './media/animals/4.jpg',
        quote: '',
        id: 4},
    {   picture: './media/animals/5.jpg',
        quote: '',
        id: 5},
    {   picture: './media/animals/6.jpg',
        quote: '',
        id: 6},
    {   picture: './media/animals/7.jpg',
        quote: '',
        id: 7},
    {   picture: './media/animals/8.jpg',
        quote: '',
        id: 8},
    {   picture: './media/animals/1.jpg',
        quote: '',
        id: 1},
    {   picture: './media/animals/2.jpg',
        quote: '',
        id: 2},
    {   picture: './media/animals/3.jpg',
        quote: '',
        id: 3},
    {   picture: './media/animals/4.jpg',
        quote: '',
        id: 4},
    {   picture: './media/animals/5.jpg',
        quote: '',
        id: 5},
    {   picture: './media/animals/6.jpg',
        quote: '',
        id: 6},
    {   picture: './media/animals/7.jpg',
        quote: '',
        id: 7},
    {   picture: './media/animals/8.jpg',
        quote: '',
        id: 8},
];

const twiners = [
    {   picture: './media/twiners/1.png',
        quote: 'bogdan: "my faith in vanilla js is shattering"',
        id: 1},
    {   picture: './media/twiners/2.png',
        quote: 'Cyrus Firheir: "dragins are metaphysical ascendants from kyats"',
        id: 2},
    {   picture: './media/twiners/3.png',
        quote: '{G𝖜𝖊𝖓[♡].T𝖆𝖘𝖙𝖎𝖈}: "well that\'s a straight forward question trbry, (also kinky) :\'3',
        id: 3},
    {   picture: './media/twiners/4.png',
        quote: 'Lychgate: "i want muh tractor to show up. i want to play on it"',
        id: 4},
    {   picture: './media/twiners/5.png',
        quote: 'Haley Scribe: *Shares meme*',
        id: 5},
    {   picture: './media/twiners/6.png',
        quote: 'redsea : "but I am different, little bit of a lunatic"',
        id: 6},
    {   picture: './media/twiners/7.png',
        quote: 'Hituro: "Please step into my office ... it\'s rather small ... and dark ... and smells like cheddar ..."',
        id: 7},
    {   picture: './media/twiners/8.png',
        quote: 'TRBRY: "I wish that I some day could answer this with any weight behind my opinion at all."',
        id: 8},
        {   picture: './media/twiners/1.png',
        quote: 'bogdan: "my faith in vanilla js is shattering"',
        id: 1},
    {   picture: './media/twiners/2.png',
        quote: 'Cyrus Firheir: "dragins are metaphysical ascendants from kyats"',
        id: 2},
    {   picture: './media/twiners/3.png',
        quote: '{G𝖜𝖊𝖓[♡].T𝖆𝖘𝖙𝖎𝖈}: "well that\'s a straight forward question trbry, (also kinky) :\'3',
        id: 3},
    {   picture: './media/twiners/4.png',
        quote: 'Lychgate: "i want muh tractor to show up. i want to play on it"',
        id: 4},
    {   picture: './media/twiners/5.png',
        quote: 'Haley Scribe: *Shares meme*',
        id: 5},
    {   picture: './media/twiners/6.png',
        quote: 'redsea : "but I am different, little bit of a lunatic"',
        id: 6},
    {   picture: './media/twiners/7.png',
        quote: 'Hituro: "Please step into my office ... it\'s rather small ... and dark ... and smells like cheddar ..."',
        id: 7},
    {   picture: './media/twiners/8.png',
        quote: 'TRBRY: "I wish that I some day could answer this with any weight behind my opinion at all."',
        id: 8},
]

var min = 0;
var sec = 0;
var thisMin ;
var thisSec ;
var bestMin = 0;
var bestSec = 0;
var gameStopWatch;
var gamesPlayed = 0;
var thisIndex;

let lastTile = undefined;
let lastId = undefined;
let pairsFound = 0;

const gameWindow = document.getElementsByClassName('game');
const allTiles = document.getElementsByClassName('tile');
const allTilesBack = document.getElementsByClassName('tileBack');
var gameType;

//placeTiles(twiners);

function placeTiles(gameArray) {
    gameArray.sort(() => Math.random() - 0.5).forEach((obj,index)=>{
    let tile = '<div class="tile" id="tile'+ index +'" onclick="compare(' + obj.id + ',' + index +',' + ')"> <div class="tileFront" style="background-image: url(' + obj.picture + ')"></div><div class="tileBack"></div></div>';
      gameWindow[0].innerHTML += tile;
    })
}

function startGame(type){
    sec = 0;
    min = 0;
    gameStopWatch = setInterval(()=>{
        sec ++;
        if (sec > 60){
            sec = 0;
            min++;
        }
        document.querySelector('#currentTime').innerHTML = min + ':' + sec ;
    },1000);

    Array.from(allTiles).forEach((tile)=>{ tile.remove()});
    placeTiles(type);
    document.querySelector('.startButton').style.display = 'none';
    gameType = type;

    Array.from(allTiles).forEach((back,thisIndex)=>{
        back.addEventListener('mouseenter', ()=> {
            allTilesBack[thisIndex].style.outline = "8px solid rgb(237, 243, 255)"
        })

        back.addEventListener('mouseleave', function() {
            console.log('hover');
            allTilesBack[thisIndex].style.outline = "8px solid rgb(167, 192, 245)"
        })
    })

}


function compare(id,index) {
    
    var thisTile = document.getElementById('tile' + index);
    var thisId = id ;
    thisTile.classList.toggle('tileFlipped');

    thisIndex = index;

    if (lastId === undefined) {
        lastId = thisId;
        lastTile = thisTile;
        
    }
        else {
            if(thisId === lastId){
                pairsFound++;
                document.querySelector('.quote').innerHTML = gameType[index].quote;
                document.querySelector('.quote').style.display = "block";
                setTimeout(()=>{document.querySelector('.quote').style.display = "none";},3000)
                lastId = undefined;
            }else{
                lastId = undefined;
                Array.from(allTiles).forEach((tile)=>{ tile.classList.add('noClick') ;});
                setTimeout(()=>{
                    thisTile.classList.toggle('tileFlipped');
                    lastTile.classList.toggle('tileFlipped');
                   Array.from(allTiles).forEach((tile)=>{ tile.classList.remove('noClick')});
                },1000);
            }

        if (pairsFound === 8 ){
            
            pairsFound = 0;
            document.querySelector('.startButton').style.display = 'block';
            clearInterval(gameStopWatch);
            thisMin = min;
            thisSec = sec;

            if (gamesPlayed == 0 ) {
                document.querySelector('#bestTime').innerHTML = thisMin + ':' + thisSec ;
                bestMin = thisMin ;
                bestSec = thisSec ;
            }else if (gamesPlayed > 0){
                if (thisMin < bestMin) {
                    document.querySelector('#bestTime').innerHTML = thisMin + ':' + thisSec ;
                    bestMin = thisMin ;
                    bestSec = thisSec ;
                }else if (thisMin == bestMin) {
                    if ( thisSec < bestSec) {
                        document.querySelector('#bestTime').innerHTML = thisMin + ':' + thisSec ;
                        bestMin = thisMin ;
                        bestSec = thisSec ;
                    }
                }
            }
            gamesPlayed++;
        }

            
            
        }
} 



