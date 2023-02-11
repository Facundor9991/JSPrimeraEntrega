//DATOS ESTABLECIDOS
class Lote {
  constructor(id, marca, modelo, precio, imagen) {
    (this.id = id),
      (this.marca = marca),
      (this.modelo = modelo),
      (this.precio = precio),
      (this.imagen = imagen);
  }
  mostrarInfoLote() {
    //console.log(`el id del libro es ${this.id}El libro fue escrito por ${this.autor} su titulo es ${this.titulo} y su precio es de ${this.precio}}`)
  }
}

const Lote1 = new Lote(1, "Audi 2010", "TT", 150, "Auditt.jpg");
const Lote2 = new Lote(2, "Audi 2010", "RS6", 280, "rs62010.jpg");
const Lote3 = new Lote(3, "BMW 2018", "X6", 210, "bmwx6.jpg");
const Lote4 = new Lote(4, "MAZDA 2014", "RX-8", 170, "Mazdarx8.jpg");
const Lote5 = new Lote(5, "TOYOTA 2008", "SUPRA", 160, "toyoyasupra.jpg");
const Lote6 = new Lote(6, "FERRARI 2022", "458 SPYDER", 300, "ferrari.jpg");

Lote1.mostrarInfoLote();

let estanteria = []



// 2 posibilidades de que exista o q no algo en el storage
if (localStorage.getItem("estanteria")) {
  //si exite algo entra
  estanteria = JSON.parse(localStorage.getItem("estanteria"));
} else {
  //si no existe, entra al else
  console.log("seteamos por primera vez");
  estanteria.push(Lote1, Lote2, Lote3, Lote4, Lote5, Lote6);
  //localStorage.setItem("estanteria", JSON.stringify(estanteria));
}
//console.log(estanteria);

//capturando let

let garajeDiv = document.getElementById("garaje");
let mostrarAutosBtn = document.getElementById("mostrarAutos");
let ocultarAutosBtn = document.getElementById("ocultarAutos");
let inputMarca = document.getElementById("marcaInput");
let inputModelo = document.getElementById("modeloInput");
let inputPrecio = document.getElementById("precioInput");
let guardarCarBtn = document.getElementById("guardarCarBtn");
let inputBuscador = document.querySelector("#buscador");
let igualIgual = document.getElementById("igualIgual");
let selector = document.getElementById("selector");
let modalReservas = document.getElementById("modalReservas")
let botonReservas = document.getElementById("botonReservas")
let precioTotal = document.getElementById("precioTotal")


//FUNCIONES

function verAutos(array) {
  garajeDiv.innerHTML = "";
  for (let Lote of array) {
    let tingladoSurDiv = document.createElement("div");
    tingladoSurDiv.className = "col-12 col-md-6 col-lg-4 my-2";
    tingladoSurDiv.innerHTML = `
    <div id="${Lote.id}" class="card" style="width: 18rem;">
              <img class="card-img-top img-fluid" style="height: 200px;"src="../imagenes/Alquiler/${Lote.imagen}" alt="">
              <div class="card-body">
                  <h4 class="card-title">${Lote.marca}</h4>
                  <p>Modelo: ${Lote.modelo}</p>
                  <p class="">Precio en:<strong> ${Lote.precio}</strong>USD por 24HS</p>
                  <button id="agregarBtn${Lote.id}" class="btn btn-outline-success">Reservar</button>
              </div>
          </div>
    `;
    garajeDiv.appendChild(tingladoSurDiv);
    let agregarBtn = document.getElementById(`agregarBtn${Lote.id}`);
    agregarBtn.onclick = () => {
      
      agregarReservas(Lote)
    };
  }
}

// let autosReservados
// if(localStorage.getItem("carsreser")){
//   autosReservados = JSON.parse(localStorage.getItem("carsreser"))
// }else{
//   autosReservados = []
//   localStorage.setItem("carsreser", autosReservados)
// }

//REEEMPLAZANDO EL CODIGO DE ARRIBA CON OPERADOR OR
let autosReservados = JSON.parse(localStorage.getItem("carsreser")) || []
//console.log (autosReservados)


 function reservaTotal(array){
//   let acumulador = 0
//   for(let car of array){
//     acumulador = acumulador + car.precio
//   }
//ACUMULADOR CON REDUCE
let total = array.reduce((acc, productcarrito)=> acc + productcarrito.precio ,0)
console.log("acc con reduce" + total)
//ternario
total == 0 ?
precioTotal.innerHTML = `No hay reservas` : precioTotal.innerHTML = `El total es <strong>${total}</strong> USD`
return total
}


function agregarReservas(Lote){
  //console.log(Lote)

  let caragregado = autosReservados.find((elem)=> elem.id == Lote.id)
  if(caragregado == undefined){
    console.log(`El vehiculo ${Lote.marca} ha sido reservado`)
    autosReservados.push(Lote)
    localStorage.setItem("carsreser", JSON.stringify(autosReservados))
console.log(autosReservados)

Swal.fire({
  title:"El vehiculo se agrego correctamente",
icon: "success",
confirmButtonColor: "#2c0303",
imageUrl: `../imagenes/Alquiler/${Lote.imagen}`,
imagenHeight: 100,
imagenWidth: 50

})

  }else{

    Swal.fire({
      title:'Ya tienes agregado este elemento',
      icon: "info",
      timer: 2000,
      confirmButtonColor: "#2c0303"
    
    })
    
  }
}


