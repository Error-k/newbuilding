const form = document.getElementById("new__partners_form")
const formInputs = document.querySelectorAll(".new__partners_form-input")
const inputName = document.getElementById("new__partners_form-input-name")
const inputPhone = document.getElementById("new__partners_form-input-phone")

const submitForm = (ev) => {
    ev.preventDefault()

    const nameValue = inputName.value
    const phoneValue = inputPhone.value
    const errorValidation = Array.from(formInputs).filter(input => input.value === '')

    formInputs.forEach(input => {
        if (input.value === '') input.classList.add("errorValidation")
        else input.classList.remove("errorValidation")
    })

    if (errorValidation.length !== 0) return false

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: nameValue,
            phone: phoneValue,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(() => alert("Ваша заявка успешно отправлена! В ближайшее время ожидайте звонка от нас"))

    form.reset()
}

form.onsubmit = (ev) => submitForm(ev)