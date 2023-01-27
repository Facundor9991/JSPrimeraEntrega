
alert(`Bienvenidos al Banco Comercial
<Donde sus sueños se hacen realidad>`)

let saludo = prompt(`Para una mejor atencion por favor Ingrese su Nombre`);

let salirMenu = true
do{
    let opciones = prompt(`Bienvenido ${saludo}, en que podemos ayudarlo. Por favor ingrese el NUMERO de la opcion correcta.
    1- Carga de datos Personales.
    2- Solicitud de Prestamos Personales.
    3- Solicitud de Tarjetas de Credito
    0- Salir `);

    switch(opciones){
        case '1':
           
            let nombre = prompt('Ingrese su Nombre y Apellido')
            let  edad = parseInt(prompt('Ingrese su edad'))
            let empresa = prompt('Ingrese el Nombre de su empresa')
            let sueldo = parseInt(prompt('Ingrese su sueldo'))
            let domicilio = prompt('Ingrese su domicilio')
            let seguir = prompt(`Desea usted Volver al menu principal
            1- Si
            2- No`).toLowerCase();
            if(seguir == 'si'){
                 opciones = prompt(`Bienvenido ${saludo}, en que podemos ayudarlo. Por favor ingrese el NUMERO de la opcion correcta.
                     1- Carga de datos Personales.
                     2- Solicitud de Prestamos Personales.
                     3- Solicitud de Tarjetas de Credito
                     0- Salir `);
            }
            break
        case '2':
            let prestamo = prompt("Usted desea sacar un Prestamo Personal con nuestro Banco? si - no").toLowerCase();
            if(prestamo == 'si'){
                let prestamo1 = parseInt(prompt('Ingresa el monto que usted desea'))
                 let cuotas = parseInt(prompt('En cuantas cuotas desea devolver el  Credito( 6 / 12 / 24)'))
                    if(cuotas == '6'){
                       let cuota6 =  ((prestamo1 * 50)/100 + prestamo1)/cuotas; 
                       alert(`Su prestamos de ${prestamo1} requerido en ${cuotas} cuotas . Sera devuelto en:  ${cuotas} cuotas de $ ${cuota6}`);     
                    }else if(cuotas == '12'){
                        let cuota12 =  ((prestamo1 * 100)/100 + prestamo1)/cuotas;  
                       alert(`Su prestamos de ${prestamo1} requerido en ${cuotas} cuotas . Sera devuelto en:  ${cuotas} cuotas de $ ${cuota12}`);  
                    }else {
                        let cuota24 =  ((prestamo1 * 150)/100 + prestamo1)/cuotas;  
                       alert(`Su prestamos de ${prestamo1} requerido en ${cuotas} cuotas . Sera devuelto en:  ${cuotas} cuotas de $ ${cuota24}`);   
                    }    
            }else {
                alert('Gracias por Contactarse con su banco')
            }
            break
        case '3':
            let tarjeta = prompt(`Que tarjeta desea sacar por intermedio del banco
            1- MASTERCARD.
            2- VISA`).toLowerCase();
            if(tarjeta == 'mastercard'){
                if(sueldo >= 10000){
                    alert(`De acuerdo a los datos ingresados sobre su sueldo, En los proximos dias estara recibiendo en su domicilio : ${domicilio} su tarjeta MASTERCARD `);
                } else{
                    alert('Usted no cumple con los requisitos para tener esta tarjeta. Intente nuevamente mas adelante')
                }
            }else if (tarjeta == 'visa'){
                if(sueldo >= 30000){
                    alert(`De acuerdo a los datos ingresados sobre su sueldo, En los proximos dias estara recibiendo en su domicilio : ${domicilio} su tarjeta VISA `);
                } else{
                    alert('Usted no cumple con los requisitos para tener esta tarjeta. Intente nuevamente mas adelante')
                }
            }
    }
   
}
while(!salirMenu);
    
alert('Gracias por Confiar en su Banco');

// class persona {
//     constructor(nombre, edad,empresa,sueldo,domicilio)
// }