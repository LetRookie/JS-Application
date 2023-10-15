function attachEvents() {
    document.getElementById('refresh').addEventListener('click', loadMessages);
    document.getElementById('submit').addEventListener('click', onSubmit);


    loadMessages();
}

const authorInput = document.querySelector('[name=author]');
const contentInput = document.querySelector('[name=content]');
const list = document.getElementById('messages');


attachEvents();

async function onSubmit() {

    const author = authorInput.value;
    const content = contentInput.value;

    await createMessage({author, content });

    contentInput.value = '';
    list.value += '\n' + `${author}: ${content}`;

}

// load messages 
async function loadMessages() {

    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const messages = Object.values(data);

    list.value = messages.map(m => `${m.author}: ${m.content}`).join('\n');
}

//post messages
async function createMessage(message) {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
}