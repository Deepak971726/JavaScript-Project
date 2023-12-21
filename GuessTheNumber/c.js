
const form = document.querySelector('form');
// const pre = parseInt(document.querySelector('#number'));
// const attemptleft = document.querySelector('.attemptleft').children
// console.log(attemptleft);
// console.log( remain);
let ans = Math.round(((Math.random())*100)+1);
console.log(ans);
var remain = 10;
 
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const previous = document.querySelector('.previous')
    const rem = document.querySelector('.attemptleft');
    const number = parseInt(document.querySelector('#number').value);
    const sugg = document.querySelector('.sugg');
    // console.log(number)
    if(remain>0){
        // console.log(`number:${number}  ans:${ans}`)
        if(number===ans){
            // console.log("chal hu bhai")
            previous.innerHTML =   `<h3>Congratulation!! you win the Game the right answers is ${number}</h3>`
            remain =10;
            ans = Math.round(((Math.random())*100)+1);
            sugg.innerHTML=`You find the number`;


            // break
        }
        else{
            remain--;
            
            // console.log(rem);
            rem.innerHTML = `Remaining attemps is ${remain}`
            // const previous =document.querySelector('.previous');
            previous.innerHTML = `Previously guess number is ${number}`;
            if(ans>number){
                sugg.innerHTML=`Try to bigger number`;
            }
            if(ans<number){
                sugg.innerHTML = `Try to smaller number`;
            }
        }
         
        // console.log(sugg);
         
    
    }
    else{
        // const previous =document.querySelector('.previous');
        previous.innerHTML = `<h3> You Lost the Game! Better luck next time!</h3>`
    }
})




  