// TODO APP CODE

let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date(); //without passing any argument will be the current date
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${id + 1}`;
    row.insertCell(1).innerHTML = document.getElementById('new-task').value;
    row.insertCell(2).innerHTML = document.getElementById('new-experience').value;
    row.insertCell(3).innerHTML = `${createdDate.getMonth() + 1}.${createdDate.getDate()}.${createdDate.getFullYear()}`;
    // row.insertCell(2).innerHTML = `${createdDate.getFullYear()}.${createdDate.getMonth() + 1}.${createdDate.getDate()}`;
    // row.insertCell(4).innerHTML = document.getElementById('arrival-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = ' ';
    document.getElementById('new-experience').value = ' ';
    // console.log(table);
});

// document.getElementById('add').addEventListener('click', () => {
//     let createdDate = new Date(); //without passing any argument will be the current date
//     let table = document.getElementById('list');
//     let row = table.insertRow(1);
//     row.setAttribute('id', `item-${id}`);
//     row.insertCell(0).innerHTML = document.getElementById('new-task').value;
//     row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
//     row.insertCell(2).innerHTML = document.getElementById('arrival-date').value;
//     row.insertCell(3).innerHTML = document.getElementById('departure-date').value;
//     let actions = row.insertCell(4);
//     actions.appendChild(createDeleteButton(id++));
//     document.getElementById('new-task').value = ' ';
// });

function createDeleteButton(id) {
    let btn = document.createElement('button'); // creating the button
    btn.className = 'btn btn-light';  // attributes (make it look nice)
    btn.id = id;                        
    btn.innerHTML = 'did that!';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}



// let number = document.getElementById('list');

// for(i = 0, i > this.number, i++){
//     return 
// }
