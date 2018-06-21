import { Geopoint } from "./geopoint";

export interface Endereco {
    cep: string;
    uf: string;
    municipio: string;
    ibge: string;
    bairro: string;
    logradouro: string;
    numero: string;
    complemento: string;
    geopoint: Geopoint;
}