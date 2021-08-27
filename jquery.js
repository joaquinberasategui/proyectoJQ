
const darkMode = () => {
    $("body").css("background-color", "black")
    $("h2").css("color", "white")
    $("b").css("color", "white")
    $("h1").css("color", "white")
    $("nav").css("background-color", "black")

    localStorage.setItem("modo", "oscuro")

}

$("#dark").click(darkMode)

const funMode = () => {
    $("body").css("background-color", "pink")
    $("h2").css("color", "orange")
    $("b").css("color", "blue")
    $("h1").css("color", "red")
    $("nav").css("background-color", "lightblue")

    localStorage.setItem("modo", "divertido")
}

$("#fun").click(funMode)

const normal = () => {
    $("body").css("background-color", "rgb(148, 241, 229)")
    $("nav").css("background-color", "rgb(39, 9, 173)")
    $("h1").css("color", "black")
    $("h2").css("color", "blue")
    $("b").css("color", "blue")
    localStorage.setItem("modo", "normal")
}

$("#normal").click(normal)


const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
$("body").prepend('<button id="btn1">COTIZACION DOLAR</button>');
$("#btn1").click(() => { 
    $.get(URLGET, function (resultado, estado) {
          if(estado=== "success"){
           

            resultado.forEach(element =>{

                $("#dolar").append(
                    `
                    <div class="col-12 bg-dark text-white text-center">
                    <h2>${element.casa.nombre}</h2>
                    <p>${element.casa.compra}</p>
                    <p>${element.casa.venta}</p>
                    </div>
                    `)

            })
        }
    })
});
