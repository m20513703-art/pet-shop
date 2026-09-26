const app = document.getElementById("app");

const numeroWhatsApp = "5519981123401";

let carrinho =
JSON.parse(localStorage.getItem("thorCarrinho")) || [];

// ==================================================
// PRODUTOS
// ==================================================

const produtos = [
{
id: 1,
nome: "Ração para cães",
preco: 49.90,
descricao: "Alimentação para cães."
},
{
id: 2,
nome: "Ração para gatos",
preco: 44.90,
descricao: "Alimentação para gatos."
},
{
id: 3,
nome: "Brinquedo pet",
preco: 24.90,
descricao: "Brinquedo para diversão."
},
{
id: 4,
nome: "Coleira",
preco: 29.90,
descricao: "Coleira confortável."
},
{
id: 5,
nome: "Cama para pet",
preco: 89.90,
descricao: "Cama confortável."
},
{
id: 6,
nome: "Pote para alimentação",
preco: 19.90,
descricao: "Pote para água ou comida."
}
];

// ==================================================
// PÁGINAS
// ==================================================

const paginas = {

inicio: `

<section class="hero"><div class="hero-content">

    <small>🐾 BEM-VINDO AO THOR PET SHOP</small>

    <h1>
        Todo amor do mundo
        para o seu <span>pet!</span>
    </h1>

    <p>
        Cuidado, carinho e qualidade
        para cães e gatos em um só lugar.
    </p>

    <div class="botoes">

        <button
            class="botao"
            data-page="agendamento">
            📅 Agendar agora
        </button>

        <button
            class="botao botao-outline"
            onclick="abrirWhatsApp(
            'Olá! Gostaria de informações sobre o Thor Pet Shop.'
            )">
            📲 WhatsApp
        </button>

    </div>

</div>

<div class="hero-image">

    <img
        src="imagens/fachada.png"
        alt="Fachada do Thor Pet Shop">

</div>

</section><section class="section"><div class="titulo">

    <small>NOSSOS SERVIÇOS</small>

    <h2>
        Tudo para cuidar do seu melhor amigo
    </h2>

    <p>
        Serviços, produtos e atendimento veterinário.
    </p>

</div>


<div class="cards">

    ${cardServico(
        "🐶",
        "Serviços para cães",
        "Banho, tosa, escovação e cuidados.",
        "caes"
    )}

    ${cardServico(
        "🐱",
        "Serviços para gatos",
        "Cuidados especiais para felinos.",
        "gatos"
    )}

    ${cardServico(
        "✂️",
        "Banho e Tosa",
        "Banho, secagem, tosa e finalização.",
        "banho"
    )}

    ${cardServico(
        "🛁",
        "Higienização",
        "Unhas, ouvidos, patas e higiene.",
        "higienizacao"
    )}

    ${cardServico(
        "🩺",
        "Veterinário",
        "Dr. Thor e Dra. Mindy.",
        "veterinario"
    )}

    ${cardServico(
        "🛍️",
        "Produtos",
        "Produtos e acessórios para seu pet.",
        "produtos"
    )}

</div>

</section><section class="section dark"><div class="titulo">

    <small>🚨 ATENDIMENTO</small>

    <h2>
        Urgência veterinária 24 horas
    </h2>

    <p>
        Dr. Thor: 09h às 22h.
        Dra. Mindy: 22h às 09h.
    </p>

    <br>

    <button
        class="botao"
        onclick="ligar()">
        📞 Ligar
    </button>

</div>

</section>
`,caes: paginaServicos(
"🐶",
"Serviços para cães",
"Cuidados completos para seu cachorro."
),

gatos: paginaServicos(
"🐱",
"Serviços para gatos",
"Cuidados especiais para felinos."
),

banho: `

${tituloPagina(
"✂️",
"Banho e Tosa",
"Seu pet limpo, confortável e bem cuidado."
)}

<section class="section"><div class="cards">

    ${card("🛁","Banho","Higienização completa.")}

    ${card("💨","Secagem","Secagem cuidadosa.")}

    ${card("✂️","Tosa","Acabamento da pelagem.")}

    ${card("✨","Finalização","Escovação e cuidados finais.")}

</div>

<br>

<button
    class="botao"
    data-page="agendamento">
    📅 Agendar banho e tosa
</button>

</section>
`,higienizacao: `

${tituloPagina(
"🛁",
"Higienização",
"Cuidados de higiene para seu pet."
)}

<section class="section"><div class="cards">

    ${card(
        "💅",
        "Corte de unhas",
        "Unhas cuidadas e aparadas."
    )}

    ${card(
        "👂",
        "Limpeza de ouvidos",
        "Higiene e cuidado."
    )}

    ${card(
        "🦷",
        "Higiene bucal",
        "Cuidados para a saúde bucal."
    )}

    ${card(
        "🐾",
        "Patas",
        "Higiene e conforto."
    )}

</div>

</section>
`,veterinario: `

${tituloPagina(
"🩺",
"Atendimento Veterinário",
"Atendimento veterinário 24 horas."
)}

<section class="section"><div class="vets">

    <div class="vet-card">

        <h3>👨‍⚕️ Dr. Thor</h3>

        <p>
            Veterinário responsável.
        </p>

        <p>
            🕘 Plantão:
            <strong>09h às 22h</strong>
        </p>

    </div>


    <div class="vet-card">

        <h3>👩‍⚕️ Dra. Mindy</h3>

        <p>
            Veterinária responsável.
        </p>

        <p>
            🌙 Plantão:
            <strong>22h às 09h</strong>
        </p>

    </div>

</div>


<div class="urgencia">

    🚨 <strong>Urgência veterinária 24 horas.</strong>

    <br>

    O plantão é dividido entre
    Dr. Thor e Dra. Mindy.

</div>


<button
    class="botao"
    onclick="ligar()">
    📞 Ligar agora
</button>

</section>
`,produtos: `

${tituloPagina(
"🛍️",
"Produtos e Acessórios",
"Escolha seus produtos e adicione ao carrinho."
)}

<section class="section"><div class="cards">

    ${produtos.map(produto => `

        <div class="card">

            <div class="icone">
                🐾
            </div>

            <h3>
                ${produto.nome}
            </h3>

            <p>
                ${produto.descricao}
            </p>

            <strong class="produto-preco">
                ${formatarPreco(produto.preco)}
            </strong>

            <button
                class="botao"
                onclick="adicionarProduto(${produto.id})">
                🛒 Adicionar
            </button>

        </div>

    `).join("")}

</div>

</section>
`,agendamento: `

${tituloPagina(
"📅",
"Agendamento",
"Agende o atendimento do seu pet pelo WhatsApp."
)}

<section class="section"><form
    class="formulario"
    id="formAgendamento"><div class="form-grid">

    ${campo(
        "nome",
        "Nome do tutor",
        "text",
        "Seu nome"
    )}

    ${campo(
        "pet",
        "Nome do pet",
        "text",
        "Nome do pet"
    )}

</div>


<div class="form-grid">

    <div class="campo">

        <label>Espécie</label>

        <select id="especie" required>

            <option value="Cachorro">
                🐶 Cachorro
            </option>

            <option value="Gato">
                🐱 Gato
            </option>

        </select>

    </div>


    <div class="campo">

        <label>Serviço</label>

        <select id="servico" required>

            <option>Banho e Tosa</option>

            <option>Serviços para cães</option>

            <option>Serviços para gatos</option>

            <option>Higienização</option>

            <option>Consulta veterinária</option>

            <option>Outro atendimento</option>

        </select>

    </div>

</div>


<div class="form-grid">

    ${campo(
        "data",
        "Data",
        "date",
        ""
    )}

    ${campo(
        "horario",
        "Horário",
        "time",
        ""
    )}

</div>


<div class="busca-box">

    <h3>
        🚐 Busca e entrega do pet
    </h3>

    <p>
        Precisa que o Thor Pet Shop busque
        seu animal no endereço?
    </p>


    <div class="campo">

        <label>Precisa de busca?</label>

        <select id="precisaBusca">

            <option value="Não">
                Não, vou levar o pet
            </option>

            <option value="Sim">
                Sim, preciso que busquem
            </option>

        </select>

    </div>


    <div
        class="campo"
        id="campoEndereco"
        style="display:none;">

        <label>
            Endereço para buscar o pet
        </label>

        <textarea
            id="enderecoBusca"
            rows="3"
            placeholder="Rua, número, bairro e cidade">
        </textarea>

    </div>

</div>


<div class="campo">

    <label>Observações</label>

    <textarea
        id="observacoes"
        rows="5"
        placeholder="Alguma informação importante?">
    </textarea>

</div>


<button
    type="submit"
    class="botao">
    📲 Enviar agendamento pelo WhatsApp
</button>

</form></section>
`,equipe: `

${tituloPagina(
"👥",
"Nossa Equipe",
"Conheça a equipe do Thor Pet Shop."
)}

<section class="section"><div class="equipe-grid">

    ${funcionario(
        "👩",
        "Nina",
        "Banho e tosa"
    )}

    ${funcionario(
        "👨",
        "José",
        "Banho e tosa"
    )}

    ${funcionario(
        "👩",
        "Maria",
        "Banho e tosa"
    )}

    ${funcionario(
        "👨",
        "Teodoro",
        "Atendente de balcão"
    )}

    ${funcionario(
        "👨",
        "Joaquim",
        "Entregas a domicílio"
    )}

    ${funcionario(
        "👨",
        "Miguel",
        "Entrega de ração"
    )}

</div>

</section>
`,horarios: `

${tituloPagina(
"⏰",
"Horário de Funcionamento",
"Confira nossos horários."
)}

<section class="section"><div class="cards">

    ${card(
        "🏪",
        "Segunda a sexta",
        "09:00 às 18:00"
    )}

    ${card(
        "🏪",
        "Sábado",
        "09:00 às 13:00"
    )}

    ${card(
        "🩺",
        "Dr. Thor",
        "Plantão das 09:00 às 22:00"
    )}

    ${card(
        "🌙",
        "Dra. Mindy",
        "Plantão das 22:00 às 09:00"
    )}

    ${card(
        "🚨",
        "Urgência",
        "Atendimento veterinário 24 horas"
    )}

</div>

</section>
`,comoChegar: `

${tituloPagina(
"📍",
"Como chegar",
"Venha visitar o Thor Pet Shop."
)}

<section class="section"><div class="card">

    <h2>
        🐾 Thor Pet Shop
    </h2>

    <p>
        📍 Rua Guanabara, nº 26
    </p>

    <p>
        📞 (19) 98112-3401
    </p>

    <br>

    <button
        class="botao"
        onclick="abrirMapa()">
        🧭 Abrir no Google Maps
    </button>

    <br><br>

    <img
        src="imagens/fachada.png"
        alt="Fachada do Thor Pet Shop"
        style="
            width:100%;
            max-height:450px;
            object-fit:cover;
            border-radius:15px;
        ">

</div>

</section>
`};

