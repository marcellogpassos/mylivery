import { Endereco } from "./endereco";

export interface User {
    codigo: string;
    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    dataNascimento: Date;
    sexo: "M" | "F";
    cpf: string;
    endereco: Endereco;
    createdAt: Date;
    updatedAt: Date;
}