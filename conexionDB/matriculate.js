const url = "http://52.20.202.32:3001/api/contactanos/";
let resultados = '';
const formArticulo = document.querySelector("form");
const userped = document.getElementById("NOMCON");
const emausped = document.getElementById("CORRCON");
const celusped = document.getElementById("CELCON");
const fooped = document.getElementById("ASAUCON");
const msgped = document.getElementById("DESCON");
var opcion = '';
 
btnCrear.addEventListener('click', () => {
   console.log("Acción de listar activada");
   opcion = 'crear';
});
 
formArticulo.addEventListener('submit',
   (e) => {
    e.preventDefault();
    if (opcion == 'crear') {
        if (NOMCON.value == "" || CORRCON.value == "" || CELCON.value == "" || ASAUCON.value == "" || DESCON.value == "") {
           alert("Valores incorrectos 🤨")
            return false;
        } else {
            console.log("Todos los campos están completos");
          
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'content-Type':'application/json'
                    },
                    body: JSON.stringify(
                        {
                           NOMCON: NOMCON.value,
                           CORRCON: CORRCON.value,
                           CELCON: CELCON.value,
                           ASAUCON: ASAUCON.value,
                           DESCON: DESCON.value
                        }
                    )
                }
            )
            .then(
                response => response.json(),
                alert("Asunto resgistrado con exito 🙂")
            )
            .then(
                response => location.reload()
            );
        }
    } else if(opcion == 'editar'){
        console.log("Activado el ");
    }
   }
);
