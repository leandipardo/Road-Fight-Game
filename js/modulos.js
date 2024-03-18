import { playerSpeed, playerDirection, giroscopioDirection } from "./played_car_movement.js"
import { lineaDeTiempo } from "./linea_de_tiempo.js";
import { enemigos } from "./enemigos_bonos.js";

document.addEventListener("DOMContentLoaded",(e)=>{
    playerSpeed();
    playerDirection();
    lineaDeTiempo();
    giroscopioDirection();
    enemigos();
});
