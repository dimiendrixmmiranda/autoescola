import listaDeQuestoes from "@/core/constants/listaDeQuestoes";
import { NextResponse } from "next/server";

export async function GET() {
	const ids = listaDeQuestoes.map(questao => questao.id)
	const idsAleatorios = ids.sort(() => Math.random() - 0.5).slice(0, 30)
	return NextResponse.json(idsAleatorios)
}