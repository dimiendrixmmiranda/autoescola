'use client'
import { useEffect, useState } from "react";
import Questionario from "@/components/questionario/Questionario";
import Questao from "@/core/questao/Questao";
import Template from "@/components/template/Template";
import listaDeQuestoes from "@/core/constants/listaDeQuestoes";
import { embaralhar } from "@/utils/embaralhar";

export default function Page() {
    const [arrayDeQuestoes, setArrayDeQuestoes] = useState<Questao[] | null>(null);

    useEffect(() => {
        const questoes = embaralhar(listaDeQuestoes).slice(0, 30)
        const questoesComRespostasEmbaralhadas = questoes.map(questao => {
            return {
                ...questao,
                alternativas: embaralhar(questao.alternativas)
            }
        })
        setArrayDeQuestoes(questoesComRespostasEmbaralhadas)
    },[])
    return (
        <Template>
            {/* arrumar o estilo do h2 */}
            <div className="w-full h-full">
                {arrayDeQuestoes ? (
                    <Questionario arrayDeQuestoes={arrayDeQuestoes} />
                ) : (
                    <h2>Carregando questões...</h2>
                )}
            </div>
        </Template>
    );
}
