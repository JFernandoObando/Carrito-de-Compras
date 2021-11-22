        var select = document.getElementById('itemss');
        select.addEventListener('change', cargarContenido);
        const DOMitems = document.querySelector('#items');

        //Obtiene el index del item seleccionado
        function getIndex() {
          var selectedOption = select.options[select.selectedIndex];
          return selectedOption.value;
        }
        //Obtiene el número de archivo dependiendo del index
        function getArchivos() {
          if (getIndex() == 1) {
            return "assets/datos.txt"
          }
          if (getIndex() == 2) {
            return "assets/datos1.txt"
          }
          if (getIndex() == 3) {
            return "assets/datos2.txt"
          }
        }

        function cargarContenido() {
          // Obtener la instancia del objeto XMLHttpRequest
          if (window.XMLHttpRequest) {
            peticion_http = new XMLHttpRequest();
          } else if (window.ActiveXObject) {
            peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
          }

          // Asignación de la función callback
          peticion_http.onreadystatechange = muestraContenido;
          // Configurar la petición
          peticion_http.open('GET', getArchivos(), true);

          // Enviar la petición al servidor
          peticion_http.send(null);
          // Definición de la función callback (procesar)
          function muestraContenido() {
            if (peticion_http.readyState == 4) {
              if (peticion_http.status == 200) {
                var mi_contenedor = document.getElementById("contenedor");


                if (getIndex() == 1) {
                  mi_contenedor.innerHTML = peticion_http.responseText;

                }
                if (getIndex() == 2) {
                  mi_contenedor.innerHTML = peticion_http.responseText;
                }
                if (getIndex() == 3) {
                  mi_contenedor.innerHTML = peticion_http.responseText;
                }

              }
            }

          }
        }



        function addRow(tabla, nombre, precio) {
          var nom = document.getElementById(nombre).innerHTML;
          var pr = document.getElementById(precio).innerHTML;
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', 'btn-outline-danger');
          miNodoBoton.textContent = '-';
          miNodoBoton.addEventListener('click', eliminarFila);
          var tableRef = document.getElementById(tabla);
          var newRow = tableRef.insertRow(0);
          var newCell = newRow.insertCell(0);
          var newCell2 = newRow.insertCell(1);
          var newCell3 = newRow.insertCell(2);
          var newText = document.createTextNode(nom);
          var newText2 = document.createTextNode(pr);
          newCell.appendChild(newText);
          newCell2.appendChild(newText2);
          newCell3.appendChild(miNodoBoton);

        }

        function eliminarFila() {
          var table = document.getElementById("tabla");
          var rowCount = table.rows.length;


          if (rowCount <= 0)
            alert('No se puede eliminar el encabezado');
          else
            console.log(rowCount)
          table.deleteRow(rowCount - 1);
        }