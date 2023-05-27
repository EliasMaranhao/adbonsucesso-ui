export interface Membro {
    codigo: number;
    nome: string;
    dataNascimento: Date;
    dataBatismo: Date;
    telefone: string;
    email: string;
    status: Status;
    cargo: Cargo;
    congregacao: string;
    endereco: Endereco;
}


export interface Endereco {
    rua: string;
    numero: number;
    complemento: string;
    cep: string;
    bairro: string;
    cidade: string;
    estado: string;
}


export enum Status {
    EM_ATIVIDADE = 'Em Atividade',
    SUSPENSO = 'Suspenso',
    EXCLUIDO = 'Excluido',
    MUDOU_DE_IGREJA = 'Mudou de igreja',
    DESVIADO = 'Desviado'
}


export enum Cargo {
    PASTOR = 'Pastor',
    EVANGELISTA = 'Evangelista',
    PRESBITERO = 'Presbitero',
    DIACONO = 'Diacono',
    AUXILIAR = 'Auxiliar',
    MUSICO = 'Musico',
    MEMBRO = 'Membro'
}