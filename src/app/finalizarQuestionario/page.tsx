'use client';

import Template from '@/components/template/Template';
import Questao from '@/core/questao/Questao';
import definirLetraAlternativa from '@/utils/definirLetraAlternativa';
import { formatarTempo } from '@/utils/formatarTempo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
    const [resultados, setResultados] = useState<Questao[]>([]);
    const [acertos, setAcertos] = useState<number>(0);

    const [questoesDirecaoDefensiva, setQuestoesDirecaoDefensiva] = useState<Questao[] | []>([])
    const [questoesSinalizacao, setQuestoesSinalizacao] = useState<Questao[] | []>([])
    const [questoesLegislacao, setQuestoesLegislacao] = useState<Questao[] | []>([])
    const [questoesMecanicaBasica, setQuestoesMecanicaBasica] = useState<Questao[] | []>([])
    const [questoesPrimeirosSocorros, setQuestoesPrimeirosSocorros] = useState<Questao[] | []>([])
    const [tempoDeProva, setTempoDeProva] = useState('')
    const router = useRouter();

    console.log(tempoDeProva)
    useEffect(() => {
        const storedResultados = localStorage.getItem("resultadoQuiz");
        const storedAcertos = localStorage.getItem("acertosQuiz");
        const tempoDeProva = localStorage.getItem("tempoDeProva");


        if (storedResultados && storedAcertos && tempoDeProva) {
            const resultadosCarregados = JSON.parse(storedResultados)
            setResultados(resultadosCarregados)
            setAcertos(parseInt(storedAcertos, 10))
            setTempoDeProva(tempoDeProva)
            // Atualiza as categorias diretamente após carregar os resultados
            setQuestoesDirecaoDefensiva(resultadosCarregados.filter((cat: Questao) => cat.categoria === 'direcao-defensiva'));
            setQuestoesSinalizacao(resultadosCarregados.filter((cat: Questao) => cat.categoria === 'sinalizacao'));
            setQuestoesLegislacao(resultadosCarregados.filter((cat: Questao) => cat.categoria === 'legislacao'));
            setQuestoesMecanicaBasica(resultadosCarregados.filter((cat: Questao) => cat.categoria === 'mecanica-basica'));
            setQuestoesPrimeirosSocorros(resultadosCarregados.filter((cat: Questao) => cat.categoria === 'primeiros-socorros'));
        }
    }, []);

    const resetarQuiz = () => {
        localStorage.removeItem("resultadoQuiz");
        localStorage.removeItem("acertosQuiz");
        localStorage.removeItem("tempoDeProva");
        setResultados([]);
        setAcertos(0);
        setTempoDeProva('')
        router.push("/");
    };

    function gerarEstatistica(acertos: number, quantidade: number): boolean {
        const acertosMinimos = quantidade * 0.7
        if (acertos >= acertosMinimos) {
            return true
        } else {
            return false
        }
    }

    return (
        <Template>
            <div className='p-2 w-full bg-zinc-200 flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:p-8 lg:gap-6 xl:gap-10'>
                <div className='text-black text-center lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2'>
                    {acertos >= 21 ? <p className='text-2xl text-green-700 font-black uppercase leading-7'>Aprovado! Você acertou {acertos}/{resultados.length}</p> :
                        <div className='flex flex-col gap-2 text-red-700'>
                            <p className='text-2xl font-black uppercase leading-7'>Reprovado! Você acertou {acertos}/{resultados.length}. Tente Novamente!</p>
                            <p className='leading-5'>Para ser aprovado é necessário acertar no mínimo 21 questões</p>
                        </div>}
                </div>
                <div className='bg-[--preto] p-4 h-fit lg:col-start-1 lg:col-end-2 lg:row-start-2'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-2xl text-center font-bold'>Estatísticas</h3>
                        <div className='text-lg' style={{ display: 'grid', gridTemplateColumns: '1fr 120px' }}>
                            <h4>Tempo de Prova:</h4>
                            <p className='text-center'>{formatarTempo(3000 - parseInt(tempoDeProva))} - 50:00</p>
                        </div>
                        <ul className='flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-1'>
                            {
                                questoesLegislacao.length > 0 ? (
                                    <li className={`p-2 grid gap-2 sm:gap-2 items-center ${gerarEstatistica(questoesLegislacao.filter((questao: Questao) => questao.acertou).length, questoesLegislacao.length) ? 'bg-green-500' : 'bg-red-600'}`} style={{ gridTemplateColumns: '1fr 40px' }}>
                                        <h4 className='text-lg font-bold leading-5'>Questões de Legislação</h4>
                                        <p className='mt-1'>{questoesLegislacao.filter((questao: Questao) => questao.acertou).length}/{questoesLegislacao.length}</p>
                                        <p className='col-start-1 leading-5 col-end-3 uppercase text-center text-lg -mt-1'>{gerarEstatistica(questoesLegislacao.filter((questao: Questao) => questao.acertou).length, questoesLegislacao.length) ? 'Ótimo! 😆' : 'Precisa Melhorar! 😱'}</p>
                                    </li>
                                ) : ''
                            }
                            {
                                questoesDirecaoDefensiva.length > 0 ? (
                                    <li className={`p-2 grid gap-2 sm:ga items-center ${gerarEstatistica(questoesDirecaoDefensiva.filter((questao: Questao) => questao.acertou).length, questoesDirecaoDefensiva.length) ? 'bg-green-500' : 'bg-red-600'}`} style={{ gridTemplateColumns: '1fr 40px' }}>
                                        <h4 className='text-lg font-bold leading-5'>Questões de Legislação</h4>
                                        <p className='mt-1'>{questoesDirecaoDefensiva.filter((questao: Questao) => questao.acertou).length}/{questoesDirecaoDefensiva.length}</p>
                                        <p className='col-start-1 leading-5 col-end-3 uppercase text-center text-lg -mt-1'>{gerarEstatistica(questoesDirecaoDefensiva.filter((questao: Questao) => questao.acertou).length, questoesDirecaoDefensiva.length) ? 'Ótimo! 😆' : 'Precisa Melhorar! 😱'}</p>
                                    </li>
                                ) : ''
                            }

                            {
                                questoesSinalizacao.length > 0 ? (
                                    <li className={`p-2 grid gap-2 sm:ga items-center ${gerarEstatistica(questoesSinalizacao.filter((questao: Questao) => questao.acertou).length, questoesSinalizacao.length) ? 'bg-green-500' : 'bg-red-600'}`} style={{ gridTemplateColumns: '1fr 40px' }}>
                                        <h4 className='text-lg font-bold leading-5'>Questões de Legislação</h4>
                                        <p className='mt-1'>{questoesSinalizacao.filter((questao: Questao) => questao.acertou).length}/{questoesSinalizacao.length}</p>
                                        <p className='col-start-1 leading-5 col-end-3 uppercase text-center text-lg -mt-1'>{gerarEstatistica(questoesSinalizacao.filter((questao: Questao) => questao.acertou).length, questoesSinalizacao.length) ? 'Ótimo! 😆' : 'Precisa Melhorar! 😱'}</p>
                                    </li>
                                ) : ''
                            }
                            {
                                questoesMecanicaBasica.length > 0 ? (
                                    <li className={`p-2 grid gap-2 sm:ga items-center ${gerarEstatistica(questoesMecanicaBasica.filter((questao: Questao) => questao.acertou).length, questoesMecanicaBasica.length) ? 'bg-green-500' : 'bg-red-600'}`} style={{ gridTemplateColumns: '1fr 40px' }}>
                                        <h4 className='text-lg font-bold leading-5'>Questões de Legislação</h4>
                                        <p className='mt-1'>{questoesMecanicaBasica.filter((questao: Questao) => questao.acertou).length}/{questoesMecanicaBasica.length}</p>
                                        <p className='col-start-1 leading-5 col-end-3 uppercase text-center text-lg -mt-1'>{gerarEstatistica(questoesMecanicaBasica.filter((questao: Questao) => questao.acertou).length, questoesMecanicaBasica.length) ? 'Ótimo! 😆' : 'Precisa Melhorar! 😱'}</p>
                                    </li>
                                ) : ''
                            }
                            {
                                questoesPrimeirosSocorros.length > 0 ? (
                                    <li className={`p-2 grid gap-2 sm:ga items-center ${gerarEstatistica(questoesPrimeirosSocorros.filter((questao: Questao) => questao.acertou).length, questoesPrimeirosSocorros.length) ? 'bg-green-500' : 'bg-red-600'}`} style={{ gridTemplateColumns: '1fr 40px' }}>
                                        <h4 className='text-lg font-bold leading-5'>Questões de Legislação</h4>
                                        <p className='mt-1'>{questoesPrimeirosSocorros.filter((questao: Questao) => questao.acertou).length}/{questoesPrimeirosSocorros.length}</p>
                                        <p className='col-start-1 leading-5 col-end-3 uppercase text-center text-lg -mt-1'>{gerarEstatistica(questoesPrimeirosSocorros.filter((questao: Questao) => questao.acertou).length, questoesPrimeirosSocorros.length) ? 'Ótimo! 😆' : 'Precisa Melhorar! 😱'}</p>
                                    </li>
                                ) : ''
                            }

                        </ul>
                        <button className='bg-red-600 text-2xl w-full py-2 mt-4' style={{ boxShadow: '0 0 1px 2px black' }} onClick={resetarQuiz}>Finalizar</button>
                    </div>
                </div>
                <div className='flex flex-col gap-6 w-full lg:col-start-2 lg:col-end-4'>
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
                                            <p className='text-[.7em] capitalize'>{questao.categoria.replace('-', ' ')}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* ancora */}
                    <div className='grid grid-cols-2 gap-2'>
                        <Link className='bg-[--laranja-escuro] text-center py-1 rounded-md' style={{textShadow: '1px 1px 2px black'}} href={'#topo'}>Voltar ao topo</Link>
                        <Link className='bg-[--laranja-escuro] text-center py-1 rounded-md' style={{textShadow: '1px 1px 2px black'}} href={'/'}>Voltar</Link>
                    </div>
                </div>
            </div>
        </Template>
    );
}
