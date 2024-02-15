$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});
function openModal() {
  document.getElementById("modal").classList.add("open");
  setTimeout(() => {
    document.querySelector(".modal").classList.add("visible");
  }, 3000);
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

// Asignar la función `openModal` al evento `click` del sobre
document.getElementById("envelope").addEventListener("click", openModal);

// Asignar la función `closeModal` al evento `click` del botón de cerrar
document.getElementById("close-modal").addEventListener("click", closeModal);
