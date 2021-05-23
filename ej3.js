//TEMPORIZADORES
//var id;
//para ver una forma hay que poner solo esa
function mostrarHoraST() {
    let fecha = new Date(),
        hora;
    hora= fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    document.querySelector('#reloj').textContent = hora;//text content es para agregar solo texto al html

    //en caso de que no tuviera ninguno de los 3 de abajo solo me saldría una vez
    //setTimeout(mostrarHoraST, 1000);//en caso de que quiera mostrarlo cada segundo he de usar la recursividad y en la otra funcion poner solo mostrarHorasST();
    //id= setTimeout(mostrarHoraST , 1000);//con variable global
    //sessionStorage['id_reloj'] = setTimeout(mostrarHoraST , 1000);//sin variable global forma 1

    document.querySelector('#reloj').setAttribute('data-id', setTimeout(mostrarHoraST, 1000));//esto es un atributo, es otra forma de sustituir a las variables globales y para hacerlo siempre debe empezar igual
}

function empezarST() {
    mostrarHoraST();//funcion que queremos que se ejecute
}

function pararST() {//para pararlo meto el clearTimeout en una variable global y lo envio a la funcion
    //clearTiemout(id);//con variable global
    //clearTimeout(sessionStorage['id_reloj']);//sin variable global forma 1
    clearTimeout(document.querySelector('#reloj').getAttribute('data-id') );//forma 2 sin variable global
}
//usando session storage la informacion no se pierde aunque recargue la pestaña, solo si la cierro. Y LocalStorege es eterno.
//==================================================================


function mostrarHoraSI() {
    let fecha = new Date(),
        hora;

    hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    document.querySelector('#reloj').textContent = hora;

}

function empezarSI() {
    //setInterval(mostrarHoraSI, 1000);//aqui el cambio es que setInterval te lo hace todo
    //y para poder pararlo lo completo con esto
    sessionStorage['id_reloj'] = setInterval(mostrarHoraSI, 1000);
}

function pararSI(){
    clearInterval(sessionStorage['id_reloj']);
}

//==================================================================
//este es más eficiente, ya que solo se ejecuta cuando lo estamos viendo, es decir que consume menos recursos del pc
//solo funciona cuando activo la pestaña

function mostrarHoraRAF() {
    let fecha = new Date(),
        hora;

    hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    document.querySelector('#reloj').textContent = hora;
    sessionStorage['id_reloj'] = requestAnimationFrame(mostrarHoraRAF);
}

function empezarRAF() {
    mostrarHoraRAF();
}

function pararRAF() {
    cancelAnimationFrame(sessionStorage['id_reloj']);
}

//==================================================================
//CANVAS
//dependiendo de cual se ejecute primero, acaabará en el fondo ya que cada elemento se superpone
function prepararCanvas() {
    let cv = document.querySelector('#cv01');

    cv.width= 480;
    cv.height= 360;
}

function prueba01() {//dibujo en 2d: Cuadrado
    let cv = document.querySelector('#cv01'),
        ctx = cv.getContext('2d');

        ctx.fillStyle = '#4ACFFFFF';//para llenar algo de un color
        ctx.fillRect(100,100,120,80);//paraa hacer la figura

        ctx.fillStyle = 'rgba(85,170,127,0.8)';//opacidad= transparencia se mide con el uktimo valor de 0.1 a 1
    ctx.fillRect(190, 160, 120, 80);
}

function prueba02() {//dibujo en 2d: Línea
    let cv = document.querySelector('#cv01'),
        ctx = cv.getContext('2d');

    ctx.strokeStyle = '#FFA339FF'//color de la linea
    ctx.lineWidth = 8;//ancho

    ctx.moveTo(120,80);//desde
    ctx.lineTo(220,120);//hasta
    ctx.lineTo(160,180);


    ctx.stroke();//pinta las lineas
}

function prueba03() {//dibujo en 2d: rectangulo vacio
    let cv = document.querySelector('#cv01'),
        ctx = cv.getContext('2d');

    ctx.strokeStyle = '#55AAFFFF';
    ctx.lineWidth = 4;

    ctx.rect(120,100,120,80);
    ctx.stroke();
}

function prueba04() {//dibujo en 2d: rectangulo lleno
    let cv = document.querySelector('#cv01'),
        ctx = cv.getContext('2d');

    ctx.fillStyle = '#FFFF7FFF';
    ctx.fillRect(120,100,120,80);
}

