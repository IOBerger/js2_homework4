'use strict';

function test(s, id) {
    let expr = '';
    if (id === 'name')
        expr = /\s*[а-яА-ЯёЁ]+\s*/g;
    else if (id === 'phone') {
        expr = /\s*\+7\s*\([0-9]{3}\)\s*[0-9]{3}\s*-\s*[0-9]{4}\s*/g;
    } else if (id === 'e-mail') {
        expr = /\s*^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$\s*/g;
    }
    return expr.test(s, '"');
}


function validate() {
    let elementsId = ['name', 'phone', 'e-mail'];
    let elements = [];
    elementsId.forEach((id, i) => {
        elements[i] = document.getElementById(id);
    });
    elements.forEach(elem => {
        elem.style.border = '1px solid gray';
    })
    elements.forEach(elem => {
        if (!test(elem.value, elem.id)) {
            elem.style.border = '2px solid red';
        }
        console.log('test ', elem.value, ' ', elem.id);
    })

    //  /./g;
    // let t = s.test(expr, '"');
    // console.log(s, expr, t);
}