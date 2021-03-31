
/**
 * propiedades de los objetos
 * 
 * descripcion
 * imagen
 * nombre
 * precio
 * stock
 * tipo Juguete Medicamento
 * id
 * 
 * myFunction(nData.nombre , padre , "stock" , "precio")
 */
const url_ = "https://apipetshop.herokuapp.com/api/articulos"

if(document.getElementById("contenedor-juguetes")){
    let padre = document.getElementById("contenedor-juguetes")
    fetch(url_)
.then(data => data.json())
.then(nData => myFuntion(nData.response, padre, "nombre" , "precio","Juguete"))
.catch(error => console.log(error))
}
else if(document.getElementById("contenedor-farmacia")){
    let padre = document.getElementById("contenedor-farmacia")
    fetch(url_)
.then(data => data.json())
.then(nData => myFuntion(nData.response, padre, "nombre" , "precio","Medicamento"))
.catch(error => console.log(error))
}

function myFuntion(datos , padre_ , prop1 , prop2 , tipo){
    datos.forEach((element) => {
        if(element.tipo == tipo){
            padre_.innerHTML += `
            <div class="tarjetas my-3 d-flex align-items-center row">
                <div class="col-2 py-5 my-3 ps-5">
                    <a href="${element.imagen}" data-lightbox="roadtrip">
                        <img class="icon" src="${element.imagen}" alt="logo">
                    </a>
                </div>
                <div class="col-4">
                    <div>
                        <strong class="color-fuente">Nombre:</strong> ${element[prop1]}
                    </div>
                    <div>
                        <strong class="color-fuente">Precio:</strong> $${element[prop2]}
                    </div>
                    <div>
                        <strong class="color-fuente">Tipo:</strong> ${element.tipo}
                    </div>
                    <div class=${element.stock < 5 ? "stock-low" : "stock-high" }>
                        <strong class="color-fuente">Stock:</strong> ${element.stock} ${element.stock < 5 ? "Ultimas Unidades!!!" : "Unidades."} 
                    </div>
                    <div>
                        <button id="buy-button" class="btn-carro">Agregar al carrito</button>
                    </div>
                </div>
                <div class="col-6 py-3">
                <strong class="color-fuente">Descripcion:</strong>${element.descripcion}
                </div>
            `
        }
    })
}