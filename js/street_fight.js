// let d=document,
// direccion=0,
// animacionLineas=.7,
// ejeX=0,
// ejeY=0,
// kmh=0,
// dificultad=5,
// azar = undefined,
// gameover = false,
// $gameover = d.querySelector(".gameover"),
// $speed = d.querySelector(".speed-aguja"),
// $car = d.querySelector(".car"),
// $street = d.querySelector(".street"),
// $linea = d.querySelector(".street-line-conteiner"),
// $mano = d.querySelector(".carril2"),
// $contramano = d.querySelector(".carril1"),
// $img = d.createElement("img"),
// $clickIzqImg = d.querySelector(".click-izquierdo"),
// $clickDerImg = d.querySelector(".click-derecho"),
// limitStreet = $street.getBoundingClientRect(),
// limitCar = $car.getBoundingClientRect(),
// $audio = d.getElementById("bg-music"),
// $car2,limitCar2, $car2Contramano, limitCar2Contramano,
// ejeT = 0,
// rstart=4,
// $scrollBtn = d.querySelector(".scroll-button");

// export function aparicionAutos(){
//     // dificultad

//     setInterval(() => {
//         if(dificultad > 2){
//         dificultad = dificultad - (dificultad / 10);
//         }
//     }, 10000);

// setInterval(() => {
//     azar = Math.random();
//     if (azar >= 0.5){
//     $img.setAttribute("src","/assets/white-car.png");
//     $img.setAttribute("alt","white car");
//     $mano.appendChild($img);
//     $img.classList.add("car2");
//     $img.style.left= `${(Math.random()*70)+10}%`;
//     $img.style.animation=`street_cars ${dificultad - 1}s linear`;
// }if(azar < 0.5){
//     $img.setAttribute("src","/assets/white-car.png");
//     $img.setAttribute("alt","white car contramano");
//     $contramano.appendChild($img);
//     $img.classList.add("car2-contramano");
//     $img.style.left= `${(Math.random()*70)+10}%`;
//     $img.style.animation=`street_cars_contramano ${dificultad - 1}s linear`
// }
// }, `${dificultad +1}000`);
// }



// //click derecho, izquierdo, velocidad, animacion de la calle, bloqueo de velocidad, acelerador, handler mouse.
// d.addEventListener("mousedown",(e)=>{
//     document.oncontextmenu = function(){return false}
//     $car.style.animation= "";
//     $gameover.style.opacity= "0";
//     e.preventDefault();
//     var intervaloAceleracion = setInterval(() => {

//         if(e.buttons===2 && gameover === false){
//             ejeY--;
//             ejeT--;
//         }
//         if (gameover === true && kmh == 0){
//             gameover = false;
//             clearInterval(intervaloAceleracion);
//         }
//     }, 100);
//         if(e.buttons===1 && gameover === false){
//             ejeY++;
//             ejeT++
//             }
//     rstart=4;
//     if(e.buttons===1 && kmh >= -50){
//         $clickIzqImg.style.opacity = "100%";
//         kmh=kmh-25;
//         animacionLineas=animacionLineas+(animacionLineas / 10);
//     }else if(e.buttons === 2 && kmh <= 50){
//         $clickDerImg.style.opacity = "100%";
//         kmh=kmh+25;
//         animacionLineas=animacionLineas-(animacionLineas / 10);
//     }
// });



// //movimiento rueda de mouse.
// export function streetFight(e){
//     gameover=false;
//     $gameover.style.opacity= "0";
//     if(e.deltaY === 100){
//         ejeX=ejeX+30;
//         direccion=direccion+15;
//     }
//     if (e.deltaY === -100) {
//       ejeX = ejeX - 30;
//       direccion = direccion - 15;
//     }
// }



// //linea de tiempo y correccion de direccion.
// export function lineaIntervalos(){
//     $audio.volume = 0.5;
//     setInterval(() => {
//         limitStreet = $street.getBoundingClientRect();
//         limitCar = $car.getBoundingClientRect();
//         if (azar >= 0.5){
//         let $car2 = d.querySelector(".car2"),
//         limitCar2 = $car2.getBoundingClientRect();
//         if(limitCar < limitCar2.top && limitCar){
//             // HACIENDO ESTO
//         }
//         }
//         if(azar < 0.5){
//         let $car2Contramano = d.querySelector(".car2-contramano"),
//         limitCar2Contramano = $car2Contramano.getBoundingClientRect();
//         }
//         if(limitCar.left < limitStreet.left-50 || limitCar.right > limitStreet.right+60){
//             gameOver();
//         }
//         if(limitCar.bottom > limitStreet.bottom || limitCar.top < limitStreet.top){
//             gameOver();
//         }
//         $car.style.transform =`translatex(${ejeX}px)translatey(${ejeY*rstart}px)rotateZ(${direccion}deg)`;
//     }, 16);
//     setInterval(() => {
//         direccion=0;
//         $speed.style.transform = `rotateZ(${kmh}deg)`;
//         $linea.style.animationDuration=`${animacionLineas}s`;
//     }, 250);
//     setInterval(()=>{
//         $clickIzqImg.style.opacity = "0%";
//         $clickDerImg.style.opacity = "0%";
//     },500)
//     $clickIzqImg.style.opacity = "0";
// }
// function gameOver(){
//     dificultad=5,
//     $gameover.style.opacity= "100";
//     gameover=true;
//     animacionLineas=.7;
//     kmh=0;
//     ejeX=0;
//     $car.style.animation= "reestablecer .5s ease-in-out 1s 6 alternate none"
//     rstart=0;
//     $car.style.transform =`translatex(${ejeX}px)translatey(${ejeY-ejeT}px)`;
// }