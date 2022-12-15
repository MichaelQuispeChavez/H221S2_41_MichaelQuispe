
    $('.items-container').magnificPopup({
        delegate: 'a', // selector de elementos secundarios, al hacer clic en él se abrirá una ventana emergente
        type: 'image',
        // otras opciones

        gallery: {
            enabled: true, //establecer en verdadero para habilitar la galería

            preload: [0, 2], // lea sobre esta opción en la siguiente sección de carga diferida

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // marcado de un botón de flecha

            tPrev: 'Previous (Left arrow key)', // título para el botón izquierdo
            tNext: 'Next (Right arrow key)', // título para el botón derecho
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' //marcado de contador
        },

        mainClass: 'mfp-with-zoom', //esta clase es para la animación CSS a continuación

        zoom: {
            enabled: true, //Por defecto es falso, así que no olvides habilitarlo

            duration: 300, // duración del efecto, en milisegundos
            easing: 'ease-in-out', // Función de facilitación de transición CSS

            // La función "abridor" debe devolver el elemento desde el cual se ampliará la ventana emergente
             // y a qué ventana emergente se reducirá
             // Por defecto busca una etiqueta de imagen:
            opener: function (openerElement) {
            // openerElement es el elemento en el que se inicializó la ventana emergente, en este caso su etiqueta <a>
              // no necesita agregar la opción "abridor" si este código coincide con sus necesidades, es uno predeterminado.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
