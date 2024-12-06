const getGallery = () => {
    return $.ajax({
        url: "./backend/gallery.php",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(r) {
            console.log("Success!");
            console.log(r)
        }
    })
}
let domGallery = document.getElementById("gallery")
getGallery().done( function(r) { 

    domGallery.innerHTML = "";
    r.forEach(element => {
      console.log("GOT: "+element)
      // Saco la extension y cambio los guiones por espacios
      let alt = element.split(".")[0].replace("-", " ")
      let href = "./img/gallery/" + element
      let image = document.createElement("img")
      image.setAttribute("src", href)
      image.setAttribute("alt", alt)
      image.setAttribute("onclick", "openImage(\""+href+"\")")

      console.log(image)
      domGallery.appendChild(image)
      
    });
})

const openImage = (src) => {
    Swal.fire({
        imageUrl: src
        // imageHeight: 1500,
        // imageAlt: "A tall image"
      });
}

