//DATOS ESTABLECIDOS
class Lote {
  constructor(id, marca, modelo, precio) {
    (this.id = id),
      (this.marca = marca),
      (this.modelo = modelo),
      (this.precio = precio);
  }
  mostrarInfoLote() {
    //console.log(`el id del libro es ${this.id}El libro fue escrito por ${this.autor} su titulo es ${this.titulo} y su precio es de ${this.precio}}`)
  }
}

const Lote1 = new Lote(1, "Audi 2010", "TT", 90000);
const Lote2 = new Lote(2, "Audi 2018", "RS6", 95220);
const Lote3 = new Lote(3, "BMW 2020", "X6", 76544);
const Lote4 = new Lote(4, "MAZDA 2014", "RX-8", 12780);
const Lote5 = new Lote(5, "TOYOTA 2008", "SUPRA", 57579);
const Lote6 = new Lote(6, "FERRARI 2022", "458 SPYDER", 997897);

Lote1.mostrarInfoLote();

const estanteria = [];
estanteria.push(Lote1, Lote2, Lote3, Lote4, Lote5, Lote6);

const biblioteca = [Lote1, Lote2, Lote3];

//LLAMAR FUNCIONES
pedirNombre();

// VALIDACION DE EDAD
let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
  console.log("Eres mayor, bienvenido a mi menu FJR");
  let salirMenu = true;
  do {
    let opcionMenu = prompt(`Ingrese una opcion numerica:
    1 - Ingresar notas para calcular promedio
    2 - Adivinanza
    3 - Cargar datos  
    4 - Buscar marca
    5 - Vehiculos almacenados
    6 - Cargar nuevos vehiculos
    7 - Cargar Piloto
    8 - Buscar modelo de vehiculo
    9 - Ordenar
    10 - Borrar auto 
    0- salir de menu `);

    switch (opcionMenu) {
      case "1":
        let cantNotas = parseInt(prompt("ingrese la cantidad de notas"));
        let total = 0;
        for (let i = 1; i <= cantNotas; i++) {
          let nota = parseInt(prompt(`ingrese el valor de la nota n° ${i}`));
          total = total + nota;
          console.log(`total parcial: ${total}`);
        }
        console.log(`el total de las notas es: ${total}`);
        let promedio = total / cantNotas;
        console.log(`el promedio es ${promedio}`);

        break;

      case "2":
        let ganador = false;
        let contador = 1;

        do {
          let adivinanza = prompt("que es una pila, chanse n°" + contador);
          if (adivinanza.toLowerCase() == "energia") {
            console.log(
              "¡felicitaciones has ganado!,la respuesta es " + adivinanza
            );
            ganador = true;
          } else {
            console.log("la respuesta no es correcta, sigue intentando");
            contador++;
            if (contador == 4) {
              console.log(`ya tuviste las chances la respuesta es energia`);
            }
          }
        } while (!ganador && contador < 4);

        break;

      case "3":
        let preguntaInicio = prompt("Cargar datos, responda si o no");
        let bandera;
        if (preguntaInicio.toUpperCase() == "SI") {
          bandera = true;
        }

        while (bandera) {
          let nomcomplet = prompt("ingresar nombre completo");
          let dni = prompt("ingresar dni");
          let domicilio = prompt("ingresar domicilio de residencia");
          let localidad = prompt("ingresar localidad");
          let provincia = prompt("ingresar provincia");
          let motvicita = prompt("Observaciones");

          console.log(
            `el nombre es ${nomcomplet} dni ${dni} domicilio: ${domicilio} localidad: ${localidad} provincia: ${provincia} ha dejado acentado que ${motvicita}`
          );

          let pregunta = prompt(
            "quiere seguir cargando datos? responda con SI o NO"
          );
          if (pregunta.toUpperCase() == "NO") {
            //cambie dato bandera y corte ciclo
            bandera = false;
          }
        }

        break;

      case "4":
        buscarPorMarca(estanteria);

        break;

      case "5":
        mostrarCatalogo(estanteria);

        break;
      case "6":
        agregarAutoClass(estanteria);

        break;
      case "7":
        cargarPiloto();
        break;

      case "8":
        buscarPorModelo(estanteria);
        break;

      case "9":
        ordenar(estanteria)
        break;

      case "10":
        borrarLote(estanteria)
        break;

      case "11":
        break;

      case "12":
        break;

      case "0":
        console.log("salir");
        salirMenu = false;
      default:
        console.log("opcion no valida");
        break;
    }
  } while (salirMenu);
} else {
  console.log("Lola, pero no cumples con los requisitos para acceder");
}

//FUNCIONES

function pedirNombre() {
  let nombreIngresado = prompt("Ingrese su nombre");
  saludarAlumno(nombreIngresado);
}
function saludarAlumno(nombre) {
  console.log(`Hola ${nombre} bienvenido a mi codigo...`);
}

