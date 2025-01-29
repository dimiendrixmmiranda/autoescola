'use client';
import Questao from "@/core/questao/Questao";
import definirLetraAlternativa from "@/utils/definirLetraAlternativa";
import { embaralharPerguntas } from "@/utils/embaralhar";
import { formatarTempo } from "@/utils/formatarTempo";
import { handleNavegarQuestao, handlePerguntaAnterior, handlePerguntaProxima } from "@/utils/handleQuestoes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface QuestionarioProps {
    arrayDeQuestoes: Questao[];
}

export default function Questionario({ arrayDeQuestoes }: QuestionarioProps) {
    const [indexQuestaoAtual, setIndexQuestaoAtual] = useState(0);
    const [alternativaSelecionada, setAlternativaSelecionada] = useState<number | null>(null);
    const [questionarioAlterado] = useState<Questao[]>(embaralharPerguntas(arrayDeQuestoes))
    const [respostas, setRespostas] = useState<(string | null)[]>(Array(questionarioAlterado.length).fill(null));
    const [relogio, setRelogio] = useState(3000)

    const router = useRouter()

    useEffect(() => {
        if (relogio <= 0) {
            handleFinalizar()
        };

        const timer = setInterval(() => {
            setRelogio((prevTime) => prevTime - 1);
        }, 1000)

        return () => clearInterval(timer)
    }, [relogio])

    

    function handleSelecionarAlternativa(optionIndex: number): void {
        setAlternativaSelecionada(optionIndex);

        const questaoAtual = questionarioAlterado[indexQuestaoAtual];
        const alternativaSelecionada = questaoAtual.alternativas[optionIndex];
        // Verifique se a alternativa selecionada é a correta
        const isCorreta = alternativaSelecionada.certa;
        // Atualize a resposta do usuário
        const atualizarQuestoes = [...questionarioAlterado];
        atualizarQuestoes[indexQuestaoAtual].respostaUsuario = alternativaSelecionada.conteudo;
        // Atualize a questão com o status de acerto
        atualizarQuestoes[indexQuestaoAtual].acertou = isCorreta;

        const novaResposta = [...respostas];
        novaResposta[indexQuestaoAtual] = alternativaSelecionada.conteudo;
        setRespostas(novaResposta);
    }

    function handleFinalizar() {
        const resultado = questionarioAlterado.map(questao => {
            const respostaCerta = questao.alternativas.find(alt => alt.certa)?.conteudo;
            const acertou = respostaCerta === questao.respostaUsuario;
            return { ...questao, acertou };
        });
        const acertos = resultado.filter(questao => questao.acertou).length;
        localStorage.setItem("resultadoQuiz", JSON.stringify(resultado));
        localStorage.setItem("acertosQuiz", acertos.toString());
        localStorage.setItem("tempoDeProva", relogio.toString());
        router.push("/finalizarQuestionario");
    }


    return (
        <div className="flex flex-col gap-4 w-full h-full p-4 text-black bg-zinc-200 lg:grid lg:grid-cols-2 lg:p-8">
            <div className="flex flex-col gap-3 lg:gap-4">
                {/* Div responsável pela pergunta */}
                <div className="flex flex-col gap-2 lg:text-xl">
                    <h2>
                        {indexQuestaoAtual + 1}-) {questionarioAlterado[indexQuestaoAtual].pergunta.enunciado}
                    </h2>
                    {questionarioAlterado[indexQuestaoAtual].pergunta.imagem && (
                        <div className="relative w-full h-[200px]">
                            <Image
                                alt="Imagem da Pergunta"
                                src={questionarioAlterado[indexQuestaoAtual].pergunta.imagem}
                                fill
                            />
                        </div>
                    )}
                    {questionarioAlterado[indexQuestaoAtual].pergunta.listaEnumerada && (
                        <ul>
                            {questionarioAlterado[indexQuestaoAtual].pergunta.listaEnumerada.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {questionarioAlterado[indexQuestaoAtual].pergunta.complementoDoEnunciado && (
                        <p>{questionarioAlterado[indexQuestaoAtual].pergunta.complementoDoEnunciado}</p>
                    )}
                </div>
                {/* Alternativas */}
                <div className="lg:text-xl">
                    <ul className="flex flex-col gap-1">
                        {questionarioAlterado[indexQuestaoAtual].alternativas.map((alternativa, i) => (
                            <li
                                key={i}
                                onClick={() => handleSelecionarAlternativa(i)}
                                className={`cursor-pointer p-2 rounded border border-black ${alternativaSelecionada === i ? "bg-[--laranja-claro] text-white font-bold" : "bg-[--bege]"
                                    }`}
                            >
                                <p>
                                    {definirLetraAlternativa(i)} {alternativa.conteudo}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Botões de navegação */}
                <div className="w-full grid grid-cols-2 gap-4 mt-auto mb-4">
                    <button
                        className="max-w-[90%] mx-auto w-full py-1 font-bold uppercase rounded-lg text-white bg-red-600"
                        onClick={() => {
                            handlePerguntaAnterior(indexQuestaoAtual, setIndexQuestaoAtual);
                            const indexAnterior = indexQuestaoAtual - 1;
                            setAlternativaSelecionada(
                                questionarioAlterado[indexAnterior]?.alternativas.findIndex(
                                    (alt) => alt.conteudo === respostas[indexAnterior]
                                ) ?? null
                            );
                        }}
                        style={{ boxShadow: '0 0 1px 2px black' }}
                    >
                        Anterior
                    </button>
                    <button
                        className="max-w-[90%] mx-auto w-full py-1 font-bold uppercase rounded-lg text-white bg-green-600"
                        onClick={() => {
                            handlePerguntaProxima(indexQuestaoAtual, setIndexQuestaoAtual, questionarioAlterado);
                            const indexProximo = indexQuestaoAtual + 1;
                            setAlternativaSelecionada(
                                questionarioAlterado[indexProximo]?.alternativas.findIndex(
                                    (alt) => alt.conteudo === respostas[indexProximo]
                                ) ?? null
                            );
                        }}
                        style={{ boxShadow: '0 0 1px 2px black' }}
                    >
                        Próximo
                    </button>
                </div>
            </div>
            {/* Lista de perguntas por botao */}
            <div className="max-w-[350px] rounded-lg h-fit w-full mx-auto bg-[--preto] p-2 flex flex-col gap-5 lg:m-0 lg:ml-auto lg:p-4" style={{ boxShadow: '0px 0px 1px 2px black' }}>
                <h2 className="uppercase font-black text-4xl text-center text-white" style={{textShadow: '1px 1px 2px black'}}>{formatarTempo(relogio)}</h2>
                <p className="text-center font-semibold leading-4 text-white -mt-2">Mínimo necessário para a aprovação: 21 Questões!</p>
                <ul className="grid grid-cols-5 gap-2">
                    {
                        questionarioAlterado.map((_, i) => {
                            const respostaSelecionada = respostas[i];
                            const indiceResposta = questionarioAlterado[i].alternativas.findIndex(
                                (alternativa) => alternativa.conteudo === respostaSelecionada
                            );
                            const letraResposta = indiceResposta !== -1 ? String.fromCharCode(65 + indiceResposta) : null;
                            return (
                                <li key={i} className="flex justify-center items-center">
                                    <button
                                        className={`h-[45px] w-[45px] rounded-full overflow-hidden font-bold text-white ${i === indexQuestaoAtual ? 'bg-orange-600': 'bg-[--laranja-claro]'}`}
                                        style={{ textShadow: '1px 1px 2px black' }}
                                        onClick={() => {
                                            handleNavegarQuestao(i, setIndexQuestaoAtual);
                                            setAlternativaSelecionada(
                                                questionarioAlterado[i].alternativas.findIndex(
                                                    (alt) => alt.conteudo === respostas[i]
                                                ) ?? null
                                            );
                                        }}>
                                        {
                                            letraResposta ?
                                                <div className="relative w-full h-full flex justify-center items-center bg-green-600">
                                                    <p>{letraResposta}</p>
                                                    <p className="absolute top-2 right-[.7em] text-[.6em]">{i + 1}</p>
                                                </div>
                                                :
                                                <p>{i + 1}</p>
                                        }
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button onClick={handleFinalizar} className="w-full bg-red-600 text-white uppercase font-bold text-center py-2">Terminar Prova!</button>
                </div>
            </div>
        </div>
    );
}
