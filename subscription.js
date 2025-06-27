document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const inputs = form.querySelectorAll("input");
  const titleInput = document.getElementById("tituloInput");
  const title = document.getElementById("form-title");
  const modal = document.getElementById("modal");
  const modalMensaje = document.getElementById("modal-mensaje");
  const cerrarModalBtn = document.getElementById("cerrarModal");

  if (!modal || !modalMensaje || !cerrarModalBtn) {
    console.error("Elementos del modal no encontrados en el DOM.");
    return;
  }

  cerrarModalBtn.addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  const guardado = localStorage.getItem("suscripcionDatos");
  if (guardado) {
    const datosGuardados = JSON.parse(guardado);
    inputs.forEach((input) => {
      if (datosGuardados[input.name]) {
        input.value = datosGuardados[input.name];
      }
    });
  }

  inputs.forEach((input) => {
    const errorSpan = document.createElement("span");
    errorSpan.style.color = "red";
    errorSpan.style.display = "none";
    input.insertAdjacentElement("afterend", errorSpan);
  });

  function validarCampo(id, valor) {
    switch (id) {
      case "name":
        if (valor.length < 7) return "Debe tener al menos 7 caracteres.";
        if (!valor.includes(" ")) return "Debe contener al menos un espacio.";
        return "";
      case "email":
        if (!valor.includes("@") || !valor.includes("."))
          return "Debe tener un formato de email válido.";
        return "";
      case "contraseña":
        if (valor.length < 8) return "Debe tener al menos 8 caracteres.";
        let tieneLetra = false,
          tieneNumero = false;
        for (let c of valor) {
          if (isNaN(c)) tieneLetra = true;
          else tieneNumero = true;
        }
        if (!tieneLetra || !tieneNumero) return "Debe tener letras y números.";
        return "";
      case "edad":
        const edad = parseInt(valor);
        if (isNaN(edad) || edad < 18)
          return "Debe ser un número entero mayor o igual a 18.";
        return "";
      case "telefono":
        if (valor.length < 7) return "Debe tener al menos 7 dígitos.";
        if (!/^\d+$/.test(valor)) return "Solo se permiten números.";
        return "";
      case "direccion":
        if (valor.length < 5) return "Debe tener al menos 5 caracteres.";
        if (!/[a-zA-Z]/.test(valor) || !/[0-9]/.test(valor))
          return "Debe contener letras y números.";
        if (!valor.includes(" ")) return "Debe contener al menos un espacio.";
        return "";
      case "ciudad":
        return valor.length < 3 ? "Debe tener al menos 3 caracteres." : "";
      case "codigoPostal":
        return valor.length < 3 ? "Debe tener al menos 3 caracteres." : "";
      case "dni":
        if (valor.length < 7 || valor.length > 8)
          return "Debe tener 7 u 8 dígitos.";
        if (!/^\d+$/.test(valor)) return "Solo se permiten números.";
        return "";
      default:
        return "";
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      const errorMsg = validarCampo(input.id, input.value);
      const span = input.nextElementSibling;
      if (errorMsg) {
        span.textContent = errorMsg;
        span.style.display = "block";
      }
    });

    input.addEventListener("focus", () => {
      const span = input.nextElementSibling;
      span.textContent = "";
      span.style.display = "none";
    });
  });

  titleInput.addEventListener("input", () => {
    title.textContent = titleInput.value || "Formulario de Suscripción";
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let hayErrores = false;
  let datos = {};

  inputs.forEach((input) => {
    const errorMsg = validarCampo(input.id, input.value);
    const span = input.nextElementSibling;

    if (errorMsg) {
      span.textContent = errorMsg;
      span.style.display = "block";
      hayErrores = true;
    } else {
      datos[input.name] = input.value;
    }
  });

  if (hayErrores) {
    mostrarModal("Hay errores en el formulario. Revisá los campos.");
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("suscripcionDatos", JSON.stringify(datos));

      const mensaje = `
        <strong>¡Suscripción exitosa!</strong><br><br>
        <strong>Nombre:</strong> ${datos.name}<br>
        <strong>Ciudad:</strong> ${datos.dni}<br>
        <strong>Email:</strong> ${datos.email}<br>
        <strong>Ciudad:</strong> ${datos.contraseña}<br>
        <strong>Ciudad:</strong> ${datos.edad}<br>
        <strong>Ciudad:</strong> ${datos.telefono}<br>
        <strong>Ciudad:</strong> ${datos.ciudad}<br>
        <strong>Ciudad:</strong> ${datos.codigoPostal}<br>
        <strong>Ciudad:</strong> ${datos.direccion}<br>
      `;

      mostrarModal(mensaje);
      form.reset();
    })
    .catch((error) => {
      mostrarModal(`<strong>Error al enviar los datos:</strong><br>${error.message}`);
    });
});

function mostrarModal(mensaje) {
  modalMensaje.innerHTML = mensaje; 
  modal.classList.remove("oculto");
}
});
