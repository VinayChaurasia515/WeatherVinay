var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click',()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8182f015ed799fad4c45fd52996032db')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        var nameValue=data['name']
        var tempValue= data['main']['temp']-273;
        var descValue=data['weather'][0]['description']
        console.log(tempValue)

        main.innerHTML = nameValue;
        desc.innerHTML = "Desc - "+descValue;
        temp.innerHTML = "Temp - "+tempValue+" Centigrade";
    })
    .catch(err=>{
        console.log(err)

    })

})

// console.log(num); 
// let num = 6; 
// console.log(num); 

//console.log(a)

var i=()=>{
    console.log(a)
}
i();
const a=9;