// ==================================================
// FUNÇÕES VISUAIS
// ==================================================

function tituloPagina(icone, titulo, descricao) {

return `
    <section class="page-title">

        <small>${icone}</small>

        <h1>${titulo}</h1>

        <p>${descricao}</p>

    </section>
`;

}

function card(icone, titulo, texto) {

return `
    <div class="card">

        <div class="icone">${icone}</div>

        <h3>${titulo}</h3>

        <p>${texto}</p>

    </div>
`;

}

function cardServico(
icone,
titulo,
texto,
pagina
) {

return `
    <div class="card">

        <div class="icone">${icone}</div>

        <h3>${titulo}</h3>

        <p>${texto}</p>

        <a
            href="#"
            data-page="${pagina}">
            Ver detalhes →
        </a>

    </div>
`;

}

function paginaServicos(
icone,
titulo,
descricao
) {

return `

    ${tituloPagina(
        icone,
        titulo,
        descricao
    )}

    <section class="section">

        <div class="cards">

            ${card(
                "🛁",
                "Banho",
                "Higienização completa."
            )}

            ${card(
                "✂️",
                "Tosa",
                "Cuidado com a pelagem."
            )}

            ${card(
                "🐾",
                "Escovação",
                "Pelagem limpa e cuidada."
            )}

            ${card(
                "💅",
                "Unhas",
                "Corte e cuidado das unhas."
            )}

        </div>

        <br>

        <button
            class="botao"
            data-page="agendamento">
            📅 Agendar serviço
        </button>

    </section>
`;

}

