const formulario = document.querySelector("form");
const campoCep = document.querySelector("#cep");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaolocalizar = document.querySelector("#localizar-cep");
const menssagemstatus = document.querySelector("#status");
const campoTelefone = document.querySelector("#telefone");

/* Ativação das mascaras usanda jquery e jQuery Mask */
$(campoCep).mask("00000-000");
$(campoTelefone).mask("(00) 0000-0000");

/* ajax: técnica de comunicação assíncrona,grealmante usada com apis */
botaolocalizar.addEventListener("click", async function (event) {
    event.preventDefault();

    

    let cep = campoCep.value;
    let url =`https://viacep.com.br/ws/${cep}/json/`;

    /* Aceesando API viacep e obtendo dados do cep informado */

    //Etapa 1: acessar o viacep passando a url
    const resposta = await fetch(url);

    //Etapa 2: pegos os dados da resposta como objeto json
    const dados = await resposta.json();
    
    
    //Etapa 3: mostrar/lidar com dados
    if ("erro" in dados) {
        menssagemstatus.textContent ="CEP não encontrado!";
        menssagemstatus.style.color = "red";
    } else {
        menssagemstatus.textContent ="CEP encontrado!";
        menssagemstatus.style.color ="blue";
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;
    }
});

/* Programação Formspree usando ajax */

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Obrigado pela sua Inscrição!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! algo deu errado ao enviar seu formulario!"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! algo deu errado ao enviar seu formulario!"
      });
    }
    form.addEventListener("submit", handleSubmit)