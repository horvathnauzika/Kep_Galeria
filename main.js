import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */

/* fogd meg a .galeria elemet */
/* írd bele az összeálíltott html képsorozatot */
const GALERIA = document.getElementsByClassName("galeria")[0]
GALERIA.innerHTML += htmlOsszeAllit(KEPEK)
    

/*2. feladat  A .nagykep divben lévő img elem megfogása */
/* A .nagykep div megfogása */
const NAGYKEP = document.querySelector(".nagykep")
const NAGYKEPIMG = document.querySelector(".nagykep img")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
const KISKEP = document.querySelectorAll(".kep")
for (let index = 0; index < KISKEP.length; index++) {
    KISKEP[index].addEventListener("click", function katt(event){
        console.log(event.target.src) // az az elem, amelyik kiváltja az eseményt
        aktIndex = index;
        NAGYKEPIMG.src = event.target.src
        NAGYKEP.classList.remove("rejtett")
    })
}

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
let aktIndex = 0;
const JOBBGOMB = document.querySelector(".jobb")
JOBBGOMB.addEventListener("click", jobbra)
function jobbra(){
    aktIndex++;
    if (aktIndex >= KEPEK.length){
        aktIndex = 0
    }
    console.log(aktIndex)
    console.log(KEPEK[aktIndex].kep)
    NAGYKEPIMG.src = KEPEK[aktIndex].kep
}

const zarELEM = document.querySelector(".zar button");
zarELEM.addEventListener("click", function(){
    // ráteszem a nagykép elemre a rejtett classt
    NAGYKEP.classList.add("rejtett")
})