function funcionario(
icone,
nome,
funcao
) {

return `
    <div class="funcionario">

        <h3>
            ${icone} ${nome}
        </h3>

        <p>
            ${funcao}
        </p>

    </div>
`;

}

function campo(
id,
label,
tipo,
placeholder
) {

return `
    <div class="campo">

        <label for="${id}">
            ${label}
        </label>

        <input
            id="${id}"
            type="${tipo}"
            placeholder="${placeholder}"
            required>

    </div>
`;

}

// ==================================================
// NAVEGAÇÃO
// ==================================================

function carregarPagina(nome) {

if (!paginas[nome]) {
    nome = "inicio";
}

app.innerHTML =
    `<div class="page">${paginas[nome]}</div>`;

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

atualizarEventos();

if (nome === "carrinho") {
    atualizarPaginaCarrinho();
}

}

function atualizarEventos() {

document.querySelectorAll("[data-page]")
    .forEach(elemento => {

        elemento.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                carregarPagina(
                    this.dataset.page
                );

                fecharMenu();

            }
        );

    });


const formulario =
    document.getElementById(
        "formAgendamento"
    );


if (formulario) {

    formulario.addEventListener(
        "submit",
        enviarAgendamento
    );

    const precisaBusca =
        document.getElementById(
            "precisaBusca"
        );

    const campoEndereco =
        document.getElementById(
            "campoEndereco"
        );


    precisaBusca.addEventListener(
        "change",
        function() {

            if (this.value === "Sim") {

                campoEndereco.style.display =
                    "block";

            } else {

                campoEndereco.style.display =
                    "none";

            }

        }
    );

}

}

