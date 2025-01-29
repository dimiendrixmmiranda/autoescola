import Offcanvas from "@/components/offcanvas/Offcanvas";
import { listaDeMenus } from "@/core/constants/listaDeMenus";
import Image from "next/image";
import Link from "next/link";
import style from './style.module.css'

export default function Header() {
    return (
        <header className="bg-[--preto] p-4 flex w-full h-full" id="topo">
            <Link href={'/'} className="titulo flex items-center gap-2">
                <div className="relative w-[70px] h-[30px] lg:h-[50px] lg:w-[95px]">
                    <Image alt="Carro Logo do site" src={'/default/carro.png'} fill className="object-cover"></Image>
                </div>
                <h1 className="text-3xl lg:text-5xl">Autoescola</h1>
            </Link>
            <Offcanvas></Offcanvas>
            <ul className={`hidden md:flex text-white gap-3 ml-auto justify-center items-center lg:gap-6 lg:mr-6 ${style.menu}`}>
                {
                    listaDeMenus.map((menu, i) => {
                        return (
                            <li key={i}>
                                {
                                    menu.link === '' ? (
                                        <div className="cursor-pointer relative">
                                            <div className="flex gap-1 items-center justify-center px-3 py-1 lg:text-lg lg:font-bold">
                                                {menu.icone}
                                                <p>{menu.titulo}</p>
                                            </div>
                                            <ul>
                                                {
                                                    menu.submenu?.map((sub, j) => {
                                                        return (
                                                            <li key={j}>
                                                                <Link href={sub.link}>
                                                                    <p>{sub.titulo}</p>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link href={menu.link} className="flex gap-1 items-center justify-center px-2 py-1 lg:text-lg lg:font-bold xl:text-xl">
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