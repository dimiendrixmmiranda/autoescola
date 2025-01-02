import Alternativa from "../alternativa/Alternativa"

export default interface Pergunta {
    pergunta: string
    alternativas: Alternativa[]
    resposta?: string | null
    imagem?: string
    acertou?: boolean
}