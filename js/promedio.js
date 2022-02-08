let vector = [];

let result = document.getElementById("result");
let textArray = document.getElementById("array");

function llenarArray(){
    let valor = document.getElementById("inputData").value;
    if(valor != ""){
        vector.push(valor);
        showVector();
    }
}
function clearArray(){
    vector = [];
    textArray.innerHTML = "";
}

function showVector(){
    let data = "[";
    for(let i = 0; i < vector.length; i++){
        if(vector.length - 1 == i){
            data+=`${vector[i]}]`;
        }else{
            data+=`${vector[i]}, `;
        }
    }
    textArray.innerHTML = data;
}

//Promedio
function calcularMediaAritmetica(){
    if(vector.length > 0){
        let sumaLista = 0;
        vector.forEach(element=>{
            sumaLista+= parseInt(element);
        });

        // ó 

        // const sumaLista = lista.reduce(
        //     function (valorAcumulado = 0, nuevoElemento) {
        //       return valorAcumulado + nuevoElemento;
        //     }
        //   );

        result.innerHTML = "La Media Aritmética es: "+ (sumaLista/vector.length);
    }else{
        result.innerHTML = "No hay elementos en la lista";
    }
    
}

// Mediana 

function esPar(num){
    if(num%2==0){
        return true;
    }
    return false;
}

function calcularMediana(){
    if(vector.length > 0){
        const mitadLista = parseInt(vector.length/2);
        let lista = vector.slice();;
        lista.sort((a,b)=>{
            return a -b;
        })


        let mediana;

        if(esPar(lista.length)){
            const elemento1 = parseInt(lista[mitadLista-1]);
            const elemento2 = parseInt(lista[mitadLista]);
        
            mediana = (elemento1+elemento2)/2;
        }else{
            mediana = lista[mitadLista];
        }
        result.innerHTML = `La mediana es: ${mediana}`;
    }else{
        result.innerHTML = "No hay elementos en la lista"
    }
    
}

// Moda 

function moda(){
    if(vector.length > 0){
        const lista1Count = {};
        vector.map(
            function (elemento){
                if(lista1Count[elemento]){
                    lista1Count[elemento] += 1;
                }else{
                    lista1Count[elemento] = 1;
                }
            }
        )

        const lista1Array = Object.entries(lista1Count).sort(
            function(valorAcumulado, nuevoValor){
                return - valorAcumulado[1] + nuevoValor[1];
            }
        );

        result.innerHTML = `La moda es ${lista1Array[0][0]} y se repide ${lista1Array[0][1]} ${(lista1Array[0][1] == 1)?'vez':'veces'}`;
    }else{
        result.innerHTML = "No hay elementos en la lista";
    }
}



/* 
Metodo superpoderoso

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS)); //5
*/