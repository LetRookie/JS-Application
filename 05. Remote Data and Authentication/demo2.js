const list = document.getElementById('list');
const input = document.getElementById('product');

document.getElementById('refreshBtn').addEventListener('click', getData);
document.getElementById('createBtn').addEventListener('click', postData);


async function getData() {
    const response = await fetch('http://localhost:3030/jsonstore/demo');
    const data = await response.json();

    
    list.replaceChildren(...Object.values(data).map(createListItems));
}

async function postData() {
    const product = input.value;

    const data = {
        name: product
    }

    const response = await fetch('http://localhost:3030/jsonstore/demo', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const responseData = await response.json();
    list.appendChild(createListItems(responseData));
    input.value = '';
}

async function deleteData(id, element){
    const response = await fetch('http://localhost:3030/jsonstore/demo/' + id, {
        method: 'delete',
    });

    console.log(await response.json());
    element.remove()

}

function createListItems(record) {
    const element = document.createElement('li');
    element.textContent = record.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    element.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => deleteData(record._id, element));

    return element;
}