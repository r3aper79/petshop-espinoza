
if(document.getElementById('formulario-contacto')){
    let nombre_ = document.getElementById('nombre')
    let apellido_ = document.getElementById('apellido')
    let mail_ = document.getElementById('mail')
    let msg_ = document.getElementById('msg')
    let form_ = document.getElementById('formulario-contacto')
    form_.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(nombre_.value == 0){
        myNegativeAlert("Complete su nombre por favor!", "error","Campo Vacio")
    }
    else if(apellido_.value == 0){
        myNegativeAlert("Complete su apellido por favor!","error","Campo Vacio")
    }
    else if(mail_.value == 0){
        myNegativeAlert("Complete su mail por favor!","error","Campo Vacio")
    }
    else if(msg_.value == 0){
        myNegativeAlert("El mensaje no puede estar vacio!","error","Campo Vacio")
    }
    else{
        myFormAlert("Gracias por escribirnos!","success","Mensaje Enviado")
        document.getElementById('formulario-contacto').reset()
        redireccionamiento()
    }
})
}
else if(document.getElementById("contenedor-juguetes")){
    let botones = document.getElementsByClassName('btn-carro')
    for(let i = 0 ; i < botones.length ; i++){
        botones[i].addEventListener('click',()=>{
            buyAlert()
        })
    }
    console.log(botones)
    console.log(botones.length)
}

function buyAlert(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Agregado Con Exito!',
        showConfirmButton: false,
        timer: 1500
      })
}
function redireccionamiento(){
    setTimeout(()=>{
        window.location.href = "./index.html"
    },2800)
}
function myNegativeAlert(mensaje , icono , titulo){
    Swal.fire({
        icon: icono,
        title: titulo,
        text: mensaje,
      })
}
function myFormAlert(mensaje , icono , titulo){
    Swal.fire({
        icon: icono,
        title: titulo,
        text: mensaje,
      }).then(redireccionamiento())
}


