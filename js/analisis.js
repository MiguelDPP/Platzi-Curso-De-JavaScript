
function esPar(num){
    return num % 2 === 0;
}

const salariosCol = colombia.map((element)=>{
    return element.salary;
})

const salariosColSorted = salariosCol.sort((a,b)=>{
    return a - b;
})



function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        return calcularMediaAritmetica([personitaMitad1,personitaMitad2]);

    }else{
        return lista[mitad];
    }
}

medianaSalariosCol = medianaSalarios(salariosColSorted);

// Mediana del TOP 10%
const spliceStart = parseInt((salariosColSorted.length*90)/100);
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 =  salariosColSorted.splice(
    spliceStart,spliceCount
)


medianaSalariosColTop10 = medianaSalarios(salariosColTop10);
console.log(
    {
        medianaSalariosCol,
        medianaSalariosColTop10
    }
)