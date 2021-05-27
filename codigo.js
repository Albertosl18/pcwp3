var posicion = 6;

function lanzadera() {
    puntuaciones();
    imagenes();
}


function puntuaciones() {//peticiones
    let url = 'api/puntuaciones?ord=dd,ja';

    fetch(url).then(function (respuesta) {
        if (respuesta.ok) {
            respuesta.json().then(function (datos) {
                console.log(datos);
                let ul = document.createElement('ul');
                let ul2 = document.createElement('ul');
                var lugar=0;
                datos.FILAS.forEach(function (e, idx, v) {
                    lugar++;
                });
                var posi=0;
                datos.FILAS.forEach(function (e, idx, v) {
                    if(posi<6){
                    posi++;
                    let li = document.createElement('li');
                    li.innerHTML = posi + " " + e.usuario + " " + e.id_imagen + " " + e.dificultad + " " + e.jugadas;
                    ul.appendChild(li);
                    }
                });

                let div2 = document.createElement('div');
                div2.innerHTML = ("Pagina").bold() + " " + posicion / 6 + " de " + Math.ceil(lugar / 6);
                ul2.appendChild(div2);

                document.querySelector('#puntuaciones').innerHTML = ' ';//esto hace que se limpie primero y no se pete de peticiones
                document.querySelector('#puntuaciones').appendChild(ul);//las peticiones aparecen
                document.querySelector('#puntuaciones').appendChild(ul2);
            });
        } else {
            console.log('Error ' + respuesta.status + ': ' + respuesta.statusText);
        }
    }).catch(function (error) {
        console.log('Fetch Error: ', err);
    });
}

function pedirPuntuacionesS() {
    let url = 'api/puntuaciones?ord=dd,ja';

    fetch(url).then(function (respuesta) {
        if (respuesta.ok) {
            respuesta.json().then(function (datos) {
                console.log(datos);

                let ul = document.createElement('ul');
                let ul2 = document.createElement('ul');
                var lugar = 0;

                datos.FILAS.forEach(function (e, idx, v) {
                    lugar++;
                });

                if (lugar > posicion) {
                    posicion = posicion + 6;
                } else {
                    console.log('Error ya estas en la última pagina');
                    return;
                }

                var posi = posicion-6;

                datos.FILAS.forEach(function (e, idx, v) {
                    if (e.id <= posicion && e.id > posicion - 6) {
                        let div = document.createElement('div');
                        posi++;
                        div.innerHTML = posi + " " + e.usuario + " " + e.id_imagen + " " + e.dificultad + " " + e.jugadas;
                        ul.appendChild(div);

                    }
                });

                let div2 = document.createElement('div');
                div2.innerHTML = ("Pagina").bold() + " " + posicion / 6 + " de " + Math.ceil(lugar / 6);
                ul2.appendChild(div2);

                document.querySelector('#puntuaciones').innerHTML = ' ';
                document.querySelector('#puntuaciones').appendChild(ul);
                document.querySelector('#puntuaciones').appendChild(ul2);

            });
        } else {
            console.log('Error ' + respuesta.status + ': ' + respuesta.statusText);
        }
    }).catch(function (error) {
        console.log('Fetch Error: ', err);
    });
}

function pedirPuntuacionesA() {
    let url = 'api/puntuaciones?ord=dd,ja';

    fetch(url).then(function (respuesta) {
        if (respuesta.ok) {
            respuesta.json().then(function (datos) {
                console.log(datos);

                let ul = document.createElement('ul');
                let ul2 = document.createElement('ul');
                var lugar = 0;

                datos.FILAS.forEach(function (e, idx, v) {
                    lugar++;
                });

                if (6 < posicion) {
                    posicion = posicion - 6;
                } else {
                    console.log('Error ya estas en la primera pagina');
                    return;
                }

                var posi = posicion - 6;

                datos.FILAS.forEach(function (e, idx, v) {
                    if (e.id <= posicion && e.id > posicion - 6) {
                        let div = document.createElement('div');
                        posi++;
                        div.innerHTML = posi + " " + e.usuario + " " + e.id_imagen + " " + e.dificultad + " " + e.jugadas;
                        ul.appendChild(div);

                    }
                });

                let div2 = document.createElement('div');
                div2.innerHTML = ("Pagina").bold() + " " + posicion / 6 + " de " + Math.ceil(lugar / 6);
                ul2.appendChild(div2);

                document.querySelector('#puntuaciones').innerHTML = ' ';
                document.querySelector('#puntuaciones').appendChild(ul);
                document.querySelector('#puntuaciones').appendChild(ul2);

            });
        } else {
            console.log('Error ' + respuesta.status + ': ' + respuesta.statusText);
        }
    }).catch(function (error) {
        console.log('Fetch Error: ', err);
    });
}



