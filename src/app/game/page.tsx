'use client'
import { useEffect, useRef, useState } from "react";
import Questionario from "@/components/questionario/Questionario";
import Questao from "@/core/questao/Questao";
import Template from "@/components/template/Template";
import { embaralhar } from "@/utils/embaralhar";

export default function Page() {
    const [arrayDeQuestoes, setArrayDeQuestoes] = useState<Questao[] | null>(null);
    const BASE_URL = 'http://localhost:3000/api';
    const carregado = useRef(false);

    async function carregarQuestao(id: number) {
        const resp = await fetch(`${BASE_URL}/users/questao/${id}`);
        const questaoJson = await resp.json();
        return questaoJson;
    }

    useEffect(() => {
        if (carregado.current) return;

        const carregarTudo = async () => {
            const respIds = await fetch(`${BASE_URL}/users/questionarios/geral`)
            const ids = await respIds.json()

            const questoes = await Promise.all(ids.map((id: number) => carregarQuestao(id)))
            const questoesComRespostasEmbaralhadas = questoes.map(questao => ({
                ...questao,
                alternativas: embaralhar(questao.alternativas),
            }));

            setArrayDeQuestoes(questoesComRespostasEmbaralhadas)
        }

        carregarTudo()
        carregado.current = true
    }, [])

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
