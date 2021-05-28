var posicion = 6;
//he utilizado variables globales en vez de session storage antes de darle a jugar(cuando le das si que se usa el session). Para que sea mas facil de probar los mensajes.
var difi =null;
var imgsrc =null;
var contadorM = null;
var imagenAnt= "";
function lanzadera() {
    puntuaciones();
    imagenes();
    sessionStorage['id_imagen2'] = null;
    sessionStorage['id_dificultad2'] = null;
}

//index==========================================================================0
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

/*
//cargar las imagenes de index
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
*/

function imagenes() {
    let url = 'api/imagenes';
    fetch(url).then(function (respuesta) {
        if (respuesta.ok) {
            respuesta.json().then(function (datos) {
                console.log(datos);
                let ul = document.createElement('ul');
                var x = 0;
                datos.FILAS.forEach(function (e, idx, v) {
                    x++;
                    let li = document.createElement('li');
                    li.innerHTML = '<div id="imgen"><img id="img' + x + '" onclick="imagenEle(this.src, this.id);" src="imagenes/' + e.fichero + '" alt="imagen"> <br> ' + e.nombre + '</div>';
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

/*
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
*/

function imagenEle(x, y) {//recibe el src(x) y el id(y)
    imgsrc= x;

    if(contadorM==1){
        var imge2 = document.getElementById(imagenAnt);
        imge2.className = 'img2';
    }
    imagenAnt = y;
    var imge = document.getElementById(y);
    imge.className = 'img';
    contadorM = 1;
}
/*
function dificultadEle(y){
    sessionStorage['id_dificultad'] = y;
}
*/
function dificultadEle(y) {
    difi = y;
}
/*
function jugar(){
    if (sessionStorage['id_imagen'] == null && sessionStorage['id_dificultad'] == null){
        console.log("ninguno");
        mostrarMensajeNingunaOP();
    } else if (sessionStorage['id_imagen'] == null && sessionStorage['id_dificultad'] != null){
        console.log("falta imagen");
        mostrarMensajeNoImagen();
    } else if (sessionStorage['id_imagen'] != null && sessionStorage['id_dificultad'] == null){
        console.log("falta dificultad");
        mostrarMensajeNoDificultad();
    } else if(sessionStorage['id_imagen']!=null && sessionStorage['id_dificultad']!=null){
        sessionStorage['id_imagen2'] = sessionStorage['id_imagen'];
        sessionStorage['id_dificultad2'] = sessionStorage['id_dificultad'];
        window.location.href ="juego.html";
    }else{
        console.log("falta introducir algun dato")
    }
}
*/

function jugar() {
    if (imgsrc == null && difi == null) {
        console.log("ninguno");
        mostrarMensajeNingunaOP();
    } else if (imgsrc == null && difi != null) {
        console.log("falta imagen");
        mostrarMensajeNoImagen();
    } else if (imgsrc != null && difi == null) {
        console.log("falta dificultad");
        mostrarMensajeNoDificultad();
    } else if (imgsrc != null && difi != null) {
        sessionStorage['id_imagen2'] = imgsrc;
        sessionStorage['id_dificultad2'] = difi;
        window.location.href = "juego.html";
    } else {
        console.log("Error?")
    }
}

function mostrarMensajeNingunaOP() {
    let div = document.createElement('div');

    div.id = 'msj-modal';

    html = `<article>
                <h2>No se puede comenzar el juego</h2>
                <p>Falta introducir:</p><br>
                <p>-Imagen</p><br>
                <p>-Dificultad</p>
                <footer>
                    <button onclick="document.querySelector('#msj-modal').remove();">Cerrar</button>
                </footer>
            </article>`;
    div.innerHTML = html;
    document.body.appendChild(div);
}

function mostrarMensajeNoImagen() {
    let div = document.createElement('div');

    div.id = 'msj-modal';

    html = `<article>
                <h2>No se puede comenzar el juego</h2>
                <p>Falta introducir:</p><br>
                <p>-Imagen</p>
                <footer>
                    <button onclick="document.querySelector('#msj-modal').remove();">Cerrar</button>
                </footer>
            </article>`;
    div.innerHTML = html;
    document.body.appendChild(div);
}

function mostrarMensajeNoDificultad() {
    let div = document.createElement('div');

    div.id = 'msj-modal';

    html = `<article>
                <h2>No se puede comenzar el juego</h2>
                <p>Falta introducir:</p><br>
                <p>-Dificultad</p>
                <footer>
                    <button onclick="document.querySelector('#msj-modal').remove();">Cerrar</button>
                </footer>
            </article>`;
    div.innerHTML = html;
    document.body.appendChild(div);
}


//juego=================================================================0
function cargarImagen() {
    let img = new Image();

    img.onload = function () {
        let cv = document.querySelector('#cv01'),
            ctx = cv.getContext('2d'),
            factor = cv.width / img.width,
            posY = (cv.height - img.height * factor) / 2;

        ctx.drawImage(img, 0, posY, cv.width, img.height * factor);
    };

    img.src = sessionStorage['id_imagen2'];
}

function lanzaderaj() {
    if (sessionStorage['id_imagen2'] == null || sessionStorage['id_dificultad2']==null){
        window.location.href = "index.html";
    }else{
        divisiones();
    }
}
function prepararCanvas() {
    let cv = document.querySelector('#cv01');

    cv.width = 480;
    cv.height = 360;

    cargarImagen();
}

function prepararCanvas2() {
    copiarImagen();
    let cv = document.querySelector('#cv02');

    cv.width = 480;
    cv.height = 360;

    cv.onclick = function (evt) {
        let x = evt.offsetX,
            y = evt.offsetY,
            ancho,
            alto,
            fila,
            columna;
        if (sessionStorage['id_dificultad2'] == 1) {
            ancho = cv.width / 4;
            alto = cv.height / 4;
        } else if (sessionStorage['id_dificultad2'] == 2) {
            ancho = cv.width / 6;
            alto = cv.height / 6;
        } else if (sessionStorage['id_dificultad2'] == 3) {
            ancho = cv.width / 8;
            alto = cv.height / 8;
        }
        fila = Math.floor(y / alto);
        columna = Math.floor(x / ancho);
        console.log(x + ',' + y);
        console.log(columna + ',' + fila);//con esto saco la region de las divisiones en la que estoy

        //como pintar la region correspondiente
        let cv1 = document.querySelector('#cv01'),
            cv2 = cv,
            ctx2 = cv2.getContext('2d');

        ctx2.drawImage(cv1, columna * ancho, fila * alto, ancho, alto, columna * ancho, fila * alto, ancho, alto);
    };
}

function copiarImagen() {
    let cv1 = document.querySelector('#cv01'),
        ctx1 = cv1.getContext('2d'),
        cv2 = document.querySelector('#cv02'),
        ctx2 = cv2.getContext('2d');

    ctx2.drawImage(cv1, 0, 0);
}

function divisiones() {
    if (sessionStorage['id_dificultad2']==1){
        let cv2 = document.querySelector('#cv02'),
            ctx2 = cv2.getContext('2d'),
            ancho = cv2.width / 4,
            alto = cv2.height / 4;

        ctx2.beginPath();
        ctx2.lineWidth = 2;
        ctx2.strokeStyle = '#a00';

        for (let i = 1; i < 4; i++) {
            //verticales
            ctx2.moveTo(i * ancho, 0);
            ctx2.lineTo(i * ancho, cv2.height);
            //horizontales
            ctx2.moveTo(0, i * alto);
            ctx2.lineTo(cv2.width, i * alto);
        }
        ctx2.stroke();
    } else if (sessionStorage['id_dificultad2'] == 2) {
        let cv2 = document.querySelector('#cv02'),
            ctx2 = cv2.getContext('2d'),
            ancho = cv2.width / 6,
            alto = cv2.height / 6;

        ctx2.beginPath();
        ctx2.lineWidth = 2;
        ctx2.strokeStyle = '#a00';

        for (let i = 1; i < 6; i++) {
            //verticales
            ctx2.moveTo(i * ancho, 0);
            ctx2.lineTo(i * ancho, cv2.height);
            //horizontales
            ctx2.moveTo(0, i * alto);
            ctx2.lineTo(cv2.width, i * alto);
        }
        ctx2.stroke();
    } else if (sessionStorage['id_dificultad2'] == 3) {
        let cv2 = document.querySelector('#cv02'),
            ctx2 = cv2.getContext('2d'),
            ancho = cv2.width / 8,
            alto = cv2.height / 8;

        ctx2.beginPath();
        ctx2.lineWidth = 2;
        ctx2.strokeStyle = '#a00';

        for (let i = 1; i < 8; i++) {
            //verticales
            ctx2.moveTo(i * ancho, 0);
            ctx2.lineTo(i * ancho, cv2.height);
            //horizontales
            ctx2.moveTo(0, i * alto);
            ctx2.lineTo(cv2.width, i * alto);
        }
        ctx2.stroke();
    }
}

function terminar() {//no terminada xd
    window.location.href="index.html";
}