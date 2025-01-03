'use client';
import listaDeMenus from "@/core/constants/listaDeMenus";
import listaDePerguntas from "@/core/constants/listaDePerguntas";
import listaDeRedesSociais from "@/core/constants/listaDeRedesSociais";
import Pergunta from "@/core/pergunta/Pergunta";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
	const [visibleTelaInicial, setVisibleTelaInicial] = useState(true);
	const [visibleTelaJogo, setVisibleTelaJogo] = useState(false)
	const [visibleTelaRespostas, setVisibleTelaRespostas] = useState(false)

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<(string | null)[]>(Array(listaDePerguntas.length).fill(null));
	const [resultado, setResultado] = useState<Pergunta[] | null>(null)
	const [acertos, setAcertos] = useState<number | null>(null)
	const [isClient, setIsClient] = useState(false)
	useEffect(() => {
		setIsClient(true)
	}, [])

	const handleOptionClick = (option: string) => {
		const updatedAnswers = [...answers];
		updatedAnswers[currentQuestionIndex] = option;
		setAnswers(updatedAnswers);
		listaDePerguntas[currentQuestionIndex].resposta = option
	};

	const handleProximaPergunta = () => {
		if (currentQuestionIndex < listaDePerguntas.length - 1) {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
		} else {
			alert("Fim do quiz!");
		}
	};

	// Volta para a pergunta anterior
	const handlePerguntaAnterior = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
		}
	};

	const handleQuestionNavigation = (index: number) => {
		setCurrentQuestionIndex(index);
	};


	const handleTerminarQuestionario = () => {
		setVisibleTelaJogo(false)
		setVisibleTelaRespostas(true)

		const resultado = listaDePerguntas.map((pergunta) => {
			const respostaCerta = pergunta.alternativas.find(alt => alt.certa)?.conteudo
			const acertou = respostaCerta === pergunta.resposta;
			return {
				...pergunta,
				acertou
			}
		})
		setResultado(resultado)
		const acertos = resultado.filter(pergunta => pergunta.acertou).length;
		setAcertos(acertos)
	}

	const handleReiniciarQuestionario = () => {
		listaDePerguntas.forEach((pergunta) => {
			pergunta.resposta = null
		})
		setAnswers(Array(listaDePerguntas.length).fill(null))
		setCurrentQuestionIndex(0)
		setVisibleTelaRespostas(false)
		setVisibleTelaInicial(true)
		setAcertos(0)
	};

	return (
		isClient && (
			<div className="bg-[--laranja] autoescola">
				<header className="bg-[--preto] py-4 w-full flex justify-center items-center relative md:justify-start md:px-4">
					<Link href={'/'}>
						<h1 className="titulo font-black text-3xl text-center">AutoEscola</h1>
					</Link>
					<button className="w-12 h-12 flex justify-center items-center text-3xl absolute top-[50%] right-0 md:hidden" style={{ transform: 'translate(0, -50%)' }}><GiHamburgerMenu /></button>
					<ul className="hidden gap-3 mx-auto md:flex lg:gap-6 xl:mx-0 xl:ml-auto xl:mr-6">
						{
							listaDeMenus.map((menu, i) => {
								return (
									<li key={i} className="text-lg font-bold p-1 relative xl:px-5 menu">
										<Link href={menu.link} className="w-full h-full">
											<div className="flex items-center gap-1 w-full h-full">
												{menu.icone}
												<p>{menu.texto}</p>
												<ul className="hidden">
													{
														menu.submenu?.map((sub, j) => {
															return (
																<li key={j} className="leading-5 p-1 text-center border-t-2 border-black  hover:bg-[--vermelho-claro]">
																	<Link href={sub.texto}>
																		{sub.texto}
																	</Link>
																</li>
															)
														})
													}
												</ul>
											</div>
										</Link>
									</li>
								)
							})
						}
					</ul>
				</header>
				<main className="w-full h-full p-4 overflow-auto">
					<div className={`${visibleTelaInicial ? 'flex' : 'hidden'} flex-col w-fit h-full justify-self-center justify-center items-center`}>
						<h2 className="font-bold text-2xl max-w-[300px] text-center uppercase leading-7" style={{ textShadow: '1px 1px 2px black' }}>Simulado de Questões para a Prova Teórica do Detran!</h2>
						<Image alt="Carro" src={'/carro-autoescola.png'} width={220} height={220} className="-mt-2"></Image>
						<button
							className="font-bold text-4xl bg-[--vermelho] px-10 py-2 uppercase rounded-xl mt-6"
							onClick={() => {
								setVisibleTelaInicial(false)
								setVisibleTelaJogo(true)
							}}
						>
							Começar
						</button>
					</div>
					<div className={`${visibleTelaJogo ? 'block' : 'hidden'} w-full h-full overscroll-y-auto flex-col gap-2 mb-20 lg:mb-0`}>
						<div className="w-full h-full questionario">
							<div className="flex flex-col gap-2 max-w-[600px] w-full xl:gap-6 xl:max-w-[800px]">
								<h2 className="text-xl leading-6 font-bold">{listaDePerguntas[currentQuestionIndex].pergunta}</h2>
								<ul className="flex flex-col gap-1">
									{listaDePerguntas[currentQuestionIndex].alternativas.map((alternativa, index) => (
										<li
											key={index}
											className={`flex gap-1 px-2 py-1 cursor-pointer border-2 rounded-lg  leading-5 text-lg ${answers[currentQuestionIndex] === alternativa.conteudo ? 'bg-green-600 border-green-800 text-white' : 'bg-[--bege] text-black'
												}`}
											onClick={() => handleOptionClick(alternativa.conteudo)}
										>
											<span>{String.fromCharCode(65 + index)}-)</span>
											<p>{alternativa.conteudo}</p>
										</li>
									))}
								</ul>
								<div className="w-full grid grid-cols-2 gap-2 mt-auto lg:mt-auto xl:gap-10">
									<button
										className="p-2 text-white uppercase font-black bg-red-700 border-[3px] border-red-900"
										onClick={handlePerguntaAnterior}
										disabled={currentQuestionIndex === 0}
									>
										Anterior
									</button>
									<button
										className="p-2 text-white uppercase font-black bg-green-700 border-[3px] border-green-900"
										onClick={handleProximaPergunta}
										disabled={currentQuestionIndex === listaDePerguntas.length - 1}
									>
										Próximo
									</button>
								</div>
							</div>

							<div className="max-w-[300px] h-fit mt-4 bg-[--preto] p-2 mx-auto md:max-w-[450px] md:p-4" style={{ boxShadow: '1px 1px 2px 2px black' }}>
								<ul className="grid grid-cols-5 gap-2 justify-center md:grid-cols-6">
									{listaDePerguntas.map((_, i) => (
										<li key={i} className="flex justify-center items-center">
											<button
												className={`w-[50px] h-[50px] mx-auto border-[3px] rounded-lg text-xl font-black ${currentQuestionIndex === i ? 'bg-[--laranja]' : 'bg-[--vermelho]'}`}
												onClick={() => handleQuestionNavigation(i)}
												style={{ textShadow: '1px 1px 2px black' }}
											>
												{i + 1}
											</button>
										</li>
									))}
								</ul>
								<div className="w-full text-2xl font-black bg-[--vermelho] py-2 mt-4">
									<button className="w-full h-full uppercase" onClick={() => handleTerminarQuestionario()}>Terminar</button>
								</div>
							</div>
						</div>
					</div>
					<div className={`${visibleTelaRespostas ? 'flex' : 'hidden'} flex-col max-w-[1000px] mx-auto`}>
						<h2 className="text-3xl font-black text-center mb-4">Você acertou {acertos}/{resultado != undefined && resultado?.length}</h2>

						<ul className="flex flex-col gap-8">
							{
								resultado != null && resultado.map((pergunta, i) => {
									return (
										<li key={i} className={`flex flex-col gap-2 p-2 border-2 border-black ${pergunta.acertou ? 'bg-green-600' : 'bg-red-600'} xl:gap-4`}>
											<h2 className="text-lg leading-5 font-bold">{pergunta.pergunta}</h2>
											<ul className="flex flex-col gap-1">
												{
													pergunta.alternativas.map((alternativa, j) => {
														return (
															<li key={j} className={`flex relative px-2 py-1 gap-1 font-medium border-2 ${alternativa.certa ? 'bg-green-600 border-green-800' : 'border-black'}`}>
																<span>{String.fromCharCode(65 + j)}-)</span>
																<p>{alternativa.conteudo}</p>
																{
																	pergunta.resposta === alternativa.conteudo ?
																		<Image alt="Alternativa Assinalada" src={'/alternativa-assinalada.png'} width={23} height={23} className="absolute top-[50%] left-[2px]" style={{ transform: 'translate(0,-50%)' }}></Image>
																		: ''
																}
															</li>
														)
													})
												}
											</ul>
											<p className={`font-black ${pergunta.acertou ? 'bg-green-400' : 'bg-red-400'} p-1`} style={{ textShadow: '1px 1px 1px black' }}>{pergunta.acertou ? 'Acertou!' : 'Errou!'}</p>
										</li>
									)
								})
							}
						</ul>

						<button className="bg-[--vermelho] p-2 text-2xl uppercase font-bold border-[3px] border-black mt-6" onClick={() => handleReiniciarQuestionario()}>Recomeçar</button>
					</div>
				</main>
				<footer className="w-full h-full bg-[--preto] flex items-center p-2 xl:p-3">
					<h2 className="font-medium">Produzido por <b>Dimi Martins</b></h2>
					<ul className="flex ml-auto gap-1">
						{
							listaDeRedesSociais.map((rede, i) => {
								return (
									<li key={i} className="text-lg md:text-xl xl:text-2xl">
										<Link href={rede.link}>
											{rede.icone}
										</Link>
									</li>
								)
							})
						}
					</ul>
				</footer>
			</div>
		)
	);
}