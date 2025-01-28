'use client'
import Template from "@/components/template/Template";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<Template>
			<div className="h-full flex flex-col justify-center items-center gap-4 w-[95%] max-w-[400px] mx-auto p-4 md:max-w-[700px] xl:max-w-[1000px] xl:gap-6">
				<div className="mx-auto text-center flex flex-col gap-3">
					<h1 className="font-black uppercase text-3xl leading-8 xl:text-4xl">Prepare-se para a Prova Teórica do Detran!</h1>
					<p className="text-lg font-semibold leading-5">Revele todo o seu conhecimento, demonstre suas habilidades com confiança e conquiste a aprovação que tanto deseja, alcançando seus objetivos com excelência!</p>
				</div>
				<div className="relative w-full h-[200px] -mt-2 md:h-[350px]">
					<Image alt="Carro" src={'/default/carro-2.png'} fill className="object-contain"></Image>
				</div>
				<Link href={'/game'} className="w-full flex justify-center items-center text-center mt-2 cursor-pointer uppercase font-black text-2xl bg-black px-4 py-2 rounded-lg xl:max-w-[500px]">Começar</Link>
			</div>
		</Template>
	)
}
