'use client'
import Template from "@/components/template/Template";
import Link from "next/link";

export default function Home() {
	return (
		<Template>
			<div className="w-full h-full flex justify-center items-center">
				<Link href={'/game'} className="cursor-pointer uppercase font-black text-2xl bg-black px-4 py-2 rounded-lg">Começar</Link>
			</div>
		</Template>
	)
}
