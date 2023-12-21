const buttons = document.querySelectorAll('.botton')
// console.log(buttons)

const body = document.querySelector("body");
// body.ad
// console.log(body)
buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target)
        // if()
         body.style.backgroundColor = e.target.id;
         const dd = document.getElementsByTagName('div');
         dd.style.backgroundColor = e.target.id;

    })
})