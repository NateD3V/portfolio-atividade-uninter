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

  if (name.value.trim() == "") {
    name.classList.add("invalido");
  } else {
    name.classList.remove("invalido");
  }

  if (!validarEmail(email.value)) {
    email.classList.add("invalido");
  } else {
    email.classList.remove("invalido");
  }

  if (message.value.trim() == "") {
    message.classList.add("invalido");
  } else {
    message.classList.remove("invalido");
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
