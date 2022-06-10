
var pos = 0;                 // pocision inicial
var focus = 0;                 //que imagen se muestra
var direction = 0;              //direcion de pacman
let pageWidth = window.innerWidth;      //para calcular cuando voltear
console.log("El ancho es ;",pageWidth);                 // para guiarme cual es el ancho
const ancho = pageWidth;                // la declaro como const por que es un valor que no cambiara y me estaba generando conflicto
const pacArray = [                      //imagenes
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png'],
                ];
                
                function Run() {                                       // funcion que hace mover pacman
                    let img = document.getElementById('PacMan');        //traigo los atributos de pacman
                    let imgWidth = img.width;                           //traigo el tamaño del pacman
                    focus = (focus + 1) % 2;                            // define la posicion del array para elegir la imagen
                    console.log("El focus es :" ,focus)                                  //para guarme que imagen muestra
                    direction = checkPageBounds(direction, imgWidth, img.style.left, window.innerWidth);    //llama a la funcion para definir si va a la derecha o izq
                    img.src = pacArray[direction][focus];       // cambia la imagen dependiendo del resultado de la variable direccion 
                    console.log("la direccion es :",direction);     //para comprobar la direccion
                    if (direction) {                            // si la direccion es falso avanza a la izquierda
                      pos -= 80;
                      img.style.left = pos + 'px';
                      console.log("retrocedio",pos ,"del punto maximo")
                    } else {                                    //si la direccion es verdadera avanza a la derecha
                      pos += 80;
                      img.style.left = pos + 'px';
                      console.log("avanzo",pos ,"px de la distancia inicial")
                    }

                  }
                  
  
     function checkPageBounds(direction, imgWidth , pos , ancho) {
        //
        // TODO: Complete this to reverse direction upon hitting screen edge
        // utilice codigo que habia usado en otros ejercicios de las bolas que chocaban en la pared
        let posicion = parseInt(pos);// hago un parseInt para que devuelva el numero entero 
        console.log("posicion es:",posicion)    //para guiarme en la posicion que esta
        if (posicion >= ancho-imgWidth){        //si la posicion es mayor o igual al ancho de la ventana menos el ancho de la imagen 
        direction = 1;                              // la direccion es true
        }else if(posicion<=0){                      //sino si es menor o igual a 0 es false
        direction = 0;
        }
        console.log(checkPageBounds)
        return direction;
        
    }
    window.setInterval(Run, 200,);