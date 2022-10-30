"use strict"



const $=function(selector){
    return document.querySelector(selector)
}

const $$=function(selector){
return document.querySelectorAll(selector)
}

for (let i=0 ; i<pokemons.length; i++){

const div=document.createElement('div');
div.classList.add('cards','bg-white','w-25','text-center'  ,'m-4','col-md-3','rounded-5' );
div.innerHTML= `<img src="${pokemons[i].img}"><p>${pokemons[i].id}</p><h4>${pokemons[i].name }</h4><strong><p>${pokemons[i].type}</p></strong>
<div><hr><p>Og'irligi :  ${pokemons[i].weight}</p><p> Kattaligi: ${pokemons[i].height }</p><p> Candy : ${pokemons[i].candy }</p></div>`

$('#mavjud').appendChild(div)
}

