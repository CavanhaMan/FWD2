var foto = [];
foto[0] = "image/faustaoaviao.jpg";
foto[1] = "image/faustaofalso.jpg";
foto[2] = "image/faustoerrou.jpg";

var num = 0;

function changePic(){
    if (num>=2) num=0;
    else num++;
    document.fotofausto.src=foto[num];
}


/*=========================================*/
