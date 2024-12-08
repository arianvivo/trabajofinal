const cleanFields = () => {
    console.log("cleanuing...")
    document.getElementById("inputName").value = ""
    document.getElementById("inputLastName").value = ""
    document.getElementById("inputEmail").value = ""
    document.getElementById("inputPhone").value = ""
    document.getElementById("inputMessage").value = ""
}

let sendForm = document.getElementById("enviar-formulario")

sendForm.addEventListener("click", (e) => {
    e.preventDefault()
    cleanFields()
    Swal.fire({
        text: "Enviado!",
        icon: "success"
      });
})