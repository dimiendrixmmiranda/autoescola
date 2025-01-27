'use client'
import Questionario from "@/components/questionario/Questionario";
import Template from "@/components/template/Template";
import listaDeQuestoes from "@/core/constants/listaDeQuestoes";
import Questao from "@/core/questao/Questao";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const categoria = slug != undefined ? slug.split(/-(.*)/i).filter((cat) => cat)[1] : null
    const [visible, setVisible] = useState(false)
    const [arrayDeQuestoes, setArrayDeQuestoes] = useState<Questao[] | null>(null);

    useEffect(() => {
        setArrayDeQuestoes(listaDeQuestoes.filter(questao => questao.categoria.toLowerCase() === categoria?.toLowerCase()))
    }, [categoria])

    console.log(arrayDeQuestoes)

    return (
        <Template>
            <div className="w-full h-full">
                <div className={`w-full h-full flex-col gap-4 justify-center items-center ${visible ? 'hidden' : 'flex'}`}>
                    <h2 className="font-black uppercase text-3xl text-center">{categoria?.replace('-', ' ')}</h2>
                    <button className="cursor-pointer uppercase font-black text-2xl bg-black px-4 py-2 rounded-lg" onClick={() => setVisible(true)}>Começar!</button>
                </div>
                <div className={`w-full h-full bg-purple-700 ${visible ? 'flex' : 'hidden'}`}>
                    {arrayDeQuestoes ? (
                        <Questionario arrayDeQuestoes={arrayDeQuestoes} />
                    ) : (
                        <h2>Carregando questões...</h2>
                    )}
                </div>
            </div>
        </Template>
    )
}