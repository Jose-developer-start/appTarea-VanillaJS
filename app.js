//variables
const frmTraea = document.querySelector('#frmTarea');
const tareasContainer = document.querySelector('#tareasContainer')
let arrayTareas = [
    {
        id:1,
        nombreTarea: 'Tarea 1',
        prioidad: 1
    }
];

async function api() {
    const api = await fetch('https://rickandmortyapi.com/api/character')
}
//Listeners
Listeners();
function Listeners(){
   frmTraea.addEventListener('submit',capturarDatos)
   document.addEventListener('DOMContentLoaded', ()=>{
    const arrayls = JSON.parse(localStorage.getItem('Tareas'))
    arrayTareas=[...arrayls]
    generarHtml(arrayTareas)
   })
}

//funciones
function capturarDatos(e){
    
    e.preventDefault();
    limpiarHtml()
    const nombreTarea = frmTraea.tarea.value;
    const prioidad = frmTraea.prioTarea.value;
    console.log(nombreTarea);
    console.log(prioidad);
    const ClaseTarea = new Tarea(Date.now(), nombreTarea, prioidad);

    objTarea = {
        id: ClaseTarea.id,
        nombreTarea: ClaseTarea.nombreTarea,
        prioidad: ClaseTarea.prioridad
    }
    arrayTareas = [...arrayTareas, objTarea]

    localStorage.setItem('Tareas', JSON.stringify(arrayTareas))

    generarHtml(arrayTareas)

    frmTraea.tarea.value = ''
    frmTraea.prioTarea.value = '0'

    


}


function generarHtml(Tareas) {
    return Tareas.forEach(tareas=>{
        const card = document.createElement('div');
        const carbody = document.createElement('div');
        const parrafo = document.createElement('p');

        //hijo del carbody
        parrafo.textContent = tareas.nombreTarea

        //hijo del card
        carbody.classList.add('card-body')
        carbody.appendChild(parrafo)
        console.log(carbody)

        //padre
        card.classList.add('card', 'mt-2')
        card.appendChild(carbody);

        //contenedor
        tareasContainer.appendChild(card)



    })


}


function limpiarHtml() {
    while (tareasContainer.firstChild) {
        tareasContainer.removeChild(tareasContainer.firstChild)
    }
}