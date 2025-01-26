import Offcanvas from "@/components/offcanvas/Offcanvas";
import { listaDeMenus } from "@/core/constants/listaDeMenus";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[--preto] p-2 flex w-full h-full md:p-4">
            <Link href={'/'} className="titulo flex items-center gap-2">
                <div className="relative w-[70px] h-[30px] md:h-[50px] md:w-[95px]">
                    <Image alt="Carro Logo do site" src={'/default/carro.png'} fill className="object-cover"></Image>
                </div>
                <h1 className="text-3xl md:text-5xl">Autoescola</h1>
            </Link>
            <Offcanvas></Offcanvas>
            <ul className="hidden md:flex text-white gap-3 ml-auto justify-center items-center lg:gap-6 lg:mr-6">
                {
                    listaDeMenus.map((menu, i) => {
                        return (
                            <li key={i}>
                                {
                                    menu.link === '' ? (
                                        <div className="cursor-pointer">
                                            <div className="flex gap-1 items-center justify-center lg:text-lg lg:font-bold xl:text-xl">
                                                {menu.icone}
                                                <p>{menu.titulo}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link href={menu.link} className="flex gap-1 items-center justify-center lg:text-lg lg:font-bold xl:text-xl">
                                            {menu.icone}
                                            <p>{menu.titulo}</p>
                                        </Link>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
}