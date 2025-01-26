
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Offcanvas() {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div className="card ml-auto self-center md:hidden">
            <div className="flex gap-2 justify-content-center">
                <Button onClick={() => setVisibleLeft(true)} className='text-3xl' >
                    <GiHamburgerMenu />
                </Button>
            </div>

            <Sidebar className='bg-red-800 w-full h-full' visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <div>
                    <h2>Left Sidebar</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </Sidebar>
        </div>
    )
}
