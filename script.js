// Modal script

const abrirModal = document.querySelectorAll(".open-modal").forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = item.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.showModal();
  });
});

const closeBtn = document.querySelectorAll(".close-modal").forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = item.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.close();
  });
});

// validação de form

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const form = document.querySelector(".form");
const name = document.querySelector("#nome");
const email = document.querySelector("#email");
const message = document.querySelector("#mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var valid = false;

  if (name.value.trim() == "") {
    name.classList.add("invalido");
  } else {
    name.classList.remove("invalido");
  }

  if (!validarEmail(email.value)) {
    email.classList.add("invalido");
  } else {
    email.classList.remove("invalido");
    valid = true;
  }

  if (message.value.trim() == "") {
    message.classList.add("invalido");
  } else {
    message.classList.remove("invalido");
  }

  if (valid) {
    alert("Formulário enviado com sucesso!");
    form.reset();
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
});

// validação de email em tempo real
document.getElementById("email").addEventListener("input", function () {
  if (validarEmail(this.value)) {
    this.classList.remove("invalido");
    this.classList.add("valido");
  } else {
    this.classList.remove("valido");
    this.classList.add("invalido");
  }
});

// menu responsivo
const menuButton = document.querySelector(".menu-icon");
const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu a");

// Evento de clique em cada item do menu, que fecha o menu
// quando um item é selecionado.
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    // Remove a classe "active" do menu para fechá-lo
    menu.classList.remove("active");
  });
});

// Evento que altera a classe "active" do menu quando o botão de menu é clicado
// Isso faz com que o menu seja exibido ou ocultado.
menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