// ==================================================
// AGENDAMENTO
// ==================================================

function enviarAgendamento(event) {

event.preventDefault();


const nome =
    document.getElementById("nome").value;

const pet =
    document.getElementById("pet").value;

const especie =
    document.getElementById("especie").value;

const servico =
    document.getElementById("servico").value;

const data =
    document.getElementById("data").value;

const horario =
    document.getElementById("horario").value;

const precisaBusca =
    document.getElementById(
        "precisaBusca"
    ).value;

const enderecoBusca =
    document.getElementById(
        "enderecoBusca"
    ).value;

const observacoes =
    document.getElementById(
        "observacoes"
    ).value;


const mensagem = `

🐾 THOR PET SHOP

📅 NOVO AGENDAMENTO

👤 Tutor: ${nome}

🐾 Pet: ${pet}

🐶🐱 Espécie: ${especie}

✂️ Serviço: ${servico}

📆 Data: ${data}

⏰ Horário: ${horario}

🚐 Busca do pet: ${precisaBusca}

🏠 Endereço da busca:
${enderecoBusca || "Não solicitado"}

📝 Observações:
${observacoes || "Nenhuma"}

Gostaria de confirmar este agendamento.
`;

abrirWhatsApp(mensagem);


setTimeout(() => {

    mostrarMensagem(
        "Daqui a pouco um atendente te atenderá e te confirmará o agendamento. Muito obrigado pela preferência! 🐾"
    );

}, 500);

}

// ==================================================
// WHATSAPP
// ==================================================

function abrirWhatsApp(mensagem) {

const url =
    "https://wa.me/" +
    numeroWhatsApp +
    "?text=" +
    encodeURIComponent(mensagem);

window.open(
    url,
    "_blank"
);

}

// ==================================================
// CARRINHO
// ==================================================

function adicionarProduto(id) {

const produto =
    produtos.find(
        item => item.id === id
    );

if (!produto) return;


const existente =
    carrinho.find(
        item => item.id === id
    );


if (existente) {

    existente.quantidade++;

} else {

    carrinho.push({
        ...produto,
        quantidade: 1
    });

}


salvarCarrinho();

atualizarCarrinho();

mostrarMensagem(
    "Produto adicionado ao carrinho! 🛒"
);

}

function removerProduto(id) {

carrinho =
    carrinho.filter(
        item => item.id !== id
    );

salvarCarrinho();

atualizarCarrinho();

}

function alterarQuantidade(id, valor) {

const produto =
    carrinho.find(
        item => item.id === id
    );

if (!produto) return;


produto.quantidade += valor;


if (produto.quantidade <= 0) {

    removerProduto(id);

    return;
}


salvarCarrinho();

atualizarCarrinho();

}

function salvarCarrinho() {

localStorage.setItem(
    "thorCarrinho",
    JSON.stringify(carrinho)
);

}

function totalCarrinho() {

return carrinho.reduce(
    (total, produto) =>
        total +
        produto.preco *
        produto.quantidade,
    0
);

}

function quantidadeTotal() {

return carrinho.reduce(
    (total, produto) =>
        total + produto.quantidade,
    0
);

}

