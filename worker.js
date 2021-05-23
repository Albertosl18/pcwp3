self.onmessage=function(evt){
    let datos=evt.data,
    imgData=datos.imgData,
    color=datos.color;
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
    self.postMessage({'imgData':imgData});
}