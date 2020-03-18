// EVENTO CLICK
const btnSaludar = document.getElementById('btnSaludar');
btnSaludar.addEventListener('click', () =>{
    alert('Hola mi amigo')
});
// console.log(btnSaludar)
// elemento de Doble Click
btnSaludar.addEventListener('dblclick', function(){
    console.log('Saludo del del Doble Click btn')
});

// ocular o mostrar contenido por un btn
const btnHideShow = document.getElementById('btnHideShow');
const titleCard = document.getElementById('titleCard');
const bodyCard = document.getElementById('bodyCard');
btnHideShow.addEventListener('click', (e) => {
    console.log(e)
    if(titleCard.style.display != 'none'){
        titleCard.style.display = 'none';
        bodyCard.style.display = 'none'
        // btnHideShow.textContent = 'Mostrar'
        e.target.textContent = 'Mostrar Contenido'
        // this.textContent = 'Mostar datos'
    }else{
        titleCard.style.display = 'block';
        bodyCard.style.display = 'block'
        // btnHideShow.textContent = 'Ocultar'
        e.target.textContent = 'Ocultar Contenido'
        // this.textContent = 'Ocultar datos'
    }
});

btnHideShow.addEventListener('mouseenter', (e) =>{
    // btnHideShow.className = 'btn btn-danger';
    e.target.className = 'btn btn-danger';
});

btnHideShow.addEventListener('mouseout', (e) =>{
    // btnHideShow.className = 'btn btn-danger';
    e.target.className = 'btn btn-primary';
});

bodyCard.addEventListener('mouseenter', function (e){
    let contTarjet = bodyCard.textContent;
    bodyCard.innerHTML = '<strong>'+contTarjet+'</strong>'
});
bodyCard.addEventListener('mouseout', function (e){
    let contTarjet = bodyCard.textContent;
    bodyCard.innerHTML = contTarjet
});

// window.setTimeout();
// setTimeout(()=>{
//     console.log('Me he activado despues de 3seg')
// }, 3000);

// setTimeout((arg1, arg2, arg3)=>{
//     console.log(arg1)
//     console.log(arg2)
//     console.log(arg3)
// }, 1000, 'Argumento 1','Argumento 2', 1000);


// eventos del teclado
// const input = document.getElementById('titleNewCouse');
// input.addEventListener('keydown', (e) => {
//     console.log(e)
//     console.log('Tecla presionado', e.key, ' Codigo ',e.keyCode);
// });

// EVENTO SUBMIT    
const form = document.getElementById('create-course');
// console.log(form);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let titulo = document.getElementById('titleNewCouse').value;
    let description = document.getElementById('descriptionNewCourse').value;
    create_card(titulo,description)
    // console.log(titulo,' ',description);
});


// EVENTOS QUE CAMBIAN DE VALOR APLICABLE PARA INPUTS CHECKBOX Y MAS
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=>{
    console.log('Cambio de valor')
});


// PROPAGACIION DE EVENTOS CON EL EVENTO BUBBLING
// MODIFICAR EL DOM
// CREACION DE OBJETOS

const divRow = document.querySelector('.jumbotron >.row');
// console.log(divRow);
// funcion recomendada habitualmente que no usa el innerHTML
let divCol = null;
function create_card(title,description){
    divCol = document.createElement('div');
    divCol.className = 'col-sm-6 col-md-4';

    let divThumbnail = document.createElement('div');
    divThumbnail.className = 'thumbnail';

    let divCaption = document.createElement('div');
    divCaption.className = 'caption';

    let h3Title = document.createElement('h3');
    h3Title.textContent = title;

    let p1 = document.createElement('p');
    p1.textContent = description;

    let p2 = document.createElement('p');    
    let a = document.createElement('a');
    a.className = 'btn btn-danger';
    a.textContent = 'Eliminar'
    p2.addEventListener('click', delete_card);

    p2.appendChild(a);
    divCaption.appendChild(h3Title);
    divCaption.appendChild(p1);
    divCaption.appendChild(p2);
    divThumbnail.appendChild(divCaption);
    divCol.appendChild(divThumbnail);
    divRow.appendChild(divCol);
}

// funcion que usa el innerHTML pero no es la mas recomendada
function create_card_by_innerHTML(title,description){
    let newHtml = `
    <div class="col-sm-6 col-md-4">\                
        <div class="thumbnail">\
            <div class="caption">\
                <h3 id="title_card">
                    ${title}
                </h3>\
                <p id="description_card"> 
                    ${description}
                </p>\
                <p>
                    <a 
                    href="#" 
                    class="btn btn-danger"
                    >
                    Accion
                    </a>\
                </p>\            
           </div>\
        </div>\
    </div>`;
    divRow.innerHTML += newHtml;
}

function delete_card(e){
    let ancestronuevo = get_ancestor(e.target,4)
    // elemento padre (elemento hijo)
    divRow.removeChild(ancestronuevo)
}
function get_ancestor(ancestro, level){
    if (level == 0) {
        return ancestro;
    }
    level--;
    return get_ancestor(ancestro.parentElement,level);
}