function formatarPreco(valor) {

return valor.toLocaleString(
    "pt-BR",
    {
        style: "currency",
        currency: "BRL"
    }
);

}

function atualizarCarrinho() {

const quantidade =
    document.getElementById(
        "quantidadeCarrinho"
    );

if (quantidade) {

    quantidade.textContent =
        quantidadeTotal();

}


const total =
    document.getElementById(
        "totalCarrinho"
    );

if (total) {

    total.textContent =
        formatarPreco(
            totalCarrinho()
        );

}


atualizarListaCarrinho();

}

function atualizarListaCarrinho() {

const lista =
    document.getElementById(
        "listaCarrinho"
    );

if (!lista) return;


if (carrinho.length === 0) {

    lista.innerHTML =
        "<p>🛒 Seu carrinho está vazio.</p>";

    return;
}


lista.innerHTML =
    carrinho.map(produto => `

        <div class="item-carrinho">

            <div>

                <strong>
                    ${produto.nome}
                </strong>

                <small>
                    ${formatarPreco(
                        produto.preco
                    )}
                </small>

            </div>


            <div class="controle">

                <button
                    onclick="alterarQuantidade(
                        ${produto.id}, -1
                    )">
                    −
                </button>

                <span>
                    ${produto.quantidade}
                </span>

                <button
                    onclick="alterarQuantidade(
                        ${produto.id}, 1
                    )">
                    +
                </button>

            </div>


            <button
                class="remover"
                onclick="removerProduto(
                    ${produto.id}
                )">
                🗑️
            </button>

        </div>

    `).join("");

}

// ==================================================
// FINALIZAR COMPRA
// ==================================================

function finalizarCompra() {

if (carrinho.length === 0) {

    alert(
        "Seu carrinho está vazio."
    );

    return;
}


let mensagem =
    "🐾 *THOR PET SHOP*\n\n";

mensagem +=
    "🛒 *PEDIDO*\n\n";


carrinho.forEach(produto => {

    mensagem +=
        `• ${produto.nome}\n`;

    mensagem +=
        `Quantidade: ${produto.quantidade}\n`;

    mensagem +=
        `Valor: ${formatarPreco(
            produto.preco *
            produto.quantidade
        )}\n\n`;

});


mensagem +=
    `💰 Total: ${formatarPreco(
        totalCarrinho()
    )}`;


abrirWhatsApp(mensagem);

}

// ==================================================
// CARRINHO LATERAL
// ==================================================

document
.getElementById("abrirCarrinho")
.addEventListener(
"click",
() => {

        atualizarCarrinho();

        document
            .getElementById("cartOverlay")
            .classList.add("aberto");

    }
);

document
.getElementById("fecharCarrinho")
.addEventListener(
"click",
() => {

        document
            .getElementById("cartOverlay")
            .classList.remove("aberto");

    }
);

document
.getElementById("finalizarCompra")
.addEventListener(
"click",
finalizarCompra
);

// ==================================================
// MENU MOBILE
// ==================================================

const menuButton =
document.getElementById("menuButton");

const menu =
document.getElementById("menu");

menuButton.addEventListener(
"click",
() => {

    menu.classList.toggle(
        "menu-aberto"
    );

}

);

function fecharMenu() {

menu.classList.remove(
    "menu-aberto"
);

}

// ==================================================
// MAPA
// ==================================================

function abrirMapa() {

const endereco =
    encodeURIComponent(
        "Rua Guanabara, 26"
    );

window.open(
    "https://www.google.com/maps/search/?api=1&query=" +
    endereco,
    "_blank"
);

}

// ==================================================
// TELEFONE
// ==================================================

function ligar() {

window.location.href =
    "tel:+5519981123401";

}

// ==================================================
// MENSAGEM DO SITE
// ==================================================

function mostrarMensagem(texto) {

const elemento =
    document.createElement("div");

elemento.className =
    "mensagem-site";

elemento.textContent =
    texto;

document.body.appendChild(
    elemento
);


setTimeout(() => {

    elemento.classList.add(
        "mostrar"
    );

}, 50);


setTimeout(() => {

    elemento.classList.remove(
        "mostrar"
    );

    setTimeout(() => {
        elemento.remove();
    }, 300);

}, 4000);

}

// ==================================================
// INICIALIZAÇÃO
// ==================================================

document.getElementById("ano")
.textContent =
new Date().getFullYear();

carregarPagina("inicio");

atualizarCarrinho();