function prueba05() {//dibujo en 2d: línea con anchura impar
    let cv = document.querySelector('#cv01'),
        ctx = cv.getContext('2d');

    ctx.beginPath();//para que se mantenga el estilo
    ctx.strokeStyle = '#aa0000';
    ctx.lineWidth = 1;

    ctx.moveTo(220,0);//si pongo 219.5 se quedaría no borrosa y de tamaño 1 real
    ctx.lineTo(220, cv.height);//aqui uso el alto o ancho del canvas

    ctx.stroke();

}
//la diferencia de las lineas es que al hacer zoom con la impar se ve borrosa

function prueba06() {//dibujo en 2d: línea con anchura par
    let cv = document.querySelector('#cv01'),
        ctx = cv.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = '#aa0000';
    ctx.lineWidth = 2;

    ctx.moveTo(230, 0);
    ctx.lineTo(230, cv.height);//aqui uso el alto o ancho del canvas

    ctx.stroke();

}
//==============================================================0
function prepararCanvas2() {
    let cv = document.querySelector('#cv02');

    cv.width = 480;
    cv.height = 360;
}

function dibujarCirculo() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = '#a00';
    ctx.lineWidth = 6;

    ctx.arc(200,200,3,0,2*Math.PI);
    ctx.moveTo(300,200);//hago esto para que no se siga dibujando hasta esa posicion concreta
    ctx.arc(200, 200, 100, 0, 3 * Math.PI / 2);//para que salga asi raro. Si quiero que se muestre el inverso pongo ...3*Math.PI/2,true);

    ctx.stroke();
}

function dibujarRecta() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = '#a00';
    ctx.lineWidth = 12;
    ctx.lineCap='round';//añadir un cuadrado delante y detras


    ctx.moveTo(100, 200);//hago esto para que no se siga dibujando hasta esa posicion concreta
    ctx.lineTo(260, 260);

    ctx.stroke();
}

function dibujarRectas() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = '#a00';
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';//añadir un cuadrado delante y detras
    ctx.lineJoin='bevel';//para hacer desaparacer la union entre lineas. Si pongo round aparaece redondeado y si pongo miter aparecen todas las lineas enteras

    ctx.moveTo(100, 200);//hago esto para que no se siga dibujando hasta esa posicion concreta
    ctx.lineTo(260, 260);
    ctx.lineTo(100, 320);

    ctx.stroke();
}

function dibujarSombra() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = '#a00';
    ctx.fillStyle = '#FFAA7FFF';
    ctx.lineWidth = 12;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur    = 20;
    ctx.shadowColor   = '#000';

    ctx.fillRect(100,80,200,100);
    //ctx.rect(100,80,200,100);//si lo quito solo se ve el cuadrado con sombra

    ctx.stroke();
}

function dibujarTexto() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d'),
        texto= 'Hola mundo!!!';

    ctx.beginPath();
    ctx.strokeStyle = '#a00';
    ctx.fillStyle = '#FFAA7FFF';
    ctx.lineWidth = 1;

    ctx.font = 'bold italic 32px arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';//subir un poco el texto//alphabetic para poner el texto en la linea, y top para abajo
    //ctx.strokeText(texto,200,200);
    ctx.fillText(texto, 200, 200, 200);//el ultimo ,200 es poara ajustarlo al espacio
    //ctx.strokeText(texto, 200, 300, 100);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(200,0);
    ctx.lineTo(200,cv.height);
    ctx.moveTo(0,200);
    ctx.lineTo(cv.width,200);

    ctx.stroke();
}

function dibujarClosepath() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = '#a00';
    ctx.fillStyle = '#FFAA7FFF';
    ctx.lineWidth = 2;

    ctx.moveTo(100,100);
    ctx.lineTo(200,125);
    ctx.lineTo(180,180);
    ctx.closePath();//unir la lineas

    ctx.fill();//rellena la figura con el color que le he asignado independientemente de si lo he cerrado o no

    ctx.stroke();
}

function limpiar() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

        ctx.clearRect(0,0,cv.width,cv.height);
}

function dibujarRectangulo() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth=4;
    ctx.strokeStyle='#a00';
    ctx.strokeRect(200,200,100,80);
}

function escalar() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.scale(1.25,1.25);//aumentamos el dibujo un 25% cuando volcemos a dibujar despues de darle al boton
}

