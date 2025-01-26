'use client'
import { useEffect, useState } from "react";
import Questionario from "@/components/questionario/Questionario";
import Questao from "@/core/questao/Questao";
import Template from "@/components/template/Template";
import listaDeQuestoes from "@/core/constants/listaDeQuestoes";

export default function Page() {
    const [arrayDeQuestoes, setArrayDeQuestoes] = useState<Questao[] | null>(null);

    useEffect(() => {
        setArrayDeQuestoes(listaDeQuestoes);
    }, []);

    return (
        <Template>
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