function cargarPiloto() {
  let conductorIngresado = prompt("Ingrese nombre completo del piloto");
  let vehiculoIngresado = prompt("Ingresar Vehiculo");
  let obsVehiculo = prompt("Observaciones de vehiculo");
  let categoriaIngresada = prompt("Ingresar CATEGORIA");
  let tipodCircuito = prompt("Ingresar circuito");
  console.log(`
    el conductor ${conductorIngresado} 
    manejara un ${vehiculoIngresado} 
    cuyas modificaciones son; ${obsVehiculo}
    participara en la categoria N° ${categoriaIngresada}
    en el circuito de ${tipodCircuito}
    `);
  const teamTeku = {
    conductor: conductorIngresado,
    auto: vehiculoIngresado,
    observaciones: obsVehiculo,
    categoria: categoriaIngresada,
    circuito: tipodCircuito,
  };
  console.log(teamTeku);
}


//NUEVO MENU 

function buscarPorMarca(mar) {
  let marcaBuscada = prompt("ingrese la marca y año correspondiente");
  let busqueda = mar.filter(
    (Lote) => Lote.marca.toLowerCase() == marcaBuscada.toLowerCase()
  );
  if (busqueda.length == 0) {
    console.log(`para ${marcaBuscada} no hay libros en stock `);
  } else {
    mostrarCatalogo(busqueda);
  }
}

//METODO FIND BUSCA HASTA ENCONTRAR COINCIDENCIA
function buscarPorModelo(array) {
  let modeloBuscado = prompt("ingrese el modelo que desea encontrar");
  let modeloEncontrado = array.find(
    (book) => book.modelo.toLowerCase() == modeloBuscado.toLowerCase()
  );
  if (modeloEncontrado == undefined) {
    console.log(`${modeloBuscado} no se encuentra en el stock`);
  } else {
    console.log(modeloEncontrado);
  }
}

function mostrarCatalogo(array) {
  console.log("Los vehiculos disponibles son:");
  for (let elemento of array) {
    console.log(elemento.id, elemento.marca, elemento.modelo, elemento.precio);
  }
}

function mostrarCatalogoForEach(array) {
  console.log("nuestro catalogo con foreach");
  array.forEach((libro) => {
    console.log(
      `${libro.id} - ${libro.titulo} del autor/a ${libro.autor} que vale ${
        libro.precio * 2
      }`
    );
  });
}

//CARGAR LIBROS
function agregarAutoClass(array) {
  let marca = prompt("ingrese marca");
  let modelo = prompt("ingrese modelo");
  let precio = prompt("ingrese precio");

  const loteNuevo = new Lote(marca, modelo, precio);
  loteNuevo.mostrarInfoLote();
  //agregarlo con funcion constructora
  const nuevoLote = new Lote(array.length + 1, marca, modelo, precio);
  console.log(nuevoLote);
  //pushearlo o sumarlo al array
  array.push(nuevoLote);
  //mostrarCatalogo(array)
  console.log(array);
}

function ordenarMenorMayor(array){
  const menorMayor = [].concat(array)
  menorMayor.sort((param1, param2) => param1.precio - param2.precio)
  mostrarCatalogo(menorMayor)
}

function ordenarMayorMenor(array){
  const mayorMenor = [].concat (array)
    mayorMenor.sort((a,b) => b.precio - a.precio)
    mostrarCatalogo(mayorMenor)
  }

function ordenarAlfaMar(array){
  const ordenadoAlfa = [].concat(array)
  ordenadoAlfa.sort((a,b) => {
    if (a.marca > b.marca){
      return 1
    }
    if (a.marca < b.marca){
      return -1
    }
    return 0
  })
  mostrarCatalogo(ordenadoAlfa)
}

function ordenar(array){
  let opcion = parseInt(prompt(`
  1 - Ordenar menor a mayor:
  2 - ordenar mayor a menor
  3 - Ordenar alfabeticamente por marca:`))
  switch(opcion){
    case 1:
      ordenarMenorMayor(array)
      break
      case 2:
        ordenarMayorMenor(array)
        break
        case 3:
          ordenarAlfaMar(array)
          break
          default:
            console.log(`${opcion} no es valido`)
            break
  }
}


function borrarLote(array){
  console.log (`a partir del catalogo ingresar id para eliminar:`)
  for(let elem of array){
    console.log(`${elem.id} - ${elem.modelo} del autor/a ${elem.marca}`)
  }
  let idEliminar = parseInt(prompt("ingrese el id para eliminar"))
  let arrayID = array.map(book => book.id)
  let indice = arrayID.indexOf(idEliminar)
  array.splice(indice,1)
  mostrarCatalogo(array) 
}

//FUNCIONES ANONIMAS

console.log("EsTo Si PoDeS vEr Si ErEs MeNoR");

const div = function (num1, num2) {
  return num1 / num2;
};

const mult = function (num1, num2) {
  return num1 * num2;
};

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(div(100, 4));
console.log(mult(100, 4));
console.log(sum(100, 4));

//METODO SHOT ordena de menor a mayor en el caso de numeros

estanteria.sort((a, b) => a.id - b.id);
console.log(estanteria);










