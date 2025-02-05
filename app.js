// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

        function agregarNombre() {
            const input = document.getElementById("amigo");
            const nombre = input.value.trim();
            if (nombre === "") {
                alert("Por favor, ingresa un nombre válido.");
                return;
            }
            amigos.push(nombre);
            actualizarLista();
            input.value = "";
        }

        function actualizarLista() {
            const lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(nombre => {
                const li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("Agrega nombres antes de realizar el sorteo.");
                return;
            }
            const indice = Math.floor(Math.random() * amigos.length);
            document.getElementById("resultado").textContent = `El amigo secreto es: ${amigos[indice]}`;
        }