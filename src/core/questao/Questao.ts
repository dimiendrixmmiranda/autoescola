import Alternativa from "../alternativa/Alternativa";
import { Pergunta } from "../pergunta/Pergunta";

export default interface Questao {
    id: number
    pergunta: Pergunta
    categoria: string
    alternativas: Alternativa[]
    respostaUsuario: string | null
    acertou: boolean
    justificativaResposta: string
}