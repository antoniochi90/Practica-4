//aca hace la peticion get para mostrar los datos
function funFetchData() {
    return fetch('http://localhost/practica4/api/index.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}