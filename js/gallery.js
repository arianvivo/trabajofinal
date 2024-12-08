const getGallery = () => {
    return $.ajax({
        url: "./backend/gallery.php",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(r) {
            console.log("Success!");
        }
    })
}

let domGallery = document.getElementById("gallery")

getGallery().done( function(r) { 
    domGallery.innerHTML = "";
    r.forEach(element => {
        // Saco la extension y cambio los guiones por espacios
        let alt = element.split(".")[0].replace("-", " ")
        let href = "./img/gallery/" + element
        let image = document.createElement("img")
        image.setAttribute("src", href)
        image.setAttribute("alt", alt)
        image.setAttribute("onclick", "openImage(\""+href+"\")")
        domGallery.appendChild(image)
    });
})

const openImage = (src) => {
    Swal.fire({
        imageUrl: src,
        height: "90%",
        width: "auto"
    });
}

