document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const inputs = form.querySelectorAll("input");
  const titleInput = document.getElementById("tituloInput");
  const title = document.getElementById("form-title");

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
        for (let c of valor) {
          if (c < "0" || c > "9") return "Solo se permiten números.";
        }
        return "";

      case "direccion":
        if (valor.length < 5) return "Debe tener al menos 5 caracteres.";
        let tieneL = false,
          tieneN = false;
        for (let c of valor) {
          if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z")) tieneL = true;
          if (c >= "0" && c <= "9") tieneN = true;
        }
        if (!tieneL || !tieneN) return "Debe contener letras y números.";
        if (!valor.includes(" ")) return "Debe contener al menos un espacio.";
        return "";

      case "ciudad":
        return valor.length < 3 ? "Debe tener al menos 3 caracteres." : "";

      case "codigoPostal":
        return valor.length < 3 ? "Debe tener al menos 3 caracteres." : "";

      case "dni":
        if (valor.length < 7 || valor.length > 8)
          return "Debe tener 7 u 8 dígitos.";
        for (let c of valor) {
          if (c < "0" || c > "9") return "Solo se permiten números.";
        }
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
    let datos = "";

    inputs.forEach((input) => {
      const errorMsg = validarCampo(input.id, input.value);
      const span = input.nextElementSibling;

      if (errorMsg) {
        span.textContent = errorMsg;
        span.style.display = "block";
        hayErrores = true;
      } else {
        datos += `${input.previousElementSibling.textContent}: ${input.value}\n`;
      }
    });

    if (hayErrores) {
      alert("Hay errores en el formulario. Revisá los campos.");
    } else {
      alert("Datos enviados correctamente:\n\n" + datos);
      form.reset();
    }
  });
});
