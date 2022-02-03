// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

const cupones = [
    {
        name: "TODO15",
        discount: 15
    },
    {
        name: "MC20",
        discount: 20
    },
    {
        name: "RECREO50",
        discount: 50
    }
]


function priceDiscount(){
    const price = parseFloat(document.getElementById("price").value);
    let discount = parseFloat(document.getElementById("discount").value);
    const cuponValue = document.getElementById("cupon").value;

    if(cuponValue != ""){
        const isCupon = function (cupon){
            return cupon.name === cuponValue;
        }
    
        const cupon = cupones.find(isCupon);
    
        if(cupon){
            discount += parseInt(cupon.discount);
        }else{
            alert("Cupón invalido");
        }
    }

    const priceWithDiscount = calcularPrecioConDescuento(price,discount);

    document.getElementById("resultPrice").innerHTML = `El Precio con descuento son: <b>$${priceWithDiscount}<b>`
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })