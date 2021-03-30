
/**
 * propiedades de los objetos
 * 
 * descripcion
 * imagen
 * nombre
 * precio
 * stock
 * tipo juguete medicamento
 * id
 * 
 * myFunction(nData.nombre , padre , "stock" , "precio")
 */


 const url_ = "https://apipetshop.herokuapp.com/api/articulos"

if(document.getElementById("contenedor-juguetes")){
    let padre  = document.getElementById("contenedor-juguetes")
    fetch(url_)
.then(data => data.json())
.then(nData => juguetesFuntion(nData.response, padre, "nombre" , "precio"))
.catch(error => console.log(error))
}
else if(document.getElementById("contenedor-farmacia")){
    let padre  = document.getElementById("contenedor-juguetes")
    fetch(url_)
.then(data => data.json())
.then(nData => juguetesFuntion(nData.response, padre, "nombre" , "precio"))
.catch(error => console.log(error))
}

function juguetesFuntion(datos , padre_ , prop1 , prop2 , tipo){
    datos.forEach((element,index) => {
        if(element.tipo == "Juguete"){
            padre_.innerHTML += `
            <div class="row tarjetas">
                <div class="col-sm-10 ps-5 py-3">
                    <a href="${element.imagen}" data-lightbox="roadtrip">
                        <img class="icon" src="${element.imagen}" alt="logo">
                    </a> 
                     nombre: ${element[prop1]}
                     precio: $${element[prop2]}
                     tipo: ${element.tipo}
                </div>
            </div>
            `
        }
    })
}