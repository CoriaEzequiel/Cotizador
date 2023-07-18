

function calcular_precio() {

  
    // Obtengo  valores de los inputs
    var color = document.getElementById("select-color").value;
    var largoCable = document.getElementById("select-capacidad").value;
    var cantidad = document.getElementById("cantidad").value;
  
    // Valido los valores ingresados
    if (color === "" || largoCable === "" || cantidad === "") {
      document.getElementById("result").innerHTML = "Por favor, complete correctamente los campos.";
      document.getElementById("result").classList.add("error");
      document.getElementById("result").style.display = "block";
      document.getElementById("result").style.backgroundColor = "red";
      return;
    }
    



  
    cantidad = parseInt(cantidad);
    if (isNaN(cantidad) || cantidad < 1|| cantidad > 10) {
      document.getElementById("result").innerHTML = "La cantidad debe ser un número entero mayor o igual que 1 y menor o igual a 10.";
      
      document.getElementById("result").classList.add("error");
      document.getElementById("result").style.display = "block";
      document.getElementById("result").style.backgroundColor = "green";
      return;
    }
  
    // Precio de lista:
    var precioLista = 0;
    if (largoCable === "25") {
      precioLista = 8762.5;
    } else if (largoCable === "21") {
      precioLista = 6954.5;
    } else if (largoCable === "20") {
      precioLista = 7945.2;
    }
  
    // Descuento:
        var descuento = 0;
    var descuento_especifico="";
    if (cantidad > 3 && cantidad <= 6) {
      descuento = precioLista * 0.2; 
      descuento_especifico="(20% off)";

    } else if (cantidad > 6) {
      descuento = precioLista * 0.3; 
      descuento_especifico="(30% off)";
    }
  
    // Precio final:
  var precioFinal = precioLista - descuento;

  // Resultado de la cotización:
  document.getElementById("result").innerHTML = "Precio de Lista: $" + precioLista.toFixed(2) + "<br>" +
                                                "Descuento: $" + descuento.toFixed(2) + " " + descuento_especifico + "<br><br>" +
                                                "Precio Final: $" + precioFinal.toFixed(2);
  document.getElementById("result").classList.remove("error");
  document.getElementById("result").style.display = "block";
  document.getElementById("result").style.backgroundColor = "green";
  }

  
