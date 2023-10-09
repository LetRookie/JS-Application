const button = document.getElementById('btn');
button.addEventListener('click', showMessage);


function showMessage () {
    let message = document.getElementById('hiddenMsg');
    message.style.display = 'block';
}