function rotar() {
    let cv = document.querySelector('#cv02'),
        ctx = cv.getContext('2d');

    ctx.translate(cv.width/2, cv.height/2);//esto lo pongo para hacer que el punto desde ek que se rote sea el centro
    ctx.rotate(Math.PI/6);//rotamos en direccion a las agujas del reloj los grados que le indiquemos
    ctx.translate(-cv.width / 2, -cv.height / 2);

}

//=======================================================================================================
function prepararCanvas3() {
    let cv = document.querySelector('#cv03');

    cv.width = 480;
    cv.height = 360;
}

function prepararCanvas4() {
    let cv = document.querySelector('#cv04');

    cv.width = 480;
    cv.height = 360;
}

function cargarImagen(){
    let cv = document.querySelector('#cv03'),
        ctx = cv.getContext('2d'),
        imagen = new Image(),
        factor;//uso esto para que la imagen no se estire en el canvas

    imagen.onload = function () {
        factor= cv.width/ imagen.width;
        ctx.drawImage(imagen,0,0, cv.width, imagen.height*factor);//los cv es para ajustarla al canvas//esto es para ajustarla
    };

    imagen.src = './imagenes/img4.jpg';
}

function cargarImagen2() {
    let cv = document.querySelector('#cv03'),
        ctx = cv.getContext('2d'),
        cv2 = document.querySelector('#cv04'),
        ctx2 = cv2.getContext('2d');

    //ctx2.drawImage(cv,0,0);//Para copiar la imagen literal
    ctx2.drawImage(cv, cv.width/2, cv.height/2, cv.width/4, cv.height/4);//con esto sale un cuarto de la imagen del otro canvas
}

function pintarTrozo() {
    let cv = document.querySelector('#cv03'),
        ctx = cv.getContext('2d'),
        cv2 = document.querySelector('#cv04'),
        ctx2 = cv2.getContext('2d');

    ctx2.drawImage(cv, 120,80,100,100,0,0,100,100);
}

function copiarImagen() {
    let cv = document.querySelector('#cv03'),
        ctx = cv.getContext('2d'),
        cv2 = document.querySelector('#cv04'),
        ctx2 = cv2.getContext('2d'),
        imgData;

        imgData = ctx.getImageData(0,0, cv.width, cv.height);

        ctx2.putImageData(imgData,0,0);
}

function copiarTrozo() {
    let cv = document.querySelector('#cv03'),
        ctx = cv.getContext('2d'),
        cv2 = document.querySelector('#cv04'),
        ctx2 = cv2.getContext('2d'),
        imgData;

    imgData = ctx.getImageData(200,200,120,80);

    ctx2.putImageData(imgData, 0, 0);
}

function copiarTrozo() {
    let cv = document.querySelector('#cv03'),
        ctx = cv.getContext('2d'),
        cv2 = document.querySelector('#cv04'),
        ctx2 = cv2.getContext('2d'),
        imgData;

    imgData = ctx.getImageData(200, 200, 120, 80);

    ctx2.putImageData(imgData, 100, 120, 0, 0, 120, 80);//para ponerlo en otra posicion

    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle= '#a00';
    ctx.moveTo(100,0);
    ctx.lineTo(100,cv.height);
    ctx.moveTo(0,120);
    ctx.lineTo(cv.width,120);
    ctx.stroke();
}

//==========================================================================
function prepararEventos() {
    let cv = document.querySelector('#cv05');
//se puede asignar varios codigos a un click para verlo calse del 4 min 36
    cv.onclick = function (eve) {//click
        console.log("CLICK: " + eve.offsetX + ',' + eve.offsetY);
    };

    cv.ondblclick = function (eve) {//doble click
        console.log("DBL_CLICK: " + eve.offsetX + ',' + eve.offsetY);
    };

    cv.onmousedown = function (eve) {//mientras tengo el raton pulsado
        console.log("M_DOWN: " + eve.offsetX + ',' + eve.offsetY);
        cv.setAttribute('data-xy', JSON.stringify({'x':eve.offsetX, 'y':eve.offsetY}));
    };

    cv.onmouseup = function (eve) {//cuando dejo de pulsar el raton se lanza
        console.log("M_UP: " + eve.offsetX + ',' + eve.offsetY);
        cv.removeAttribute('data-xy');
    };

    cv.onmousemove = function (eve) {//evento que aparece cada vez que paso el raton por encima
        //console.log("M_MOVE: " + eve.offsetX + ',' + eve.offsetY);//la posicion
        let posXY;

        if((posXY=cv.getAttribute('data-xy'))){
            let ctx = document.querySelector('#cv05').getContext('2d');

            posXY = JSON.parse(posXY);
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#a00';
            ctx.moveTo(posXY.x, posXY.y)
            ctx.lineTo(eve.offsetX,eve.offsetY);
            ctx.stroke();

            cv.setAttribute('data-xy', JSON.stringify({ 'x': eve.offsetX, 'y': eve.offsetY }));
        }
    };

}

