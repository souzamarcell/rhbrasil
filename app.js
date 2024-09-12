function pesquisar() {

  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // console.log(section)

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  // let campoPesquisa = document.getElementById("campo-pesquisa").value
  // console.log(campoPesquisa)

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados

  let resultados = ""
  let agenciaHR = ""
  let cidade = ""
  let estado = ""
  let site = ""
  let endereco = ""
  let email = ""
  let fixo = ""
  let celular = ""

  // Itera sobre cada dado da lista de dados
  for (let dado of agencias) {

    agenciaHR = dado.agenciaHR.toLowerCase()
    cidade = dado.cidade.toLowerCase()
    estado = dado.estado.toLowerCase()
    site = dado.site.toLowerCase()
    endereco = dado.endereco.toLowerCase()
    email = dado.email.toLowerCase()
    fixo = dado.fixo.toLowerCase()
    celular = dado.celular.toLowerCase()

    // se cidade includes campoPesquisa
    if (cidade.includes(campoPesquisa) || estado.includes(campoPesquisa) || site.includes(campoPesquisa) || agenciaHR.includes(campoPesquisa)) {

      // Remove hifens e outros caracteres não numéricos
      let celular = dado.celular.replace(/[^0-9]/g, '');
      let whatsappLink = `https://wa.me/55${celular}`;
      // console.log(whatsappLink)

      // Crie o link para o e-mail
      let emailLink = `mailto:${dado.email}`;

      console
      resultados += `
      <div class="item-resultado">
          <h2>
              <a href=${dado.site} target="_blank">${dado.agenciaHR} ${dado.cidade}/${dado.estado}</a>
          </h2>

          <p class="estado-meta">${dado.endereco} - Fixo: ${dado.fixo}</p>

          <p class="estado-meta2">
           <a class="item-email" href=${emailLink} target="_blank">
                ${dado.email}
            </a>
            <a class="item-whatsapp" href=${whatsappLink} target="_blank">
                  WhatsApp
            </a>
          </p>

          <a href=${dado.site} target="_blank">Mais informações</a>

      </div>
  `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui os resultados gerados à seção HTML
  // section.innerHTML = 'Marcell'
  section.innerHTML = resultados
}
