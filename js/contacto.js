const cleanFields = () => {
    console.log("cleanuing...")
    document.getElementById("inputName").value = ""
    document.getElementById("inputLastName").value = ""
    document.getElementById("inputEmail").value = ""
    document.getElementById("inputPhone").value = ""
    document.getElementById("inputMessage").value = ""
}

const cleanWarnings = () => {
    document.getElementById("name-warning").innerHTML = ""
    document.getElementById("last-name-warning").innerHTML = ""
    document.getElementById("email-warning").innerHTML = ""
    document.getElementById("phone-warning").innerHTML = ""
    document.getElementById("message-warning").innerHTML = ""
}

const checkFields = () => {
    passChecks = true
    if(document.getElementById("inputName").value == ""){
        document.getElementById("name-warning").innerHTML = "Nombre inválido"
        passChecks = false
    }
    if(document.getElementById("inputLastName").value == ""){
        document.getElementById("last-name-warning").innerHTML = "Apellido inválido"
        passChecks = false
    }
    if (!/^(\w|\d|-|_|\.)+@(\w|\d)+\.(\w){2,4}$/.test(document.getElementById("inputEmail").value)) {
        document.getElementById("email-warning").innerHTML = "Mail inválido"
        passChecks = false
    }
    if(!/^(\d){10,}/.test(document.getElementById("inputPhone").value)){
        document.getElementById("phone-warning").innerHTML = "Teléfono inváido (al menos 10 dígitos)"
        passChecks = false
    }
    if (document.getElementById("inputMessage").value.length < 10 ) {
        document.getElementById("message-warning").innerHTML = "Debe escribir al menos 10 caracteres"
        passChecks =false
    }

    return passChecks
    
}
let sendForm = document.getElementById("enviar-formulario")

sendForm.addEventListener("click", (e) => {
    e.preventDefault()
    cleanWarnings()
    if (checkFields()){
        Swal.fire({
            text: "Enviado!",
            icon: "success"
        });
        cleanFields()
    }
})