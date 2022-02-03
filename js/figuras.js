//Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log(`los lados del cuadrado miden ${ladoCuadrado}cm`);

function perimetroCuadrado(lado){
    return lado*4;
} 
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`);

function areaCuadrado(lado){
    return Math.pow(lado, 2);
} 
// console.log(`El area del cuadrado es ${areaCuadrado}cm2`);

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 5;
// const baseTriangulo = 6;
// const alturaTriangulo = 5.5;
// console.log(`los lados del trinagulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
// console.log(`El alto del triangulo es de ${alturaTriangulo}cm`)

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log(`El perímetro del triangulo es ${perimetroTriangulo}cm`)

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
function alturaTriangulo(lado1, lado2, base){
    const s = (lado1 + lado2 + base)/2;
    return (2/base)*Math.sqrt(s*(s-base)*(s-lado1)*(s-lado2));
}
function TipoTriangulo(lado1, lado2, base){
    if(lado1==lado2 && lado1 != base){
        return "isosceles";
    }else if(lado1==lado2 && lado2==base){
        return "Equilátero";
    }else{
        return "Escaleno";
    }
}
// console.log(`El area del triangulo es ${areaTriangulo}cm2`);

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

// const radioCirculo = 4;
function diametroCirculo(radio){
 return radio*2;
} 
const PI = Math.PI;

function circuferencia(radio){
    return diametroCirculo(radio) * PI;
} 
// console.log(`La circuferencia es ${circuferencia}cm`);

function areaCirculo(radio){
    return Math.pow(radio, 2) * PI;
} 
// console.log(`El area del circulo es ${areaCirculo}cm2`);
console.groupEnd();



function calcularPerimetroCuadrado(){
    const lado = document.getElementById("ladoCuadrado").value;
    if(lado != ""){
        alert(`El perimetro es ${perimetroCuadrado(lado)}cm`);
    }else{
        alert("Ingresa un valor llave")
    }
}

function calcularAreaCuadrado(){
    const lado = document.getElementById("ladoCuadrado").value;
    if(lado != ""){
        alert(`El area del cuadrado es ${areaCuadrado(lado)}cm`);
    }else{
        alert("Ingresa un valor llaveF")
    }
}

// Triangulo

function calcularPerimetroTriangulo(){
    const l1 = parseFloat(document.getElementById("l1Triangulo").value);
    const l2 = parseFloat(document.getElementById("l2Triangulo").value);
    const b = parseFloat(document.getElementById("baseTriangulo").value);

    alert(`El perimetro del triangulo es: ${perimetroTriangulo(l1,l2,b)}cm`)
}

function calcularAlturaTriangulo(){
    const l1 = parseFloat(document.getElementById("l1Triangulo").value);
    const l2 = parseFloat(document.getElementById("l2Triangulo").value);
    const b = parseFloat(document.getElementById("baseTriangulo").value);

    alert(`La altura del triangulo es: ${(alturaTriangulo(l1,l2,b))}cm`)
}

function calcularAreaTriangulo(){
    const l1 = parseFloat(document.getElementById("l1Triangulo").value);
    const l2 = parseFloat(document.getElementById("l2Triangulo").value);
    const b = parseFloat(document.getElementById("baseTriangulo").value);

    alert(`El area del triangulo es: ${Math.round(areaTriangulo(b, alturaTriangulo(l1,l2,b)))}cm`);
}

function calcularTipoTriangulo(){
    const l1 = parseFloat(document.getElementById("l1Triangulo").value);
    const l2 = parseFloat(document.getElementById("l2Triangulo").value);
    const b = parseFloat(document.getElementById("baseTriangulo").value);

    alert(`Este es un triangulo ${TipoTriangulo(l1,l2,b)}`);
}

function calcularCircuferencia(){
    const r = parseFloat(document.getElementById("radio").value);

    alert(`La circuferencia es ${circuferencia(r)}cm`)
}
function calcularArea(){
    const r = parseFloat(document.getElementById("radio").value);

    alert(`El area es es ${areaCirculo(r)}cm`)
}


// console.group("Altura de un triangulo escaleno");

// var lado1 = parseFloat(prompt("Lado 1"));
// var lado2 = parseFloat(prompt("Lado 2"));
// var base = parseFloat(prompt("Base"));

// let s = (lado1 + lado2 + base)/2

// console.log(s);

// let re = (2/base)*Math.sqrt(s*(s-base)*(s-lado1)*(s-lado2));

// console.log(re);

// console.groupEnd();