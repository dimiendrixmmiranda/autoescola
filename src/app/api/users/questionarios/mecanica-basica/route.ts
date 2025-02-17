import listaDeQuestoes from "@/core/constants/listaDeQuestoes";
import { embaralhar } from "@/utils/embaralhar";
import { NextResponse } from "next/server";

export async function GET() {
	const ids = listaDeQuestoes.filter(questao => questao.categoria == 'mecanica-basica').map(questao => questao.id)
	return NextResponse.json(embaralhar(ids))
}