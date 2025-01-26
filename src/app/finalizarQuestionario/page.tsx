'use client';

import Template from '@/components/template/Template';
import Questao from '@/core/questao/Questao';
import definirLetraAlternativa from '@/utils/definirLetraAlternativa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
    const [resultados, setResultados] = useState<Questao[]>([]);
    const [acertos, setAcertos] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
        const storedResultados = localStorage.getItem("resultadoQuiz");
        const storedAcertos = localStorage.getItem("acertosQuiz");

        if (storedResultados && storedAcertos) {
            setResultados(JSON.parse(storedResultados));
            setAcertos(parseInt(storedAcertos, 10));
        }
    }, []);

    const resetarQuiz = () => {
        localStorage.removeItem("resultadoQuiz");
        localStorage.removeItem("acertosQuiz");
        setResultados([]);
        setAcertos(0);
        router.push("/");
    };

    return (
        <Template>
            <div className='p-2 w-full bg-zinc-200 flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:p-8 lg:gap-6 xl:gap-10'>
                <div className='flex flex-col gap-6 w-full lg:col-start-2 lg:col-end-4'>
                    <div className='text-black text-center'>
                        {acertos >= 21 ? <p className='text-2xl text-green-700 font-black uppercase leading-7'>Aprovado! Você acertou {acertos}/{resultados.length}</p> :
                            <div className='flex flex-col gap-2 text-red-700'>
                                <p className='text-2xl font-black uppercase leading-7'>Reprovado! Você acertou {acertos}/{resultados.length}. Tente Novamente!</p>
                                <p className='leading-5'>Para ser aprovado é necessário acertar no mínimo 21 questões</p>
                            </div>}
                    </div>
                    <ul className='flex flex-col gap-6'>
                        {
                            resultados.map((questao: Questao, i: number) => {
                                return (
                                    <li key={i} className={`${questao.acertou ? 'bg-green-600' : 'bg-red-500'} p-4 relative`} style={{ boxShadow: '0 0 1px 2px black' }}>
                                        <div className="flex flex-col gap-2 mt-2">
                                            <h2>
                                                {i + 1}-) {questao.pergunta.enunciado}
                                            </h2>
                                            {questao.pergunta.imagem && (
                                                <div className="relative w-full h-[200px]">
                                                    <Image
                                                        alt="Imagem da Pergunta"
                                                        src={questao.pergunta.imagem}
                                                        fill
                                                    />
                                                </div>
                                            )}
                                            {questao.pergunta.listaEnumerada && (
                                                <ul>
                                                    {questao.pergunta.listaEnumerada.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {questao.pergunta.complementoDoEnunciado && (
                                                <p>{questao.pergunta.complementoDoEnunciado}</p>
                                            )}
                                        </div>
                                        <div>
                                            <ul className='flex flex-col gap-1'>
                                                {questao.alternativas.map((alternativa, i) => (
                                                    <li
                                                        key={i}
                                                        className={`relative p-1 ${alternativa.certa ? 'bg-green-600' : ''}`}
                                                    >
                                                        <p>
                                                            {definirLetraAlternativa(i)} {alternativa.conteudo}
                                                        </p>
                                                        {
                                                            questao.respostaUsuario === alternativa.conteudo ? <span className='absolute top-1 left-0 bg-black p-3 w-5 h-5 flex justify-center items-center rounded-full text-sm'>X</span> : ''
                                                        }
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='mt-4'>
                                            <p><b>{questao.acertou ? 'Acertou!' : 'Errou!'}</b></p>
                                            <p>{questao.justificativaResposta}. <b>Alternativa correta: {definirLetraAlternativa(questao.alternativas.findIndex(alternativa => alternativa.certa))}</b></p>
                                        </div>
                                        <div className='absolute top-1 right-2'>
                                            <p className='text-[.7em] capitalize'>{questao.categoria}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className='bg-red-600 text-2xl w-full py-2' style={{ boxShadow: '0 0 1px 2px black' }} onClick={resetarQuiz}>Finalizar</button>
                </div>
                <div className='bg-red-400 lg:col-start-1 lg:col-end-2 lg:row-start-1'>
                    <p>outros conteudos</p>
                </div>
            </div>
        </Template>
    );
}
