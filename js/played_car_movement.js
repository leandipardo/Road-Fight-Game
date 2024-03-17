export const car = {
    acelerar:false,
    arr:0,
    izq:false,
    der:false,
    giroscopio:false,
    // girosciopioAnterior:0,
    moverDer:0,
    currentDirection:0,
    sprite:document.querySelector(".car"),
    settings: {
        aceleracion: 1.5,
        controlDireccion : -20,
    },
    rotacion(){
        if(this.moverDer === 1){
            return 75;
        }else if(this.moverDer === -1){
            return -75;
        // }else if (this.giroscopio!==false){
        //     return this.giroscopio;
        }else{
            return 0;
        }
    },
    limites(){
        if(this.sprite.getBoundingClientRect().left < document.querySelector(".street").getBoundingClientRect().left){
            this.izq--;
            console.log(this.izq)
            return false;
        }else if(this.sprite.getBoundingClientRect().right > document.querySelector(".street").getBoundingClientRect().right){
            this.der--;
            return false;
        }else{
            return true;
        };
    },
    direccion(){
        if(this.izq!==false && this.limites()||this.der!==false && this.limites())return((this.izq - this.der) * this.settings.controlDireccion);
        if(this.giroscopio!==false)return(this.giroscopio);
    },
    speedRegulation(){
        if(car.acelerar && car.arr < 10){
            car.arr=car.arr+car.settings.aceleracion;
        }else if(!car.acelerar && car.arr > 0){
            car.arr=car.arr-car.settings.aceleracion;
        }
    },
    lineaDeTiempo(){
                //Movimiento auto jugador
                this.sprite.style.transform =`translateX(${this.direccion()}px)translateY(-${this.arr * 50}px)rotateZ(${this.rotacion()}deg)`;
                this.moverDer = 0;
                // Regularizacion de velocidad auto jugador
                this.speedRegulation();
    }
};
export function playerSpeed(){
    document.addEventListener("mousedown",e=>{
        car.acelerar=true;
    })
    document.addEventListener("mouseup",e=>{
        car.acelerar=false;
    })
    document.addEventListener("touchstart",e=>{
        car.acelerar=true;
    })
    document.addEventListener("touchend",e=>{
        car.acelerar=false;
    })
}
export function playerDirection(){
    document.addEventListener("wheel",e=>{
        if(e.deltaY===-100 && car.currentDirection > -200){
            car.izq++;
            car.der--;
            car.moverDer=-1;
            car.rotacion();
            car.currentDirection=car.direccion();
        }
        if(e.deltaY===100 && car.currentDirection < 200){
            car.der++;
            car.izq--;
            car.moverDer=1;
            car.rotacion();
            car.currentDirection=car.direccion();
        }
    })
}
export function giroscopioDirection(){
    window.addEventListener('deviceorientation', handleOrientation);
    function handleOrientation(event) {
        // let giroscopioNew = event.gamma *3.5;
        // (giroscopioNew > car.giroscopio)?car.moverDer=1:car.moverDer=-1;
        // if(car.giroscopio === false){
        //     giroscopioRotacion();
        //     car.rotacion(car.girosciopioAnterior);
        //     car.giroscopio = event.gamma * 3.5;
        // }
        // car.rotacion(car.girosciopioAnterior);
        if(event.gamma < 27 && event.gamma > -27)car.giroscopio = event.gamma * 5;
}
}
// function giroscopioRotacion(){
//     setInterval(() => {
//         car.girosciopioAnterior = car.giroscopio;
//     }, 300);

// }