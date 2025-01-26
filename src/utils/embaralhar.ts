import Questao from "@/core/questao/Questao";

function embaralharPerguntas(arrayDeQuestoes: Questao[]): Questao[] {
    // 5 é o numero de questoes
    const questoesEmbaralhadas: Questao[] = [...arrayDeQuestoes].sort(() => Math.random() - 0.5).slice(0, 30)
    
    // embaralhando alternativas
    const questoesEAlternativasEmbaralhadas = questoesEmbaralhadas.map((questao) => {
        return {
            ...questao,
            alternativas: [...questao.alternativas.sort(() => Math.random() - 0.5)]
        }
    })
    return questoesEAlternativasEmbaralhadas
}


export {
    embaralharPerguntas
}