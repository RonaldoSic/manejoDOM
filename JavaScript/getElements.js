// +++++++++++++++++++++++++ OBTENER ELEMENTOS +++++++++++++++++++++++++
//OBTENER ELEMENTOS POR ID
const getById = (thisElement) =>{
    const myElement = document.getElementById(thisElement);
    return myElement;
}
//funcion para actualizar el contenido de un elemento por innerHTML
function updateContent(element, content){
    element.innerHTML = content;
}
// updateContent(getById('title'),'nade que mostrar');
// updateContent(getById('description'),'Descrpcion de los cursos en linea')

// OBTENER ELEMENTOS POR NOMBRE DE LA CLASE
const getByClass = (thisElement)=> {
    const items = document.getElementsByClassName(thisElement);
    return items;
}
const showElementbyClass = () => {
    let items = getByClass('list-group-item');
    for (let i = 0; i<items.length; i++) {
        let elements = items[i];5
        console.log(elements);   
     }
}
// showElementbyClass();

// OBTENER NOMBRES POR ETIQUETAS HTML
const tags = document.getElementsByTagName('li');
// console.log(tags);
// for (let index = 0; index < tags.length; index++) {
//     let newTags = tags[index];
//     console.log(newTags);

// }

// OBTENER ELELMENTOS DE CSS METODO 1
const getbyQuerycss = (cssRule) => {
    const element = document.querySelector(cssRule);
    return element;
}
// console.log(getbyQuerycss('#title'))
// console.log(getbyQuerycss('.list-group-item'))
// console.log(getbyQuerycss('p'))
// console.log(getbyQuerycss('ul.list-group >li'))

// OBTENER ELEMENTOS DE CSS METODO 2
const getAllCss = (cssRule) => {
    const element = document.querySelectorAll(cssRule);
    return element;
}

const bgColorPar = () => {
    const tagsSelected = getAllCss('li:nth-child(odd)');
    for(let i=0; i<tagsSelected.length; i++){
        let element = tagsSelected[i];
        element.style.background = '#cacaca';
    }
}

const bgColorInPar = () => {
    const tagsSelected = getAllCss('li:nth-child(even)');
    for(let i=0; i<tagsSelected.length; i++){
        let element = tagsSelected[i];
        element.style.background = '#9a9a9a';
    }
}

// bgColorInPar();
// bgColorPar();

// ELEMENTOS HIJOS
let ulElement = getbyQuerycss('.list-group');

// console.log(ulElement.childElementCount);
// console.log(ulElement.children);
// for (let index = 0; index < ulElement.children.length; index++) {
//     console.log(ulElement.children[index]);    
// }
// Accediendo a los elementod directamente con su indice
// console.log(ulElement.children[2]);
// console.log(ulElement.firstElementChild.innerHTML = 'Nuevo curso');
// console.log(ulElement.lastElementChild);

// ELEMENTOS HERMANOS
    // ELEMENTO PADRES
    const elemetLi = getbyQuerycss('ul.list-group > li');
    // console.log(elemetLi.parentElement); // Elemento padre
    // console.log(elemetLi.parentElement.parentElement); // Elemento abuelo
    // HERMANDOS
    // console.log(elemetLi.nextElementSibling);     
    // console.log(elemetLi.nextElementSibling.nextElementSibling);  

    const lastElelemt = document.getElementById('lastCourse');
    // console.log(lastElelemt.previousElementSibling);
// NODOS

const elementNodo = document.getElementById("firstCourse");
// console.log(elementNodo.childElementCount);
// console.log(elementNodo.childNodes.length);
// METODOS ABREBIADOS PARA HACER LA REFERENCIA EN HTML

//+++++++++++++++++++++++++ ATRIBUTOS +++++++++++++++++++++++++
// INNERHTML
const elementP = document.getElementById('description');
// console.log(elementP.innerHTML)
console.log(elementP.textContent)