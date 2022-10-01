
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

function calcularFecha() {
    //Obtener los valores de los inputs
    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
    console.log({ dayInput, monthInput, yearInput });
    console.log("ʕ•ᴥ•ʔっ")

    let message = "";
    // Mostrar el resultado en el HTML
    const resultElement = document.getElementById('result');

    // Validar rango de días y meses
    if(dayInput <= 0 || dayInput > 31 || monthInput <= 0 || monthInput > 12) {

        message = "El día ingresado no existe";
        resultElement.innerText= `${message}`;

    } else {

        //Generar una fecha
        const date = new Date(yearInput, monthInput - 1, dayInput);
        const dayIndex = date.getDay();
        console.log("La fecha a calcular es: " + date);
        console.log(date.getDay());
        const dayLabel = diasSemana[dayIndex];
        
        if(date.getDay() == 0 || date.getDay() == 6) {
            message = "No es día laboral"
        } else {
            message = "Es día laboral";
        }

        resultElement.innerText= `${dayLabel}, ${message}`;
    }

    console.log(resultElement);
}