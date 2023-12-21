const form = document.querySelector('form');
 
form.addEventListener('submit',function (e){
    e.preventDefault();
    const height =parseInt( document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');
    console.log(height);
    if(height<0 || height==='' || isNaN(height)){
        results.innerHTML=`please give a valid number ${height}`;
    }
    if(weight<0 || weight==='' ||isNaN(weight)){
        results.innerHTML=`please give a valid number ${weight}`;
    }

    const temp = weight/(height*height);
    results.innerHTML = `Your BMI is ${temp}`;
    const guide = document.getElementById('weight-guide')
    const guildChild = guide.children;
    console.log(guildChild);
    guildChild[2].innerHTML="";
    guildChild[3].innerHTML="";
    guildChild[1].innerHTML="";
    if(temp<18.6){
        guildChild[1].innerHTML=`Under weight = Less than 18.6`;
    }
    else if(temp>=18.6 && temp<24.9){
        guildChild[2].innerHTML=`Normal weight =  Between 18.6 and 24.9`;

    }
    else{
        guildChild[3].innerHTML=`Over weight = greater than 24.9`;

    }

})
