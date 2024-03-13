// Datos de las consultas
let radiologia = [
    { hora: "11:00", especialista: "Ignacio Schulz", paciente: "Francisca Rojas", rut: "9878782-1", prevision: "Fonasa" },
    { hora: "11:30", especialista: "Federico Subercaseaux", paciente: "Pamela Estrada", rut: "15345241-3", prevision: "Isapre" },
    { hora: "15:00", especialista: "Fernando Wurthz", paciente: "Armando Luna", rut: "16445345-9", prevision: "Isapre" },
    { hora: "15:30", especialista: "Ana Maria Godoy", paciente: "Manuel Godoy", rut: "17666419-0", prevision: "Fonasa" },
    { hora: "16:00", especialista: "Patricia Suazo", paciente: "Ramon Ulloa", rut: "14989389-K", prevision: "Fonasa" }
];

let traumatologia = [
    { hora: "8:00", especialista: "Maria Paz Altuzarra", paciente: "Paula Sanchez", rut: "15554774-5", prevision: "Fonasa" },
    { hora: "10:00", especialista: "Raul Araya", paciente: "Angelica Navas", rut: "15444147-9", prevision: "Isapre" },
    { hora: "10:30", especialista: "Maria Arriagada", paciente: "Ana Klapp", rut: "17879423-9", prevision: "Isapre" },
    { hora: "11:00", especialista: "Alejandro Badilla", paciente: "Felipe Mardones", rut: "1547423-6", prevision: "Isapre" },
    { hora: "11:30", especialista: "Cecilia Budnik", paciente: "Diego Marre", rut: "16554741-K", prevision: "Fonasa" },
    { hora: "12:00", especialista: "Arturo Cavagnaro", paciente: "Cecilia Mendez", rut: "9747535-8", prevision: "Isapre" },
    { hora: "12:30", especialista: "Andres Kanacri", paciente: "Marcial Suazo", rut: "11254785-5", prevision: "Isapre" }
];

let dental = [
    { hora: "8:30", especialista: "Andrea Zuniga", paciente: "Marcela Retamal", rut: "11123425-6", prevision: "Isapre" },
    { hora: "11:00", especialista: "Maria Pia Zanartu", paciente: "Angel Munoz", rut: "9878789-2", prevision: "Isapre" },
    { hora: "11:30", especialista: "Scarlett Witting", paciente: "Mario Kast", rut: "7998789-5", prevision: "Fonasa" },
    { hora: "13:00", especialista: "Francisco Von Teuber", paciente: "Karin Fernandez", rut: "18887662-K", prevision: "Fonasa" },
    { hora: "13:30", especialista: "Eduardo Vinuela", paciente: "Hugo Sanchez", rut: "17665461-4", prevision: "Fonasa" },
    { hora: "14:00", especialista: "Raquel Villaseca", paciente: "Ana Sepulveda", rut: "14441281-0", prevision: "Isapre" }
];

// Función para mostrar la primera y última atención de un listado
function mostrarPrimeraUltimaAtencion(consultas, titulo) {
    let primeraAtencion = `${consultas[0].paciente} - ${consultas[0].prevision}`;
    let ultimaAtencion = `${consultas[consultas.length - 1].paciente} - ${consultas[consultas.length - 1].prevision}`;
    document.getElementById("consultas").innerHTML += `<h2>${titulo}</h2>`;
    document.getElementById("consultas").innerHTML += `Primera atención: ${primeraAtencion} | Última atención: ${ultimaAtencion}<br><br>`;
}

// Función para generar una tabla de consultas
function generarTablaConsultas(consultas) {
    let tablaHTML = `<table>
                    <thead>
                        <tr>
                        <th>Hora</th>
                        <th>Especialista</th>
                        <th>Paciente</th>
                        <th>Rut</th>
                        <th>Previsión</th>
                        </tr>
                    </thead>
                    <tbody>`;
    
    consultas.forEach(consulta => {
        tablaHTML += `<tr>
                        <td>${consulta.hora}</td>
                        <td>${consulta.especialista}</td>
                        <td>${consulta.paciente}</td>
                        <td>${consulta.rut}</td>
                        <td>${consulta.prevision}</td>
                    </tr>`;
    });
    
    tablaHTML += `</tbody></table>`;
    
    return tablaHTML;
}

// Llamadas a las funciones para mostrar los datos
mostrarPrimeraUltimaAtencion(radiologia, "Radiología");
document.getElementById("consultas").innerHTML += generarTablaConsultas(radiologia);

mostrarPrimeraUltimaAtencion(traumatologia, "Traumatología");
document.getElementById("consultas").innerHTML += generarTablaConsultas(traumatologia);

mostrarPrimeraUltimaAtencion(dental, "Dental");
document.getElementById("consultas").innerHTML += generarTablaConsultas(dental);