function cambiar_imagen() {
  let color = document.getElementById("select-color");
    let descripcion_producto = document.getElementById("strDescrip-Prod")
    let imagen_producto = document.getElementById("productimage")

    switch (color.value) {
        case "azul":
            imagen_producto.src = "img/images/HEADSET_AZUL.webp"
            descripcion_producto.innerHTML = `<h3>Auriculares Gamer Pc Ps4 Luz Led Gaming Micrófono Headset Azul</h3> <br>
            <p><em>Descripción </em></p>  <br>
            <p>
                Es un auricular profesional para aficionados a los juegos. Las luces LED hacen que se vea genial por la
                noche y agrega otro nivel de entretenimiento al jugar videojuegos. Los cables son compatibles con
                casi todos los dispositivos que puedas imaginar. Cojín ligero y suave, te traerá una experiencia
                agradable.
                Las almohadillas para los oídos están hechas de cuero de PU con un tamaño grande que proporciona
                un buen rendimiento de reducción de ruido. El diseño liviano es más cómodo para usar durante
                mucho tiempo.
                Con un conector de 3,5 mm, es adecuado para PC, computadora portátil. Y con un cable adaptador
                adicional en el paquete, también se puede aplicar en PS4, Xbox One, PSP, teléfono, iPad, tableta, etc.
                Este auricular NO es un auricular USB, la interfaz USB solo se usa para la fuente de alimentación para
                Luz LED. 
            </p> <br>
            <p> <em>Características</em></p> <br>
            <ul>
                <li>Micrófono de alta definición</li>
                <li>Sonido estéreo envolvente de 360 grados</li>
                <li>Micrófono retráctil de 130°</li>
                <li>Diadema cómoda</li>
                <li>Contrabajo</li>
                <li>Control del volumen</li>
                <li>Luz Led</li>
                <li>Diseño espléndido</li>
            </ul>
            <p>Especificaciones</p>
            <ul>
                <li>Diámetro del altavoz: 40 mm</li>
                <li>Impedancia: 32 ohmios</li>
                <li>Sensibilidad: 102dB +/-3dB</li>
                <li>Respuesta de frecuencia: 20Hz-20KHZ</li>
                <li>Dimensión del micrófono: 6,0*5,0mm</li>
                <li>Directividad del micrófono: Omnidireccional</li>
                <li>Enchufe: enchufes de 3,5 mm para micrófono y auriculares</li>
                <li>Longitud del cable: aprox. 2,2 metros</li>
                <li>Voltaje de funcionamiento del LED: DC5V 25%</li>
                <li>Interfaz de trabajo: USB + estéreo de 3,5 mm</li>
                <li>Unidad de controlador de 40 mm</li>
            </ul>`
            break;

        case "rojo":
            imagen_producto.src = "./img/images/HEADSET_ROJO.webp"
            descripcion_producto.innerHTML = `<h3>Auriculares Gamer Microfono Con Luz Led Para Ps4 Rojo</h3><br>
            <p><em>Descripción</em></p> <br>
            <p>
            ¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos
            para jugar cambia completamente tu experiencia en cada partida. Con los Huterspider AU408 no te
            perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores. <br>
            El formato perfecto para vos <br>
            El diseño head-set brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo
            tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.
            </p> <br>
            <p> <em>Especificaciones</em></p> <br>
            <ul>
  <li>Diámetro del altavoz: 40 mm</li>
  <li>Impedancia: 32 ohmios</li>
  <li>Sensibilidad: 102dB +/-3dB</li>
  <li>Respuesta de frecuencia: 20Hz-20KHZ</li>
  <li>Dimensión del micrófono: 6,0*5,0mm</li>
  <li>Directividad del micrófono: Omnidireccional</li>
  <li>Enchufe: enchufes de 3,5 mm para micrófono y auriculares</li>
  <li>Longitud del cable: aprox. 2,2 metros</li>
  <li>Voltaje de funcionamiento del LED: DC5V 25%</li>
  <li>Interfaz de trabajo: USB + estéreo de 3,5 mm</li>
  <li>Unidad de controlador de 40 mm</li>
</ul>`
            break;

        case "naranja":
            imagen_producto.src = "./img/images/HEADSET_NARANJA.jpg"
            descripcion_producto.innerHTML = `<h3>Auricular Gamer Constrictor AUC-3050RG</h3> <br>
                       
            
            <p><em>Especificaciones</em></p> <br>
            <ul>
                <li> Auricular para PS4 y PC</li>
                <li>Con micrófono incorporado</li>
                <li>Conector 3.5mm</li>
                <li>Largo de cable: 2.1 M±0.15</li>
            </ul> <br>
            
            <p> <em>Características</em></p> <br>
            <ul>
                <li> Marca Level Up</li>
                <li> Modelo Copperhead</li>
                <li>Tipo de auricular Pc / Juegos</li>
                <li>Formato de uso On Ear</li>
                <li> Micrófono incorporado Si</li>
                
            </ul>

            `

            
            break;

        case "verde":
            imagen_producto.src = "./img/images/HEADSET_VERDE.jpeg"
            
            descripcion_producto.innerHTML = `<h3>Auricular Gamer Constrictor AUC-3050RG</h3> <br>
            <p><em>Descripción </em></p>  <br>
            <p>
                Auricular vincha gamer. Parlante 50mm. Frecuencia de respuesta 20Hz - 20KHz. Impendancia 16 +-
                10%. Sensibilidad 112dB+-3dB. Luz RGB. Vincha 100% adaptable. Control de volumen. Microfono 
                flexible 4,0 x 1,5mm. Plug 3.5mm + USB. Largo del cable 2.2m. Dimensiones 195 x 117 x 225mm. Peso 
                366g. Incluye Adaptador de PC (con salida para microfono y otra para audio) + Bag de guardado 
                impermeable.
            </p> <br>
            
            <p><em>Especificaciones</em></p> <br>
            <ul>
                <li> Auricular para PS4 y PC</li>
                <li>Con micrófono incorporado</li>
                <li>Conector 3.5mm</li>
                <li>Largo de cable: 2.1 M±0.15</li>
            </ul>`
            break;

        default:
            break;
    }
}