function cargarReservas(array){
//console.log("funciona boton")
modalReservas.innerHTML =""
array.forEach((careservado)=> {
  console.log(careservado.marca)
  modalReservas.innerHTML +=
  `
  <div class="card" style="width: 18rem;">
  <div class="card-body" id = "cardReserva${careservado.id}">
  <img src="../imagenes/Alquiler/${careservado.imagen}" class="card-img-top" alt="...">
  <h4 class="card-title">${careservado.marca}</h4>
    <p class="card-text">${careservado.modelo}</p>
    <p class="card-text">Valor: ${careservado.precio}</p>
    <button class= "btn btn-danger" id="botonEliminar${careservado.id}">Eliminar<i class="fas fa-trash-alt"></i></button>
  </div>
</div>
  `
})
//segundo for each agregar funcion eliminar 
array.forEach((careservado)=>{
  document.getElementById(`botonEliminar${careservado.id}`).addEventListener("click", ()=>{
    console.log("btn eliminar funciona")

//BORRAR DEL DOM
let cardReserva =document.getElementById(`cardReserva${careservado.id}`)
cardReserva.remove()

//ELIMINAR DEL ARRAY
//buscar prod a eliminar
let eliminarReserva = array.find(Lote => Lote.id == careservado.id)
console.log(eliminarReserva)
let posicion = array.indexOf (eliminarReserva)
console.log(posicion)
//SPLICE
array.splice(posicion, 1)
console.log(array)
//SETEAR EL STORAGE
localStorage.setItem("carsreser", JSON.stringify(array))
//RECALCULAR EL PRECIO
reservaTotal(array)
  })
})
reservaTotal(array)
}

function agregarCars(array) {

  //agregarlo con funcion constructora
  const nuevoLote = new Lote(array.length + 1, inputMarca.value, inputModelo.value, parseInt(inputPrecio.value), "ferrari.jpg")
  console.log(nuevoLote);
  //pushearlo o sumarlo al array
  array.push(nuevoLote)
  //guardar en storage
  localStorage.setItem("estanteria", JSON.stringify(array))
  verAutos (array)

  //mostrarCatalogo(array)
  console.log(array)
  

  inputMarca.value = "";
  inputModelo.value = "";
  inputPrecio.value = "";
}

function buscarInfo(buscado, array) {
  //CONDICION COMPUESTA COINCIDENCIA TOTAL: (Lote.marca.toLowerCase() == buscado.toLowerCase() || Lote.modelo.toLowerCase() == buscado.toLowerCase() )
  let busquedaArray = array.filter(
    (Lote) =>
      Lote.marca.toLowerCase().includes(buscado) ||
      Lote.modelo.toLowerCase().includes(buscado)
  );

  // if (busquedaArray.length == 0) {
  //   igualIgual.innerHTML = `<h2>No se encuetra el vehiculo solicitado</h2>`;
  //   verAutos(busquedaArray);
  // } else {
  //   igualIgual.innerHTML = "";
  //   verAutos(busquedaArray);
  // }

//REEMPLAZANDO EL CODIGO DE ARRIBA POR UN OPERADOR TERNARIO (LA MISMA FUNCION PERO DISTINTO CODIGO)

busquedaArray.length == 0 ? (igualIgual.innerHTML = `<h2>No se encuetra el vehiculo solicitado</h2>` , verAutos(busquedaArray)) : (igualIgual.innerHTML = "" , verAutos(busquedaArray))
}

function ordenarMenorMayor(array) {
  const menorMayor = [].concat(array);
  menorMayor.sort((param1, param2) => param1.precio - param2.precio);
  verAutos(menorMayor);
}

function ordenarMayorMenor(array) {
  const mayorMenor = [].concat(array);
  mayorMenor.sort((a, b) => b.precio - a.precio);
  verAutos(mayorMenor);
}

function ordenarAlfaMar(array) {
  const ordenadoAlfa = [].concat(array);
  ordenadoAlfa.sort((a, b) => {
    if (a.marca > b.marca) {
      return 1;
    }
    if (a.marca < b.marca) {
      return -1;
    }
    return 0;
  });
  verAutos(ordenadoAlfa);
}

//ADJUNTANDO EVENTOS

inputBuscador.addEventListener("input", () => {
  console.log(inputBuscador.value);
  buscarInfo(inputBuscador.value, estanteria);
});

mostrarAutosBtn.onclick = function () {
  verAutos(estanteria);
};

guardarCarBtn.addEventListener("click", () => {
  agregarCars(estanteria);
});

ocultarAutosBtn.addEventListener("dblclick", () => {
  garajeDiv.innerHTML = "";
});

selector.addEventListener("change", () => {
  if (selector.value == 1) {
    ordenarMenorMayor(estanteria);
  } else if (selector.value == 2) {
    ordenarMayorMenor(estanteria);
  } else if (selector.value == 3) {
    ordenarAlfaMar(estanteria);
  } else {
    verAutos(estanteria);
  }
});


botonReservas.addEventListener("click", ()=>{
  cargarReservas(autosReservados)
})
//clase 6

// localStorage.setItem("primerLote", JSON.stringify(Lote1));
// localStorage.setItem("Lotes", JSON.stringify(estanteria));

// console.log(localStorage.getItem("primerLote"));
// console.log(localStorage.getItem("Lotes"));

// console.log(JSON.parse(localStorage.getItem("primerLote")));
// console.log(JSON.parse(localStorage.getItem("Lotes")));


// CLASE 7 DESESTRUCTURACION (MODIFICA EL OBJETO SIN ALTERAR EL ORIGINAL)

// let{precio} = Lote5
// console.log(precio)
// Lote5.precio = 13
// console.log(Lote5)

//SPREAD CON OBJETOS

 let superLote2 = {
   ...Lote2,
   Traccion: "Integral",
   Combustible: "Etanol",
   Alimentacion: "Biturbo"
 }

 console.log(superLote2)

 //PRIMERA LIBRERIA

//LUXON
const DateTime = luxon.DateTime
const fechaHoy = DateTime.now()
console.log(fechaHoy)