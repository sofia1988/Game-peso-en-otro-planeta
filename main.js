const SATURNO = document.getElementById('saturno')
const MARTE = document.getElementById('marte')
const MERCURIO = document.getElementById('mercurio')
const JUPITER = document.getElementById('jupiter')
const VENUS = document.getElementById('venus')
const URANO = document.getElementById('urano')

var gravity = {
    tierra : 9.8,
    marte : 3.71,
    jupiter :23.12,
    saturno : 10.44,
    mercurio:3.70,
    venus:8.87,
    urano:8.69,
}

function message(planet){
    var username = prompt("¿cual es tu peso?");
    var weight = parseInt(username);
    outcome = weight * gravity[planet]/gravity.tierra;
    var final_weight = parseInt(outcome); 
    swal( `tu peso en ${planet} es ${final_weight}`);
}
  SATURNO.addEventListener("click", ()=>{planet ="saturno",message(planet)});
  MARTE.addEventListener("click",()=>{planet ="marte",message(planet)});
  MERCURIO.addEventListener("click",()=>{planet ="mercurio",message(planet)});
  JUPITER.addEventListener("click",()=>{planet ="jupiter",message(planet)});
  VENUS.addEventListener("click",()=>{planet ="venus",message(planet)});
  URANO.addEventListener("click",()=>{planet ="urano",message(planet)});




  






