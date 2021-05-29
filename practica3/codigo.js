var posicion = 6;
//he utilizado variables globales en vez de session storage antes de darle a jugar(cuando le das si que se usa el session). Para que sea mas facil de probar los mensajes.
var difi = null;
var imgsrc = null;
var imgID = null;
var contadorM = null;
var imagenAnt = "";
//Juego.html
var cara = 0;
var contador = -1;

var matrizGanadora = [];
var matrizAleatoria = [];
var volteadas = [];
var seleccionada = [];

function lanzadera() {
    puntuaciones();
    imagenes();
    sessionStorage['id_imagen2'] = null;
    sessionStorage['id_dificultad2'] = null;
    sessionStorage['id_imagen3'] = null;
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
                var lugar = 0;
                datos.FILAS.forEach(function (e, idx, v) {
                    lugar++;
                });
                var posi = 0;
                datos.FILAS.forEach(function (e, idx, v) {
                    if (posi < 6) {
                        posi++;
                        let li = document.createElement('li');
                        li.innerHTML = posi + " " + e.usuario + " " + e.id_imagen + " " + e.dificultad + " " + e.jugadas;
                        ul.appendChild(li);
                    }
                });

                let div2 = document.createElement('li');
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

                var posi = posicion - 6;
                var x=0;
                datos.FILAS.forEach(function (e, idx, v) {
                    x++;
                    if (x>posi && x<=posicion) {
                        let div = document.createElement('li');
                        posi++;
                        div.innerHTML = posi + " " + e.usuario + " " + e.id_imagen + " " + e.dificultad + " " + e.jugadas;
                        ul.appendChild(div);

                    }
                });

                let div2 = document.createElement('li');
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
                var x=0;
                datos.FILAS.forEach(function (e, idx, v) {
                    x++;
                    if (x > posi && x <= posicion) {
                        let div = document.createElement('li');
                        posi++;
                        div.innerHTML = posi + " " + e.usuario + " " + e.id_imagen + " " + e.dificultad + " " + e.jugadas;
                        ul.appendChild(div);

                    }
                });

                let div2 = document.createElement('li');
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
                    li.innerHTML = '<div><img id="img' + x + '" class="imgnes" onclick="imagenEle(this.src, this.id, this.alt);" src="imagenes/' + e.fichero + '" alt="'+ e.id +'"> <br> ' + e.nombre + '</div>';
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

function imagenEle(x, y, z) {//recibe el src(x) y el id(y)
    imgsrc = x;
    imgID = z;

    if (contadorM == 1) {
        var imge2 = document.getElementById(imagenAnt);
        imge2.className = 'imgnes';
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
        sessionStorage['id_imagen3'] = imgID;
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
    if (sessionStorage['id_imagen2'] == null || sessionStorage['id_dificultad2'] == null) {
        window.location.href = "index.html";
    } else {
        ponerfondo();
        divisiones();
        contar();
        mezclar();
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



    let cv = document.querySelector('#cv02'),
        ctx11 = cv.getContext('2d');
    cv.width = 480;
    cv.height = 360;

    ctx11.fillStyle = '#4ACFFFFF';
    ctx11.fillRect(0, 0, cv.width, cv.height);

    seleccionada[0] = -1;
    seleccionada[1] = -1;


    cv.onclick = function (evt) {
        //SE CAMBIARÁ
        let x = evt.offsetX,
            y = evt.offsetY,
            ancho,
            alto,
            fila,
            fila1,
            columna1,
            columna,
            auxc;
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
        fila1 = Math.floor(y / alto);
        columna1 = Math.floor(x / ancho);
        console.log(x + ',' + y);
        console.log(fila1 + ',' + columna1);//con esto saco la region de las divisiones en la que estoy

        var nx = matrizAleatoria[fila1][columna1];
        console.log(nx);

        fila = Math.floor(nx);
        auxc = (nx - fila) * 10;
        columna = Math.round(auxc);
        console.log(fila + ',' + columna);
        //como pintar la region correspondiente
        let cv1 = document.querySelector('#cv01'),
            cv2 = cv,
            ctx2 = cv2.getContext('2d');

        if (comprobar(fila1, columna1)) {//primero compruebo si en la que pincho está bien y no cuenta
            if (!comprobarVolteada(fila1, columna1)) {
                volteadas.push(fila1 + columna1 * 0.1);
                ctx2.fillStyle = '#4ACFFFFF';
                ctx2.fillRect(ancho * columna1, alto * fila1, ancho, alto);
                divisiones();

                ctx2.drawImage(cv1, columna * ancho, fila * alto, ancho, alto, columna1 * ancho, fila1 * alto, ancho, alto);
                divisiones();

                if(victoria()){
                    mostrarMensajeVictoria();
                }
            }
        } else if (!comprobarVolteada(fila1, columna1)) {
            ctx2.drawImage(cv1, columna * ancho, fila * alto, ancho, alto, columna1 * ancho, fila1 * alto, ancho, alto);
            divisiones();
            ctx2.fillStyle = 'rgba(56,113,135,0.4)';
            ctx2.fillRect(ancho * columna1, alto * fila1, ancho, alto);
            divisiones();
            volteadas.push(fila1 + columna1 * 0.1);
            console.log(volteadas);

            if (seleccionada[0] == -1) {
                seleccionada[0] = fila1;
                seleccionada[1] = columna1;
                seleccionada[2] = fila;
                seleccionada[3] = columna;
                console.log("seleccionada= " + seleccionada);
            } else {

                //pinto en la que estamos con la ot


                ctx2.fillStyle = '#4ACFFFFF';
                ctx2.fillRect(ancho * columna1, alto * fila1, ancho, alto);
                divisiones();

                ctx2.drawImage(cv1, columna * ancho, fila * alto, ancho, alto, columna1 * ancho, fila1 * alto, ancho, alto);
                divisiones();

                ctx2.fillStyle = 'rgba(56,113,135,0.4)';
                ctx2.fillRect(ancho * columna1, alto * fila1, ancho, alto);
                divisiones();

                //pinto la otra con la que estamos
                ctx2.fillStyle = '#4ACFFFFF';
                ctx2.fillRect(ancho * seleccionada[1], alto * seleccionada[0], ancho, alto);
                divisiones();

                ctx2.drawImage(cv1, seleccionada[3] * ancho, seleccionada[2] * alto, ancho, alto, seleccionada[1] * ancho, seleccionada[0] * alto, ancho, alto);
                divisiones();

                ctx2.fillStyle = 'rgba(56,113,135,0.4)';
                ctx2.fillRect(ancho * seleccionada[1], alto * seleccionada[0], ancho, alto);
                divisiones();


                setTimeout(function () {
                    var postemp = matrizAleatoria[fila1][columna1];//no estan los decimales hijos de puta (puede dar error por esto)
                    matrizAleatoria[fila1][columna1] = matrizAleatoria[seleccionada[0]][seleccionada[1]];
                    matrizAleatoria[seleccionada[0]][seleccionada[1]] = postemp;
                    console.log(matrizAleatoria);

                    //pinto en la que estamos con la otra
                    var nx = matrizAleatoria[fila1][columna1];
                    fila = Math.floor(nx);
                    auxc = (nx - fila) * 10;
                    columna = Math.round(auxc);

                    ctx2.fillStyle = '#4ACFFFFF';
                    ctx2.fillRect(ancho * columna1, alto * fila1, ancho, alto);
                    divisiones();

                    ctx2.drawImage(cv1, columna * ancho, fila * alto, ancho, alto, columna1 * ancho, fila1 * alto, ancho, alto);
                    divisiones();

                    if (!comprobar(fila1, columna1)) {
                        eliminarVolteada(fila1, columna1);
                        ctx2.fillStyle = '#4ACFFFFF';
                        ctx2.fillRect(ancho * columna1, alto * fila1, ancho, alto);
                        divisiones();
                    }

                    //pinto la otra con la que estamos
                    fila1 = seleccionada[0];
                    columna1 = seleccionada[1];
                    var nx = matrizAleatoria[fila1][columna1];
                    fila = Math.floor(nx);
                    auxc = (nx - fila) * 10;
                    columna = Math.round(auxc);

                    ctx2.fillStyle = '#4ACFFFFF';
                    ctx2.fillRect(ancho * columna1, alto * fila1, ancho, alto);
                    divisiones();

                    ctx2.drawImage(cv1, columna * ancho, fila * alto, ancho, alto, columna1 * ancho, fila1 * alto, ancho, alto);
                    divisiones();

                    if (!comprobar(fila1, columna1)) {
                        eliminarVolteada(fila1, columna1);
                        ctx2.fillStyle = '#4ACFFFFF';
                        ctx2.fillRect(ancho * columna1, alto * fila1, ancho, alto);
                        divisiones();
                    }

                    seleccionada[0] = -1;
                    contar();

                    if (victoria()) {
                        mostrarMensajeVictoria();
                    }


                }, 1000);
            }

        }
        /*
                    ctx2.fillStyle = '#4ACFFFFF';
                    ctx2.fillRect(ancho*columna1,alto* fila1, ancho, alto);
                    cara=0;
                    divisiones();
        */

    };
}


function comprobar(x, y) {
    if (matrizGanadora[x][y] == matrizAleatoria[x][y]) {
        return true;
    }
}

function comprobarVolteada(x, y) {
    for (var i = 0; i < volteadas.length; i++) {
        if (volteadas[i] == x + y * 0.1) {
            return true;
        }
    }
}

function eliminarVolteada(x, y) {
    for (var i = 0; i < volteadas.length; i++) {
        if (volteadas[i] == x + y * 0.1) {
            volteadas.splice(i, 1);
        }
    }
}

function victoria() {
    var cont=0;
    for(var i=0;i<matrizGanadora.length;i++){
        for(var j=0; j<matrizGanadora.length;j++){
            if(matrizGanadora[i][j]==matrizAleatoria[i][j]){
                cont++;
            }
        }
    }
    if(cont==matrizAleatoria.length*matrizAleatoria.length){
        return true;
    }else{
        return false;
    }
}

function mostrarMensajeVictoria() {
    let div = document.createElement('div');

    div.id = 'msj-modal';

    html = `<article>
                <h2>¡¡Enhorabuena!!</h2>
                <p>Has montado el puzzle en ` + contador + ` jugadas</p><br>
                <p>Nombre de usuario</p>
                <input class="inp" placeholder="Nombre de Usuario" type="text" onblur="Nusuario(this.value);" name="login" id="nusu" value="">

                <footer>
                    <button onclick="nuevoUsuario();">Cerrar</button>
                </footer>
            </article>`;
    div.innerHTML = html;
    document.body.appendChild(div);
}

function Nusuario(x) {
    sessionStorage['id_usuario']=x;
}

function nuevoUsuario() {
    let url = 'api/puntuaciones',
        fd = new FormData(),
        nombre, dificultad, jugadas, id_imagen;


        if (sessionStorage['id_dificultad2'] == 1) {
            dificultad = "4x4";
        } else if (sessionStorage['id_dificultad2'] == 2) {
            dificultad = "6x6";
        } else if (sessionStorage['id_dificultad2'] == 3) {
            dificultad = "8x8";
        }

        //nombre = document.getElementById('#nusu');
        nombre=sessionStorage['id_usuario'];
        jugadas= contador;
        id_imagen = sessionStorage['id_imagen3'];

        if(nombre==""){
            terminar2();
            return;
        }

        fd.append('nombre', nombre);
        fd.append('dificultad', dificultad);
        fd.append('jugadas', jugadas);
        fd.append('id_imagen', id_imagen);

        fetch(url, {
            method: 'POST',
            body: fd//,
            //headers: { 'Authorization': usu.login + ':' + usu.token }
        }).then(function (response) {
            if (!response.ok) {
                console.log('Error ' + response.status + ': ' + response.statusText);
            } else {
                response.json().then(function (datos) {
                    console.log(datos);

                    mostrarMensajeVictoria2();
                });
            }
        }).catch(function (error) {
            console.log('Fetch Error: ' + error);
        });
}

function mostrarMensajeVictoria2() {
    let div = document.createElement('div');

    div.id = 'msj-modal';

    html = `<article>
                <h2>Nombre guardado correctamente</h2>
                <footer>
                    <button onclick="terminar2();">Cerrar</button>
                </footer>
            </article>`;
    div.innerHTML = html;
    document.body.appendChild(div);
}

function contar() {
    contador++;
    console.log(contador);
    let div = document.createElement('div');
    div.innerHTML = "Contador= " + contador;
    document.querySelector('#contador').innerHTML = ' ';
    document.querySelector('#contador').appendChild(div);
}


function copiarImagen() {
    let cv1 = document.querySelector('#cv01'),
        ctx1 = cv1.getContext('2d'),
        cv2 = document.querySelector('#cv02'),
        ctx2 = cv2.getContext('2d');

    ctx2.drawImage(cv1, 0, 0);
}


function ponerfondo() {//dibujo en 2d: Cuadrado
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.fillStyle = '#4ACFFFFF';//para llenar algo de un color
    ctx.fillRect(1, 1, cv.with, cv.height);//paraa hacer la figura
}

function divisiones() {
    if (sessionStorage['id_dificultad2'] == 1) {
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
    mostrarMensajeTerminar();
}

function mostrarMensajeTerminar() {
    let div = document.createElement('div');

    div.id = 'msj-modal';

    html = `<article>
                <h2>¡¡Lástima!!</h2>
                <p>No has podido armar el puzle tras ` + contador + ` jugadas</p><br>
                <footer>
                    <button onclick="terminar2();">Cerrar</button>
                </footer>
            </article>`;
    div.innerHTML = html;
    document.body.appendChild(div);
}

function terminar2() {//no terminada xd
    window.location.href = "index.html";
}

function mezclar() {
    var di;
    if (sessionStorage['id_dificultad2'] == 1) {
        di = 4;
    } else if (sessionStorage['id_dificultad2'] == 2) {
        di = 6;
    } else if (sessionStorage['id_dificultad2'] == 3) {
        di = 8;
    }


    for (var i = 0; i < di; i++) {
        matrizGanadora[i] = new Array(di);
    }
    //creamos la matriz ganadora
    for (var j = 0; j < di; j++) {
        for (var k = 0; k < di; k++) {
            matrizGanadora[j][k] = j + k * 0.1;
            matrizGanadora[j][k] = Math.round(matrizGanadora[j][k] * 10) / 10;
        }
    }


    for (var i = 0; i < di; i++) {
        matrizAleatoria[i] = new Array(di);
    }

    for (var j = 0; j < di; j++) {
        for (var k = 0; k < di; k++) {
            matrizAleatoria[j][k] = j + k * 0.1;
            matrizAleatoria[j][k] = Math.round(matrizAleatoria[j][k] * 10) / 10;
        }
    }

    var i, j, temp;

    for (i = di - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = matrizAleatoria[i];
        matrizAleatoria[i] = matrizAleatoria[j];
        matrizAleatoria[j] = temp;

    }
    for (z = di - 1; z >= 0; z--) {
        for (i = di - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = matrizAleatoria[z][i];
            matrizAleatoria[z][i] = matrizAleatoria[z][j];
            matrizAleatoria[z][j] = temp;

        }
    }
    for (z = di - 1; z >= 0; z--) {
        for (i = di - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = matrizAleatoria[i][z];
            matrizAleatoria[i][z] = matrizAleatoria[j][z];
            matrizAleatoria[j][z] = temp;

        }
    }

    console.log(matrizGanadora);
    console.log(matrizAleatoria);
}