function prepararCanvas5() {
    let cv = document.querySelector('#cv05');

    cv.width = 480;
    cv.height = 360;

    prepararEventos();
}

function cargarImagen3(){//crear imagen dinamicamente desde javascript
    let inp=document.createElement('input');

    inp.type = 'file';

    inp.onchange = function(){

        let fr = new FileReader();

        fr.onload = function(){
            let img = new Image();

            img.onload = function (){
                let cv=document.querySelector('#cv05'),
                ctx = cv.getContext('2d'),
                factor = cv.width/img.width,
                posY = (cv.height -img.height * factor)/2;

                ctx.drawImage(img ,0 ,posY ,cv.width,img.height*factor);
            };

            img.src=fr.result;
        };

        fr.readAsDataURL(inp.files[0]);
    };

    inp.click();

}

//====================================================
//PINTAR REGIONES IMPORTANTE
function prepararCanvas6() {
    let cv = document.querySelector('#cv06');

    cv.width = 480;
    cv.height = 360;

    cv.onclick = function (evt){
        let x= evt.offsetX,
        y= evt.offsetY,
        ancho = cv.width/2,
        alto = cv.height/2,
        fila = Math.floor(y/alto),
        columna= Math.floor(x/ancho);

        console.log(x + ',' + y);
        console.log(columna + ',' + fila);//con esto saco la region de las divisiones en la que estoy

        //como pintar la region correspondiente
        let cv1 = document.querySelector('#cv05'),
            ctx1 = cv1.getContext('2d'),
            cv2 = cv,
            ctx2 = cv2.getContext('2d');

        ctx2.drawImage(cv1, columna * ancho, fila * alto, ancho, alto, columna * ancho, fila * alto, ancho, alto);
    };
}

function copiarImagen2() {
    let cv1 = document.querySelector('#cv05'),
    ctx1= cv1.getContext('2d'),
    cv2 = document.querySelector('#cv06'),
    ctx2 = cv2.getContext('2d');

    ctx2.drawImage(cv1, 0, 0);
}

function divisiones() {
    let cv2 = document.querySelector('#cv06'),
    ctx2 = cv2.getContext('2d'),
    ancho = cv2.width/2,
    alto= cv2.height/2;

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = '#a00';

    for(let i=1; i<2 ; i++){
        //verticales
        ctx2.moveTo(i*ancho,0);
        ctx2.lineTo(i*ancho, cv2.height);
        //horizontales
        ctx2.moveTo(0, i * alto);
        ctx2.lineTo(cv2.width, i * alto);
    }
    ctx2.stroke();
}

