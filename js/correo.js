let url = "https://script.google.com/macros/s/AKfycbzqez_D5LrJjuC9CoO3cLhGh4iQns0Eyh109UoZMyxajssuLwyvITK6HoGDuCizk1PLJg/exec";
let form = document.querySelector("form");
let submit = document.querySelector(".submit");
let message = document.querySelector(".message");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submit.value = "submitting.."
    fetch(url, {
            method: "POST",
            body: new FormData(form)
        })
        .then(res => res.text())
        .then(data => {
            message.innerHTML = data;
            submit.value = "submit"

        })
        .catch(err => {
            message.innerHTML = err;
            submit.value = "submit"
        })
})