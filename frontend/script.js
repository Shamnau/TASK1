function getMessage() {
    fetch("http://localhost:8000/api/")
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").innerText = data.message;
        })
        .catch(error => console.log(error));
}
