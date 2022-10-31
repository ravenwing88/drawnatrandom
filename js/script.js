let INPUTS = []; // not sure why the convention is to make arrays constant

let marker = 0;

document.getElementById("input").focus();

function addToArray() {
    let item = document.getElementById('input').value;

    let node = document.createElement('li');
    let textnode = document.createTextNode(item);
    node.appendChild(textnode);

    if (item != '') {
        INPUTS[marker] = item;
        console.log(INPUTS.length);
        document.getElementById('list').appendChild(node);
        marker += 1;
    }
    emptyField();
}

function randomizeArray() {
    let rand = Math.floor(Math.random() * INPUTS.length);
    let inputsLength = INPUTS.length - 1;
    if (INPUTS[inputsLength] != undefined) {
        alert(INPUTS[rand]);
        // clear array
        // for (let i = 0; i < marker; i++) {
        //     INPUTS[i] = undefined;
        // }
        INPUTS = []; // sometimes helpful to reset the array
        document.getElementById('list').innerHTML = '';
        marker = 0;
    }
    emptyField();
}

function emptyField() {
    document.getElementById('input').value = '';
    document.getElementById("input").focus();
}