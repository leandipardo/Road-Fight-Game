export const settings={
    dificultad : 2,
    tiempoAutos(){
        return(Math.random() * (5000 / settings.dificultad))
    }
}
const street = document.querySelector(".street"),
enemyContainer = document.getElementById('enemy-car'),
tiempoRonda = settings.tiempoAutos();
export function enemigos(){
    setInterval(() => {
        let enemyCar = document.importNode(enemyContainer.content, true);
        street.appendChild(enemyCar);
        let car = street.querySelectorAll(".car2");
        car.forEach(e=>{
            e.style.left=`${Math.random() * 95}%`;
            e.style.animationDuration = `${1 - (0.1 * settings.dificultad)}s`;
        })
        setTimeout(() => {
            let cars = street.querySelector(".car2");
            street.removeChild(cars);
        },(1 -(0.1 * settings.dificultad)) * 1000);
    },tiempoRonda);
}