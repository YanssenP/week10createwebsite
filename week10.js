//Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
//A Bootstrap styled table representing your choice of data.
//A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

let id = 0

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-Home V Away').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-Match-Date').value;

    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-Home V Away').value = '';
    document.getElementById('new-Match-Date').value = + '';
});
