fetch("../header.html")
  .then(response => response.text())
  .then(data => {
    // Carregando o header no DOM
    document.getElementById("header").innerHTML = data; 

    // Tornando o menu hamburguer clicável
    const hamburguerIcon = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu');

    hamburguerIcon.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    // Aplicando nav-selected no link correto a partir da URL
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link").forEach(link => {
      const linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("nav-link-selected");
      } else {
        link.classList.remove("nav-link-selected");
      }
    });
  });
