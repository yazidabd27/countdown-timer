let days=document.querySelector('.days');
let hours=document.querySelector('.hours');
let minutes=document.querySelector('.minutes');
let seconds=document.querySelector('.seconds');

let timer=14*24*3600-1;

let counter=setInterval(()=>{

    let d=Math.floor(timer/(3600*24));
    let h=Math.floor((timer%(3600*24))/(3600));
    let m=Math.floor((timer%(3600))/(60));
    let s=timer % 60;

    flip(days, d);
    flip(hours, h);
    flip(minutes, m);
    flip(seconds, s);

    timer--;

    if(timer<0){
        clearInterval(counter);
    }
    
},1000)

let flip=(flipCard, newNumber)=>{
    let topHalf=flipCard.querySelector('.top');
    let startNumber=parseInt(topHalf.textContent)

    if(newNumber === startNumber) return
    
    let bottomHalf=flipCard.querySelector('.bottom');

    let topFlip=document.createElement('div');
    topFlip.classList.add('top-flip');
    topFlip.textContent=startNumber <  10 ? `0${startNumber}` : startNumber;
    
    let bottomFlip=document.createElement('div');
    bottomFlip.classList.add('bottom-flip');
    bottomFlip.textContent=newNumber <  10 ? `0${newNumber}` : newNumber;

    topFlip.addEventListener("animationstart", e => {
        topHalf.textContent=newNumber <  10 ? `0${newNumber}` : newNumber;
    })
    
    topFlip.addEventListener("animationend", e => {
        topFlip.remove()
    })
    
    bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent=newNumber <  10 ? `0${newNumber}` : newNumber;
        bottomFlip.remove()
    })
   
    flipCard.append(topFlip, bottomFlip)
}
