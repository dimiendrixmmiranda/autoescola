'use client';
import listaDePerguntas from "@/core/constants/listaDePerguntas";
import Pergunta from "@/core/pergunta/Pergunta";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [visibleTelaInicial, setVisibleTelaInicial] = useState(true);
	const [visibleTelaJogo, setVisibleTelaJogo] = useState(false)
	const [visibleTelaRespostas, setVisibleTelaRespostas] = useState(false)

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<(string | null)[]>(Array(listaDePerguntas.length).fill(null));
	const [resultado, setResultado] = useState<Pergunta[] | null>(null)

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
	}

	const handleReiniciarQuestionario = () => {
		listaDePerguntas.forEach((pergunta) => {
			pergunta.resposta = null
		})
		setAnswers(Array(listaDePerguntas.length).fill(null))
		setCurrentQuestionIndex(0)
		setVisibleTelaRespostas(false)
		setVisibleTelaInicial(true)
	};

	return (
		isClient && (
			<div className="h-screen w-full justify-center items-center bg-[--laranja]">
				<div className={`justify-center items-center h-screen flex-col gap-6 ${visibleTelaInicial ? 'flex' : 'hidden'}`}>
					<h2 className="font-bold text-2xl max-w-[300px] text-center uppercase leading-7" style={{ textShadow: '1px 1px 2px black' }}>Simulado de Questões para a Prova Teórica do Detran.</h2>
					<button
						className="font-bold text-4xl bg-[--vermelho] px-10 py-2 uppercase rounded-xl"
						onClick={() => {
							setVisibleTelaInicial(false)
							setVisibleTelaJogo(true)
						}}
					>
						Começar
					</button>
				</div>

				<div className={`w-full h-screen bg-[--laranja] px-2 py-4 flex-col ${visibleTelaJogo ? 'flex' : 'hidden'}`}>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl leading-6 font-bold">{listaDePerguntas[currentQuestionIndex].pergunta}</h2>
						<ul className="flex flex-col gap-1">
							{listaDePerguntas[currentQuestionIndex].alternativas.map((alternativa, index) => (
								<li
									key={index}
									className={`flex gap-1 px-2 py-1 cursor-pointer border-4 rounded-lg text-lg ${answers[currentQuestionIndex] === alternativa.conteudo ? 'bg-green-500 border-green-700' : 'bg-[--laranja-claro] border-[--laranja-escuro]'
										}`}
									onClick={() => handleOptionClick(alternativa.conteudo)}
									style={{ textShadow: '1px 1px 2px black' }}
								>
									<span>{String.fromCharCode(65 + index)}-)</span>
									<p>{alternativa.conteudo}</p>
								</li>
							))}
						</ul>

						{/* Botões de navegação */}
						<div className="w-full grid grid-cols-2 gap-2 my-2">
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

					{/* Navegação por botões numerados */}
					<div className="max-w-[300px] mt-4">
						<ul className="grid grid-cols-5 gap-2 justify-center">
							{listaDePerguntas.map((_, i) => (
								<li key={i} className="flex justify-center items-center">
									<button
										className={`w-[50px] h-[50px] mx-auto border-[3px] border-orange-600 rounded-lg text-xl font-black ${currentQuestionIndex === i ? 'bg-[--vermelho]' : 'bg-[--laranja-claro] text-white'}`}
										onClick={() => handleQuestionNavigation(i)}
										style={{ textShadow: '1px 1px 2px black' }}
									>
										{i + 1}
									</button>
								</li>
							))}
						</ul>
						<div className="w-full text-2xl font-black bg-red-600 py-2 mt-4">
							<button className="w-full h-full uppercase" onClick={() => handleTerminarQuestionario()}>Terminar</button>
						</div>
					</div>
				</div>

				<div className={`${visibleTelaRespostas ? 'flex' : 'hidden'} flex-col bg-orange-500 p-3`}>
					<ul className="flex flex-col gap-6">
						{
							resultado != null && resultado.map((pergunta, i) => {
								return (
									<li key={i} className={`flex flex-col gap-1 p-2 border-2 border-black ${pergunta.acertou ? 'bg-green-600' : 'bg-red-600'}`}>
										<h2 className="text-lg leading-5 font-bold">{pergunta.pergunta}</h2>
										<ul className="flex flex-col gap-1">
											{
												pergunta.alternativas.map((alternativa, j) => {
													return (
														<li key={j} className={`flex relative px-1 gap-1 font-medium ${alternativa.certa ? 'bg-green-600' : ''}`}>
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
										<p className={`font-black ${pergunta.acertou ? 'bg-green-400' : 'bg-red-400'} p-1 mt-1`} style={{ textShadow: '1px 1px 1px black' }}>{pergunta.acertou ? 'Acertou!' : 'Errou!'}</p>
									</li>
								)
							})
						}
					</ul>

					<button className="bg-[--azul] p-2 text-2xl uppercase font-bold border-[3px] border-black mt-6" onClick={() => handleReiniciarQuestionario()}>Recomeçar</button>
				</div>
			</div>
		)
	);
}