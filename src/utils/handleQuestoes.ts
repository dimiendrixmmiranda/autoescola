import Questao from "@/core/questao/Questao";

function handlePerguntaAnterior(
    indexQuestaoAtual: number,
    setIndexQuestaoAtual: React.Dispatch<React.SetStateAction<number>>
): void {
    if (indexQuestaoAtual > 0) {
        setIndexQuestaoAtual(prevIndex => prevIndex - 1);
    }else {
        setIndexQuestaoAtual(29)
    }
}

function handlePerguntaProxima(
    indexQuestaoAtual: number,
    setIndexQuestaoAtual: React.Dispatch<React.SetStateAction<number>>,
    arrayDeQuestoes: Questao[]
): void {
    if (indexQuestaoAtual < arrayDeQuestoes.length - 1) {
        setIndexQuestaoAtual(prevIndex => prevIndex + 1);
    } else {
        setIndexQuestaoAtual(0)
    }
}

function handleNavegarQuestao(
    index: number,
    setIndexQuestaoAtual: React.Dispatch<React.SetStateAction<number>>
): void {
    setIndexQuestaoAtual(index);
}


export {
    handlePerguntaProxima,
    handlePerguntaAnterior,
    handleNavegarQuestao,
}