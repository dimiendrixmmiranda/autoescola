import Questao from "@/core/questao/Questao"

function quantidadeDeAcertos(questionario: Questao[]) {
    let acertos: number = 0
    for (let i = 0; i < questionario.length; i++) {
        if (questionario[i].acertou) {
            acertos++
        }
    }
    return acertos
}

export{
    quantidadeDeAcertos
}