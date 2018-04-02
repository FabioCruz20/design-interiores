class Telefone {
    numero: String;

    constructor(numero: String) {
        this.numero = numero;
    }
}

class Dependente {
    cpf_dependente: String;
    nome_dependente: String;
    idade_dependente: Number;
    tipo_relacionamento: String;
    relacionamento: String;

    constructor(
        cpf_dependente: String,
        nome_dependente: String,
        idade_dependente: Number,
        tipo_relacionamento: String,
        relacionamento: String
    ) {
        this.cpf_dependente = cpf_dependente;
        this.nome_dependente = nome_dependente;
        this.idade_dependente = idade_dependente;
        this.tipo_relacionamento = tipo_relacionamento;
        this.relacionamento = relacionamento;
    }
}

class Cliente {
  
    cpf: String;
    nome: String;
    endereco: String;
    telefones: Telefone[];
    observacoes: String;
    dependentes: Dependente[];

    constructor(
        cpf: String,
        nome: String,
        endereco: String,
        telefones: Telefone[],
        observacoes: String,
        dependentes: Dependente[]
    ) {
        this.cpf = cpf;
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = telefones;
        this.observacoes = observacoes;
        this.dependentes = dependentes;
    }
}

export class Projeto {
 
    descricao: String;
    data_inicio: Date;
    data_fim: Date;
    orcamento: Number;
    cliente: Cliente;

    constructor(
        descricao: String,
        data_inicio: Date,
        data_fim: Date,
        orcamento: Number,
        cliente: Cliente
    ) {
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
        this.orcamento = orcamento;
        this.cliente = cliente;
    }
}
