
if(document.getElementById('formulario-contacto')){
    let nombre_ = document.getElementById('nombre')
    let apellido_ = document.getElementById('apellido')
    let mail_ = document.getElementById('mail')
    let msg_ = document.getElementById('msg')

    let form_ = document.getElementById('formulario-contacto')
    form_.addEventListener('submit', (event)=>{
    event.preventDefault()

    let valores_form = []
    for(let i = 0 ; i < 4 ; i++){
        if(nombre_.value != null){
            valores_form.push(1)
        }
        else if(apellido_.value != null){
            valores_form.push(1);
        }
        else if(mail_.value != null){
            valores_form.push(1);
        }
        else if(msg_.value != null){
            valores_form.push(1)
        }
    }
    if(valores_form.length == 4){
        myNegativeAlert("Gracias por escribirnos!","success","Mensaje Enviado")
        //redireccionamiento()
        //limpiar(nombre_,apellido_,mail_,msg_)
    }

    if(nombre_.value == 0){
        myNegativeAlert("Complete su nombre por favor!", "error","Campo Vacio")
    }
    if(apellido_.value == 0){
        myNegativeAlert("Complete su apellido por favor!","error","Campo Vacio")
    }
    if(mail_.value == 0){
        myNegativeAlert("Complete su mail por favor!","error","Campo Vacio")
    }
    if(msg_.value == 0){
        myNegativeAlert("El mensaje no puede estar vacio!","error","Campo Vacio")
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

function limpiar(obj1 , obj2 , obj3 , obj4){
    obj1.reset()
    obj2.reset()
    obj3.reset()
    obj4.reset()
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
    },2500)
}
function myNegativeAlert(mensaje , icono , titulo){
    Swal.fire({
        icon: icono,
        title: titulo,
        text: mensaje,
      })
}

      /*
      function validarFormulario(evento) {
        evento.preventDefault();
        var usuario = document.getElementById('nombre').value;
        if(usuario.length == 0) {
          alert('No has escrito nada en el usuario');
          return false;
        }
        var clave = document.getElementById('apellido').value;
        if (clave.length == 6) {
          alert('falta colocar apellido');
          return false;
        }
        this.submit();
      }  */



 /* let boton = document.getElementById('button').addEventListener('click', ()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    
})*/



