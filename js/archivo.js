//LLAMAR FUNCIONES
pedirNombre();

// VALIDACION DE EDAD
let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
    console.log("Eres mayor, bienvenido a mi menu FJR")
    let salirMenu = true;
    do {
      let opcionMenu = prompt(`Ingrese una opcion numerica:
    1 - Ingresar notas para calcular promedio
    2 - Adivinanza
    3 - Cargar datos  
    4 - Ver datos 
    5 - Mostrar el precio del producto
    6 - Cargar Piloto
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
                "felicitaciones has ganado la respuesta es " + adivinanza
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
          let precioLibro = 1533;
          let autorLibro = "borges";
    
          if (autorLibro.toLowerCase() == "borges" && precioLibro > 750) {
            console.log("el libro si es de borges y vale mas de 750");
          } else {
            console.log("el libro no es de borges o no vale mas de 750");
          }
    
          break;
        case "5":
          let precio = 18;
    
          if (precio < 20) {
            alert("el precio es menor que 20");
          } else if (precio < 50) {
            alert("el precio es menor que 50");
          } else if (precio < 100) {
            alert(" el precio es menor que 100");
          } else {
            alert("el precio es mayor a 100");
          }
    
          break;
        case "6":
          cargarPiloto();
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
    `
  );
  const teamTeku = {
    conductor: conductorIngresado,
    auto: vehiculoIngresado,
    observaciones: obsVehiculo,
    categoria: categoriaIngresada,
    circuito: tipodCircuito,
  };
  console.log(teamTeku);
}

//FUNCIONES ANONIMAS

console.log("funciones anonimas");

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
