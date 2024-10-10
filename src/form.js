var form = document.querySelector('.form')

// [**INFO**] Show Message on Form Submission (session.html, contact.html)
function showAlert(h1, message) {
    let html = `
    <div class="alert-box">
        <div class="alert-heading">
            <h1>${h1}</h1>
            <svg class="close-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        </div>
        <p>${message}</p>
    </div>
    `
    let messageDiv = document.createElement('div')
    messageDiv.classList.add('alert-wrapper')
    messageDiv.innerHTML = html;
    document.body.appendChild(messageDiv)

    let closeBtn = document.querySelector('.close-alert')
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(messageDiv)
        form.reset()
    })
}

// [**INFO**] Form Submission (session.html, contact.html)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // [EDIT: Change apiUrl to backend url]
    let apiUrl = 'http://127.0.0.1:8080'
    let formData = {}

    for (let input of form.elements) {
        if (input.type != 'submit') {
            formData[input.name] = input.value
        }      
    }

    fetch(apiUrl + form.getAttribute('action'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return {h1: "Something Went Wrong", message: ""}
        }
    }).then((response) => {
        showAlert(response.h1, response.message)
    })
})