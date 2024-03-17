import { car } from "./played_car_movement.js";
import { menu } from "./menu_informacion.js";
export function lineaDeTiempo(){
    setInterval(() => {
        car.lineaDeTiempo();
        menu.lineaDeTiempo();



    }, 60);
}