function imagenes() {
    let url = 'api/imagenes';
    sessionStorage['imagenR'] = null;
    sessionStorage['contadorM'] = 0;
    fetch(url).then(function (respuesta) {
        if (respuesta.ok) {
            respuesta.json().then(function (datos) {
                console.log(datos);
                let ul = document.createElement('ul');
                var x=0;
                datos.FILAS.forEach(function (e, idx, v) {
                        x++;
                        let li = document.createElement('li');
                        li.innerHTML = '<div id="imgen"><img id="img'+ x +'" onclick="imagenEle(this.src, this.id);" src="imagenes/' + e.fichero + '" alt="imagen"> <br> ' + e.nombre + '</div>';
                        ul.appendChild(li);
                });

                document.querySelector('#imagenesS').innerHTML = ' ';//esto hace que se limpie primero y no se pete de peticiones
                document.querySelector('#imagenesS').appendChild(ul);//las peticiones aparecen
            });
        } else {
            console.log('Error ' + respuesta.status + ': ' + respuesta.statusText);
        }
    }).catch(function (error) {
        console.log('Fetch Error: ', err);
    });
}

function imagenEle(x, y) {//recibe el src(x) y el id(y)
    sessionStorage['id_imagen']= x;

    if(sessionStorage['contadorM']==1){
        var imge2 = document.getElementById(sessionStorage['imagenR']);
        imge2.className = 'img2';
    }
    sessionStorage['imagenR'] = y;
    var imge = document.getElementById(y);
    imge.className = 'img';
    sessionStorage['contadorM'] = 1;
}

function dificultadEle(y){
    sessionStorage['id_dificultad'] = y;
}

function jugar(){
    if(sessionStorage['id_imagen']!=null && sessionStorage['id_dificultad']!=null){
        window.location.href ="juego.html";
    }else{
        console.log("falta introducir algun dato")
    }
}



//juego=================================================================0
function cargarImagen() {
    let cv = document.querySelector('#cv01'),
        ctx = cv.getContext('2d'),
        imagen = new Image(),
        factor;//uso esto para que la imagen no se estire en el canvas

    imagen.onload = function () {
        factor = cv.width / imagen.width;
        ctx.drawImage(imagen, 0, 0, cv.width, imagen.height * factor);//los cv es para ajustarla al canvas//esto es para ajustarla
    };

    imagen.src = sessionStorage['id_imagen'];
}

function lanzaderaj() {
    document.getElementById("iFinal").src=sessionStorage['id_imagen'];
    cargarImagen();
}

function prepararCanvas() {
    let cv = document.querySelector('#cv01');

    cv.width = 480;
    cv.height = 360;

    cv.onclick = function (evt) {
        let x = evt.offsetX,
            y = evt.offsetY,
            ancho = cv.width / 2,
            alto = cv.height / 2,
            fila = Math.floor(y / alto),
            columna = Math.floor(x / ancho);

        console.log(x + ',' + y);
        console.log(columna + ',' + fila);//con esto saco la region de las divisiones en la que estoy

        //como pintar la region correspondiente
        let cv1 = document.querySelector('#iFinal'),
            ctx1 = cv1.getContext('2d'),
            cv2 = cv,
            ctx2 = cv2.getContext('2d');

        ctx2.drawImage(cv1, columna * ancho, fila * alto, ancho, alto, columna * ancho, fila * alto, ancho, alto);
    };
}

function divisiones() {
    let cv2 = document.querySelector('#cv01'),
        ctx2 = cv2.getContext('2d'),
        ancho = cv2.width / 2,
        alto = cv2.height / 2;

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = '#a00';

    for (let i = 1; i < 2; i++) {
        //verticales
        ctx2.moveTo(i * ancho, 0);
        ctx2.lineTo(i * ancho, cv2.height);
        //horizontales
        ctx2.moveTo(0, i * alto);
        ctx2.lineTo(cv2.width, i * alto);
    }
    ctx2.stroke();
}