async function onClick() {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    console.log(data);
}