function descomponer(color){
    let cv1 = document.querySelector('#cv05'),
        ctx1 = cv1.getContext('2d'),
        cv2 = document.querySelector('#cv06'),
        ctx2 = cv2.getContext('2d'),
        imgData;

        imgData = ctx1.getImageData(0,0,cv1.width,cv1.height);

        imgData.width
        imgData.height
        imgData.data

        for(let i=0; i<imgData.height; i++){
            for(let j=0; j<imgData.width;j++){
                let pos = (i * imgData.width+j)*4;

                switch (color) {
                    case 'r'://rojo
                        //imgData.data[pos ] = 0;//rojo
                        imgData.data[pos + 1] = 0;//verde
                        imgData.data[pos + 2] = 0;//azul
                        //imgData.data[pos + 3] = 0;//alpha
                        break;

                    case 'g'://verde
                        imgData.data[pos] =0;//rojo
                        //imgData.data[pos + 1] = 0;//verde
                        imgData.data[pos + 2] = 0;//azul
                        //imgData.data[pos + 3] = 0;//alpha
                        break;

                    case 'b'://azul
                        imgData.data[pos] = 0;//rojo
                        imgData.data[pos + 1] = 0;//verde
                        //imgData.data[pos + 2] = 0;//azul
                        //imgData.data[pos + 3] = 0;//alpha
                        break;
                }
            }

        }


        ctx2.putImageData(imgData, 0, 0);


}
function descomponer2(color) {
    let cv1 = document.querySelector('#cv07'),
        ctx1 = cv1.getContext('2d'),

        imgData,
    cv2 = cv1.cloneNode(),
        ctx2 = cv2.getContext('2d');

    //imgData = ctx1.getImageData(0, 0, cv1.width, cv1.height);

    ctx2.putImageData(window.imgDataOriginal,0,0);
    imgData = ctx2.getImageData(0, 0, cv1.width, cv1.height);


    imgData.width
    imgData.height
    imgData.data
    let worker=new Worker('worker.js');
    worker.onmessage=function(evt){
        let datos=evt.data;
        ctx1.putImageData(datos.imgData,0,0);
    }
    worker.postMessage({'imgData':imgData,'color':color});
    /*
    for (let i = 0; i < imgData.height; i++) {
        for (let j = 0; j < imgData.width; j++) {
            let pos = (i * imgData.width + j) * 4;

            switch (color) {
                case 'r'://rojo
                    //imgData.data[pos ] = 0;//rojo
                    imgData.data[pos + 1] = 0;//verde
                    imgData.data[pos + 2] = 0;//azul
                    //imgData.data[pos + 3] = 0;//alpha
                    break;

                case 'g'://verde
                    imgData.data[pos] = 0;//rojo
                    //imgData.data[pos + 1] = 0;//verde
                    imgData.data[pos + 2] = 0;//azul
                    //imgData.data[pos + 3] = 0;//alpha
                    break;

                case 'b'://azul
                    imgData.data[pos] = 0;//rojo
                    imgData.data[pos + 1] = 0;//verde
                    //imgData.data[pos + 2] = 0;//azul
                    //imgData.data[pos + 3] = 0;//alpha
                    break;
            }
        }

    }
*/

    ctx1.putImageData(imgData, 0, 0);


}
function prepararDnD(){//Se hace casi igual para devolver el texto al origen
    document.querySelectorAll('#sec01>ul>li').forEach(function (li,idx,v) {
        li.setAttribute('draggable','true');
        li.setAttribute('data-idx',idx);
        li.ondragstart=function(evt){
            //evt.dataTransfer.setData('text/html',li.outerHTML);
            evt.dataTransfer.setData('text/html', evt.target.getAttribute('data-idx'));
            //PARA MOVER IMAGENES
            //let img=new Image();
            //img.src='imagenes/img1.jpg';
            //evt.datatransfer.setDragImage(img,img.width/2,img.height/2);
        };
    });
    //Destino del DnD      alterativa a evt.preventDefault();
    let sec=document.querySelector('#sec02');
    sec.ondragover=function(evt){
        evt.preventDefault();
    };
    sec.ondrop=function(evt){
        let info = evt.dataTransfer.getData('text/html'),
        li=document.querySelector('[data-idx="'+info+'"]');
        console.log(info);
       // sec.querySelector('ul').innerHTML+= info;
        sec.querySelector('ul').appendChild(li);
    }
}
function prepararDnD2(){
    let sec = document.querySelector('#sec03');
    sec.ondragover = function (evt) {
        evt.preventDefault();
    };
    sec.ondrop = function (evt) {
        evt.preventDefault();
        let fichero = evt.dataTransfer.files[0],
            fr=new FileReader();
            fr.onload=function(){
                document.querySelector('#sec03>img').src=fr.result;
            };
            fr.readAsDataURL(fichero);

    }
}
function prepararCanvas7(){
    let cv=document.querySelector('#cv07');
    cv.width=480;
    cv.height=360;
    //preparar el drop sobre canvas
    cv.ondragover=function(evt){
        evt.preventDefault();
        evt.stopPropagation();
    }
    cv.ondrop=function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        let fichero=evt.dataTransfer.files[0],
            fr = new FileReader();;
        fr.onload = function () {
            let img=new Image();
            img.onload=function () {
                let ctx=cv.getContext('2d');
                ctx.drawImage(img,0,0,cv.width,cv.height);

                window.imgDataOriginal=ctx.getImageData(0,0,cv.width,cv.height);
            }
            img.src=fr.result;
            //document.querySelector('#sec03>img').src = fr.result;
        };
        fr.readAsDataURL(fichero);
    }
}
function restaurar(){
    let cv=document.querySelector('#cv07'),
    ctx=cv.getContext('2d');
    ctx.putImageData(window.imgDataOriginal,0,0);
}