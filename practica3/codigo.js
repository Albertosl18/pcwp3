var posicion = 6;

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
