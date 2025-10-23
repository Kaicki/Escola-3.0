// ===== SCRIPT PARA BUSCAR DADOS DO GOOGLE SHEETS =====

// URL do Google Sheets (você vai criar e compartilhar como CSV/JSON)
const urlEventos = "https://docs.google.com/spreadsheets/d/1PTsAjKzSEM4HlGN-aDdm5vdv4V93zz30kQ_WVY5EO-g/edit?usp=drivesdk";
const urlProjetos = "https://docs.google.com/spreadsheets/d/1PTsAjKzSEM4HlGN-aDdm5vdv4V93zz30kQ_WVY5EO-g/edit?usp=drivesdk";

// Função para carregar eventos
async function carregarEventos() {
  try {
    const res = await fetch(urlEventos);
    const data = await res.json();
    const container = document.getElementById("cards-eventos");
    container.innerHTML = "";
    data.forEach(ev => {
      container.innerHTML += `
        <div class="card">
          <img src="${ev.imagem}" alt="${ev.titulo}">
          <h3>${ev.titulo}</h3>
          <p>${ev.descricao}</p>
        </div>
      `;
    });
  } catch (err) {
    console.error("Erro ao carregar eventos:", err);
  }
}

// Função para carregar projetos
async function carregarProjetos() {
  try {
    const res = await fetch(urlProjetos);
    const data = await res.json();
    const container = document.getElementById("cards-projetos");
    container.innerHTML = "";
    data.forEach(p => {
      container.innerHTML += `
        <div class="card">
          <img src="${p.imagem}" alt="${p.titulo}">
          <h3>${p.titulo}</h3>
          <p>${p.descricao}</p>
        </div>
      `;
    });
  } catch (err) {
    console.error("Erro ao carregar projetos:", err);
  }
}

// Carrega automaticamente
window.addEventListener("DOMContentLoaded", () => {
  if(document.getElementById("cards-eventos")) carregarEventos();
  if(document.getElementById("cards-projetos")) carregarProjetos();
});
