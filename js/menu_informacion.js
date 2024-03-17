import { lineaDeTiempo } from "./linea_de_tiempo.js";
import { car } from "./played_car_movement.js";
export const menu = {
    fuel : 100,
    score: 0,
    Fuel(){
        this.fuel = this.fuel - 0.05;
        document.querySelector(".nafta span").innerHTML=`${ Math.round(this.fuel) }`;  
    },
    Score(){
        (car.acelerar)?this.score=this.score + 3:this.score=this.score + 1;
        document.querySelector(".score span").innerHTML=`${this.score}`;
    },
    Speed(){
        // document.querySelector(".speed-aguja").style.transform=`rotateZ(${car.arr *5}deg)`;
        (car.acelerar)?document.querySelector(".speed").style.color="red":document.querySelector(".speed").style.color="white";
    },
    lineaDeTiempo(){
        this.Score();
        this.Speed();
        this.Fuel();
    }
}