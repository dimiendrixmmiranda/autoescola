'use client'
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { listaDeMenus } from '@/core/constants/listaDeMenus';
import styles from './style.module.css'
import Link from 'next/link';
export default function Offcanvas() {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div className="card ml-auto self-center md:hidden">
            <div className="flex gap-2 justify-content-center">
                <Button onClick={() => setVisibleLeft(true)} className='text-3xl' >
                    <GiHamburgerMenu />
                </Button>
            </div>

            <Sidebar className='bg-[--bege] text-black w-full h-full p-4' visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <div className='flex flex-col gap-4'>
                    <h2 className='uppercase font-bold text-3xl'>Menu</h2>
                    <ul className='flex flex-col items-start gap-2'>
                        {
                            listaDeMenus.map((menu, i) => {
                                return (
                                    <li key={i}>
                                        {
                                            menu.link === '' ? (
                                                <div className={`cursor-pointer relative ${styles.offcanvasMenu}`}>
                                                    <div className="flex gap-2 items-center justify-start px-2 py-1 text-xl font-bold">
                                                        {menu.icone}
                                                        <p>{menu.titulo}</p>
                                                    </div>
                                                    <ul className='hidden flex-col ml-7'>
                                                        {
                                                            menu.submenu?.map((sub, j) => {
                                                                return (
                                                                    <li key={j}>
                                                                        <Link href={sub.link}>
                                                                            <p className='px-2 py-1 font-bold'>{sub.titulo}</p>
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            ) : (
                                                <Link href={menu.link} className="flex gap-2 items-center justify-center px-2 py-1 text-xl font-bold">
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
                </div>
            </Sidebar>
        </div>
    )
}
