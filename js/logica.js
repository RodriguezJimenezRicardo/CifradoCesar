/*
Vamos a crear una funcion con el uso de JS6 
que se encargue del cifrado y del descifrado del texto
de area considerando a utilizar funciones anonimas y callback
A B C D E F G H I J  K  L  M  N  Ñ  O  P  Q  R  S  T  U  V  W  X  Y  Z
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 
*/

var cesar = cesar || (function(){
    //tenemos que entender que para poder cifrar o descifrar es neccesario 
    //obtener 3  parametros
    //texto, desplazamaniento y la accion 
    var doStaff = function(txt, desp, action){
        //nota ya estamos mal, la nueva version de js 
        //ya no maneja var, ahora todo es let y const

        //Vamos a rempalzar
        var replace = (function(){
            //necesito un alfabeto
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
            'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

            var l = abc.length;
            //Tenemos que crear una funcion que se encargue de realizar el cambio de posiciones de las letras para el cifrado
            //recibe texto
            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                console.log(i);
                //reemplazo de las posiciones
                //primero debemos de saber si el texto esta vacio
                if(i != -1){
                    //Hay algo que  cifrar
                    //movimiento de las posciones
                    var pos = i;
                    
                    if(action){
                        //cifrar
                        pos = (pos+desp)%27;
                        pos -= (pos>=1)?1:0;
                    }else{
                        //Descifrar 
                        for(let j=0; j<desp;j++){
                            var despf = 27*j;
                            if(despf>=desp){
                                break;
                            }
                        }
                        pos = (pos-desp+despf+1)%27;
                        pos += (pos<0)?1:0;
                    }
                    return abc[pos];
                }
                return c;
            };
        })(); 

        //vamos a neccesitar regresar el reemplazo de la cadena
        //pero hay que verificarla
        var re = (/[a-zñ]/ig);   //Para que solo adminta letras
        return String(txt).replace(re, function(macth){
            //Se encarga de buscar las coincidencias entre la
            //expresion regular y el textarea
            return replace(macth); 
        });
    };

    //necesitamos enviar si vamos a cifrar o descifrar
    return {
        //El caso cuando cifras
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };

})();

//las funciones de codificar y decodificar
function codificar(){
    if(isNaN(parseInt(document.getElementById("posicion").value))){
        document.getElementById("resultado").innerHTML = "Debe poner un numero positivo en la posicion >:c";                
    }else{
        document.getElementById("resultado").innerHTML = 
        cesar.encode(document.getElementById("cadena").value, parseInt(document.getElementById("posicion").value));
    }    
}
function decodificar(){
    if(isNaN(parseInt(document.getElementById("posicion").value))){
        document.getElementById("resultado").innerHTML = "Debe poner un numero positivo en la posicion >:c";                
    }else{
        document.getElementById("resultado").innerHTML = 
        cesar.decode(document.getElementById("cadena").value, parseInt(document.getElementById("posicion").value));
    }
}