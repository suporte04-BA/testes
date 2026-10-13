import { useState } from "trilium:preact";

export default function() {

    const STORAGE_KEY = "dashboard_ti_demandas_v1";
    const PERSONALIZACAO_KEY = "dashboard_ti_personalizacao_v1";

    const demandasPadrao = [
        {
            id: 1,
            titulo: "BI Pacote c/ Tablets",
            responsavel: "Bruno",
            prioridade: "Alta",
            status: "Em andamento",
            icone: "📊",
            observacao: "",
            progresso: 45
        },
        {
            id: 2,
            titulo: "MKT — Sincronização dos produtos no site",
            responsavel: "Bruno",
            prioridade: "Alta",
            status: "Em andamento",
            icone: "🌐",
            observacao: "",
            progresso: 55
        },
        {
            id: 3,
            titulo: "Rotina de Garantia",
            responsavel: "Zaquel",
            prioridade: "Média",
            status: "Em andamento",
            icone: "🛠️",
            observacao: "",
            progresso: 60
        },
        {
            id: 4,
            titulo: "Rotina de Abastecimento",
            responsavel: "Zaquel",
            prioridade: "Média",
            status: "Em andamento",
            icone: "📦",
            observacao: "",
            progresso: 40
        },
        {
            id: 5,
            titulo: "Troca do WIFI no CD — criação de nova rede",
            responsavel: "Bruno",
            prioridade: "Alta",
            status: "Em andamento",
            icone: "📡",
            observacao: "",
            progresso: 50
        },
        {
            id: 6,
            titulo: "Compra notebook Aline MKT",
            responsavel: "Bruno",
            prioridade: "Média",
            status: "Em andamento",
            icone: "💻",
            observacao: "",
            progresso: 30
        },
        {
            id: 7,
            titulo: "Compra notebook Lucas, Josué e Bruno",
            responsavel: "Bruno",
            prioridade: "Alta",
            status: "Em andamento",
            icone: "💻",
            observacao: "",
            progresso: 25
        },
        {
            id: 8,
            titulo: "Cashback para o aniversário da B.A",
            responsavel: "Zaquel",
            prioridade: "Baixa",
            status: "Pendente",
            icone: "🎁",
            observacao: "",
            progresso: 0
        },
        {
            id: 9,
            titulo: "Promoção de Combo, compre 1 ganhe outro, Aline MKT",
            responsavel: "Lucas",
            prioridade: "Média",
            status: "Pendente",
            icone: "🎁",
            observacao: "",
            progresso: 10
        },
        {
            id: 10,
            titulo: "Compra de 30 capas para coletor, modelo Sunmit Importado",
            responsavel: "Zaquel",
            prioridade: "Média",
            status: "Pendente",
            icone: "📱",
            observacao: "",
            progresso: 0
        },
        {
            id: 11,
            titulo: "Ponto novo Expedição CD e DEP Cabos CD",
            responsavel: "Lucas",
            prioridade: "Média",
            status: "Pendente",
            icone: "📍",
            observacao: "",
            progresso: 20
        },
        {
            id: 12,
            titulo: "Ponto novo Gaiola DEP Cabos",
            responsavel: "Zaquel",
            prioridade: "Média",
            status: "Pendente",
            icone: "📍",
            observacao: "",
            progresso: 15
        },
        {
            id: 13,
            titulo: "Lançamentos de chamados no HelpDesk",
            responsavel: "Sérgio",
            prioridade: "Alta",
            status: "Pendente",
            icone: "🎫",
            observacao: "",
            progresso: 0
        },
        {
            id: 14,
            titulo: "Troca de PC's do CD Coroado",
            responsavel: "Lucas",
            prioridade: "Alta",
            status: "Pendente",
            icone: "💻",
            observacao: "",
            progresso: 20
        },
        {
            id: 15,
            titulo: "Responder e-mail da Suely Quadros",
            responsavel: "Bruno",
            prioridade: "Baixa",
            status: "Pendente",
            icone: "✉️",
            observacao: "",
            progresso: 0
        },
        {
            id: 16,
            titulo: "Troca de Disco do Servidor",
            responsavel: "Bruno",
            prioridade: "Alta",
            status: "Pendente",
            icone: "🖥️",
            observacao: "",
            progresso: 10
        },
        {
            id: 17,
            titulo: "Troca de posição relógio de Ponto CD",
            responsavel: "Lucas",
            prioridade: "Média",
            status: "Pendente",
            icone: "🕐",
            observacao: "",
            progresso: 15
        },
        {
            id: 18,
            titulo: "Reimpressão de pedidos com as localizações na 001, direitos de acesso",
            responsavel: "Lucas",
            prioridade: "Média",
            status: "Pendente",
            icone: "🖨️",
            observacao: "",
            progresso: 35
        },
        {
            id: 19,
            titulo: "Resolver problema na inclusão de crédito de cliente usuário Elbert",
            responsavel: "Zaquel",
            prioridade: "Alta",
            status: "Pendente",
            icone: "💳",
            observacao: "",
            progresso: 40
        },
        {
            id: 20,
            titulo: "Limpeza e organização do Rack CD Coroado",
            responsavel: "Lucas",
            prioridade: "Média",
            status: "Pendente",
            icone: "🔧",
            observacao: "",
            progresso: 5
        }
    ];

    const responsaveis = [
        "Sérgio",
        "Bruno",
        "Zaquel",
        "Lucas",
        "Josué"
    ];

    const fontes = [
        {
            nome: "Arial",
            valor: "Arial, Helvetica, sans-serif"
        },
        {
            nome: "Segoe UI",
            valor: "'Segoe UI', Arial, sans-serif"
        },
        {
            nome: "Roboto",
            valor: "Roboto, Arial, sans-serif"
        },
        {
            nome: "Poppins",
            valor: "Poppins, Arial, sans-serif"
        },
        {
            nome: "Montserrat",
            valor: "Montserrat, Arial, sans-serif"
        },
        {
            nome: "Inter",
            valor: "Inter, Arial, sans-serif"
        },
        {
            nome: "Open Sans",
            valor: "'Open Sans', Arial, sans-serif"
        },
        {
            nome: "Lato",
            valor: "Lato, Arial, sans-serif"
        },
        {
            nome: "Nunito",
            valor: "Nunito, Arial, sans-serif"
        },
        {
            nome: "Ubuntu",
            valor: "Ubuntu, Arial, sans-serif"
        }
    ];

    const fundos = [
        {
            nome: "Azul atual",
            valor: "azul"
        },
        {
            nome: "Azul tecnológico",
            valor: "azul-tech"
        },
        {
            nome: "Preto profissional",
            valor: "preto"
        },
        {
            nome: "Grafite",
            valor: "grafite"
        },
        {
            nome: "Azul oceano",
            valor: "oceano"
        },
        {
            nome: "Roxo tecnológico",
            valor: "roxo"
        },
        {
            nome: "Verde tecnológico",
            valor: "verde"
        },
        {
            nome: "Vermelho escuro",
            valor: "vermelho"
        },
        {
            nome: "Degradê moderno",
            valor: "degrade"
        },
        {
            nome: "Glass",
            valor: "glass"
        }
    ];

    const icones = [
        "📊","🌐","🛠️","📦","📡","💻","🎁","📱","📍","🎫",
        "🖥️","✉️","🕐","🖨️","💳","🔧","⚙️","🔒","🔑","📁",
        "📋","📝","📌","🚨","⚠️","✅","❌","🔄","💡","📞",
        "📧","🛒","💰","🏢","🏠","🗂️","🖱️","⌨️","📺","🔌",
        "🔋","💾","🧰","🧹","🚚","🛡️","🔍","📈","📉","📅",
        "⏰","👤","👥","🎯","🚀","⭐","🔥","💬","📣","📢",
        "☎️","🧾","💵","💲","🏷️","🔔","🧪","🧩","🗄️","🪛",
        "🧑‍💻","👨‍💻","👩‍💻","📲","🔐","🗝️","📂","📄"
    ];

    function corrigirIds(lista) {
        const idsUsados = new Set();

        return lista.map((demanda, index) => {
            let id = demanda.id;

            if (
                id === undefined ||
                id === null ||
                id === ""
            ) {
                id = "demanda-" + index;
            } else {
                id = String(id);
            }

            if (idsUsados.has(id)) {
                id =
                    "demanda-" +
                    index +
                    "-" +
                    Date.now();
            }

            idsUsados.add(id);

            const progressoNumero = Number(demanda.progresso);

            return {
                ...demanda,
                id: id,
                progresso: Number.isFinite(progressoNumero)
                    ? Math.min(100, Math.max(0, progressoNumero))
                    : 0
            };
        });
    }

    const [demandas, setDemandas] = useState(() => {
        try {
            const salvo =
                localStorage.getItem(
                    STORAGE_KEY
                );

            if (salvo) {
                const dados =
                    JSON.parse(salvo);

                if (Array.isArray(dados)) {
                    const corrigidas =
                        corrigirIds(dados);

                    localStorage.setItem(
                        STORAGE_KEY,
                        JSON.stringify(corrigidas)
                    );

                    return corrigidas;
                }
            }
        } catch (erro) {
            console.log(
                "Erro ao carregar demandas:",
                erro
            );
        }

        return corrigirIds(
            demandasPadrao
        );
    });

    const [personalizacao, setPersonalizacao] =
        useState(() => {
            const padrao = {};

            responsaveis.forEach(nome => {
                padrao[nome] = {
                    fonte: "Arial, Helvetica, sans-serif",
                    fundo: "azul"
                };
            });

            try {
                const salvo =
                    localStorage.getItem(
                        PERSONALIZACAO_KEY
                    );

                if (salvo) {
                    const dados =
                        JSON.parse(salvo);

                    return {
                        ...padrao,
                        ...dados
                    };
                }
            } catch (erro) {
                console.log(
                    "Erro ao carregar personalização:",
                    erro
                );
            }

            return padrao;
        });

    const [responsavelPersonalizacao, setResponsavelPersonalizacao] =
        useState("Sérgio");

    const [filtros, setFiltros] = useState({
        responsavel: "Todos",
        prioridade: "Todas",
        status: "Todos"
    });

    const [modal, setModal] =
        useState(null);

    const [menuAbertoId, setMenuAbertoId] =
        useState(null);

    const [form, setForm] = useState({
        id: null,
        titulo: "",
        responsavel: "Sérgio",
        prioridade: "Média",
        status: "Pendente",
        icone: "📋",
        observacao: "",
        progresso: 0,
        prazo: ""
    });

    const [celebracao, setCelebracao] =
        useState(false);

    function salvarLista(lista) {
        const listaCorrigida =
            corrigirIds(lista);

        setDemandas(listaCorrigida);

        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(
                    listaCorrigida
                )
            );
        } catch (erro) {
            console.log(
                "Erro ao salvar demandas:",
                erro
            );
        }
    }

    function salvarPersonalizacao(
        lista
    ) {
        setPersonalizacao(lista);

        try {
            localStorage.setItem(
                PERSONALIZACAO_KEY,
                JSON.stringify(lista)
            );
        } catch (erro) {
            console.log(
                "Erro ao salvar personalização:",
                erro
            );
        }
    }

    function abrirNova() {
        setMenuAbertoId(null);
        setForm({
            id: null,
            titulo: "",
            responsavel: "Sérgio",
            prioridade: "Média",
            status: "Pendente",
            icone: "📋",
            observacao: "",
            progresso: 0
        });

        setModal("form");
    }

    function abrirConfiguracoes() {
        setMenuAbertoId(null);

        setResponsavelPersonalizacao(
            responsavelPersonalizacao
        );

        setModal("configuracoes");
    }

    function abrirEdicao(demanda) {
        setMenuAbertoId(null);
        setForm({
            id: String(demanda.id),
            titulo: demanda.titulo,
            responsavel: demanda.responsavel,
            prioridade: demanda.prioridade,
            status: demanda.status,
            icone: demanda.icone || "📋",
            observacao: demanda.observacao || "",
            progresso: Number(demanda.progresso || 0),
            prazo: demanda.prazo || ""
        });

        setModal("form");
    }

    function abrirVisualizacao(demanda) {
        setMenuAbertoId(null);

        setModal({
            tipo: "visualizar",
            demanda: demanda
        });
    }

    function abrirListaDemandas(tipo) {
        setMenuAbertoId(null);

        let lista = demandas;
        let titulo = "Todas as demandas";

        if (tipo === "andamento") {
            lista = demandas.filter(
                d =>
                    d.status ===
                    "Em andamento"
            );

            titulo =
                "Demandas em andamento";
        }

        if (tipo === "pendentes") {
            lista = demandas.filter(
                d =>
                    d.status ===
                    "Pendente"
            );

            titulo =
                "Demandas pendentes";
        }

        if (tipo === "concluidas") {
            lista = demandas.filter(
                d =>
                    d.status ===
                    "Concluída"
            );

            titulo =
                "Demandas concluídas";
        }

        setModal({
            tipo: "lista",
            titulo,
            lista
        });
    }

    function excluirDemanda(id) {
        setMenuAbertoId(null);

        const idTexto = String(id);

        const demanda =
            demandas.find(
                d =>
                    String(d.id) ===
                    idTexto
            );

        if (!demanda) {
            return;
        }

        const confirmar = confirm(
            "Deseja realmente excluir esta demanda?\n\n" +
            demanda.titulo
        );

        if (!confirmar) {
            return;
        }

        const novaLista =
            demandas.filter(
                d =>
                    String(d.id) !==
                    idTexto
            );

        salvarLista(novaLista);

        if (
            modal &&
            modal.tipo === "visualizar"
        ) {
            setModal(null);
        }
    }

    function alternarMenu(id) {
        const idTexto =
            String(id);

        setMenuAbertoId(
            atual =>
                atual === idTexto
                    ? null
                    : idTexto
        );
    }

    function salvarFormulario() {
        if (!form.titulo.trim()) {
            alert(
                "Informe o nome da demanda."
            );
            return;
        }

        const formId =
            form.id !== null
                ? String(form.id)
                : null;

        const demandaAnterior =
            formId
                ? demandas.find(
                    d =>
                        String(d.id) ===
                        formId
                )
                : null;

        const progresso =
            Math.min(
                100,
                Math.max(
                    0,
                    Number(form.progresso) || 0
                )
            );

        const virouConcluida =
            demandaAnterior &&
            demandaAnterior.status !==
                "Concluída" &&
            form.status ===
                "Concluída";

        if (formId) {
            const novaLista =
                demandas.map(d => {
                    if (
                        String(d.id) !==
                        formId
                    ) {
                        return d;
                    }

                    return {
                        ...d,
                        id: String(d.id),
                        titulo:
                            form.titulo.trim(),
                        responsavel:
                            form.responsavel,
                        prioridade:
                            form.prioridade,
                        status:
                            form.status,
                        icone:
                            form.icone,
                        observacao:
                            form.observacao,
                        progresso:
                            progresso,
                        prazo:
                            form.prazo || ""
                    };
                });

            salvarLista(novaLista);
        } else {
            const novaDemanda = {
                id:
                    "demanda-" +
                    Date.now() +
                    "-" +
                    Math.random()
                        .toString(36)
                        .substring(2, 8),
                titulo:
                    form.titulo.trim(),
                responsavel:
                    form.responsavel,
                prioridade:
                    form.prioridade,
                status:
                    form.status,
                icone:
                    form.icone,
                observacao:
                    form.observacao,
                progresso:
                    progresso,
                prazo:
                    form.prazo || ""
            };

            salvarLista([
                ...demandas,
                novaDemanda
            ]);

            if (
                form.status ===
                "Concluída"
            ) {
                setTimeout(() => {
                    setCelebracao(true);

                    setTimeout(() => {
                        setCelebracao(false);
                    }, 8500);
                }, 250);
            }
        }

        setModal(null);
        setMenuAbertoId(null);
        if (virouConcluida) {
            setTimeout(() => {
                setCelebracao(true);

                setTimeout(() => {
                    setCelebracao(false);
                }, 8500);
            }, 250);
        }
    }

    function alterarFiltro(
        campo,
        valor
    ) {
        setFiltros({
            ...filtros,
            [campo]: valor
        });
    }

    function limparFiltros() {
        setFiltros({
            responsavel: "Todos",
            prioridade: "Todas",
            status: "Todos"
        });
    }

    function alterarResponsavelPersonalizacao(
        nome
    ) {
        setResponsavelPersonalizacao(
            nome
        );
    }

    function alterarFontePersonalizacao(
        fonte
    ) {
        const novaPersonalizacao = {
            ...personalizacao,
            [responsavelPersonalizacao]: {
                ...personalizacao[
                    responsavelPersonalizacao
                ],
                fonte
            }
        };

        salvarPersonalizacao(
            novaPersonalizacao
        );
    }

    function alterarFundoPersonalizacao(
        fundo
    ) {
        const novaPersonalizacao = {
            ...personalizacao,
            [responsavelPersonalizacao]: {
                ...personalizacao[
                    responsavelPersonalizacao
                ],
                fundo
            }
        };

        salvarPersonalizacao(
            novaPersonalizacao
        );
    }

    function restaurarPersonalizacao(
        nome
    ) {
        const confirmar =
            confirm(
                "Deseja restaurar a personalização padrão de " +
                nome +
                "?"
            );

        if (!confirmar) {
            return;
        }

        const novaPersonalizacao = {
            ...personalizacao,
            [nome]: {
                fonte:
                    "Arial, Helvetica, sans-serif",
                fundo: "azul"
            }
        };

        salvarPersonalizacao(
            novaPersonalizacao
        );
    }

    const demandasFiltradas =
        demandas.filter(d => {
            const responsavelOk =
                filtros.responsavel === "Todos" ||
                d.responsavel ===
                    filtros.responsavel;

            const prioridadeOk =
                filtros.prioridade === "Todas" ||
                d.prioridade ===
                    filtros.prioridade;

            const statusOk =
                filtros.status === "Todos" ||
                d.status ===
                    filtros.status;

            return (
                responsavelOk &&
                prioridadeOk &&
                statusOk
            );
        });

    const andamentoLista =
        demandasFiltradas.filter(
            d =>
                d.status ===
                "Em andamento"
        );

    const pendentesLista =
        demandasFiltradas.filter(
            d =>
                d.status ===
                "Pendente"
        );

    const concluidasLista =
        demandasFiltradas.filter(
            d =>
                d.status ===
                "Concluída"
        );

    const total =
        demandas.length;

    const andamento =
        demandas.filter(
            d =>
                d.status ===
                "Em andamento"
        ).length;

    const pendentes =
        demandas.filter(
            d =>
                d.status ===
                "Pendente"
        ).length;

    const concluidas =
        demandas.filter(
            d =>
                d.status ===
                "Concluída"
        ).length;

    const percentual =
        total > 0
            ? Math.round(
                (
                    andamento /
                    total
                ) * 100
            )
            : 0;

    const filtrosAtivos =
        filtros.responsavel !== "Todos" ||
        filtros.prioridade !== "Todas" ||
        filtros.status !== "Todos";

    const configuracaoAtual =
        personalizacao[
            responsavelPersonalizacao
        ] || {
            fonte:
                "Arial, Helvetica, sans-serif",
            fundo: "azul"
        };

    const fonteAtual =
        configuracaoAtual.fonte;

    const fundoAtual =
        configuracaoAtual.fundo;

    function prioridadeClasse(
        prioridade
    ) {
        if (
            prioridade ===
            "Alta"
        ) {
            return "prioridade-alta";
        }

        if (
            prioridade ===
            "Média"
        ) {
            return "prioridade-media";
        }

        return "prioridade-baixa";
    }

    function Card({ item }) {
        const itemId =
            String(item.id);

        const menuAberto =
            menuAbertoId === itemId;

        return (
            <div
                className={
                    "ti-card " +
                    prioridadeClasse(
                        item.prioridade
                    ) +
                    (
                        menuAberto
                            ? " menu-aberto"
                            : ""
                    )
                }
                data-demand-id={
                    itemId
                }
                onClick={() =>
                    abrirVisualizacao(
                        item
                    )
                }
            >
                <div className="ti-card-top">
                    <div className="ti-card-icone">
                        {
                            item.icone ||
                            "📋"
                        }
                    </div>

                    <div className="ti-card-prioridade">
                        <span
                            className={
                                "prioridade-badge " +
                                prioridadeClasse(
                                    item.prioridade
                                )
                            }
                        >
                            {
                                item.prioridade
                            }
                        </span>
                    </div>

                    <div
                        className="ti-card-actions"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <button
                            type="button"
                            className="ti-menu-btn"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                alternarMenu(itemId);
                            }}
                        >
                            ⋮
                        </button>

                        {menuAberto && (
                            <div
                                className="ti-card-menu"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        abrirVisualizacao(item);
                                    }}
                                >
                                    👁️ Visualizar
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        abrirEdicao(item);
                                    }}
                                >
                                    ✏️ Editar
                                </button>

                                <button
                                    type="button"
                                    className="ti-card-menu-danger"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        excluirDemanda(itemId);
                                    }}
                                >
                                    🗑️ Excluir
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="ti-card-titulo">
                    {
                        item.titulo
                    }
                </div>

                {item.prazo && (
                    <div className="ti-card-prazo">
                        📅 Prazo: {String(item.prazo).split("-").reverse().join("/")}
                    </div>
                )}

                <div className="ti-card-progresso">

                    <div className="ti-card-progresso-top">
                        <span>
                            Progresso
                        </span>

                        <strong>
                            {Number(item.progresso || 0)}%
                        </strong>
                    </div>

                    <div className="ti-card-progresso-bar">
                        <div
                            className="ti-card-progresso-fill"
                            style={{
                                width:
                                    Math.min(
                                        100,
                                        Math.max(
                                            0,
                                            Number(item.progresso || 0)
                                        )
                                    ) + "%"
                            }}
                        />
                    </div>

                </div>

                <div className="ti-card-bottom">
                    <div className="ti-responsavel">
                        <span>
                            Responsável
                        </span>

                        <strong>
                            {
                                item.responsavel
                            }
                        </strong>
                    </div>

                    {
                        item.observacao && (
                            <div className="ti-observacao-indicador">
                                📝
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }

    function Section({
        titulo,
        icone,
        lista,
        classe
    }) {
        return (
            <section
                className={
                    "ti-section " +
                    classe
                }
            >
                <div className="ti-section-header">
                    <div className="ti-section-title">
                        <span className="ti-section-icon">
                            {icone}
                        </span>

                        <div>
                            <h2>
                                {titulo}
                            </h2>

                            <span>
                                {lista.length} demanda
                                {
                                    lista.length !== 1
                                        ? "s"
                                        : ""
                                }
                            </span>
                        </div>
                    </div>

                    <div className="ti-section-count">
                        {
                            lista.length
                        }
                    </div>
                </div>

                {
                    lista.length > 0
                        ? (
                            <div className="ti-grid">
                                {
                                    lista.map(
                                        item => (
                                            <Card
                                                key={
                                                    String(item.id)
                                                }
                                                item={
                                                    item
                                                }
                                            />
                                        )
                                    )
                                }
                            </div>
                        )
                        : (
                            <div className="ti-vazio">
                                <div>
                                    ✓
                                </div>

                                <span>
                                    Nenhuma demanda nesta seção
                                </span>
                            </div>
                        )
                }
            </section>
        );
    }

    function Historico() {
        const recentes =
            [...demandas]
                .reverse()
                .slice(0, 5);

        return (
            <div className="ti-historico">
                <div className="ti-historico-titulo">
                    <span>
                        📋
                    </span>

                    Últimas demandas
                </div>

                <div className="ti-historico-lista">
                    {
                        recentes.map(
                            item => (
                                <div
                                    className="ti-historico-item"
                                    key={
                                        String(item.id)
                                    }
                                >
                                    <span className="ti-historico-icone">
                                        {
                                            item.icone
                                        }
                                    </span>

                                    <div className="ti-historico-info">
                                        <strong>
                                            {
                                                item.titulo
                                            }
                                        </strong>

                                        <span>
                                            {
                                                item.responsavel
                                            }
                                        </span>
                                    </div>

                                    <span
                                        className={
                                            "historico-status " +
                                            item.status
                                                .toLowerCase()
                                                .replaceAll(
                                                    " ",
                                                    "-"
                                                )
                                        }
                                    >
                                        {
                                            item.status
                                        }
                                    </span>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }

    return (
        <div
            className={
                "ti-dashboard fundo-" +
                fundoAtual
            }
            style={{
                fontFamily:
                    fonteAtual
            }}
        >

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Lato:wght@400;700;900&family=Montserrat:wght@400;500;600;700;800;900&family=Nunito:wght@400;600;700;800;900&family=Open+Sans:wght@400;600;700;800&family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&family=Ubuntu:wght@400;500;700&display=swap');

                * {
                    box-sizing: border-box;
                }

                .ti-dashboard {
                    min-height: 100vh;
                    padding: 30px;
                    color: #fff;
                    font-family: Arial, Helvetica, sans-serif;
                    transition:
                        background .35s ease,
                        font-family .2s ease;
                }

                .ti-dashboard.fundo-azul {
                    background:
                        radial-gradient(
                            circle at top right,
                            #24364f 0,
                            transparent 32%
                        ),
                        linear-gradient(
                            135deg,
                            #07111f,
                            #0d1828 55%,
                            #111d2e
                        );
                }

                .ti-dashboard.fundo-azul-tech {
                    background:
                        radial-gradient(
                            circle at 80% 10%,
                            rgba(0,140,255,.28),
                            transparent 32%
                        ),
                        radial-gradient(
                            circle at 10% 90%,
                            rgba(0,90,255,.16),
                            transparent 35%
                        ),
                        linear-gradient(
                            135deg,
                            #03101d,
                            #06233b 52%,
                            #07111f
                        );
                }

                .ti-dashboard.fundo-preto {
                    background:
                        radial-gradient(
                            circle at top right,
                            #242424 0,
                            transparent 30%
                        ),
                        linear-gradient(
                            135deg,
                            #050505,
                            #101010 55%,
                            #181818
                        );
                }

                .ti-dashboard.fundo-grafite {
                    background:
                        radial-gradient(
                            circle at top right,
                            #414141 0,
                            transparent 30%
                        ),
                        linear-gradient(
                            135deg,
                            #171717,
                            #242424 55%,
                            #303030
                        );
                }

                .ti-dashboard.fundo-oceano {
                    background:
                        radial-gradient(
                            circle at top right,
                            #0e7490 0,
                            transparent 32%
                        ),
                        linear-gradient(
                            135deg,
                            #042f3d,
                            #06485b 55%,
                            #073949
                        );
                }

                .ti-dashboard.fundo-roxo {
                    background:
                        radial-gradient(
                            circle at top right,
                            #6d28d9 0,
                            transparent 32%
                        ),
                        linear-gradient(
                            135deg,
                            #10051f,
                            #24103b 55%,
                            #160b29
                        );
                }

                .ti-dashboard.fundo-verde {
                    background:
                        radial-gradient(
                            circle at top right,
                            #15803d 0,
                            transparent 32%
                        ),
                        linear-gradient(
                            135deg,
                            #04170e,
                            #09281a 55%,
                            #0b2117
                        );
                }

                .ti-dashboard.fundo-vermelho {
                    background:
                        radial-gradient(
                            circle at top right,
                            #991b1b 0,
                            transparent 32%
                        ),
                        linear-gradient(
                            135deg,
                            #190505,
                            #320b0b 55%,
                            #230707
                        );
                }

                .ti-dashboard.fundo-degrade {
                    background:
                        radial-gradient(
                            circle at 15% 20%,
                            #2563eb,
                            transparent 30%
                        ),
                        radial-gradient(
                            circle at 85% 25%,
                            #7c3aed,
                            transparent 30%
                        ),
                        radial-gradient(
                            circle at 50% 90%,
                            #0f766e,
                            transparent 35%
                        ),
                        #090f1d;
                }

                .ti-dashboard.fundo-glass {
                    background:
                        radial-gradient(
                            circle at 20% 20%,
                            rgba(56,189,248,.25),
                            transparent 30%
                        ),
                        radial-gradient(
                            circle at 80% 80%,
                            rgba(139,92,246,.25),
                            transparent 35%
                        ),
                        linear-gradient(
                            135deg,
                            #07111f,
                            #172033
                        );
                }

                .ti-container {
                    max-width: 1500px;
                    margin: auto;
                }

                .ti-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 25px;
                }

                .ti-header-left {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }

                .ti-logo {
                    width: 62px;
                    height: 62px;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 31px;
                    background: rgba(255,255,255,.08);
                    border: 1px solid rgba(255,255,255,.12);
                    box-shadow:
                        0 12px 30px rgba(0,0,0,.25);
                }

                .ti-header h1 {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 900;
                    letter-spacing: -.5px;
                }

                .ti-header p {
                    margin: 5px 0 0;
                    color: #9fb0c7;
                    font-size: 14px;
                }

                .ti-header-actions {
                    display: flex;
                    gap: 10px;
                }

                .ti-btn {
                    border: 0;
                    border-radius: 12px;
                    padding: 12px 17px;
                    font-size: 14px;
                    font-weight: 800;
                    cursor: pointer;
                    transition: .2s;
                }

                .ti-btn:hover {
                    transform: translateY(-2px);
                }

                .ti-btn-primary {
                    background: #fff;
                    color: #101b2b;
                }

                .ti-btn-secondary {
                    background: rgba(255,255,255,.08);
                    color: #fff;
                    border: 1px solid rgba(255,255,255,.12);
                }

                .ti-btn-config {
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    font-size: 21px;
                    background: rgba(255,255,255,.08);
                    color: #fff;
                    border: 1px solid rgba(255,255,255,.12);
                }

                .ti-btn-config:hover {
                    background: rgba(255,255,255,.14);
                }

                .ti-kpis {
                    display: grid;
                    grid-template-columns:
                        repeat(4, minmax(0, 1fr));
                    gap: 15px;
                    margin-bottom: 18px;
                }

                .ti-kpi {
                    position: relative;
                    overflow: hidden;
                    border-radius: 18px;
                    padding: 20px;
                    background: rgba(255,255,255,.055);
                    border: 1px solid rgba(255,255,255,.09);
                    box-shadow:
                        0 15px 35px rgba(0,0,0,.18);
                    cursor: pointer;
                    transition:
                        transform .2s,
                        background .2s;
                }

                .ti-kpi:hover {
                    transform: translateY(-2px);
                    background: rgba(255,255,255,.075);
                }

                .ti-kpi-label {
                    color: #9fb0c7;
                    font-size: 13px;
                    font-weight: 700;
                    margin-bottom: 8px;
                }

                .ti-kpi-number {
                    font-size: 32px;
                    font-weight: 900;
                    line-height: 1;
                }

                .ti-kpi-andamento {
                    border-left: 4px solid #facc15;
                }

                .ti-kpi-andamento .ti-kpi-number {
                    color: #facc15;
                }

                .ti-kpi-pendente {
                    border-left: 4px solid #ef4444;
                }

                .ti-kpi-pendente .ti-kpi-number {
                    color: #ef4444;
                }

                .ti-kpi-concluida {
                    border-left: 4px solid #22c55e;
                }

                .ti-kpi-concluida .ti-kpi-number {
                    color: #22c55e;
                }

                .ti-progress-box {
                    margin-bottom: 25px;
                    padding: 20px;
                    border-radius: 18px;
                    background: rgba(255,255,255,.055);
                    border: 1px solid rgba(255,255,255,.09);
                }

                .ti-progress-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 11px;
                }

                .ti-progress-title {
                    font-size: 14px;
                    font-weight: 800;
                }

                .ti-progress-percent {
                    font-size: 17px;
                    font-weight: 900;
                    color: #facc15;
                }

                .ti-progress-bar {
                    height: 10px;
                    overflow: hidden;
                    border-radius: 999px;
                    background: rgba(255,255,255,.08);
                }

                .ti-progress-fill {
                    height: 100%;
                    border-radius: 999px;
                    background: #facc15;
                    transition: width .4s ease;
                }

                .ti-progress-info {
                    margin-top: 9px;
                    color: #8fa2ba;
                    font-size: 12px;
                }

                .ti-filtros {
                    display: grid;
                    grid-template-columns:
                        repeat(3, 1fr) auto;
                    gap: 12px;
                    padding: 17px;
                    margin-bottom: 20px;
                    border-radius: 18px;
                    background: rgba(255,255,255,.05);
                    border: 1px solid rgba(255,255,255,.09);
                }

                .ti-filtro {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .ti-filtro label {
                    color: #9fb0c7;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                }

                .ti-filtro select {
                    width: 100%;
                    border: 1px solid rgba(255,255,255,.12);
                    border-radius: 10px;
                    padding: 10px 12px;
                    color: #fff;
                    background: #172538;
                    outline: none;
                    font-weight: 700;
                }

                .ti-filtro select option {
                    background: #172538;
                    color: #fff;
                }

                .ti-limpar {
                    align-self: end;
                    border: 0;
                    border-radius: 10px;
                    padding: 11px 15px;
                    color: #fff;
                    background: rgba(255,255,255,.08);
                    cursor: pointer;
                    font-weight: 800;
                }

                .ti-filtro-info {
                    grid-column: 1 / -1;
                    color: #8fa2ba;
                    font-size: 12px;
                }

                .ti-filtro-ativo {
                    color: #facc15;
                    font-weight: 800;
                }

                .ti-section {
                    margin-bottom: 25px;
                    padding: 20px;
                    border-radius: 20px;
                    background: rgba(255,255,255,.035);
                    border: 1px solid rgba(255,255,255,.08);
                }

                .ti-section-andamento {
                    border-top: 3px solid #facc15;
                }

                .ti-section-pendente {
                    border-top: 3px solid #ef4444;
                }

                .ti-section-concluida {
                    border-top: 3px solid #22c55e;
                }

                .ti-section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 17px;
                }

                .ti-section-title {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .ti-section-icon {
                    width: 42px;
                    height: 42px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 21px;
                    background: rgba(255,255,255,.07);
                }

                .ti-section-title h2 {
                    margin: 0;
                    font-size: 19px;
                    font-weight: 900;
                }

                .ti-section-title span {
                    color: #8295ad;
                    font-size: 12px;
                }

                .ti-section-count {
                    min-width: 38px;
                    height: 38px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: rgba(255,255,255,.07);
                    font-weight: 900;
                }

                .ti-grid {
                    display: grid;
                    grid-template-columns:
                        repeat(4, minmax(0, 1fr));
                    gap: 13px;
                }

                .ti-card {
                    position: relative;
                    z-index: 1;
                    overflow: visible;
                    min-height: 155px;
                    padding: 16px;
                    border-radius: 16px;
                    background: #132033;
                    border: 1px solid rgba(255,255,255,.08);
                    cursor: pointer;
                    transition:
                        transform .2s,
                        box-shadow .2s,
                        border-color .2s;
                }

                .ti-card.menu-aberto {
                    overflow: visible;
                    z-index: 100;
                }

                .ti-card:hover {
                    transform: translateY(-3px);
                    box-shadow:
                        0 14px 30px rgba(0,0,0,.25);
                }

                .ti-card.prioridade-alta {
                    border-left: 5px solid #ef4444;
                }

                .ti-card.prioridade-media {
                    border-left: 5px solid #facc15;
                }

                .ti-card.prioridade-baixa {
                    border-left: 5px solid #94a3b8;
                }

                .ti-card-top {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .ti-card-icone {
                    width: 38px;
                    height: 38px;
                    border-radius: 11px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    background: rgba(255,255,255,.07);
                }

                .ti-card-prioridade {
                    margin-left: auto;
                }

                .prioridade-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 9px;
                    border-radius: 999px;
                    font-size: 10px;
                    font-weight: 900;
                    text-transform: uppercase;
                }

                .prioridade-badge.prioridade-alta {
                    color: #fecaca;
                    background: rgba(239,68,68,.16);
                    border: 1px solid rgba(239,68,68,.35);
                }

                .prioridade-badge.prioridade-media {
                    color: #fef08a;
                    background: rgba(250,204,21,.13);
                    border: 1px solid rgba(250,204,21,.3);
                }

                .prioridade-badge.prioridade-baixa {
                    color: #cbd5e1;
                    background: rgba(148,163,184,.11);
                    border: 1px solid rgba(148,163,184,.22);
                }

                .ti-card-actions {
                    position: relative;
                    z-index: 101;
                    display: flex;
                    align-items: center;
                }

                .ti-menu-btn {
                    width: 30px;
                    height: 30px;
                    border: 0;
                    border-radius: 8px;
                    color: #9fb0c7;
                    background: transparent;
                    font-size: 22px;
                    cursor: pointer;
                }

                .ti-menu-btn:hover {
                    color: #fff;
                    background: rgba(255,255,255,.08);
                }

                .ti-card-menu {
                    position: absolute;
                    top: 35px;
                    right: 0;
                    z-index: 102;
                    min-width: 155px;
                    padding: 6px;
                    border-radius: 12px;
                    background: #18273a;
                    border: 1px solid rgba(255,255,255,.12);
                    box-shadow:
                        0 14px 35px rgba(0,0,0,.4);
                    pointer-events: auto;
                }

                .ti-card-menu button {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    border: 0;
                    border-radius: 8px;
                    padding: 9px 10px;
                    color: #fff;
                    background: transparent;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .ti-card-menu button:hover {
                    background: rgba(255,255,255,.08);
                }

                .ti-card-menu .ti-card-menu-danger {
                    color: #fca5a5;
                }

                .ti-card-menu .ti-card-menu-danger:hover {
                    color: #fecaca;
                    background: rgba(239,68,68,.12);
                }

                .ti-card-titulo {
                    margin-top: 15px;
                    min-height: 43px;
                    color: #f8fafc;
                    font-size: 14px;
                    line-height: 1.4;
                    font-weight: 800;
                }

                .ti-card-prazo {
                    margin-top: 8px;
                    color: #9fb0c7;
                    font-size: 11px;
                    font-weight: 700;
                }

                .ti-card-progresso {
                    margin-top: 12px;
                }

                .ti-card-progresso-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 6px;
                }

                .ti-card-progresso-top span {
                    color: #71849d;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                }

                .ti-card-progresso-top strong {
                    color: #60a5fa;
                    font-size: 11px;
                    font-weight: 900;
                }

                .ti-card-progresso-bar {
                    width: 100%;
                    height: 7px;
                    overflow: hidden;
                    border-radius: 999px;
                    background: rgba(255,255,255,.08);
                }

                .ti-card-progresso-fill {
                    height: 100%;
                    border-radius: 999px;
                    background: #3b82f6;
                    transition: width .35s ease;
                }

                .ti-card-bottom {
                    display: flex;
                    align-items: end;
                    justify-content: space-between;
                    margin-top: 17px;
                }

                .ti-responsavel {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .ti-responsavel span {
                    color: #71849d;
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .ti-responsavel strong {
                    color: #fff;
                    text-align: right;
                    font-size: 14px;
                    font-weight: 800;
                }

                .ti-observacao-indicador {
                    font-size: 15px;
                    opacity: .75;
                }

                .ti-vazio {
                    min-height: 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    color: #71849d;
                }

                .ti-vazio div {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #22c55e;
                    background: rgba(34,197,94,.1);
                    font-weight: 900;
                }

                .ti-historico {
                    padding: 20px;
                    border-radius: 20px;
                    background: rgba(255,255,255,.035);
                    border: 1px solid rgba(255,255,255,.08);
                }

                .ti-historico-titulo {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 15px;
                    font-weight: 900;
                }

                .ti-historico-lista {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .ti-historico-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 11px;
                    border-radius: 11px;
                    background: rgba(255,255,255,.035);
                }

                .ti-historico-icone {
                    font-size: 18px;
                }

                .ti-historico-info {
                    min-width: 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .ti-historico-info strong {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 13px;
                }

                .ti-historico-info span {
                    color: #71849d;
                    font-size: 11px;
                }

                .historico-status {
                    padding: 5px 8px;
                    border-radius: 999px;
                    font-size: 9px;
                    font-weight: 900;
                }

                .historico-status.pendente {
                    color: #fecaca;
                    background: rgba(239,68,68,.12);
                }

                .historico-status.em-andamento {
                    color: #fef08a;
                    background: rgba(250,204,21,.12);
                }

                .historico-status.concluída {
                    color: #bbf7d0;
                    background: rgba(34,197,94,.12);
                }

                .ti-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px;
                    background: rgba(0,0,0,.72);
                    backdrop-filter: blur(7px);
                }

                .ti-modal {
                    width: min(560px, calc(100vw - 36px));
                    max-height: 82vh;
                    overflow-y: auto;
                    margin: 0 auto;
                    border-radius: 18px;
                    padding: 18px;
                    background: #101c2d;
                    border: 1px solid rgba(255,255,255,.1);
                    box-shadow:
                        0 30px 80px rgba(0,0,0,.5);
                }

                .ti-modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    gap: 15px;
                }

                .ti-modal-header h2 {
                    margin: 0;
                    font-size: 21px;
                }

                .ti-modal-subtitulo {
                    display: block;
                    margin-top: 4px;
                    color: #71849d;
                    font-size: 11px;
                }

                .ti-close {
                    width: 35px;
                    height: 35px;
                    flex-shrink: 0;
                    border: 0;
                    border-radius: 10px;
                    color: #fff;
                    background: rgba(255,255,255,.07);
                    cursor: pointer;
                    font-size: 18px;
                }

                .ti-close:hover {
                    background: rgba(255,255,255,.12);
                }

                .ti-form {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .ti-form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .ti-form-group label {
                    color: #9fb0c7;
                    font-size: 12px;
                    font-weight: 800;
                }

                .ti-form-group input,
                .ti-form-group textarea,
                .ti-form-group select {
                    width: 100%;
                    border: 1px solid rgba(255,255,255,.12);
                    border-radius: 10px;
                    padding: 11px 12px;
                    outline: none;
                    color: #fff;
                    background: #172538;
                    font-family: inherit;
                }

                .ti-form-group textarea {
                    min-height: 90px;
                    resize: vertical;
                }

                .ti-form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }

                .ti-icones {
                    display: grid;
                    grid-template-columns:
                        repeat(10, 1fr);
                    gap: 6px;
                    max-height: 150px;
                    overflow-y: auto;
                    padding: 8px;
                    border-radius: 10px;
                    background: rgba(255,255,255,.035);
                }

                .ti-icone-option {
                    border: 1px solid transparent;
                    border-radius: 8px;
                    padding: 7px;
                    font-size: 18px;
                    background: transparent;
                    cursor: pointer;
                }

                .ti-icone-option:hover {
                    background: rgba(255,255,255,.08);
                }

                .ti-icone-option.selecionado {
                    background: rgba(250,204,21,.15);
                    border-color: #facc15;
                }

                .ti-progresso-editor {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .ti-progresso-range {
                    flex: 1;
                    width: 100%;
                    accent-color: #3b82f6;
                    cursor: pointer;
                }

                .ti-progresso-numero {
                    width: 75px !important;
                    text-align: center;
                }

                .ti-progresso-editor-bar {
                    margin-top: 8px;
                    width: 100%;
                    height: 9px;
                    overflow: hidden;
                    border-radius: 999px;
                    background: rgba(255,255,255,.08);
                }

                .ti-progresso-editor-fill {
                    height: 100%;
                    border-radius: 999px;
                    background: #3b82f6;
                    transition: width .25s ease;
                }

                .ti-modal-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    margin-top: 8px;
                }

                .ti-view-icon {
                    width: 70px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 15px;
                    border-radius: 18px;
                    font-size: 35px;
                    background: rgba(255,255,255,.07);
                }

                .ti-view-title {
                    margin-bottom: 20px;
                    font-size: 24px;
                    font-weight: 900;
                }

                .ti-view-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }

                .ti-view-item {
                    padding: 14px;
                    border-radius: 12px;
                    background: rgba(255,255,255,.045);
                }

                .ti-view-item span {
                    display: block;
                    margin-bottom: 5px;
                    color: #71849d;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                }

                .ti-view-item strong {
                    font-size: 14px;
                }

                .ti-view-progresso {
                    margin-top: 14px;
                    padding: 15px;
                    border-radius: 12px;
                    background: rgba(255,255,255,.045);
                }

                .ti-view-progresso-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 8px;
                }

                .ti-view-progresso-top span {
                    color: #71849d;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                }

                .ti-view-progresso-top strong {
                    color: #60a5fa;
                    font-size: 15px;
                    font-weight: 900;
                }

                .ti-view-progresso-bar {
                    width: 100%;
                    height: 10px;
                    overflow: hidden;
                    border-radius: 999px;
                    background: rgba(255,255,255,.08);
                }

                .ti-view-progresso-fill {
                    height: 100%;
                    border-radius: 999px;
                    background: #3b82f6;
                    transition: width .35s ease;
                }

                .ti-view-observacao {
                    margin-top: 12px;
                    padding: 15px;
                    border-radius: 12px;
                    background: rgba(255,255,255,.045);
                }

                .ti-view-observacao-title {
                    margin-bottom: 8px;
                    color: #71849d;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                }

                .ti-lista-modal {
                    width: min(560px, 100%);
                    max-height: 75vh;
                    overflow-y: auto;
                    border-radius: 20px;
                    padding: 20px;
                    background: #101c2d;
                    border: 1px solid rgba(255,255,255,.1);
                    box-shadow:
                        0 30px 80px rgba(0,0,0,.5);
                }

                .ti-lista-demandas {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .ti-lista-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 12px;
                    border-radius: 12px;
                    background: rgba(255,255,255,.045);
                    border: 1px solid rgba(255,255,255,.06);
                    cursor: pointer;
                    transition: .2s;
                }

                .ti-lista-item:hover {
                    background: rgba(255,255,255,.08);
                    transform: translateX(2px);
                }

                .ti-lista-icone {
                    width: 35px;
                    height: 35px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    font-size: 18px;
                    background: rgba(255,255,255,.07);
                }

                .ti-lista-info {
                    min-width: 0;
                    flex: 1;
                }

                .ti-lista-info strong {
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #f8fafc;
                    font-size: 13px;
                    font-weight: 800;
                }

                .ti-lista-info span {
                    display: block;
                    margin-top: 3px;
                    color: #71849d;
                    font-size: 11px;
                }

                .ti-lista-prioridade {
                    flex-shrink: 0;
                }

                .ti-config-modal {
                    width: min(620px, 100%);
                    max-height: 90vh;
                    overflow-y: auto;
                    border-radius: 22px;
                    padding: 25px;
                    background: #101c2d;
                    border: 1px solid rgba(255,255,255,.1);
                    box-shadow:
                        0 30px 80px rgba(0,0,0,.5);
                }

                .ti-config-intro {
                    margin-bottom: 20px;
                    padding: 13px 15px;
                    border-radius: 12px;
                    color: #9fb0c7;
                    background: rgba(255,255,255,.045);
                    border: 1px solid rgba(255,255,255,.06);
                    font-size: 12px;
                    line-height: 1.5;
                }

                .ti-config-preview {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-top: 18px;
                    padding: 16px;
                    border-radius: 15px;
                    border: 1px solid rgba(255,255,255,.08);
                    overflow: hidden;
                    min-height: 100px;
                }

                .ti-config-preview.fundo-azul {
                    background:
                        radial-gradient(
                            circle at top right,
                            #24364f 0,
                            transparent 50%
                        ),
                        #0d1828;
                }

                .ti-config-preview.fundo-azul-tech {
                    background:
                        radial-gradient(
                            circle at top right,
                            #075985 0,
                            transparent 55%
                        ),
                        #06233b;
                }

                .ti-config-preview.fundo-preto {
                    background:
                        radial-gradient(
                            circle at top right,
                            #333 0,
                            transparent 55%
                        ),
                        #090909;
                }

                .ti-config-preview.fundo-grafite {
                    background:
                        radial-gradient(
                            circle at top right,
                            #555 0,
                            transparent 55%
                        ),
                        #242424;
                }

                .ti-config-preview.fundo-oceano {
                    background:
                        radial-gradient(
                            circle at top right,
                            #0e7490 0,
                            transparent 55%
                        ),
                        #06485b;
                }

                .ti-config-preview.fundo-roxo {
                    background:
                        radial-gradient(
                            circle at top right,
                            #7c3aed 0,
                            transparent 55%
                        ),
                        #24103b;
                }

                .ti-config-preview.fundo-verde {
                    background:
                        radial-gradient(
                            circle at top right,
                            #16a34a 0,
                            transparent 55%
                        ),
                        #09281a;
                }

                .ti-config-preview.fundo-vermelho {
                    background:
                        radial-gradient(
                            circle at top right,
                            #b91c1c 0,
                            transparent 55%
                        ),
                        #320b0b;
                }

                .ti-config-preview.fundo-degrade {
                    background:
                        radial-gradient(
                            circle at 20% 30%,
                            #2563eb,
                            transparent 45%
                        ),
                        radial-gradient(
                            circle at 80% 30%,
                            #7c3aed,
                            transparent 45%
                        ),
                        #090f1d;
                }

                .ti-config-preview.fundo-glass {
                    background:
                        radial-gradient(
                            circle at 20% 20%,
                            rgba(56,189,248,.35),
                            transparent 45%
                        ),
                        radial-gradient(
                            circle at 80% 80%,
                            rgba(139,92,246,.35),
                            transparent 45%
                        ),
                        #101c2d;
                }

                .ti-config-preview-icon {
                    width: 48px;
                    height: 48px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 13px;
                    background: rgba(255,255,255,.1);
                    font-size: 23px;
                }

                .ti-config-preview-text {
                    min-width: 0;
                }

                .ti-config-preview-text strong {
                    display: block;
                    font-size: 15px;
                }

                .ti-config-preview-text span {
                    display: block;
                    margin-top: 3px;
                    color: #cbd5e1;
                    font-size: 11px;
                }

                .ti-config-opcoes-fundo {
                    display: grid;
                    grid-template-columns:
                        repeat(5, 1fr);
                    gap: 8px;
                }

                .ti-fundo-option {
                    min-height: 58px;
                    border: 2px solid transparent;
                    border-radius: 10px;
                    padding: 6px;
                    color: #fff;
                    cursor: pointer;
                    font-size: 10px;
                    font-weight: 800;
                    transition: .2s;
                }

                .ti-fundo-option:hover {
                    transform: translateY(-2px);
                }

                .ti-fundo-option.selecionado {
                    border-color: #facc15;
                    box-shadow:
                        0 0 0 2px rgba(250,204,21,.15);
                }

                .ti-fundo-option.fundo-azul {
                    background:
                        linear-gradient(
                            135deg,
                            #07111f,
                            #172d49
                        );
                }

                .ti-fundo-option.fundo-azul-tech {
                    background:
                        linear-gradient(
                            135deg,
                            #03101d,
                            #075985
                        );
                }

                .ti-fundo-option.fundo-preto {
                    background:
                        linear-gradient(
                            135deg,
                            #050505,
                            #333
                        );
                }

                .ti-fundo-option.fundo-grafite {
                    background:
                        linear-gradient(
                            135deg,
                            #171717,
                            #4b4b4b
                        );
                }

                .ti-fundo-option.fundo-oceano {
                    background:
                        linear-gradient(
                            135deg,
                            #042f3d,
                            #0e7490
                        );
                }

                .ti-fundo-option.fundo-roxo {
                    background:
                        linear-gradient(
                            135deg,
                            #10051f,
                            #7c3aed
                        );
                }

                .ti-fundo-option.fundo-verde {
                    background:
                        linear-gradient(
                            135deg,
                            #04170e,
                            #15803d
                        );
                }

                .ti-fundo-option.fundo-vermelho {
                    background:
                        linear-gradient(
                            135deg,
                            #190505,
                            #991b1b
                        );
                }

                .ti-fundo-option.fundo-degrade {
                    background:
                        linear-gradient(
                            135deg,
                            #2563eb,
                            #7c3aed,
                            #0f766e
                        );
                }

                .ti-fundo-option.fundo-glass {
                    background:
                        linear-gradient(
                            135deg,
                            #075985,
                            #4c1d95
                        );
                }

                .ti-config-restaurar {
                    margin-top: 12px;
                    width: 100%;
                    border: 1px solid rgba(239,68,68,.25);
                    border-radius: 10px;
                    padding: 10px;
                    color: #fca5a5;
                    background: rgba(239,68,68,.08);
                    cursor: pointer;
                    font-weight: 800;
                }

                .ti-config-restaurar:hover {
                    background: rgba(239,68,68,.14);
                }

                .ti-config-secao {
                    margin-top: 18px;
                }

                .ti-config-secao-titulo {
                    margin-bottom: 9px;
                    color: #9fb0c7;
                    font-size: 11px;
                    font-weight: 900;
                    text-transform: uppercase;
                }

                .celebracao {
                    position: fixed;
                    inset: 0;
                    z-index: 20000;
                    pointer-events: none;
                    overflow: hidden;
                }

                .fogo {
                    position: absolute;
                    bottom: -40px;
                    width: 4px;
                    height: 90px;
                    border-radius: 50%;
                    background: #fff;
                    animation:
                        subirFogo 1.5s ease-out forwards;
                }

                .fogo::after {
                    content: "";
                    position: absolute;
                    left: -18px;
                    top: -18px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-shadow:
                        0 -40px 0 2px #fff,
                        28px -28px 0 1px #fff,
                        40px 0 0 2px #fff,
                        28px 28px 0 1px #fff,
                        0 40px 0 2px #fff,
                        -28px 28px 0 1px #fff,
                        -40px 0 0 2px #fff,
                        -28px -28px 0 1px #fff;
                    animation:
                        explodir 1.3s ease-out 1.35s forwards;
                    opacity: 0;
                }

                .fogo1 {
                    left: 12%;
                    animation-delay: .1s;
                }

                .fogo2 {
                    left: 28%;
                    animation-delay: .4s;
                }

                .fogo3 {
                    left: 45%;
                    animation-delay: .2s;
                }

                .fogo4 {
                    left: 62%;
                    animation-delay: .5s;
                }

                .fogo5 {
                    left: 78%;
                    animation-delay: .3s;
                }

                .fogo6 {
                    left: 90%;
                    animation-delay: .65s;
                }

                @keyframes subirFogo {
                    0% {
                        bottom: -50px;
                        opacity: 1;
                    }

                    100% {
                        bottom: 55%;
                        opacity: 1;
                    }
                }

                @keyframes explodir {
                    0% {
                        opacity: 0;
                        transform: scale(.1);
                    }

                    20% {
                        opacity: 1;
                    }

                    100% {
                        opacity: 0;
                        transform: scale(2.8);
                    }
                }

                .balao {
                    position: absolute;
                    bottom: -100px;
                    width: 45px;
                    height: 55px;
                    border-radius: 50% 50% 45% 45%;
                    background: rgba(255,255,255,.75);
                    animation:
                        subirBalao 7s ease-in forwards;
                }

                .balao::after {
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: 55px;
                    top: 53px;
                    left: 22px;
                    background: rgba(255,255,255,.5);
                }

                .balao1 {
                    left: 8%;
                    animation-delay: .4s;
                }

                .balao2 {
                    left: 84%;
                    animation-delay: .9s;
                }

                .balao3 {
                    left: 48%;
                    animation-delay: .2s;
                }

                @keyframes subirBalao {
                    0% {
                        bottom: -100px;
                        opacity: 0;
                    }

                    10% {
                        opacity: 1;
                    }

                    100% {
                        bottom: 115%;
                        opacity: 0;
                    }
                }

                @media (max-width: 1100px) {
                    .ti-grid {
                        grid-template-columns:
                            repeat(3, minmax(0, 1fr));
                    }
                }

                @media (max-width: 850px) {
                    .ti-kpis {
                        grid-template-columns:
                            repeat(2, 1fr);
                    }

                    .ti-grid {
                        grid-template-columns:
                            repeat(2, minmax(0, 1fr));
                    }

                    .ti-filtros {
                        grid-template-columns:
                            repeat(2, 1fr);
                    }

                    .ti-limpar {
                        align-self: center;
                    }

                    .ti-config-opcoes-fundo {
                        grid-template-columns:
                            repeat(3, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .ti-dashboard {
                        padding: 15px;
                    }

                    .ti-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .ti-header-actions {
                        width: 100%;
                    }

                    .ti-header-actions button {
                        flex: 1;
                    }

                    .ti-btn-config {
                        flex: 0 0 45px !important;
                    }

                    .ti-kpis {
                        grid-template-columns:
                            1fr 1fr;
                    }

                    .ti-grid {
                        grid-template-columns: 1fr;
                    }

                    .ti-filtros {
                        grid-template-columns: 1fr;
                    }

                    .ti-form-row,
                    .ti-view-grid {
                        grid-template-columns: 1fr;
                    }

                    .ti-section {
                        padding: 14px;
                    }

                    .ti-config-opcoes-fundo {
                        grid-template-columns:
                            repeat(2, 1fr);
                    }
                }
            `}</style>

            <div className="ti-container">

                <header className="ti-header">
                    <div className="ti-header-left">
                        <div className="ti-logo">
                            🖥️
                        </div>

                        <div>
                            <h1>
                                Dashboard TI
                            </h1>

                            <p>
                                Acompanhamento das demandas do setor de Tecnologia
                            </p>
                        </div>
                    </div>

                    <div className="ti-header-actions">

                        <button
                            className="ti-btn ti-btn-secondary"
                            onClick={() => {
                                try {
                                    document
                                        .documentElement
                                        .requestFullscreen();
                                } catch (e) {}
                            }}
                        >
                            ⛶ Tela cheia
                        </button>

                        <button
                            type="button"
                            className="ti-btn ti-btn-config"
                            title="Configurações"
                            onClick={
                                abrirConfiguracoes
                            }
                        >
                            ⚙️
                        </button>

                        <button
                            className="ti-btn ti-btn-primary"
                            onClick={
                                abrirNova
                            }
                        >
                            ＋ Nova demanda
                        </button>

                    </div>
                </header>

                <div className="ti-kpis">

                    <div
                        className="ti-kpi ti-kpi-total"
                        onClick={() =>
                            abrirListaDemandas(
                                "total"
                            )
                        }
                    >
                        <div className="ti-kpi-label">
                            TOTAL DE DEMANDAS
                        </div>

                        <div className="ti-kpi-number">
                            {total}
                        </div>
                    </div>

                    <div
                        className="ti-kpi ti-kpi-andamento"
                        onClick={() =>
                            abrirListaDemandas(
                                "andamento"
                            )
                        }
                    >
                        <div className="ti-kpi-label">
                            EM ANDAMENTO
                        </div>

                        <div className="ti-kpi-number">
                            {andamento}
                        </div>
                    </div>

                    <div
                        className="ti-kpi ti-kpi-pendente"
                        onClick={() =>
                            abrirListaDemandas(
                                "pendentes"
                            )
                        }
                    >
                        <div className="ti-kpi-label">
                            PENDENTES
                        </div>

                        <div className="ti-kpi-number">
                            {pendentes}
                        </div>
                    </div>

                    <div
                        className="ti-kpi ti-kpi-concluida"
                        onClick={() =>
                            abrirListaDemandas(
                                "concluidas"
                            )
                        }
                    >
                        <div className="ti-kpi-label">
                            CONCLUÍDAS
                        </div>

                        <div className="ti-kpi-number">
                            {concluidas}
                        </div>
                    </div>

                </div>

                <div className="ti-progress-box">
                    <div className="ti-progress-top">
                        <span className="ti-progress-title">
                            Progresso das demandas
                        </span>

                        <span className="ti-progress-percent">
                            {percentual}%
                        </span>
                    </div>

                    <div className="ti-progress-bar">
                        <div
                            className="ti-progress-fill"
                            style={{
                                width:
                                    percentual +
                                    "%"
                            }}
                        />
                    </div>

                    <div className="ti-progress-info">
                        {andamento} de {total} demandas estão em andamento
                    </div>
                </div>

                <div className="ti-filtros">

                    <div className="ti-filtro">
                        <label>
                            Responsável
                        </label>

                        <select
                            value={
                                filtros.responsavel
                            }
                            onChange={(e) =>
                                alterarFiltro(
                                    "responsavel",
                                    e.currentTarget.value
                                )
                            }
                        >
                            <option value="Todos">
                                Todos
                            </option>

                            {
                                responsaveis.map(
                                    nome => (
                                        <option
                                            key={
                                                nome
                                            }
                                            value={
                                                nome
                                            }
                                        >
                                            {
                                                nome
                                            }
                                        </option>
                                    )
                                )
                            }
                        </select>
                    </div>

                    <div className="ti-filtro">
                        <label>
                            Prioridade
                        </label>

                        <select
                            value={
                                filtros.prioridade
                            }
                            onChange={(e) =>
                                alterarFiltro(
                                    "prioridade",
                                    e.currentTarget.value
                                )
                            }
                        >
                            <option value="Todas">
                                Todas
                            </option>

                            <option value="Alta">
                                🔴 Alta
                            </option>

                            <option value="Média">
                                🟡 Média
                            </option>

                            <option value="Baixa">
                                ⚪ Baixa
                            </option>
                        </select>
                    </div>

                    <div className="ti-filtro">
                        <label>
                            Status
                        </label>

                        <select
                            value={
                                filtros.status
                            }
                            onChange={(e) =>
                                alterarFiltro(
                                    "status",
                                    e.currentTarget.value
                                )
                            }
                        >
                            <option value="Todos">
                                Todos
                            </option>

                            <option value="Pendente">
                                🔴 Pendente
                            </option>

                            <option value="Em andamento">
                                🟡 Em andamento
                            </option>

                            <option value="Concluída">
                                🟢 Concluída
                            </option>
                        </select>
                    </div>

                    <button
                        className="ti-limpar"
                        onClick={
                            limparFiltros
                        }
                    >
                        🔄 Limpar filtros
                    </button>

                    <div className="ti-filtro-info">
                        Mostrando{" "}
                        <strong>
                            {
                                demandasFiltradas.length
                            }
                        </strong>{" "}
                        de{" "}
                        <strong>
                            {total}
                        </strong>{" "}
                        demandas

                        {
                            filtrosAtivos && (
                                <span className="ti-filtro-ativo">
                                    {" "}— 🔎 Filtros ativos
                                </span>
                            )
                        }
                    </div>

                </div>

                <Section
                    titulo="Em andamento"
                    icone="🟡"
                    lista={
                        andamentoLista
                    }
                    classe="ti-section-andamento"
                />

                <Section
                    titulo="Pendentes"
                    icone="🔴"
                    lista={
                        pendentesLista
                    }
                    classe="ti-section-pendente"
                />

                <Section
                    titulo="Concluídas"
                    icone="🟢"
                    lista={
                        concluidasLista
                    }
                    classe="ti-section-concluida"
                />

                <Historico />

            </div>

            {
                modal === "configuracoes" && (
                    <div
                        className="ti-overlay"
                        onClick={(e) => {
                            if (
                                e.target ===
                                e.currentTarget
                            ) {
                                setModal(null);
                            }
                        }}
                    >
                        <div className="ti-config-modal">

                            <div className="ti-modal-header">

                                <div>
                                    <h2>
                                        ⚙️ Personalização
                                    </h2>

                                    <span className="ti-modal-subtitulo">
                                        Configure a aparência de cada responsável
                                    </span>
                                </div>

                                <button
                                    className="ti-close"
                                    onClick={() =>
                                        setModal(
                                            null
                                        )
                                    }
                                >
                                    ×
                                </button>

                            </div>

                            <div className="ti-config-intro">
                                Cada responsável pode ter sua própria fonte e seu próprio fundo. A configuração fica salva automaticamente neste navegador.
                            </div>

                            <div className="ti-form-group">

                                <label>
                                    👤 Responsável
                                </label>

                                <select
                                    value={
                                        responsavelPersonalizacao
                                    }
                                    onChange={(e) =>
                                        alterarResponsavelPersonalizacao(
                                            e.currentTarget.value
                                        )
                                    }
                                >
                                    {
                                        responsaveis.map(
                                            nome => (
                                                <option
                                                    key={
                                                        nome
                                                    }
                                                    value={
                                                        nome
                                                    }
                                                >
                                                    {
                                                        nome
                                                    }
                                                </option>
                                            )
                                        )
                                    }
                                </select>

                            </div>

                            <div className="ti-config-secao">

                                <div className="ti-config-secao-titulo">
                                    🔤 Fonte
                                </div>

                                <div className="ti-form-group">

                                    <select
                                        value={
                                            configuracaoAtual.fonte
                                        }
                                        onChange={(e) =>
                                            alterarFontePersonalizacao(
                                                e.currentTarget.value
                                            )
                                        }
                                    >
                                        {
                                            fontes.map(
                                                fonte => (
                                                    <option
                                                        key={
                                                            fonte.valor
                                                        }
                                                        value={
                                                            fonte.valor
                                                        }
                                                    >
                                                        {
                                                            fonte.nome
                                                        }
                                                    </option>
                                                )
                                            )
                                        }
                                    </select>

                                </div>

                            </div>

                            <div className="ti-config-secao">

                                <div className="ti-config-secao-titulo">
                                    🎨 Fundo do Dashboard
                                </div>

                                <div className="ti-config-opcoes-fundo">

                                    {
                                        fundos.map(
                                            fundo => (
                                                <button
                                                    type="button"
                                                    key={
                                                        fundo.valor
                                                    }
                                                    className={
                                                        "ti-fundo-option fundo-" +
                                                        fundo.valor +
                                                        (
                                                            configuracaoAtual.fundo ===
                                                            fundo.valor
                                                                ? " selecionado"
                                                                : ""
                                                        )
                                                    }
                                                    onClick={() =>
                                                        alterarFundoPersonalizacao(
                                                            fundo.valor
                                                        )
                                                    }
                                                >
                                                    {
                                                        fundo.nome
                                                    }
                                                </button>
                                            )
                                        )
                                    }

                                </div>

                            </div>

                            <div
                                className={
                                    "ti-config-preview fundo-" +
                                    configuracaoAtual.fundo
                                }
                                style={{
                                    fontFamily:
                                        configuracaoAtual.fonte
                                }}
                            >

                                <div className="ti-config-preview-icon">
                                    🖥️
                                </div>

                                <div className="ti-config-preview-text">

                                    <strong>
                                        Dashboard TI
                                    </strong>

                                    <span>
                                        Prévia para {
                                            responsavelPersonalizacao
                                        }
                                    </span>

                                </div>

                            </div>

                            <button
                                type="button"
                                className="ti-config-restaurar"
                                onClick={() =>
                                    restaurarPersonalizacao(
                                        responsavelPersonalizacao
                                    )
                                }
                            >
                                🔄 Restaurar padrão de {
                                    responsavelPersonalizacao
                                }
                            </button>

                            <div className="ti-modal-actions">

                                <button
                                    className="ti-btn ti-btn-primary"
                                    onClick={() =>
                                        setModal(
                                            null
                                        )
                                    }
                                >
                                    Fechar
                                </button>

                            </div>

                        </div>
                    </div>
                )
            }

            {
                modal === "form" && (
                    <div
                        className="ti-overlay"
                        onClick={(e) => {
                            if (
                                e.target ===
                                e.currentTarget
                            ) {
                                setModal(null);
                            }
                        }}
                    >
                        <div className="ti-modal">

                            <div className="ti-modal-header">

                                <h2>
                                    {
                                        form.id
                                            ? "Alterar demanda"
                                            : "Nova demanda"
                                    }
                                </h2>

                                <button
                                    className="ti-close"
                                    onClick={() =>
                                        setModal(
                                            null
                                        )
                                    }
                                >
                                    ×
                                </button>

                            </div>

                            <div className="ti-form">

                                <div className="ti-form-group">

                                    <label>
                                        Demanda
                                    </label>

                                    <input
                                        type="text"
                                        value={
                                            form.titulo
                                        }
                                        placeholder="Digite o nome da demanda..."
                                        onInput={(e) =>
                                            setForm({
                                                ...form,
                                                titulo:
                                                    e.currentTarget.value
                                            })
                                        }
                                    />

                                </div>

                                <div className="ti-form-row">

                                    <div className="ti-form-group">

                                        <label>
                                            Responsável
                                        </label>

                                        <select
                                            value={
                                                form.responsavel
                                            }
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    responsavel:
                                                        e.currentTarget.value
                                                })
                                            }
                                        >
                                            {
                                                responsaveis.map(
                                                    nome => (
                                                        <option
                                                            key={
                                                                nome
                                                            }
                                                            value={
                                                                nome
                                                            }
                                                        >
                                                            {
                                                                nome
                                                            }
                                                        </option>
                                                    )
                                                )
                                            }
                                        </select>

                                    </div>

                                    <div className="ti-form-group">

                                        <label>
                                            Prioridade
                                        </label>

                                        <select
                                            value={
                                                form.prioridade
                                            }
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    prioridade:
                                                        e.currentTarget.value
                                                })
                                            }
                                        >
                                            <option value="Alta">
                                                🔴 Alta
                                            </option>

                                            <option value="Média">
                                                🟡 Média
                                            </option>

                                            <option value="Baixa">
                                                ⚪ Baixa
                                            </option>
                                        </select>

                                    </div>

                                </div>

                                <div className="ti-form-group">

                                    <label>
                                        Status
                                    </label>

                                    <select
                                        value={
                                            form.status
                                        }
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                status:
                                                    e.currentTarget.value
                                            })
                                        }
                                    >
                                        <option value="Pendente">
                                            🔴 Pendente
                                        </option>

                                        <option value="Em andamento">
                                            🟡 Em andamento
                                        </option>

                                        <option value="Concluída">
                                            🟢 Concluída
                                        </option>
                                    </select>

                                </div>

                                <div className="ti-form-group">

                                    <label>
                                        Prazo da demanda
                                    </label>

                                    <input
                                        type="date"
                                        value={form.prazo || ""}
                                        onInput={(e) =>
                                            setForm({
                                                ...form,
                                                prazo:
                                                    e.currentTarget.value
                                            })
                                        }
                                    />

                                </div>

                                <div className="ti-form-group">

                                    <label>
                                        Progresso da demanda: {Number(form.progresso || 0)}%
                                    </label>

                                    <div className="ti-progresso-editor">

                                        <input
                                            className="ti-progresso-range"
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="5"
                                            value={Number(form.progresso || 0)}
                                            onInput={(e) =>
                                                setForm({
                                                    ...form,
                                                    progresso:
                                                        Number(
                                                            e.currentTarget.value
                                                        )
                                                })
                                            }
                                        />

                                        <input
                                            className="ti-form-group-input ti-progresso-numero"
                                            type="number"
                                            min="0"
                                            max="100"
                                            value={Number(form.progresso || 0)}
                                            onInput={(e) =>
                                                setForm({
                                                    ...form,
                                                    progresso:
                                                        Math.min(
                                                            100,
                                                            Math.max(
                                                                0,
                                                                Number(
                                                                    e.currentTarget.value
                                                                ) || 0
                                                            )
                                                        )
                                                })
                                            }
                                        />

                                    </div>

                                    <div className="ti-progresso-editor-bar">
                                        <div
                                            className="ti-progresso-editor-fill"
                                            style={{
                                                width:
                                                    Math.min(
                                                        100,
                                                        Math.max(
                                                            0,
                                                            Number(form.progresso || 0)
                                                        )
                                                    ) + "%"
                                            }}
                                        />
                                    </div>

                                </div>

                                <div className="ti-form-group">

                                    <label>
                                        Ícone
                                    </label>

                                    <div className="ti-icones">

                                        {
                                            icones.map(
                                                (
                                                    icone,
                                                    index
                                                ) => (
                                                    <button
                                                        key={
                                                            index
                                                        }
                                                        type="button"
                                                        className={
                                                            "ti-icone-option " +
                                                            (
                                                                form.icone ===
                                                                icone
                                                                    ? "selecionado"
                                                                    : ""
                                                            )
                                                        }
                                                        onClick={() =>
                                                            setForm({
                                                                ...form,
                                                                icone:
                                                                    icone
                                                            })
                                                        }
                                                    >
                                                        {
                                                            icone
                                                        }
                                                    </button>
                                                )
                                            )
                                        }

                                    </div>

                                </div>

                                <div className="ti-form-group">

                                    <label>
                                        Observação
                                    </label>

                                    <textarea
                                        value={
                                            form.observacao
                                        }
                                        placeholder="Digite alguma observação..."
                                        onInput={(e) =>
                                            setForm({
                                                ...form,
                                                observacao:
                                                    e.currentTarget.value
                                            })
                                        }
                                    />

                                </div>

                                <div className="ti-modal-actions">

                                    <button
                                        className="ti-btn ti-btn-secondary"
                                        onClick={() =>
                                            setModal(
                                                null
                                            )
                                        }
                                    >
                                        Cancelar
                                    </button>

                                    <button
                                        className="ti-btn ti-btn-primary"
                                        onClick={
                                            salvarFormulario
                                        }
                                    >
                                        💾 Salvar demanda
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
                )
            }

            {
                modal &&
                typeof modal === "object" &&
                modal.tipo === "lista" && (
                    <div
                        className="ti-overlay"
                        onClick={(e) => {
                            if (
                                e.target ===
                                e.currentTarget
                            ) {
                                setModal(null);
                            }
                        }}
                    >

                        <div className="ti-lista-modal">

                            <div className="ti-modal-header">

                                <div>
                                    <h2>
                                        {
                                            modal.titulo
                                        }
                                    </h2>

                                    <span className="ti-modal-subtitulo">
                                        {
                                            modal.lista.length
                                        } demanda
                                        {
                                            modal.lista.length !== 1
                                                ? "s"
                                                : ""
                                        }
                                    </span>
                                </div>

                                <button
                                    className="ti-close"
                                    onClick={() =>
                                        setModal(
                                            null
                                        )
                                    }
                                >
                                    ×
                                </button>

                            </div>

                            <div className="ti-lista-demandas">

                                {
                                    modal.lista.length > 0
                                        ? modal.lista.map(
                                            item => (
                                                <div
                                                    className="ti-lista-item"
                                                    key={
                                                        String(item.id)
                                                    }
                                                    onClick={() =>
                                                        abrirVisualizacao(
                                                            item
                                                        )
                                                    }
                                                >

                                                    <div className="ti-lista-icone">
                                                        {
                                                            item.icone ||
                                                            "📋"
                                                        }
                                                    </div>

                                                    <div className="ti-lista-info">

                                                        <strong>
                                                            {
                                                                item.titulo
                                                            }
                                                        </strong>

                                                        <span>
                                                            👤 {
                                                                item.responsavel
                                                            }{" "}
                                                            •{" "}
                                                            {
                                                                item.status
                                                            }{" "}
                                                            •{" "}
                                                            {Number(item.progresso || 0)}%
                                                        </span>

                                                    </div>

                                                    <div className="ti-lista-prioridade">

                                                        <span
                                                            className={
                                                                "prioridade-badge " +
                                                                prioridadeClasse(
                                                                    item.prioridade
                                                                )
                                                            }
                                                        >
                                                            {
                                                                item.prioridade
                                                            }
                                                        </span>

                                                    </div>

                                                </div>
                                            )
                                        )
                                        : (
                                            <div className="ti-vazio">
                                                <div>
                                                    ✓
                                                </div>

                                                <span>
                                                    Nenhuma demanda encontrada
                                                </span>
                                            </div>
                                        )
                                }

                            </div>

                        </div>

                    </div>
                )
            }

            {
                modal &&
                typeof modal === "object" &&
                modal.tipo === "visualizar" && (
                    <div
                        className="ti-overlay"
                        onClick={(e) => {
                            if (
                                e.target ===
                                e.currentTarget
                            ) {
                                setModal(null);
                            }
                        }}
                    >

                        <div className="ti-modal">

                            <div className="ti-modal-header">

                                <h2>
                                    Visualização da demanda
                                </h2>

                                <button
                                    className="ti-close"
                                    onClick={() =>
                                        setModal(
                                            null
                                        )
                                    }
                                >
                                    ×
                                </button>

                            </div>

                            <div className="ti-view-icon">
                                {
                                    modal.demanda
                                        .icone
                                }
                            </div>

                            <div className="ti-view-title">
                                {
                                    modal.demanda
                                        .titulo
                                }
                            </div>

                            <div className="ti-view-grid">

                                <div className="ti-view-item">

                                    <span>
                                        Responsável
                                    </span>

                                    <strong>
                                        {
                                            modal.demanda
                                                .responsavel
                                        }
                                    </strong>

                                </div>

                                <div className="ti-view-item">

                                    <span>
                                        Prioridade
                                    </span>

                                    <strong>
                                        {
                                            modal.demanda
                                                .prioridade
                                        }
                                    </strong>

                                </div>

                                <div className="ti-view-item">

                                    <span>
                                        Status
                                    </span>

                                    <strong>
                                        {
                                            modal.demanda
                                                .status
                                        }
                                    </strong>

                                </div>

                                <div className="ti-view-item">

                                    <span>
                                        Prazo da demanda
                                    </span>

                                    <strong>
                                        {
                                            modal.demanda.prazo
                                                ? String(modal.demanda.prazo)
                                                    .split("-")
                                                    .reverse()
                                                    .join("/")
                                                : "Não definido"
                                        }
                                    </strong>

                                </div>

                            </div>

                            <div className="ti-view-progresso">

                                <div className="ti-view-progresso-top">
                                    <span>
                                        Progresso da demanda
                                    </span>

                                    <strong>
                                        {Number(modal.demanda.progresso || 0)}%
                                    </strong>
                                </div>

                                <div className="ti-view-progresso-bar">
                                    <div
                                        className="ti-view-progresso-fill"
                                        style={{
                                            width:
                                                Math.min(
                                                    100,
                                                    Math.max(
                                                        0,
                                                        Number(
                                                            modal.demanda.progresso || 0
                                                        )
                                                    )
                                                ) + "%"
                                        }}
                                    />
                                </div>

                            </div>

                            {
                                modal.demanda
                                    .observacao && (
                                    <div className="ti-view-observacao">

                                        <div className="ti-view-observacao-title">
                                            Observação
                                        </div>

                                        <div>
                                            {
                                                modal.demanda
                                                    .observacao
                                            }
                                        </div>

                                    </div>
                                )
                            }

                            <div className="ti-modal-actions">

                                <button
                                    className="ti-btn ti-btn-secondary"
                                    onClick={() =>
                                        abrirEdicao(
                                            modal.demanda
                                        )
                                    }
                                >
                                    ✏️ Alterar
                                </button>

                                <button
                                    className="ti-btn ti-btn-primary"
                                    onClick={() =>
                                        setModal(
                                            null
                                        )
                                    }
                                >
                                    Fechar
                                </button>

                            </div>

                        </div>

                    </div>
                )
            }

            {
                celebracao && (
                    <div className="celebracao">

                        <div className="fogo fogo1" />
                        <div className="fogo fogo2" />
                        <div className="fogo fogo3" />
                        <div className="fogo fogo4" />
                        <div className="fogo fogo5" />
                        <div className="fogo fogo6" />

                        <div className="balao balao1" />
                        <div className="balao balao2" />
                        <div className="balao balao3" />

                    </div>
                )
            }

        </div>
    );
}